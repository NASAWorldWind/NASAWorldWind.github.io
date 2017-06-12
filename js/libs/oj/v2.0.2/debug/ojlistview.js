/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['ojs/ojcore', 'jquery', 'ojs/ojcomponentcore', 'ojs/ojdomscroller'], function(oj, $)
{
/**
 * Base class for TableDataSourceContentHandler and TreeDataSourceContentHandler
 * Handler for DataSource generated content
 * @constructor
 * @ignore
 */
oj.DataSourceContentHandler = function(widget, root, data)
{
    this.m_root = root;
    this.m_widget = widget;

    this.m_fetching = false;

    this.setDataSource(data);
    this.Init();
};

// Subclass from oj.Object 
oj.Object.createSubclass(oj.DataSourceContentHandler, oj.Object, "oj.DataSourceContentHandler");

/**
 * Initializes the instance.
 * @export
 */
oj.DataSourceContentHandler.prototype.Init = function()
{
    oj.DataSourceContentHandler.superclass.Init.call(this);
};

/**
 * Handles when the container has resize
 * @param {number} width the new width
 * @param {number} height the new height
 * @protected
 */
oj.DataSourceContentHandler.prototype.HandleResize = function(width, height)
{
    // by default do nothing, to be override by subclass
};

/**
 * Destroy the content handler
 * @protected
 */
oj.DataSourceContentHandler.prototype.Destroy = function()
{
    $(this.m_root).empty(); // @HTMLUpdateOK
    this.m_widget = null;
    this.m_root = null;
};

/**
 * Determines whether the content handler is in a ready state
 * @return {boolean} true if there's no outstanding fetch, false otherwise.
 * @protected
 */
oj.DataSourceContentHandler.prototype.IsReady = function()
{
    return !this.m_fetching;
};

/**
 * @private
 */
oj.DataSourceContentHandler.prototype.setRootAriaProperties = function()
{
    if (this.IsHierarchical())
    {
        this.m_root.setAttribute("role", "tree");
    }
    else
    {
        this.m_root.setAttribute("role", "listbox");
    }
};

/**
 * Renders the content inside the list
 * @protected
 */
oj.DataSourceContentHandler.prototype.RenderContent = function()
{
    this.signalTaskStart(); // signal method task start
    this.fetchRows(false);
    this.setRootAriaProperties();
    this.signalTaskEnd(); // signal method task end
};

/**
 * Retrieve the key given the item element
 * @param {Element} element
 * @return {Object|null}
 * @protected
 */
oj.DataSourceContentHandler.prototype.GetKey = function(element)
{
    // should be in the element
    return element.key;
};

oj.DataSourceContentHandler.prototype.FindElementByKey = function(key)
{
    var children, i, elem;

    children = $(this.m_root).find("."+this.m_widget.getItemElementStyleClass());
    for (i=0; i<children.length; i++)
    {
        elem = children[i];
        if (key == this.GetKey(elem))
        {
            return elem;
        }
    }

    return null;
};

oj.DataSourceContentHandler.prototype.getDataSource = function()
{
    return this.m_dataSource;
};

/**
 * @protected
 */
oj.DataSourceContentHandler.prototype.setDataSource = function(dataSource)
{
    this.m_dataSource = dataSource;
};

oj.DataSourceContentHandler.prototype.fetchRows = function(forceFetch)
{
};

/**
 * Create a list item and add it to the list
 * @param {Element} parentElement the element to add the list items to
 * @param {number} index the index of the item
 * @param {Object|null} data the data for the item
 * @param {Object} metadata the set of metadata for the item
 * @param {Function=} callback optional callback function to invoke after item is added 
 * @return {Object} contains the list item and the context object
 * @protected
 */
oj.DataSourceContentHandler.prototype.addItem = function(parentElement, index, data, metadata, callback)
{
    var item, referenceNode;

    item = document.createElement("li");
    $(item).uniqueId();
    if (index === parentElement.childElementCount)
    {
        referenceNode = null;
    }
    else
    {
        referenceNode = parentElement.children[index];
    }
    parentElement.insertBefore(item, referenceNode); // @HTMLUpdateOK

    return this._addOrReplaceItem(item, index, parentElement, index, data, metadata, callback);
};

/**
 * @private
 */
oj.DataSourceContentHandler.prototype._handleBeforeReplaceTransitionEnd = function(event)
{
    var item, ctx, parentElement, position;

    item = event.target;
    $(item).empty()
           .removeClass("oj-listview-item-add-remove-transition")
           .off("transitionend", this.m_beforeReplaceTransitionEndListener);

    ctx = $.data(item, "ctx");
    $.removeData(item, "ctx");

    // now actually replace the item
    parentElement = item.parentNode;
    position = $(parentElement).children().index(item);

    this._addOrReplaceItem(item, position, parentElement, ctx.index, ctx.data, ctx.metadata, ctx.callback);    
};

/**
 * Replace an existing list item in the list
 * @param {Element} item the list item to change
 * @param {number} index the index of the item
 * @param {Object|null} data the data for the item
 * @param {Object} metadata the set of metadata for the item
 * @param {Function=} callback optional callback function to invoke after item is added 
 * @protected
 */
oj.DataSourceContentHandler.prototype.replaceItem = function(item, index, data, metadata, callback)
{
    if (this.m_beforeReplaceTransitionEndListener == null)
    {
        this.m_beforeReplaceTransitionEndListener = this._handleBeforeReplaceTransitionEnd.bind(this);
    }

    $.data(item, "ctx", {index: index, data: data, metadata: metadata, callback: callback});

    // animate hiding of existing item first
    this.signalTaskStart(); // signal replace item animation start. Ends in _handleAfterReplaceTransitionEnd() defined in TableDataSourceContentHandler
    $(item).addClass("oj-listview-item-add-remove-transition")
           .on("transitionend", this.m_beforeReplaceTransitionEndListener)
           .css("opacity", 0);
};

/**
 * Handles both add and replace item
 * @private
 */
oj.DataSourceContentHandler.prototype._addOrReplaceItem = function(item, position, parentElement, index, data, metadata, callback)
{
    var contentContainer, context, inlineStyle, styleClass, renderer, content, textWrapper;

    if (callback == undefined)
    {
        callback = this.afterRenderItem.bind(this);
    }

    context = this.createContext(index, data, metadata, item);
    renderer = this.m_widget._getItemRenderer();
    if (renderer != null)
    {
        // if an element is returned from the renderer and the parent of that element is null, we will append 
        // the returned element to the parentElement.  If non-null, we won't do anything, assuming that the 
        // rendered content has already added into the DOM somewhere.
        content = renderer.call(this, context);
        if (content != null)
        {
            // allow return of document fragment from jquery create/js document.createDocumentFragment
            if (content['parentNode'] === null || content['parentNode'] instanceof DocumentFragment)
            {
                item.appendChild(content); // @HTMLUpdateOK
            }
            else if (content['parentNode'] != null)
            {
                // parent node exists, do nothing
            }                
            else if (content.toString)
            {
                textWrapper = document.createElement("span");
                textWrapper.appendChild(document.createTextNode(content.toString())); // @HTMLUpdateOK
                item.appendChild(textWrapper); // @HTMLUpdateOK
            }
        }
    }
    else
    {
        textWrapper = document.createElement("span");
        textWrapper.appendChild(document.createTextNode(data == null ? "" : data.toString())); // @HTMLUpdateOK
        item.appendChild(textWrapper); // @HTMLUpdateOK
    }

    // get the item from root again as template replaces the item element
    item = parentElement.children[position];
    context['parentElement'] = item;

    // do any post processing
    callback(item, context);

    return {item: item, context: context};
};

oj.DataSourceContentHandler.prototype.afterRenderItem = function(item, context)
{
    var elem;

    // save the key in the element (cannot use data- here since it could be a non-string)
    item.key = context['key'];

    item = $(item);
    item.uniqueId();

    // if there's only one element inside the item and it is focusable, set
    // the role on it instead
    elem = this.m_widget.getSingleFocusableElement(item);
    elem.attr("role", this.IsHierarchical() ? "treeitem" : "option");
    if (elem != item)
    {
        item.attr("role", "presentation");
    }
    elem.addClass(this.m_widget.getFocusedElementStyleClass());

    // tag it if item is not focusable
    if (!this.isFocusable(context))
    {
        item.addClass("oj-skipfocus");
    }

    item.addClass(this.m_widget.getItemElementStyleClass());
};

oj.DataSourceContentHandler.prototype.createContext = function(index, data, metadata, elem)
{
    var context, prop;
    
    context = {
    };
    context['parentElement'] = elem;
    context['index'] = index;
    context['data'] = data;
    context['component'] = this.m_widget.getWidgetConstructor();
    context['datasource'] = this.getDataSource();

    // merge properties from metadata into cell context
    // the properties in metadata would have precedence
    for (prop in metadata) 
    {
        if (metadata.hasOwnProperty(prop)) 
        {
            context[prop] = metadata[prop];   
        }
    }

    return context;
};

oj.DataSourceContentHandler.prototype.isFocusable = function(context)
{
    return this.m_widget._getItemOption("focusable", context, true);
};

oj.DataSourceContentHandler.prototype.isSelectable = function(context)
{
    return this.m_widget._getItemOption("selectable", context, true);
};

oj.DataSourceContentHandler.prototype.signalTaskStart = function()
{
    if (this.m_widget) // check that widget exists (e.g. not destroyed)
    {
        this.m_widget.signalTaskStart();
    }
};

oj.DataSourceContentHandler.prototype.signalTaskEnd = function()
{
    if (this.m_widget) // check that widget exists (e.g. not destroyed)
    {
        this.m_widget.signalTaskEnd();
    }
};
/**
 * Handler for TableDataSource generated content
 * @constructor
 * @extends oj.DataSourceContentHandler
 * @ignore
 */
oj.TableDataSourceContentHandler = function(widget, root, data)
{
    oj.TableDataSourceContentHandler.superclass.constructor.call(this, widget, root, data);
};

// Subclass from oj.DataSourceContentHandler 
oj.Object.createSubclass(oj.TableDataSourceContentHandler, oj.DataSourceContentHandler, "oj.TableDataSourceContentHandler");

/**
 * Initializes the instance.
 * @protected
 */
oj.TableDataSourceContentHandler.prototype.Init = function()
{
  oj.TableDataSourceContentHandler.superclass.Init.call(this);
};

oj.TableDataSourceContentHandler.prototype.IsHierarchical = function()
{
    return false;
};

/**
 * Destroy the content handler
 * @protected
 */
oj.TableDataSourceContentHandler.prototype.Destroy = function()
{
    oj.TableDataSourceContentHandler.superclass.Destroy.call(this);
    this._removeDataSourceEventListeners();

    if (this.m_domScroller != null)
    {
        this.m_domScroller.destroy();

        this.m_domScroller = null;
        this.m_domScrollerMaxCountFunc = null;
    }

    this.m_loadingIndicator = null;
};

oj.TableDataSourceContentHandler.prototype.HandleResize = function(width, height)
{
    // we only care about the highwatermark scrolling case, and if height changes
    if (!this._isLoadMoreOnScroll() || this.m_height == undefined || this.m_height == height)
    {
        return;
    }

    this.m_height = height;

    // check viewport
    this.checkViewport();
};

/**
 * Is loadMoreOnScroll
 * @return {boolean} true or false
 * @private
 */
oj.TableDataSourceContentHandler.prototype._isLoadMoreOnScroll = function()
{
    return this.m_widget.options['scrollPolicy'] == "loadMoreOnScroll" ? true: false;
};

/**
 * Gets the number of items to return in each fetch
 * @return {number} the fetch size
 * @private
 */
oj.TableDataSourceContentHandler.prototype._getFetchSize = function()
{
    return Math.max(0, this.m_widget.options['scrollPolicyOptions']['fetchSize']);
};

/**
 * Gets the maximum number of items that can be retrieved from data source
 * @return {number} the maximum fetch count
 * @private
 */
oj.TableDataSourceContentHandler.prototype._getMaxCount = function()
{
    return this.m_widget.options['scrollPolicyOptions']['maxCount'];
};

oj.TableDataSourceContentHandler.prototype.setDataSource = function(dataSource)
{
    var self;

    this._removeDataSourceEventListeners();
        
    if (dataSource != null)
    {
        if (this._isLoadMoreOnScroll())
        {
            self = this;
            this.m_domScrollerMaxCountFunc = function(result)
            {
                if (result != null)
                {
                    self.signalTaskStart(); // signal task start

                    // remove any loading indicator, which is always added to the end after fetch
                    self._removeLoadingIndicator();

                    if (self.IsReady())
                    {
                        self.signalTaskStart(); // start a dummy task to be paired with the fetchEnd() call below if no new data were fetched.
                    }
                    self._handleFetchedData(result); // will call fetchEnd(), which signals a task end. Started either in fetchRows() or in a dummy task not involving data fetch.

                    // always append the loading indicator at the end except the case when max limit has been reached
                    if (result['maxCountLimit'])
                    {
                        self._handleScrollerMaxRowCount();
                    }
                    else
                    {
                        self._appendLoadingIndicator();
                    }

                    self.signalTaskEnd(); // signal domscroller fetch end. Started in this.m_domScroller._handleScrollerScrollTop monkey patched below
                    self.signalTaskEnd(); // signal task end
                }
                else if (result === undefined)
                {
                    // when there's no more data
                    self._removeLoadingIndicator();
                    self.signalTaskEnd(); // signal domscroller fetch end. Started in this.m_domScroller._handleScrollerScrollTop monkey patched below
                }
            };

            this.m_domScroller = new oj.DomScroller(this.m_widget.getRootElement(), dataSource, {'fetchSize' : this._getFetchSize(), 'maxCount' : this._getMaxCount(), 'success': this.m_domScrollerMaxCountFunc, 'error': this.signalTaskEnd});

            // Monkey patch this.m_domScroller's _handleScrollerScrollTop() to signal a task start before starting data fetch
            this.m_domScroller._handleScrollerScrollTop = function(scrollTop, maxScrollTop)
            {
                if (maxScrollTop - scrollTop <= 1)
                    self.signalTaskStart(); // signal domscroller data fetching. Ends either in success call (m_domScrollerMaxCountFunc) or in error call (self.signalTaskEnd)
                oj.DomScroller.prototype._handleScrollerScrollTop.call(this, scrollTop, maxScrollTop);
            }
        }

        this.m_handleModelSyncEventListener = this.handleModelSyncEvent.bind(this);
        this.m_handleModelSortEventListener = this.handleModelSortEvent.bind(this);
        this.m_handleModelAddEventListener = this.handleModelAddEvent.bind(this);
        this.m_handleModelRemoveEventListener = this.handleModelRemoveEvent.bind(this);
        this.m_handleModelChangeEventListener = this.handleModelChangeEvent.bind(this);
        this.m_handleModelResetEventListener = this.handleModelResetEvent.bind(this);
        
        if (oj.PagingTableDataSource && (dataSource instanceof oj.PagingTableDataSource))
        {
            dataSource.on("sync", this.m_handleModelSyncEventListener);
        }
        dataSource.on("sort", this.m_handleModelSortEventListener);
        dataSource.on("add", this.m_handleModelAddEventListener);
        dataSource.on("remove", this.m_handleModelRemoveEventListener);
        dataSource.on("change", this.m_handleModelChangeEventListener);
        dataSource.on("reset", this.m_handleModelResetEventListener);
    }

    this.m_dataSource = dataSource;
};

/**
 * Add a loading indicator to the list for high watermark scrolling scenario
 * @private
 */
oj.TableDataSourceContentHandler.prototype._appendLoadingIndicator = function()
{
    var item, icon;

    // check if it's already added
    if (this.m_loadingIndicator != null)
    {
        return;
    }

    item = $(document.createElement("li"));
    item.uniqueId()
        .attr("role", "presentation")
        .addClass(this.m_widget.getItemStyleClass());

    icon = $(document.createElement("div"));
    icon.addClass("oj-listview-loading-icon");
    item.append(icon); // @HtmlUpdateOK

    $(this.m_root).append(item); // @HtmlUpdateOK

    this.m_loadingIndicator = item;
};

/**
 * Remove the loading indicator 
 * @private
 */
oj.TableDataSourceContentHandler.prototype._removeLoadingIndicator = function()
{
    if (this.m_loadingIndicator != null)
    {
        this.m_loadingIndicator.remove();
    }
    this.m_loadingIndicator = null;
};

/**
 * Add required attributes to item after it is rendered by the renderer
 * @param {Element} item the item element to modify
 * @param {Object} context the item context 
 * @protected
 */
oj.TableDataSourceContentHandler.prototype.afterRenderItem = function(item, context)
{
    var size;

    oj.TableDataSourceContentHandler.superclass.afterRenderItem.call(this, item, context);

    $(item).addClass(this.m_widget.getItemStyleClass());

    if (this.m_widget._isSelectionEnabled() && this.isSelectable(context))
    {
        this.m_widget.getFocusItem($(item)).attr("aria-selected", false);
    }

    // for highwatermark scrolling, we'll need to add additional wai-aria attribute since not
    // all items are in the DOM
    if (this._isLoadMoreOnScroll())
    {
        size = Math.min(this.m_dataSource.totalSize(), this._getMaxCount());
        if (size === -1)
        {
            // if count is unknown, then use max count, and re-adjust later as necessary
            size = this._getMaxCount();
        }

        if (size > 0)
        {
            $(item).attr("aria-setsize", size)
                   .attr("aria-posinset", context['index']+1);
        }
    }

    this.m_widget.itemRenderComplete(item, context);
};

/**
 * Add required attributes to item after it is rendered by the renderer, and perform
 * animation for insert
 * @param {Element} item the item element to modify
 * @param {Object} context the item context 
 * @private
 */
oj.TableDataSourceContentHandler.prototype.afterRenderItemForInsertEvent = function(item, context)
{
    var elem, height, itemStyleClass, content;

    this.signalTaskStart(); // signal post rendering processing start. Ends at the end of the method.

    this.afterRenderItem(item, context);

    // hide it before starting animation to show added item
    elem = $(item);
    height = elem.outerHeight();
    elem.css("opacity", "0");
    elem.css("maxHeight", "0");

    itemStyleClass = this.m_widget.getItemStyleClass();
    elem.children().wrapAll("<div></div>"); //@HTMLUpdateOK
    elem.removeClass(itemStyleClass)
        .addClass("oj-listview-item-add-remove-transition");

    content = elem.children().first();
    content.addClass(itemStyleClass); 

    if (this.m_addTransitionEndListener == null)
    {
        this.m_addTransitionEndListener = this._handleAddTransitionEnd.bind(this);
    }

    $.data(item, "ctx", context);
    elem.on("transitionend", this.m_addTransitionEndListener);

    this.signalTaskStart(); // signal add animation start. Ends in _handleAddTransitionEnd().
    // now show it
    requestAnimationFrame(function() {
        elem.css("opacity", "1");
        elem.css("maxHeight", height+"px");
    });

    this.signalTaskEnd(); // signal post rendering processing end. Started at the beginning of the method.
};

/**
 * Callback handler max fetch count.
 * @private
 */
oj.TableDataSourceContentHandler.prototype._handleScrollerMaxRowCount = function()
{
    // TODO: use resource bundle
    oj.Logger.error("max count reached");
};

/**
 * Remove data source event listeners
 * @private
 */
oj.TableDataSourceContentHandler.prototype._removeDataSourceEventListeners = function()
{
    if (this.m_dataSource != null)
    {
        this.m_dataSource.off("sync", this.m_handleModelSyncEventListener);
        this.m_dataSource.off("sort", this.m_handleModelSortEventListener);
        this.m_dataSource.off("add", this.m_handleModelAddEventListener);
        this.m_dataSource.off("remove", this.m_handleModelRemoveEventListener);
        this.m_dataSource.off("change", this.m_handleModelChangeEventListener);
        this.m_dataSource.off("reset", this.m_handleModelResetEventListener);
    }
};

/**
 * @param {boolean} forceFetch
 * @override
 */
oj.TableDataSourceContentHandler.prototype.fetchRows = function(forceFetch)
{
    var initFetch = true, options, self, promise;

    this.signalTaskStart(); // signal method task start

    // checks if we are already fetching cells
    if (this.IsReady())
    {
        this.m_fetching = true;

        // otherwise paging control will initialize fetching of content
        // note this flag can be remove once we sort out not having paging control initialize fetch
        if (oj.PagingTableDataSource && (this.m_dataSource instanceof oj.PagingTableDataSource))
        {
            initFetch = false;

            // signal fetch started. 
            // For pagingTableDataSource, ends in fetchEnd() if successful. 
            // Otherwise, _handleFetchError() runs, and then fetchEnd() runs. So ends in fetchEnd() always.
            this.signalTaskStart();
        }

        if (initFetch || forceFetch)
        {
            // signal fetch started. Ends in fetchEnd() if successful. Otherwise, ends in the reject block of promise below right after _handleFetchError().
            // Cannot end in _handleFetchError() to be consistent with pagingTableDataSource behavior (see comment above)
            if (initFetch)
            {
                this.signalTaskStart(); 
            }

            options = {'fetchType': 'init', 'startIndex': 0};
            if (this._isLoadMoreOnScroll())
            {
                options['pageSize'] = this._getFetchSize();
            }

            self = this;
            promise = this.m_dataSource.fetch(options);
            promise.then(function(value){ 
                             // check if content handler has been destroyed already
                             if (self.m_widget == null)
                             {
                                 return;
                             }

                             if (initFetch) 
                             { 
                                 self._handleFetchedData(value); 
                                 // initial fetch we'll append the loading indicator at the end (for highwatermark scrolling)
                                 if (self._isLoadMoreOnScroll() && value != null && value['keys'] && value['keys'].length > 0)
                                 {
                                     self._appendLoadingIndicator();
                                 }
                             }}, 
                         function(reason){ 
                            self._handleFetchError(reason); 
                            self.signalTaskEnd(); // signal fetch stopped. Started above.
                        });
            this.signalTaskEnd(); // signal method task end
            return;
        }
    }
    this.signalTaskEnd(); // signal method task end
};

oj.TableDataSourceContentHandler.prototype._handleFetchError = function(msg)
{
    // TableDataSource aren't giving me any error message
    oj.Logger.error(msg);

    if (this._isLoadMoreOnScroll())
    {
        this._removeLoadingIndicator();
    }

    this.m_widget.renderComplete();
};

/**
 * Callback for handling fetch success
 * @param {Array} data the array of data
 * @param {Array} keys the array of keys
 * @private
 */
oj.TableDataSourceContentHandler.prototype._handleFetchSuccess = function(data, keys)
{
    var index, i, row;

    index = this.m_root.childElementCount;

    for (i=0; i<data.length; i++)
    {
        row = data[i];
        this.addItem(this.m_root, index, row, this.getMetadata(index, keys[i], row));

        index = index + 1;
    }    
};

/**
 * Model add event handler.  Called when either a new row of data is added to the data source, or a set of rows are added as a result of
 * highwater mark scrolling.
 * @param {Object} event the add model event
 * @private
 */
oj.TableDataSourceContentHandler.prototype.handleModelAddEvent = function(event)
{
    var data, keys, indexes, i;

    if (this.m_root == null)
    {
        return;
    }

    this.signalTaskStart(); // signal method task start
    data = event['data'];
    keys = event['keys'];
    indexes = event['indexes'];
    if (data != null && keys != null && keys.length > 0 && data.length > 0 && keys.length == data.length && indexes != null && keys.length == indexes.length)
    {
        for (i=0; i<data.length; i++)
        {
            this.signalTaskStart(); // signal add item start
            this.addItem(this.m_root, indexes[i], data[i], this.getMetadata(indexes[i], keys[i], data[i]), this.afterRenderItemForInsertEvent.bind(this));
            this.signalTaskEnd(); // signal add item end
        }

        if (this.IsReady())
        {
            this.signalTaskStart(); // start a dummy task to be paired with the fetchEnd() call below if no new data were fetched.
        }
        // do whatever post fetch processing
        this.fetchEnd(); // signals a task end. Started either in fetchRows() or in a dummy task not involving data fetch.
    }
    this.signalTaskEnd(); // signal method task end
};

/**
 * Handles when add item animation transition ends
 * @param {Event} event
 * @private
 */
oj.TableDataSourceContentHandler.prototype._handleAddTransitionEnd = function(event)
{
    var elem, context; 

    elem = /** @type {Element} */ (event.target);
    context = $.data(elem, "ctx");
    $.removeData(elem, "ctx");

    // cleanup
    $(elem).removeClass("oj-listview-item-add-remove-transition")
           .addClass(this.m_widget.getItemStyleClass())
           .off("transitionend", this.m_addTransitionEndListener)
           .children().children().unwrap(); //@HTMLUpdateOK

    this.m_widget.itemInsertComplete(elem, context);

    this.signalTaskEnd(); // signal add animation end. Started in afterRenderItemForInsertEvent();
};

/**
 * Model remove event handler.  Called when a row has been removed from the underlying data.
 * @param {Object} event the model remove event
 * @private
 */
oj.TableDataSourceContentHandler.prototype.handleModelRemoveEvent = function(event)
{
    var keys, i, elem, itemStyleClass;

    keys = event['keys'];
    if (this.m_root == null || keys == null || keys.length == 0)
    {
        return;
    }

    this.signalTaskStart(); // signal method task start 

    for (i=0; i<keys.length; i++)
    {
        elem = this.FindElementByKey(keys[i]);
        if (elem != null)
        {
            this.signalTaskStart(); // signal removeItem start
            this._removeItem(elem);
            this.signalTaskEnd(); // signal removeItem end
        }
    }

    // since the items are removed, need to clear cache
    this.m_widget.ClearCache();

    this.signalTaskEnd(); // signal method task end
};

/**
 * Remove a single item element
 * @param {jQuery|Element} elem the element to remove
 * @private
 */
oj.TableDataSourceContentHandler.prototype._removeItem = function(elem)
{
    var itemStyleClass, self = this;

    this.signalTaskStart(); // signal method task start

    if (this.m_removeTransitionEndListener == null)
    {
        this.m_removeTransitionEndListener = this._handleRemoveTransitionEnd.bind(this);
    }

    itemStyleClass = this.m_widget.getItemStyleClass();
    elem = $(elem);
    elem.children().wrapAll("<div class='"+itemStyleClass+"'></div>"); // @HtmlUpdateOK
    elem.removeClass(itemStyleClass)
        .css("maxHeight", elem.outerHeight()+"px")
        .addClass("oj-listview-item-add-remove-transition")
        .on("transitionend", this.m_removeTransitionEndListener);

    setTimeout(function() {
        self.signalTaskStart(); // signal remove item animation start. Ends in _handleRemoveTransitionEnd()
        elem.css("opacity", "0");
        elem.css("maxHeight", "0px");

        self.signalTaskEnd(); // signal method task end
    }, 10);
};

/**
 * Handles when remove item animation transition ends
 * @param {Event} event
 * @private
 */
oj.TableDataSourceContentHandler.prototype._handleRemoveTransitionEnd = function(event)
{
    var elem, parent;

    elem = $(event.target);
    parent = elem.parent();
    elem.off("transitionend", this.m_removeTransitionEndListener);

    // invoke hook before actually removing the item
    this.m_widget.itemRemoveComplete(elem.get(0));

    elem.remove();

    // if it's the last item, show empty text
    if (parent.get(0).childElementCount == 0)
    {
        this.m_widget.renderComplete();
    }

    this.signalTaskEnd(); // signal remove item animation end. Started in _removeItem()
};

/**
 * Model change event handler.  Called when a row has been changed from the underlying data.
 * @param {Object} event the model change event
 * @private
 */
oj.TableDataSourceContentHandler.prototype.handleModelChangeEvent = function(event)
{
    var keys, data, indexes, i, elem;

    keys = event['keys'];
    if (this.m_root == null || keys == null || keys.length == 0)
    {
        return;
    }

    this.signalTaskStart(); // signal method task start
    data = event['data'];
    indexes = event['indexes'];
    for (i=0; i<keys.length; i++)
    {
        elem = this.FindElementByKey(keys[i]);
        if (elem != null)
        {
            this.signalTaskStart(); // signal replace item start
            this.replaceItem(elem, indexes[i], data[i], this.getMetadata(indexes[i], keys[i], data[i]), this.afterRenderItemForChangeEvent.bind(this));
            this.signalTaskEnd(); // signal replace item end
        }
    }

    // since the item element will change, need to clear cache
    this.m_widget.ClearCache();

    this.signalTaskEnd(); // signal method task end
};

/**
 * @private
 */
oj.TableDataSourceContentHandler.prototype.afterRenderItemForChangeEvent = function(item, context)
{
    var self = this;

    this.signalTaskStart(); // signal method task start

    // hide the new content initially
    $(item).css("opacity", 0);

    // adds all neccessary wai aria role and classes
    this.afterRenderItem(item, context);

    if (this.m_afterReplaceTransitionEndListener == null)
    {
        this.m_afterReplaceTransitionEndListener = this._handleAfterReplaceTransitionEnd.bind(this);
    }

    // show it
    $(item).on("transitionend", this.m_afterReplaceTransitionEndListener);
    setTimeout(function() {
        $(item).addClass("oj-listview-item-add-remove-transition")
               .css("opacity", 1);

        self.signalTaskEnd(); // signal method task end
    }, 10);
};

/**
 * @private
 */
oj.TableDataSourceContentHandler.prototype._handleAfterReplaceTransitionEnd = function(event)
{
    var item = $(event.target);
    item.removeClass("oj-listview-item-add-remove-transition")
        .off("transitionend", this.m_afterReplaceTransitionEndListener);

    this.m_widget.restoreCurrentItem();

    this.signalTaskEnd(); // signal replace item animation end. Started in replaceItem() from handleModelChangeEvent() (see base class DataSourceContentHandler)
};

/**
 * Model reset event handler.  Called when all rows has been removed from the underlying data.
 * @param {Object} event the model reset event
 * @private
 */
oj.TableDataSourceContentHandler.prototype.handleModelResetEvent = function(event)
{
    if (this.m_root == null)
    {
        return;
    }

    this.signalTaskStart(); // signal method task start

    // empty everything and clear cache
    $(this.m_root).empty();
    this.m_widget.ClearCache();

    // fetch data
    this.fetchRows(true);

    this.signalTaskEnd(); // signal method task end
};

/**
 * Handle fetched data, either from a fetch call or from a sync event
 * @param {Object} dataObj the fetched data object
 * @private
 */
oj.TableDataSourceContentHandler.prototype._handleFetchedData = function(dataObj)
{
    var data, keys;

    // this could happen if destroy comes before fetch completes (note a refresh also causes destroy)
    if (this.m_root == null)
    {
        return;
    }

    data = dataObj['data'];
    keys = dataObj['keys'];
    if (Array.isArray(data) && Array.isArray(keys) && data.length == keys.length)
    {
        this._handleFetchSuccess(data, keys);

        // do whatever post fetch processing
        this.fetchEnd();
    }
};

/**
 * Model sync event handler
 * @param {Object} event the model sync event
 * @private
 */
oj.TableDataSourceContentHandler.prototype.handleModelSyncEvent = function(event)
{
    // there is a bug that datasource.off does not remove listener
    if (this.m_root == null)
    {
        return;
    }

    this.signalTaskStart(); // signal method task start

    // when paging control is used clear the list, note in paging control loadMore mode
    // the startIndex would not be null and we don't want to clear the list in that case
    if (event['startIndex'] === 0)
    {
        $(this.m_root).empty();
    }
    this.m_widget.ClearCache();

    // handle result data
    this._handleFetchedData(event);

    this.signalTaskEnd(); // signal method task end
};

/**
 * Model sort event handler
 * @param {Event} event the model sort event
 * @private
 */
oj.TableDataSourceContentHandler.prototype.handleModelSortEvent = function(event)
{
    if (this.m_root == null)
    {
        return;
    }

    this.signalTaskStart(); // signal method task start

    // empty everything and clear cache
    $(this.m_root).empty();
    this.m_widget.ClearCache();

    // if multi-selection, clear selection as well
    if (this.m_widget._isMultipleSelection())
    {
        this.m_widget._clearSelection(true);
    }

    // fetch sorted data
    this.fetchRows(true);

    this.signalTaskEnd(); // signal method task end
};

/**
 * Do any logic needed after results from fetch are processed
 * @private
 */
oj.TableDataSourceContentHandler.prototype.fetchEnd = function()
{
    // fetch is done
    this.m_fetching = false;

    this.m_widget.renderComplete();

    // check viewport
    this.checkViewport();

    this.signalTaskEnd(); // signal fetch end. Started in either fetchRows() or started as a dummy task whenever this method is called without fetching rows first (e.g. see m_domScrollerMaxCountFunc).
};

/**
 * Checks the viewport to see if additional fetch is needed
 * @private
 */
oj.TableDataSourceContentHandler.prototype.checkViewport = function()
{
    var self = this, fetchPromise;

    this.signalTaskStart(); // signal method task start

    // if loadMoreOnScroll then check if we have underflow and do a fetch if we do
    if (this.m_domScroller != null && this.m_dataSource.totalSize() > 0 && this.IsReady())
    {
        fetchPromise = this.m_domScroller.checkViewport();
        if (fetchPromise != null)
        {
            this.signalTaskStart(); // signal fetchPromise started. Ends in promise resolution below
            fetchPromise.then(function(result)
            {
                self.m_domScrollerMaxCountFunc(result);
                self.signalTaskEnd(); // signal checkViewport task end. Started above before fetchPromise resolves here;
            }, null);
        }
    }

    this.signalTaskEnd(); // signal method task end
};

/**
 * Creates the context object containing metadata
 * @param {number} index the index
 * @param {Object} key the key
 * @param {Object} data the data
 * @return {Object} the context object
 * @private
 */
oj.TableDataSourceContentHandler.prototype.getMetadata = function(index, key, data)
{
    var context = data['context'];
    if (context == null)
    {
        context = {};
    }

    if (context['index'] == null)
    {
        context['index'] = index;
    }

    if (context['key'] == null)
    {
        context['key'] = key;
    }

    return context;
};
/**
 * Handler for TreeDataSource generated content
 * @constructor
 * @extends oj.DataSourceContentHandler
 * @ignore
 */
oj.TreeDataSourceContentHandler = function(widget, root, data)
{
    oj.TreeDataSourceContentHandler.superclass.constructor.call(this, widget, root, data);
};

// Subclass from oj.DataSourceContentHandler 
oj.Object.createSubclass(oj.TreeDataSourceContentHandler, oj.DataSourceContentHandler, "oj.TreeDataSourceContentHandler");

/**
 * Initializes the instance.
 * @protected
 */
oj.TreeDataSourceContentHandler.prototype.Init = function()
{
  oj.TreeDataSourceContentHandler.superclass.Init.call(this);
};

/**
 * Determines whether the conent is hierarchical.
 * @return {boolean} returns true if content is hierarhical, false otherwise.
 * @protected
 */
oj.TreeDataSourceContentHandler.prototype.IsHierarchical = function()
{
    return true;
};

/**
 * @protected
 */
oj.TreeDataSourceContentHandler.prototype.fetchRows = function(forceFetch)
{
    this.signalTaskStart(); // signal method task start

    this.fetchChildren(0, null, this.m_root, null);

    this.signalTaskEnd(); // signal method task end
};

oj.TreeDataSourceContentHandler.prototype.fetchChildren = function(start, parent, parentElem, successCallback)
{
    var range;
    this.signalTaskStart(); // signal method task start

    // no need to check ready since multiple fetch from different parents can occur at the same time
    this.m_fetching = true;

    range = {"start": start, "count": this.m_dataSource.getChildCount(parent)};
    this.m_dataSource.fetchChildren(parent, range, {"success": function(nodeSet){this._handleFetchSuccess(nodeSet, parent, parentElem, successCallback);}.bind(this), "error": function(status){this._handleFetchError(status);}.bind(this)});
    this.signalTaskEnd(); // signal method task end
};

oj.TreeDataSourceContentHandler.prototype._handleFetchSuccess = function(nodeSet, parent, parentElem, successCallback)
{
    var start, count, endIndex, fragment, i, data, metadata, item, content;

    this.signalTaskStart(); // signal method task start

    start = nodeSet.getStart();
    count = nodeSet.getCount();
    endIndex = start+count;

    // walk the node set
    for (i=0; i<count; i++)
    {
        data = nodeSet.getData(start+i);
        metadata = nodeSet.getMetadata(start+i);
        this.addItem(parentElem, start+i, data, metadata);
    }

    // fetch is done
    this.m_fetching = false;

    // if a callback is specified (as it is in the expand case), then invoke it
    if (successCallback != null)
    {
        successCallback.call(null, parentElem);
    }

    this.m_widget.renderComplete();

    this.m_initialized = true;

    this.signalTaskEnd(); // signal method task end
};

oj.TreeDataSourceContentHandler.prototype.afterRenderItem = function(item, context)
{
    var groupStyleClass, itemStyleClass, groupItemStyleClass, groupCollapseStyleClass, focusedStyleClass,
        collapseClass, content, icon, groupItem;

    this.signalTaskStart(); // signal method task start

    oj.TreeDataSourceContentHandler.superclass.afterRenderItem.call(this, item, context);

    groupStyleClass = this.m_widget.getGroupStyleClass();
    itemStyleClass = this.m_widget.getItemStyleClass();
    groupItemStyleClass = this.m_widget.getGroupItemStyleClass();
    groupCollapseStyleClass = this.m_widget.getGroupCollapseStyleClass();
    collapseClass = this.m_widget.getCollapseIconStyleClass();
    focusedStyleClass = this.m_widget.getFocusedElementStyleClass();

    item = $(item);

    if (context['leaf'] == false)
    {
        item.children().wrapAll("<div></div>"); //@HTMLUpdateOK

        // collapsed by default
        if(item.hasClass(focusedStyleClass))
        {
            item.removeClass(focusedStyleClass)
                .children().first()
                .addClass(focusedStyleClass)
                .attr("aria-expanded", "false");
        }
        else{
            item.children().first()
                    .attr("role","presentation")
                    .find("." + focusedStyleClass)
                    .attr("aria-expanded", "false");
        }

        content = item.children().first();
        content.uniqueId()
               .addClass(groupItemStyleClass);

        // add the expand icon
        if (this.m_widget.isExpandable())
        {
            item.addClass("oj-collapsed")

            icon = document.createElement("a");
            $(icon).attr("href", "#")
                   .attr("aria-labelledby", content.get(0).id)
                   .addClass("oj-component-icon oj-clickable-icon-nocontext")
                   .addClass(collapseClass);
        
            content.prepend(icon); //@HTMLUpdateOK               
        }

        // the yet to be expand group element
        groupItem = document.createElement("ul");
        $(groupItem).addClass(groupStyleClass)
                    .addClass(groupCollapseStyleClass)
                    .attr("role", "group");
        item.append(groupItem); //@HTMLUpdateOK
    }            
    else if (context['leaf'] == true)
    {
        item.addClass(itemStyleClass);
    }

    if (this.m_widget._isSelectionEnabled() && this.isSelectable(context))
    {
        this.m_widget.getFocusItem(item).attr("aria-selected", false);
    }

    // callback to widget
    this.m_widget.itemRenderComplete(item[0], context);

    this.signalTaskEnd(); // signal method task end
};

oj.TreeDataSourceContentHandler.prototype._handleFetchError = function(status)
{
    this.signalTaskStart(); // signal method task start

    // TableDataSource aren't giving me any error message
    oj.Logger.error(status);

    this.m_widget.renderComplete();

    this.signalTaskEnd(); // signal method task end
};

oj.TreeDataSourceContentHandler.prototype.Expand = function(item, successCallback)
{
    var parentKey, parentElem;

    this.signalTaskStart(); // signal method task start

    parentKey = this.GetKey(item[0]);
    parentElem = item.children("ul")[0];
    this.fetchChildren(0, parentKey, parentElem, successCallback);

    this.signalTaskEnd(); // signal method task end
};

oj.TreeDataSourceContentHandler.prototype.Collapse = function(item)
{
    // remove all children nodes
    item.empty(); //@HTMLUpdateOK
};

/**
 * Handler for static HTML content
 * @constructor
 * @ignore
 */
oj.StaticContentHandler = function(widget, root)
{
    this.m_widget = widget;
    this.m_root = root;
};

// Subclass from oj.Object 
oj.Object.createSubclass(oj.StaticContentHandler, oj.Object, "oj.StaticContentHandler");

/**
 * Initializes the instance.
 * @protected
 */
oj.StaticContentHandler.prototype.Init = function()
{
  oj.StaticContentHandler.superclass.Init.call(this);
};

/**
 * Destroy the content handler
 * @protected
 */
oj.StaticContentHandler.prototype.Destroy = function()
{
    this.restoreContent(this.m_root, 0);
    this.unsetRootAriaProperties();
};

/**
 * Determine whether the content handler is ready
 * @return {boolean} returns true there's no outstanding request, false otherwise.
 * @protected
 */
oj.StaticContentHandler.prototype.IsReady = function()
{
    // static content does not fetch
    return true;
};

oj.StaticContentHandler.prototype.HandleResize = function(width, height)
{
    // do nothing since all items are present
};

oj.StaticContentHandler.prototype.RenderContent = function()
{
    this.modifyContent(this.m_root, 0);
    this.setRootAriaProperties();
    this.m_widget.renderComplete();
};

oj.StaticContentHandler.prototype.Expand = function(item, successCallback)
{
    var selector, groupItem;

    selector = "."+this.m_widget.getGroupStyleClass();
    groupItem = $(item).children(selector)[0];
    $(groupItem).css("display", "block");

    successCallback.call(null, groupItem);
};

oj.StaticContentHandler.prototype.Collapse = function(item)
{
    // nothing to do
};

oj.StaticContentHandler.prototype.IsHierarchical = function()
{
    if (this.m_hier == null)
    {
        this.m_hier = $(this.m_root).children("li").children("ul").length > 0;
    }
    return this.m_hier;
};

/**
 * Restore the static content into its original format by removing all ListView specific style classes and attributes.
 * @param {Element} elem the element it is currently restoring
 * @param {number} depth the depth of the element it is currently restoring
 * @private
 */
oj.StaticContentHandler.prototype.restoreContent = function(elem, depth)
{
    var groupStyleClass, groupCollapseStyleClass, groupExpandStyleClass, groupItemStyleClass, itemStyleClass, itemElementStyleClass,
        items, i, item, groupItems, groupItem;

    groupStyleClass = this.m_widget.getGroupStyleClass();
    groupCollapseStyleClass = this.m_widget.getGroupCollapseStyleClass();
    groupExpandStyleClass = this.m_widget.getGroupExpandStyleClass();
    groupItemStyleClass = this.m_widget.getGroupItemStyleClass();
    itemStyleClass = this.m_widget.getItemStyleClass();
    itemElementStyleClass = this.m_widget.getItemElementStyleClass();

    items = elem.children;
    for (i=0; i<items.length; i++)
    {
        item = items[i];
        this.unsetAriaProperties(item);

        item = $(item);
        item.removeClass(itemElementStyleClass)
            .removeClass(itemStyleClass)
            .removeClass(this.m_widget.getDepthStyleClass(depth))
            .removeClass("oj-skipfocus")
            .removeClass("oj-focus")
            .removeClass("oj-hover")
            .removeClass("oj-expanded")
            .removeClass("oj-collapsed")
            .removeClass("oj-selected");

        groupItems = item.children("ul");
        if (groupItems.length > 0)
        {
            item.children("."+groupItemStyleClass).children().unwrap();      
            item.children(".oj-component-icon").remove();

            groupItem = $(groupItems[0]);
            groupItem.removeClass(groupStyleClass)
                     .removeClass(groupExpandStyleClass)
                     .removeClass(groupCollapseStyleClass)
                     .removeAttr("role");
            this.restoreContent(groupItem[0], depth+1);
        }
    }
};

/**
 * Modify the static content to include ListView specific style classes and attributes.
 * @param {Element} elem the element it is currently modifying
 * @param {number} depth the depth of the element it is currently modifying
 * @private
 */
oj.StaticContentHandler.prototype.modifyContent = function(elem, depth)
{
    var itemStyleClass, itemElementStyleClass, groupStyleClass, groupItemStyleClass, groupCollapseStyleClass, collapseClass, focusedElementStyleClass,
        items, expandable, i, item, context, groupItems, content, icon, groupItem;

    itemStyleClass = this.m_widget.getItemStyleClass();
    itemElementStyleClass = this.m_widget.getItemElementStyleClass();
    groupStyleClass = this.m_widget.getGroupStyleClass();
    groupItemStyleClass = this.m_widget.getGroupItemStyleClass();
    groupCollapseStyleClass = this.m_widget.getGroupCollapseStyleClass();
    collapseClass = this.m_widget.getCollapseIconStyleClass();
    focusedElementStyleClass = this.m_widget.getFocusedElementStyleClass();

    items = elem.children;
    expandable = this.m_widget.isExpandable();

    for (i=0; i<items.length; i++)
    {
        item = $(items[i]);
        context = this.createContext(item);

        this.setAriaProperties(item, context);

        item.uniqueId()
            .addClass(itemElementStyleClass);
        if (depth > 0)
        {
            item.addClass(this.m_widget.getDepthStyleClass(depth));
        }

        // tag it if item is not focusable
        if (!this.isFocusable(context))
        {
            item.addClass("oj-skipfocus");
        }

        groupItems = item.children("ul");
        if (groupItems.length > 0)
        {
            this.m_hier = true;

            item.children(":not(ul)")
                .wrapAll("<div></div>"); //@HTMLUpdateOK

            content = item.children().first();
            content.addClass(groupItemStyleClass);

            if (this.hasChildren(groupItems[0]))
            {
                if(item.hasClass(focusedElementStyleClass)) 
                {
                    item.removeClass(focusedElementStyleClass);
                    content.addClass(focusedElementStyleClass).attr("aria-expanded", "false");
                } 
                else 
                {
                    content.attr("role","presentation");
                    content.find("."+focusedElementStyleClass).attr("aria-expanded", "false");
                }

                // add the expand icon
                if (expandable)
                {
                    item.addClass("oj-collapsed");

                    content.uniqueId();

                    // add the expand icon
                    icon = document.createElement("a");
                    $(icon).attr("href", "#")
                           .attr("role", "button")
                           .attr("aria-labelledby", content.get(0).id)
                           .addClass("oj-component-icon oj-clickable-icon-nocontext")
                           .addClass(collapseClass);
                                
                    content.prepend(icon); //@HTMLUpdateOK               
                }
            }            

            groupItem = $(groupItems[0]);
            groupItem.addClass(groupStyleClass)
                     .addClass(groupCollapseStyleClass)
                     .attr("role", "group")
                     .css("display", "none");
            this.modifyContent(groupItem[0], depth+1);
        }
        else
        {
            item.addClass(itemStyleClass);
        }

        if (this.m_widget._isSelectionEnabled() && this.isSelectable(context))
        {
            this.m_widget.getFocusItem(item).attr("aria-selected", false);
        }

        this.m_widget.itemRenderComplete(item[0], context);
    }    
};

/**
 * @private
 */
oj.StaticContentHandler.prototype.setRootAriaProperties = function()
{
    if (this.IsHierarchical())
    {
        this.m_root.setAttribute("role", "tree");
    }
    else
    {
        this.m_root.setAttribute("role", "listbox");
    }
};

/**
 * @private
 */
oj.StaticContentHandler.prototype.unsetRootAriaProperties = function()
{
    this.m_root.removeAttribute("role");
};

/**
 * @private
 */
oj.StaticContentHandler.prototype.hasChildren = function(item)
{
    return ($(item).children("li").length > 0);
};

/**
 * Creates the object with context information for the specified item
 * @param {jQuery} item the item to create context info object for
 * @return {Object} the context object
 * @private
 */
oj.StaticContentHandler.prototype.createContext = function(item)
{
    var context, parents;

    context = {};
    context['key'] = item.attr('id');
    context['parentElement'] = item.children().first()[0];
    context['index'] = item.index();
    context['data'] = item[0];
    context['component'] = this.m_widget.getWidgetConstructor();

    // additional context info for hierarhical data
    if (this.IsHierarchical())
    {
        context['leaf'] = item.children("ul").length == 0;        
        parents = item.parents("li."+this.m_widget.getItemElementStyleClass());
        context['depth'] = parents.length;
        if (parents.length == 0)
        {
            context['parentKey'] = null;
        }
        else
        {
            context['parentKey'] = parents.first().attr('id');
        }     
    }

    return context;
};

/**
 * @private
 */
oj.StaticContentHandler.prototype.setAriaProperties = function(item, context)
{
    // if there's only one element inside the item and it is focusable, set
    // the role on it instead
    var elem = this.m_widget.getSingleFocusableElement(item);
    elem.attr("role", this.IsHierarchical() ? "treeitem" : "option");

    if (elem != item)
    {
        item.attr("role", "presentation");
    }

    elem.addClass(this.m_widget.getFocusedElementStyleClass());
};

/**
 * @private
 */
oj.StaticContentHandler.prototype.unsetAriaProperties = function(item)
{
    var elem = this.m_widget.getSingleFocusableElement($(item));
    elem.removeAttr("role");
    elem.removeAttr("aria-selected");
    elem.removeAttr("aria-expanded");
    elem.removeClass(this.m_widget.getFocusedElementStyleClass());
};

oj.StaticContentHandler.prototype.GetKey = function(element)
{
    return $(element).attr("id");
};

oj.StaticContentHandler.prototype.FindElementByKey = function(key)
{
    return document.getElementById(key);
};

oj.StaticContentHandler.prototype.isFocusable = function(context)
{
    return this.m_widget._getItemOption("focusable", context, true);
};

oj.StaticContentHandler.prototype.isSelectable = function(context)
{
    return this.m_widget._getItemOption("selectable", context, true);
};

/**
 * todo: create common utility class between combobox and listview
 * @private
 */
var _ListViewUtils = {
    clazz: function(SuperClass, methods)
    {
        var constructor = function() {};
        oj.Object.createSubclass(constructor, SuperClass, '');
        constructor.prototype = $.extend(constructor.prototype, methods);
        return constructor;
    }
};

/**
 * @export
 * @class oj._ojListView
 * @classdesc Listview
 * @constructor
 * @ignore
 */ 
oj._ojListView = _ListViewUtils.clazz(Object, 
/** @lends oj._ojListView.prototype */
{
    // constants for key codes, todo: move to ListViewUtils
    LEFT_KEY: 37,
    RIGHT_KEY: 39,
    DOWN_KEY: 40,
    UP_KEY: 38,
    TAB_KEY: 9,
    ENTER_KEY: 13,
    ESC_KEY: 27,
    F2_KEY: 113,
    SPACE_KEY: 32,

    // constants for disclosure state
    /** @protected **/
    STATE_EXPANDED: 0,
    /** @protected **/
    STATE_COLLAPSED: 1,
    /** @protected **/
    STATE_NONE: 2,

    /** @protected **/
    FOCUS_MODE_LIST: 0,
    /** @protected **/
    FOCUS_MODE_ITEM: 1,

    /**
     * Initialize the listview at creation
     * Invoked by widget
     */        
    init: function(opts)
    {
        var self = this;

        this.readinessStack = [];
        this.signalTaskStart(); // Move component out of ready state; component is initializing. End in afterCreate()

        this.ojContext = opts.ojContext;
        this.element = opts.element;
        this.options = opts;

        this.element
            .uniqueId()
            .addClass(this.GetStyleClass()+" oj-component-initnode")
            .attr("tabIndex", 0);

        this.ojContext._on(this.element, {
            "click": function(event) 
            {
                self.HandleMouseClick(event);
            },
            "touchstart": function(event)
            {
                self.HandleMouseDownOrTouchStart(event);
            },
            "touchend": function(event)
            {
                self.HandleTouchEndOrCancel(event);
            },
            "touchcancel": function(event)
            {
                self.HandleTouchEndOrCancel(event);
            },
            "mousedown": function(event)
            {
                if (event.button === 0 && !self._recentTouch())
                {
                    self.HandleMouseDownOrTouchStart(event);
                }
            },
            "mouseup": function(event)
            {
                self._handleMouseUpOrPanMove(event);
                self.m_preActive = false;
            },
            "mouseout": function(event) 
            {
                self._handleMouseOut(event);
            },
            "mouseover": function(event) 
            {
                self._handleMouseOver(event);
            },
            "keydown": function(event) 
            {
                self.HandleKeyDown(event);
            },
            "focus": function(event)
            {
                self.HandleFocus(event);
            },
            "blur": function(event)
            {
                self.HandleBlur(event);
            },
            "ojpanmove": function(event)
            {
                self._handleMouseUpOrPanMove(event);
            }
        });

        // in Firefox, first tab will focus on the list container
        if (oj.AgentUtils.getAgentInfo()['browser'] === oj.AgentUtils.BROWSER.FIREFOX)
        {
            this.ojContext._on(this._getListContainer(), {
                "focus": function(event) 
                {
                    self.element.focus();
                }
            });
        }

        // for item focus mode (aka roving focus), we'll need to use focusout handler instead
        // of blur because blur doesn't bubble
        if (this.GetFocusMode() === this.FOCUS_MODE_ITEM)
        {
            this.ojContext._on(this.element, {
                "focusin": function(event)
                {
                    self.HandleFocus(event);
                },
                "focusout": function(event)
                {
                    self.HandleFocusOut(event);
                }
            });
        }
        else
        {
            this.ojContext._on(this.element, {
                "focus": function(event)
                {
                    self.HandleFocus(event);
                },
                "blur": function(event)
                {
                    self.HandleBlur(event);
                }
            });
        }

        this.ojContext.document.bind("touchend.ojlistview touchcancel.ojlistview", this.HandleTouchEndOrCancel.bind(this));

        this._registerScrollHandler();
    },
    /**
     * Initialize the listview after creation
     * Invoked by widget
     */        
    afterCreate: function () 
    {     
        var container;

        this._buildList();
        this._initContentHandler();

        // register a resize listener        
        container = this._getListContainer();
        this._registerResizeListener(container[0]);

        this.signalTaskEnd(); // resolve component initializing task. Started in init()
    },
    /**
     * Redraw the entire list view after having made some external modifications.
     * Invoked by widget
     */
    refresh: function()
    {
        // reset content, wai aria properties, and ready state
        this._resetInternal();

        this.signalTaskStart(); // signal method task start

        // set the wai aria properties 
        this.SetAriaProperties();

        // recreate the content handler
        this._initContentHandler();

        // reattach scroll listener if neccessary
        this._registerScrollHandler();

        this.signalTaskEnd(); // signal method task end
    },
    /**
     * Returns a Promise that resolves when the component is ready, i.e. after data fetching, rendering, and animations complete.
     * Invoked by widget
     * @return {Promise} A Promise that resolves when the component is ready.
     */
    whenReady: function()
    {
        return this.readyPromise;
    },
    /**
     * Destroy the list view
     * Invoked by widget
     */
    destroy: function()
    {
        this.element.removeClass(this.GetStyleClass()+" oj-component-initnode");

        this._unregisterResizeListener(this._getListContainer());
        this._resetInternal();

        //  - DomUtils.unwrap() will avoid unwrapping if the node is being destroyed by Knockout
        oj.DomUtils.unwrap(this.element, this._getListContainer()); 

        this.ojContext.document.off(".ojlistview");
    },

    /**
     * Remove any wai-aria properties and listview specific attributes.
     * Reset anything done by the content handler.
     * @private
     */
    _resetInternal: function()
    {
        var self = this;

        this.UnsetAriaProperties();
        this._cleanupTabbableElementProperties(this.element);
        if (this.m_contentHandler != null)
        {
            this.m_contentHandler.Destroy();
            delete this.m_contentHandler;
            this.m_contentHandler = null;
        }

        this.m_active = null;
        this.m_isExpandAll = null;

        this.readinessStack = [];
        this.readyPromise = new Promise(function(resolve, reject)
        {
            self.readyResolve = resolve;
        });

        this.ClearCache();
    },

    /**
     * In browsers [Chrome v35, Firefox v24.5, IE9, Safari v6.1.4], blur and mouseleave events are generated for hidden content but not detached content,
     * so for detached content only, we must use this hook to remove the focus and hover classes.
     * Invoke by widget.
     */
    notifyDetached: function() 
    {
        // Remove focus/hover/active style classes when listview element got detached from document.
        // For details see related button .
        this._getListContainer().removeClass("oj-focus-ancestor");

        if (this.m_active != null)
        {
            $(this.m_active['elem']).removeClass("oj-focus");
        }

        if (this.m_hoverItem != null)
        {
            this._unhighlightElem(this.m_hoverItem, "oj-hover");
        }
    },

    /**
     * Called when application programmatically change the css style so that the ListView becomes visible
     */
    notifyShown: function()
    {
        // do nothing for now
    },

    /**
     * Return the subcomponent node represented by the documented locator attribute values.
     * Invoked by widget
     * @param {Object} locator An Object containing at minimum a subId property 
     *        whose value is a string, documented by the component, that allows 
     *         the component to look up the subcomponent associated with that 
     *        string.  It contains:<p>
     *        component: optional - in the future there may be more than one 
     *        component contained within a page element<p>
     *        subId: the string, documented by the component, that the component 
     *        expects in getNodeBySubId to locate a particular subcomponent
     * @returns {Array.<(Element|null)>|Element|null} the subcomponent located by the subId string passed
     *          in locator, if found.<p>
     */
    getNodeBySubId: function(locator)
    {
        var subId, key, item, anchor;
 
        if (locator == null)
        {
            return this.element ? this.element[0] : null;
        }

        subId = locator['subId'];
        if (subId === 'oj-listview-disclosure' || subId === 'oj-listview-icon')
        {
            key = locator['key'];
            item = this.FindElementByKey(key);
            if (item != null && item.firstElementChild)
            {
                // this should be the anchor
                anchor = item.firstElementChild.firstElementChild;
                if (anchor != null && ($(anchor).hasClass(this.getExpandIconStyleClass()) || $(anchor).hasClass(this.getCollapseIconStyleClass())))
                {
                    return anchor;
                }
            }     

        }
        // Non-null locators have to be handled by the component subclasses
        return null;
    },
                
    /**
     * Returns the subId locator for the given child DOM node. 
     * Invoked by widget
     * @param {!Element} node - child DOM node
     * @return {Object|null} The subId for the DOM node, or null when none is found.
     */
    getSubIdByNode: function(node)
    {
        var item, key;

        // check to see if it's expand/collapse icon
        if (node != null && $(node).hasClass(this.getExpandIconStyleClass()) || $(node).hasClass(this.getCollapseIconStyleClass()))
        {
            item = this.FindItem(node);
            if (item != null && item.length > 0)
            {
                key = this.GetKey(item[0]);            
                if (key != null)
                {
                    return {'subId': 'oj-listview-disclosure', 'key': key};
                }
            }           
        }

        return null;
    },

    /**
     * Returns an object with context for the given child DOM node. 
     * This will always contain the subid for the node, defined as the 'subId' property on the context object. 
     * Additional component specific information may also be included. For more details on returned objects, see context objects.
     * Invoked by widget
     *
     * @param {!Element} node the child DOM node
     * @returns {Object|null} the context for the DOM node, or null when none is found.
     */
    getContextByNode: function(node)
    {
        var item, key, parent, index, context;

        item = this.FindItem(node);
        if (item != null && item.length > 0)
        {
            key = this.GetKey(item[0]);            
            if (key != null)
            {
                parent = item.parent();
                index = parent.children("li").index(item);
                context = {'subId': 'oj-listview-item', 'key': key, 'index': index};

                // group item should return the li
                if (parent.get(0) != this.element.get(0))
                {
                    context['parent'] = parent.parent().get(0);
                }

                // check if it's a group item
                if (item.children().first().hasClass(this.getGroupItemStyleClass()))
                {
                    context['group'] = true;
                }
                else
                {
                    context['group'] = false;
                }

                return context;
            }
        }           

        return null;
    },

    /**
     * Unregister event listeners for resize the container DOM element.
     * @param {Element} element  DOM element
     * @private
     */
    _unregisterResizeListener: function(element)
    {
        if (element && this._resizeHandler)
        {
            // remove existing listener
            oj.DomUtils.removeResizeListener(element, this._resizeHandler);    
        }
    },

    /**
     * Register event listeners for resize the container DOM element.
     * @param {Element} element  DOM element
     * @private
     */
    _registerResizeListener: function(element)
    {         
        if (element)
        {
            if (this._resizeHandler == null)
            {
                this._resizeHandler = this._handleResize.bind(this);
            }

            oj.DomUtils.addResizeListener(element, this._resizeHandler);
        }
    },

    /**
     * The resize handler.
     * @param {number} width the new width
     * @param {number} height the new height
     * @private
     */
    _handleResize: function(width, height)
    {
        if (width > 0 && height > 0 && this.m_contentHandler != null)
        {
            this.m_contentHandler.HandleResize(width, height);
        }
    },   

    /**
     * Whether ListView should refresh if certain option is updated
     * @param {Object} options the options to check
     * @return {boolean} true if should refresh, false otherwise
     * @protected
     */
    ShouldRefresh: function(options)
    {
        return (options['data'] != null || 
                options['drillMode'] != null || 
                options['groupHeaderPosition'] != null || 
                options['item'] != null || 
                options['scrollPolicy'] != null ||
                options['scrollPolicyOptions'] != null);
    },

    /**
     * Sets multiple options 
     * Invoke by widget
     * @param {Object} options the options object
     * @param {Object} flags additional flags for option
     * @return {boolean} true to refresh, false otherwise
     */
    setOptions: function(options, flags)
    { 
        var self, elem, expanded, selection, i;

        if (this.ShouldRefresh(options))
        {
            // if data option is updated, and that no update current or selection option
            // are specified, clear them
            if (options['data'] != null)
            {
                if (options['currentItem'] == null)
                {
                    this.SetOption('currentItem', null);
                }

                if (options['selection'] == null)
                {
                    this._clearSelection(true);
                }
            }

            // data updated, need to refresh
            return true;
        }

        if (options['currentItem'] != null)
        {            
            elem = this.FindElementByKey(options["currentItem"]);
            if (elem != null)
            {
                elem = $(elem);
                if (!this.SkipFocus(elem))
                {
                    // set it active
                    this._activeAndFocus(elem, null);
                }
            }
        }
        else if (options['currentItem'] === null)
        {
            // currentItem is deliberately set to null if this case is entered; deliberately clear active element and its focus
            this.UnhighlightActive();
            this.m_active = null;
        }

        if (options['expanded'] != null)
        {            
            // should only apply if data is hierarchical 
            // q: could expanded be change if drillMode is 'expanded'?
            if (this.m_contentHandler.IsHierarchical())
            {
                expanded = options['expanded'];

                if (Array.isArray(expanded))
                {
                    this.signalTaskStart(); // signal task start

                    // collapse all expanded items first
                    this._collapseAll();

                    // expand each key
                    self = this;
                    $.each(expanded, function(index, value)
                    {
                        self.expandKey(value, true, true, true);
                    });

                    this.signalTaskEnd(); // signal task end
                }
            }
        }

        if (options['selection'] != null)
        {            
            if (this._isSelectionEnabled())
            {
                // remove any non-selectable items, this will effectively clone the selection as well,
                // which we'll need to do
                options['selection'] = this._filterSelection(options['selection']);
                selection = options['selection'];

                // clear selection first
                this._clearSelection(false);

                // selects each key
                for (i=0; i<selection.length; i++)            
                {
                    elem = this.FindElementByKey(selection[i]);
                    if (elem != null)
                    {
                        this._applySelection(elem, selection[i]);
                    }
                }
            }
        }

        if (options['selectionMode'] != null)
        {            
            // clear existing selection if selection mode changes
            this._clearSelection(true);

            // reset wai aria properties 
            this.SetAriaProperties();
        }

        return false;
    },

    /**
     * Trigger an event to fire.
     * @param {string} type the type of event
     * @param {Object} event the jQuery event to fire
     * @param {Object} ui the ui param
     * @protected
     */
    Trigger: function(type, event, ui)
    {
        return this.ojContext._trigger(type, event, ui);
    },

    /**
     * Sets an option on the widget
     * @param {string} key the option key
     * @param {Object} value the option value
     * @param {Object=} flags any optional parameters 
     * @protected
     */
    SetOption: function(key, value, flags)
    {
        this.ojContext.option(key, value, flags);
    },

    /**
     * Gets the value of an option from the widget
     * @param {string} key the option key
     * @return {Object} the value of the option
     * @protected
     */
    GetOption: function(key)
    {
        return this.ojContext.option(key);
    },

    /**
     * Invoke whenever a task is started. Moves the component out of the ready state if necessary.
     */
    signalTaskStart: function()
    {
        var self = this;
        if (this.readinessStack)
        {
            if (this.readinessStack.length == 0)
            {
                this.readyPromise = new Promise(function(resolve, reject)
                {
                    self.readyResolve = resolve;
                });
            }
            this.readinessStack.push(1);
        }
    },

    /**
     * Invoke whenever a task finishes. Resolves the readyPromise if component is ready to move into ready state.
     */
    signalTaskEnd: function()
    {
        if (this.readinessStack && this.readinessStack.length > 0)
        {
            this.readinessStack.pop();
            if (this.readinessStack.length == 0)
            {
                this.readyResolve(null);
            }
        }
    },

    /************************************** Core rendering ********************************/
    /**
     * Initialize the content handler based on data type
     * @private
     */
    _initContentHandler: function()
    {
        var data, fetchSize, self;

        this.signalTaskStart(); // signal method task start

        data = this.GetOption("data");
        if (data != null)
        {
            // Check to make sure oj.TableDataSource or oj.TreeDataSource exists through require import
            if (typeof oj.TableDataSource === "undefined" || typeof oj.TreeDataSource === "undefined")
            {
                throw "oj.TableDataSource or oj.TreeDataSource not found. Ensure the required modules are imported";
            }

            if (data instanceof oj.TableDataSource)
            {
                this.m_contentHandler = new oj.TableDataSourceContentHandler(this, this.element[0], data);
            }
            else if (data instanceof oj.TreeDataSource)
            {
                this.m_contentHandler = new oj.TreeDataSourceContentHandler(this, this.element[0], data);
            }
            else
            {
                throw "Invalid data";
            }
        }
        else
        {
            // StaticContentHandler will handle cases where children are invalid or empty
            this.m_contentHandler = new oj.StaticContentHandler(this, this.element[0]);
        }
        // kick start rendering
        this._showStatusText();
        this.m_contentHandler.RenderContent();

        this.signalTaskEnd(); // signal method task end
    },

    /**
     * Update active descendant attribute
     * @param {jQuery} elem the active item element
     * @protected
     */
    UpdateActiveDescendant: function(elem)
    {
        this.element.attr("aria-activedescendant", elem.attr("id"));
    },

    /**
     * Sets wai-aria properties on root element
     * @protected
     */
    SetAriaProperties: function()
    {
        this.element.attr("aria-activedescendant", "");
        if (this._isMultipleSelection())
        {
            this.element.attr("aria-multiselectable", true);
        }
        else if (this._isSelectionEnabled())
        {
            this.element.attr("aria-multiselectable", false);
        }
    },

    /**
     * Removes wai-aria properties on root element
     * @protected
     */
    UnsetAriaProperties: function()
    {
        this.element.removeAttr("aria-activedescendant")
                    .removeAttr("aria-multiselectable");
    },

    /**
     * Build the elements inside and around the root
     * @param {Element} root the root element
     * @private
     */
    _buildList: function(root)
    {
        var container, status;

        container = this._getListContainer();
        this.SetAriaProperties();

        status = this._buildStatus();
        container.append(status); // @HTMLUpdateOK
        this.m_status = status;
    },

    /**
     * Build a status bar div
     * @return {jQuery} the root of the status bar
     * @private
     */
    _buildStatus: function()
    {
        var root = $(document.createElement("div"));
        root.addClass("oj-listview-status")
            .attr({"id": this._createSubId("status"), 
                   "role": "status"});

        return root;
    },

    /**
     * Displays the 'fetching' status message
     * @private
     */
    _showStatusText: function()
    {
        var msg = this.ojContext.getTranslatedString("msgFetchingData");
        this.m_status.text(msg).show();        
    },

    /**
     * Hide the 'fetching' status message
     * @private
     */
    _hideStatusText: function()
    {
        this.m_status.hide();
    },

    /**
     * Retrieves the root element
     * Invoke by widget
     */
    getRootElement: function()
    {
        return this._getListContainer();
    },

    /**
     * Retrieves the div around the root element, create one if needed.
     * @return {jQuery} the div around the root element 
     * @private
     */    
    _getListContainer: function()
    {
        if (this.m_container == null)
        {
            this.m_container = this._createListContainer();
        }
        return this.m_container;
    },

    /**
     * Creates the div around the root element.
     * @return {jQuery} the div around the root element
     * @private
     */    
    _createListContainer: function()
    {
        var listContainer = $(document.createElement('div'));
        listContainer.addClass(this.GetContainerStyleClass()).addClass("oj-component");
        this.element.parent()[0].replaceChild(listContainer[0], this.element[0]); //@HTMLUpdateOK
        listContainer.prepend(this.element); //@HTMLUpdateOK

        return listContainer;
    },

    /**
     * If the empty text option is 'default' return default empty translated text, 
     * otherwise return the emptyText set in the options 
     * @return {string} the empty text
     * @private
     */
    _getEmptyText: function()
    {
        return this.ojContext.getTranslatedString("msgNoData");
    },

    /**
     * Build an empty text div and populate it with empty text
     * @return {Element} the empty text element
     * @private 
     */
    _buildEmptyText: function()
    {
        var emptyText, empty;

        emptyText = this._getEmptyText();
        empty = document.createElement("li");
        empty['id'] = this._createSubId("empty");
        empty['className'] = "oj-listview-empty-text";
        empty.textContent = emptyText;

        return empty;
    },

    /**
     * Determines whether the specified item is expanded
     * @param {jQuery} item the item element
     * @return {number} 0 if item is expanded, 1 if item is collapsed, 2 if item cannot be expand or collapse.
     * @protected
     */
    GetState: function(item)
    {
        var expanded = this.getFocusItem(item).attr("aria-expanded");
        if (expanded == "true")
        {
            return this.STATE_EXPANDED;
        }
        else if (expanded == "false")
        {
            return this.STATE_COLLAPSED;
        }
        else
        {
            return this.STATE_NONE;
        }
    },

    /**
     * Sets the disclosed state of the item
     * @param {jQuery} item the item element
     * @param {number} state 0 if item is expanded, 1 if item is collapsed, 2 if item cannot be expand or collapse.
     * @protected
     */
    SetState: function(item, state)
    {
        var expandable = this.isExpandable();

        if (state == this.STATE_EXPANDED)
        {
            this.getFocusItem(item).attr("aria-expanded", "true");
            if (expandable)
            {
                item.removeClass("oj-collapsed")
                    .addClass("oj-expanded");
            }
        }
        else if (state == this.STATE_COLLAPSED)
        {
            this.getFocusItem(item).attr("aria-expanded", "false");
            if (expandable)
            {
                item.removeClass("oj-expanded")
                    .addClass("oj-collapsed");
            }
        } 
    },

    /**
     * Gets the item option
     * @param {string} name the name of the option
     * @param {Object} context the context object
     * @param {boolean} resolve true evaluate if return value is a function, false otherwise
     * @return {function(Object)|Object|null} returns the item option
     * @private
     */
    _getItemOption: function(name, context, resolve)
    {
        var option, value;

        option = this.options["item"];
        value = option[name];

        if (typeof value == 'function' && resolve)
        {
            return value.call(this, context);
        }

        return value;
    },

    /**
     * Gets the item renderer
     * @return {function(Object)|null} returns the item renderer
     * @private
     */
    _getItemRenderer: function()
    {
        var renderer = this._getItemOption("renderer", null, false);
        if (typeof renderer != 'function')
        {
            // cannot be non-function
            return null;
        }

        return renderer;
    },

    /**
     * Called by content handler once the content of an item is rendered triggered by an insert event
     * @param {Element} elem the item element
     * @param {Object} context the context object used for the item
     */
    itemInsertComplete: function(elem, context)
    {
        // hook for NavList
    },

    /**
     * Called by content handler once the content of an item is removed triggered by an remove event
     * @param {Element} elem the item element
     */
    itemRemoveComplete: function(elem)
    {
        var prop;

        // disassociate element from key map
        if (elem != null && elem.id && this.m_keyElemMap != null)
        {
            for (prop in this.m_keyElemMap)
            {
                if (this.m_keyElemMap.hasOwnProperty(prop))
                {
                    if (this.m_keyElemMap[prop] === elem.id)
                    {
                        delete this.m_keyElemMap[prop];
                        return;
                    }
                }
            }
        }
    },

    /**
     * Called by content handler once the content of an item is rendered
     * @param {Element} elem the item element
     * @param {Object} context the context object used for the item
     */
    itemRenderComplete: function(elem, context)
    {
        var selection, selectedItems, i, index, clone, expanded, self, current;

        // make all tabbable elements non-tabbable, since we want to manage tab stops
        this._disableAllTabbableElements(elem);

        // update as selected if it is in selection, check if something already selected in single selection
        if (this._isSelectionEnabled())
        {
            selection = this.GetOption("selection");
            if (this.IsSelectable(elem))
            {
                for (i=0; i<selection.length; i++)
                {
                    if (selection[i] == context['key'])
                    {
                        this._applySelection(elem, selection[i]);
                    
                        // if it's single selection, then bail
                        if (!this._isMultipleSelection())
                        {
                            if (selection.length > 1)
                            {
                                // we'll have to modify the value
                                selectedItems = $(this.FindElementByKey(context['key']));
                                this.SetOption("selection", [context['key']], {'_context': {originalEvent: null, internalSet: true, extraData: {'items': selectedItems}}, 'changed': true});
                            }
                            break;
                        }
                    }
                }
            }
            else
            {
                // the selection is invalid, remove it from selection
                index = selection.indexOf(context['key']);
                if (index > -1)
                {
                    // clone before modifying
                    clone = selection.slice(0);
                    clone.splice(index, 1);

                    selectedItems = new Array(clone.length);
                    for (i = 0; i < clone.length; i++)
                    {
                        selectedItems[i] = this.FindElementByKey(clone[i]);
                    }
                    this.SetOption("selection", clone, {'_context': {originalEvent: null, internalSet: true, extraData: {'items': $(selectedItems)}}, 'changed': true});
                }                
            }
        }

        // update if it is in expanded, ensure data is hierarchical
        if (this.m_contentHandler.IsHierarchical())
        {
            // checks if it is expandable && is collapsed
            if (this.GetState($(elem)) == this.STATE_COLLAPSED)
            {
                expanded = this.GetOption("expanded");
                // checks if expand all
                if (this._isExpandAll())
                {
                    // don't animate
                    this.ExpandItem($(elem), null, false, null, false, false, false);
                }
                else if (Array.isArray(expanded))
                {
                    // checks if specified expanded
                    self = this;
                    $.each(expanded, function(index, value)
                    {
                        if (value == context['key'])
                        {
                            // don't animate
                            self.ExpandItem($(elem), null, false, null, false, false, false);
                        }
                    });
                }
            }
        }

        // checks if the active element has changed, this could happen in TreeDataSource, where the element gets remove when collapsed
        if (this.m_active != null && context['key'] == this.m_active['key'] && this.m_active['elem'] != null && elem != this.m_active['elem'].get(0))
        {
            this.m_active['elem'] = $(elem);
        }
    },

    /**
     * Called by content handler once content of all items are rendered
     */
    renderComplete: function()
    {
        var empty;

        this._hideStatusText();

        // remove any empty text div
        $(document.getElementById(this._createSubId('empty'))).remove();        

        // check if it's empty
        if (this.element[0].childElementCount == 0)
        {
            empty = this._buildEmptyText();
            this.element.append(empty); // @HTMLUpdateOK

            // fire ready event
            this.Trigger("ready", null, {});
            
            return;
        }

        // clear items cache
        this.m_items = null;

        // check if current is specified
        var current = this.GetOption("currentItem");
        if (this.m_active == null && current != null)
        {
            var elem = this.FindElementByKey(current);
            // make sure item is focusable also
            if (elem != null && !this.SkipFocus($(elem)))
            {    
                this._activeAndFocus($(elem), null);
            }
        }

        // if listview has focus but there's no active element, then set focusable item
        // this could happen after refresh from context menu
        if (this._getListContainer().hasClass("oj-focus-ancestor") && this.m_active == null)
        {
            this._initFocus();
        }

        // fire ready event
        this.Trigger("ready", null, {});
    },

    /**
     * When an item is updated, if the item happens to be the current item, the active element needs to be updated.
     * @protected
     */
    restoreCurrentItem: function()
    {
        var current = this.GetOption("currentItem");
        if (current != null)
        {
            var elem = this.FindElementByKey(current);
            // make sure item is focusable also
            if (elem != null && !this.SkipFocus($(elem)))
            {                    
                this._activeAndFocus($(elem), null);
            }
        }
    },

    /**
     * Called by content handler to reset the state of ListView
     * @private
     */
    ClearCache: function()
    {
        // clear any element dependent cache
        this.m_items = null;
        this.m_groupItems = null;
    },

    /********************* context menu methods *****************/
    /**
     * @param {!Object} menu The JET Menu to open as a context menu.  Always non-<code class="prettyprint">null</code>.
     * @param {!Event} event What triggered the menu launch.  Always non-<code class="prettyprint">null</code>.
     * @param {string} eventType "mouse", "touch", or "keyboard".  Never <code class="prettyprint">null</code>.
     * Invoked by widget
     */
    notifyContextMenuGesture: function(menu, event, eventType)
    {
        var parent, openOptions;

        // first check if we are invoking on an editable or clickable element If so bail
        if (this.IsNodeEditableOrClickable($(event['target'])))
        {
            return false;
        }

        // set the item right click on active
        parent = $(event['target']).closest("."+this.getItemElementStyleClass());       
        if (parent.length > 0 && !this.SkipFocus($(parent[0])))
        {
            this._activeAndFocus($(parent[0]), null);
        }

        openOptions = {"launcher": this.element, "initialFocus": "menu"};

        if (eventType === "keyboard")
        {
            openOptions["position"] = {"my": "start top", "at": "start bottom", "of": this.m_active['elem']};
        }

        this.ojContext._OpenContextMenu(event, eventType, openOptions);
    },

    /**
     * Override helper for NavList to override checks for whether a node is editable or clickable.
     * @param {jQuery} node  Node
     * @return {boolean} true or false
     * @protected
     */
    IsElementEditableOrClickable: function(node)
    {
        var nodeName = node.prop("nodeName");
        return (nodeName.match(/^INPUT|SELECT|OPTION|BUTTON|^A\b|TEXTAREA/) != null);
    },

    /**
     * Return whether the node is editable or clickable.  Go up the parent node as needed.
     * @param {jQuery} node  Node
     * @return {boolean} true or false
     * @protected    
     */
    IsNodeEditableOrClickable: function(node)
    {
        var nodeName;

        while (null != node && node[0] != this.element[0] && (nodeName = node.prop("nodeName")) != "LI")
        {
            // If the node is a text node, move up the hierarchy to only operate on elements
            // (on at least the mobile platforms, the node may be a text node)
            if (node[0].nodeType == 3) // 3 is Node.TEXT_NODE
            {
                node = node.parent();
                continue;
            }

            var tabIndex = node.attr('tabIndex');
            // listview overrides the tab index, so we should check if the data-oj-tabindex is populated
            var origTabIndex = node.attr('data-oj-tabindex');

            if (tabIndex != null && tabIndex >= 0  && !node.hasClass(this.getFocusedElementStyleClass()))
            {
                return true;
            }
            else if (this.IsElementEditableOrClickable(node))
            {
                // ignore elements with tabIndex == -1
                if (tabIndex != -1 || origTabIndex != -1)
                {
                    return true;
                }
            }
            node = node.parent();
        }
        return false;
    },

    /********************* focusable/editable element related methods *****************/
    /**
     * Make all tabbable elements within the specified cell un-tabbable
     * @param {Element} element
     * @private
     */
    _disableAllTabbableElements: function(element)
    {
        var selector, tabIndex;

        selector = "a, input, select, textarea, button, object, .oj-component-initnode";
        $(element).find(selector).each(function(index)
        {
            $(this).removeAttr("data-first").removeAttr("data-last");

            tabIndex = parseInt($(this).attr("tabIndex"), 10);
            if (isNaN(tabIndex) || tabIndex >= 0)
            {
                $(this).attr("tabIndex", -1)
                       .attr("data-tabmod", isNaN(tabIndex) ? -1 : tabIndex);
            }
        });
    },

    /**
     * Make all previously tabbable elements within the element tabbable again
     * @param {Element} elem
     * @private
     */
    _enableAllTabbableElements: function(elem)
    {
        var elems, tabIndex;

        elems = $(elem).find("[data-tabmod]").each(function(index)
                {
                    tabIndex = parseInt($(this).attr("data-tabmod"), 10);    
                    $(this).removeAttr("data-tabmod");
                    // restore tabIndex as needed
                    if (tabIndex == -1)
                    {
                        $(this).removeAttr("tabIndex");
                    }
                    else
                    {
                        $(this).attr("tabIndex", tabIndex);
                    }
                });

        // mark first and last tabbable element for fast retrieval later
        elems.first().attr("data-first", "true");
        elems.last().attr("data-last", "true");
    },

    /**
     * Cleanup any attributes added by tabbing logic
     * @param {Element} elem the element to cleanup
     * @private
     */
    _cleanupTabbableElementProperties: function(elem)
    {
        $(elem).find("[data-tabmod]")
               .removeAttr("tabIndex")
               .removeAttr("data-tabmod")
               .removeAttr("data-first")
               .removeAttr("data-last");
    },

    /**
     * Checks whether the element is focusable
     * @param {jQuery} item the item to check
     * @return {boolean} true if the item should not be focusable, false otherwise
     * @protected
     */
    SkipFocus: function(item)
    {
        return item.hasClass("oj-skipfocus");
    },

    /*************************************** Event handlers *****************************/
    /**
     * Handler for focus event
     * @param {Event} event the focus event
     * @protected
     */
    HandleFocus: function(event)
    {
        var item;

        this._getListContainer().addClass("oj-focus-ancestor");

        // first time tab into listview, focus on first item
        if (this.m_active == null)
        {
            // ignore in touch, also checks whether there's pending click to active
            if (!this._isTouchSupport() && !this.m_preActive)
            {
                this._initFocus(event);
            }
        }
        else
        {
            // focus could be caused by pending click to active
            if (!this.m_preActive)
            {
                this.HighlightActive();
            }
        }
    },

    /**
     * Initialize focus by finding the first focusable item and set focus on it
     * @private
     */
    _initFocus: function(event)
    {
        var items, i, item;

        items = this._getItemsCache();
        for (i=0; i<items.length; i++)
        {
            item = $(items[i]);
            // make sure item can receive focus
            if (!this.SkipFocus(item))
            {
                this._activeAndFocus(item, event);
                break;
            }
        }
    },

    /**
     * Handler for focus out event
     * @param {Event} event the focusout event
     * @protected
     */
    HandleFocusOut: function(event)
    {
        this.HandleBlur(event);
    },

    /**
     * Handler for blur event
     * @param {Event} event the blur event
     * @protected
     */
    HandleBlur: function(event)
    {
        // event.relatedTarget would be null if focus out of page
        // the other check is to make sure the blur is not caused by shifting focus within listview
        if (event.relatedTarget == null || !$.contains(this.element.get(0), /** @type {Element} */ (event.relatedTarget)))
        {
            this._getListContainer().removeClass("oj-focus-ancestor");
            this.UnhighlightActive();
        }
    },

    /**
     * Event handler for when user exits an item in list
     * @param {Event} event mouseout event 
     * @private
     */
    _handleMouseOut: function(event)
    {
        var item = this.FindItem(event.target);
        if (item != null)
        {
            this.m_hoverItem = null;
            this._unhighlightElem(item, "oj-hover");
        }
    },

    /**
     * Event handler for when user hovers over list
     * @param {Event} event mouseover event 
     * @private
     */
    _handleMouseOver: function(event)
    {
        // do this for real mouse enters, but not 300ms after a tap
        if (this._recentTouch())
        {
            return;
        }

        var item = this.FindItem(event.target);        
        if (item != null && !this.SkipFocus(item))
        {
            // have to remember it so we can clear it when listview is detached from DOM
            this.m_hoverItem = item;
            this._highlightElem(item, "oj-hover");         
        }
    },

    _recentTouch: function()
    {
        return Date.now() - this._lastTouch < 500; // must be at least 300 for the "300ms" delay
    },

    /**
     * Event handler for when user press down a key
     * @param {Event} event keydown event
     * @protected
     */
    HandleKeyDown: function(event)
    {
        var keyCode, current, processed;

        if (this.isExpandable())
        {
            keyCode = event.keyCode;
            if (keyCode === this.LEFT_KEY || keyCode === this.RIGHT_KEY)
            {
                current = this.m_active['elem'];
                if (keyCode === this.LEFT_KEY)
                {
                    if (this.GetState(current) == this.STATE_EXPANDED)
                    {
                        this.CollapseItem(current, event, true, this.m_active['key'], true, true);
                        return;
                    }
                }
                else
                {
                    if (this.GetState(current) == this.STATE_COLLAPSED)
                    {
                        this.ExpandItem(current, event, true, this.m_active['key'], true, true, true);
                        return;
                    }
                }
            }
        }

        processed = this.HandleSelectionOrActiveKeyDown(event);
        if (processed === true)
        {
            event.preventDefault();
        }
    },

    /**
     * @private
     */
    _handleMouseUpOrPanMove: function(event)
    {
        // unhighlight item that got focus in mousedown
        if (this.m_preActiveItem)
        {
            this._unhighlightElem(this.m_preActiveItem, "oj-focus");
        }
    },

    /**
     * Event handler for when mouse down or touch start anywhere in the list
     * @param {Event} event mousedown or touchstart event
     * @protected
     */
    HandleMouseDownOrTouchStart: function(event)
    {
        this.m_preActive = true;

        // click on item
        var item = this._findItem($(event.target));
        if (item == null || item.length == 0 || this.SkipFocus(item))
        {
            // one of the following happened:
            // 1) can't find item 
            // 2) item cannot be focus
            // 3) target is an oj-component
            // 4) target or one of its ancestors has the oj-clickthrough-disabled marker class
            return;
        }

        // make sure listview has focus
        if (!this._getListContainer().hasClass("oj-focus-ancestor"))
        {
            this._getListContainer().addClass("oj-focus-ancestor");
        }

        // we'll need to remove focus in case the actual focus item is different
        this.m_preActiveItem = item;

        // apply focus
        this._highlightElem(item, "oj-focus");
    },

    /**
     * Event handler for when touch end/cancel happened
     * @param {Event} event touchend or touchcancel event
     * @protected
     */
    HandleTouchEndOrCancel: function(event)
    {
        // unhighlight item that got focus in touchstart
        if (this.m_preActiveItem != null)
        {
            this._unhighlightElem(this.m_preActiveItem, "oj-focus");
        }

        // need this so that on mouse over handler would not apply the styles if the last touch was within the last n ms
        this._lastTouch = Date.now();
        this._handleMouseOut(event);
    },

    /**
     * Event handler for when mouse click anywhere in the list
     * @param {Event} event mouseclick event
     * @protected
     */
    HandleMouseClick: function(event)
    {
        var collapseIconClass, expandIconClass, groupItemClass, target, item, activeElem, ui;

        //only perform events on left mouse, (right in rtl culture)
        if (event.button === 0)
        {
            collapseIconClass = this.getCollapseIconStyleClass();
            expandIconClass = this.getExpandIconStyleClass();
            groupItemClass = this.getGroupItemStyleClass();
            target = $(event.target);
            if (target.hasClass(expandIconClass))
            {
                this._collapse(event);
                event.preventDefault();
            }
            else if (target.hasClass(collapseIconClass))
            {
                this._expand(event);
                event.preventDefault();
            }
            else
            {
                if (this._isActionableMode() && this.m_active != null)
                {
                    // click on item should exit actionable mode
                    this._setActionableMode(false);

                    // disable all tabbable elements in the item again
                    this._disableAllTabbableElements(this.m_active['elem']);
                }

                // click on item
                item = this._findItem(target);
                if (item == null || item.length == 0 || this.SkipFocus(item))
                {
                    // one of the following happened:
                    // 1) can't find item 
                    // 2) item cannot be focus
                    // 3) target is an oj-component
                    // 4) target or one of its ancestors has the oj-clickthrough-disabled marker class
                    return;
                }

                // make sure listview has focus
                if (!this._getListContainer().hasClass("oj-focus-ancestor"))
                {
                    this._getListContainer().addClass("oj-focus-ancestor");
                }

                // check if selection is enabled
                if (this._isSelectionEnabled() && this.IsSelectable(item[0]))
                {        
                    if (this._isTouchSupport())
                    {
                        this._handleTouchSelection(item, event);
                    }
                    else
                    {
                        this.HandleClickSelection(item, event);
                    }
                }
                else
                {
                    // if selection is disable, we'll still need to highlight the active item
                    this._handleClickActive(item, event);
                }

                // clicking on header will expand/collapse item
                if (this.isExpandable() && target.closest("."+groupItemClass))
                {
                    if (this.GetState(item) == this.STATE_COLLAPSED)
                    {
                        this._expand(event);
                    }
                    else if (this.GetState(item) == this.STATE_EXPANDED)
                    {
                        this._collapse(event);
                    }                    
                }
            }
        }
    },
    /*********************************** end Event handlers *****************************/

    /*************************************** helper methods *****************************/
    /**
     * Whether touch is supported
     * @return {boolean} true if touch is supported, false otherwise
     * @private
     */
    _isTouchSupport: function()
    {
        return oj.DomUtils.isTouchSupported();
    },

    /**
     * Returns either the ctrl key or the command key in Mac OS
     * @param {!Object} event
     * @private
     */
    _ctrlEquivalent: function(event)
    {
        return oj.DomUtils.isMetaKeyPressed(event);
    },

    /**
     * Helper method to create subid based on the root element's id
     * @param {string} subId the id to append to the root element id
     * @return {string} the subId to append to the root element id
     * @private
     */
    _createSubId: function(subId)
    {
        var id = this.element.attr("id");
        return [id, subId].join(":");
    },

    /**
     * Find the item element
     * @param {jQuery} elem
     * @return {jQuery|null}
     * @protected
     */
    FindItem: function(elem)
    {
        return $(elem).closest("."+this.getItemElementStyleClass());
    },

    /** 
     * Determine if click should be processed based on the element.
     * @param {jQuery} elem the element to check
     * @return {boolean} returns true if the element contains the special marker class or is a component, false otherwise.
     * @private
     */
    _isClickthroughDisabled: function(elem)
    {
        return (elem.hasClass("oj-clickthrough-disabled") || elem.hasClass("oj-component-initnode") || elem.hasClass("oj-component"));
    },

    /**
     * Find the item element from target, if target is an oj-component or contains the
     * oj-clickthrough-disabled class then returns null.
     * @param {jQuery} target the element to check
     * @return {jQuery|null} the item element or null if click through is disabled for this element or one of its ancestors.
     * @private
     */
    _findItem: function(target)
    {
        var current = target;
        while (current.length > 0)
        {
            if (this._isClickthroughDisabled(current))
            {
                return null;
            }

            if (current.hasClass(this.getItemElementStyleClass()))
            {
                return current;
            }

            current = current.parent();
        }

        return null;
    },

    /**
     * Compute the total top and bottom border width of the list container
     * @return {number} the sum of top and bottom border width of the list container
     * @private
     */
    _getListContainerBorderWidth: function()
    {
        if (this.m_borderWidth == null)
        {
            this.m_borderWidth = parseInt(this._getListContainer().css("border-top-width"), 10) + parseInt(this._getListContainer().css("border-bottom-width"), 10);
        }

        return this.m_borderWidth;
    },

    /**
     * Scroll as needed to make an element visible in the viewport
     * @param {Element} elem the element to make visible
     * @private
     */
    _scrollToVisible: function(elem)
    {
        var top, height, container, containerScrollTop, containerHeight, headerTop, headerHeight, offset = 0, scrollTop;

        top = elem.offsetTop;
        height = elem.offsetHeight;
        container = this._getListContainer()[0];
        containerScrollTop = container.scrollTop;
        containerHeight = container.offsetHeight;

        // if there's sticky header, make sure the elem is not behind it
        if (this.m_groupItemToPin != null)
        {
            headerTop = parseInt(this.m_groupItemToPin.style.top, 10);
            headerHeight = $(this.m_groupItemToPin).outerHeight();
            if ((top <= headerTop && headerTop < top + height))
            {
                offset = ((height + top) - headerTop) / 2;    
            }
            else if ((top >= headerTop && top < headerTop + headerHeight))
            {
                offset = ((headerTop + headerHeight) - top) / 2;  
            }                
        }

        // if it's within viewport do nothing
        if (top >= containerScrollTop && top+height <= containerScrollTop+containerHeight)
        {
            if (offset > 0)
            {
                container.scrollTop = containerScrollTop - offset;
            }
            return;
        }

        // how much need to scroll to see the entire element, and to make sure the element top is always visible
        scrollTop = Math.max(0, Math.min(top - offset, Math.abs((top + height) - containerHeight)));
        if (scrollTop > containerScrollTop)
        {
            scrollTop = scrollTop + this._getListContainerBorderWidth();
        }
        container.scrollTop = scrollTop;        
    },

    /**
     * Get the key associated with an item element
     * @param {Element} elem the item element to retrieve the key
     * @return {Object|null} the key associated with the item element
     * @protected
     */
    GetKey: function(elem)
    {
        return this.m_contentHandler.GetKey(elem);
    },

    /**
     * Get the element associated with a key
     * @param {Object} key the key to retrieve the item element
     * @return {Element|null} the item element associated with the key 
     * @protected
     */
    FindElementByKey: function(key)
    {
        var id;

        if (this.m_keyElemMap != null)
        {
            id = this.m_keyElemMap[key];
            if (id != null)
            {
                return document.getElementById(id);
            }
        }

        // ask the content handler
        return this.m_contentHandler.FindElementByKey(key);
    },
    /************************************ end helper methods *****************************/

    /*************************************** Navigation Common **************************/
    /**
     * Determine whether the key code is an arrow key
     * @param {number} keyCode
     * @return {boolean} true if it's an arrow key, false otherwise
     * @protected
     */
    IsArrowKey: function(keyCode)
    {
        return (keyCode == this.UP_KEY || keyCode == this.DOWN_KEY);
    },

    /**
     * Retrieve the visible (flattened) items cache, create one if it is null.
     * @return {jQuery} a list of items
     * @private 
     */
    _getItemsCache: function()
    {
        var disclosureStyleClass, selector, isGroup;

        if (this.m_items == null)
        {
            disclosureStyleClass = this.getGroupCollapseStyleClass();
            selector = "."+this.getItemElementStyleClass() + ":visible";
            this.m_items = this.element.find(selector).filter(function(index)
            {
                isGroup = $(this).parent().hasClass(disclosureStyleClass);
                if (isGroup)
                {
                    return !($(this).parent().parent().hasClass("oj-collapsed"));
                } 
                return true;
            });
        }
        return this.m_items;
    },

    /**
     * Handles arrow keys navigation on item
     * @param {number} keyCode description
     * @param {boolean} isExtend
     * @param {Event} event the DOM event causing the arrow keys
     * @protected
     */
    HandleArrowKeys: function(keyCode, isExtend, event)
    {
        var current, processed, items, currentIndex, next;

        // ensure that there's no outstanding fetch requests
        if (!this.m_contentHandler.IsReady())
        {
            //act as if processed to prevent page scrolling before fetch done
            return true;
        }

        if (!isExtend || this.m_isNavigate)
        {
            current = this.m_active['elem'];
        }
        else
        {
            current = this.m_selectionFrontier;
        }

        // invoke different function for handling focusing on active item depending on whether selection is enabled
        processed = false;

        items = this._getItemsCache();
        currentIndex = items.index(current);

        switch (keyCode)
        {
            case this.UP_KEY:
                currentIndex--;
                if (currentIndex >= 0)
                {
                    next = $(items[currentIndex]);
                    // make sure it's focusable, otherwise find the next focusable item
                    while (this.SkipFocus(next))
                    {
                        currentIndex--;
                        if (currentIndex < 0)
                        {
                            return false;
                        }
                        next = $(items[currentIndex]);
                    }

                    if (isExtend)
                    {
                        this._extendSelection(next, event);
                        this.m_isNavigate = false;
                    }
                    else
                    {
                        this._activeAndFocus(next, event);
                        this.m_isNavigate = true;
                    }
                }
                
                // according to James we should still consume the event even if list view did not perform any action
                processed = true;
                break;
            case this.DOWN_KEY:
                currentIndex++;
                if (currentIndex < items.length)
                {
                    next = $(items[currentIndex]);
                    // make sure it's focusable, otherwise find the next focusable item
                    while (this.SkipFocus(next))
                    {
                        currentIndex++;
                        if (currentIndex == items.length)
                        {
                            return false;
                        }
                        next = $(items[currentIndex]);
                    }

                    if (isExtend)
                    {
                        this._extendSelection(next, event);
                        this.m_isNavigate = false;
                    }
                    else
                    {
                        this._activeAndFocus(next, event);
                        this.m_isNavigate = true;
                    }
                }

                // according to James we should still consume the event even if list view did not perform any action
                processed = true;
                break;
        }

        return processed;
    },

    /**
     * Determine if the data grid is in actionable mode.
     * @return {boolean} true if the data grid is in actionable mode, false otherwise.
     * @private
     */
    _isActionableMode: function()
    {
        return (this.m_keyMode == "actionable");
    },

    /**
     * Sets whether the data grid is in actionable mode
     * @param {boolean} flag true to set grid to actionable mode, false otherwise
     * @private
     */
    _setActionableMode: function(flag)
    {
        this.m_keyMode = flag ? "actionable" : "navigation";

        if (!flag)
        {
            // focus should be shift back to active descendant container
            this.element[0].focus();
        }
    },
    /************************************ end Navigation Common **************************/

    /************************************ Active item ******************************/
    /**
     * Returns the focus mode
     * @return {number} FOCUS_MODE_ITEM or FOCUS_MODE_LIST
     * @protected
     */
    GetFocusMode: function()
    {
        // by default browser focus is on item not on listview root element
        return this.FOCUS_MODE_ITEM;
    },

    /**
     * Retrieve the focus element
     * @param {jQuery} item the list item
     * @return {jQuery} the focus element
     * @private
     */
    getFocusItem: function(item)
    {
        if (!item.hasClass(this.getFocusedElementStyleClass()))
        {
            return $(item.find('.'+this.getFocusedElementStyleClass()).first());
        }
        else
        {
            return item;
        }
    },

    /**
     * Sets the tab index on focus item
     * @param {jQuery} item the focus item
     * @private
     */
    _setTabIndex: function(item)
    {
        // note that page author should not set any tabindex on the item
        this.getFocusItem(item).attr("tabIndex", 0);

    },

    /**
     * Resets the tab index set on focus item
     * @param {jQuery} item the focus item
     * @private
     */
    _resetTabIndex: function(item)
    {
        var removeAttr, isGroupItem;

        removeAttr = true;
        if (item.attr("role") === "presentation")
        {
            removeAttr = false;
        }

        item = this.getFocusItem(item);
        if (removeAttr)
        {
            item.removeAttr("tabIndex");
        }
        else
        {
            item.attr("tabIndex", -1);
        }

    },

    /**
     * Focus an item
     * @param {jQuery|null} previousItem the item previously has focus
     * @param {jQuery} item the item to focus
     * @private
     */
    _focusItem: function(previousItem, item)
    {
        if (this.GetFocusMode() === this.FOCUS_MODE_ITEM)
        {
            if (previousItem != null)
            {
                this._resetTabIndex(previousItem);
            }
            this._setTabIndex(item);

            // make sure ul is not tabbable
            if (this.element.attr("tabIndex"))
            {
                this.element.removeAttr("tabIndex");
            }
        }
        else
        {
            // update activedescendant
            this.UpdateActiveDescendant(item);
        }
    },

    /**
     * Determine the only focusable element inside an item, if the item does not have any or have 
     * more than one focusable element, then just return the item.
     * @param {jQuery} item the list item
     * @return {jQuery} see above for what's get returned
     * @private
     */
    getSingleFocusableElement: function(item)
    {
        var selector, childElements;

        selector = "a, input, select, textarea, button";
        childElements = item.children(selector);

        if(childElements.length === 1 && // check for only one focusbale child
           childElements.first().find(selector).length === 0)
        {
            //check to ensure no nested focusable elements.
            return childElements.first();
        }
        return item;
    },

    /**
     * Sets the active item
     * @param {jQuery} item the item to set as active
     * @param {Event} event the event that triggers set active
     * @private
     */
    _setActive: function(item, event)
    {
        var elem, key, ui, cancelled, active;

        // set key info
        if (item != null)
        {
            elem = item[0];
            key = this.GetKey(elem);

            if ((this.m_active == null) || key != this.m_active['key'])
            {
                // fire beforecurrentItem
                ui = {'key': key, 'item': item};
                if (this.m_active != null)
                {
                    ui['previousKey'] = this.m_active['key'];
                    ui['previousItem'] = this.m_active['elem'];
                }

                cancelled = !this.Trigger("beforeCurrentItem", event, ui);
                if (cancelled) 
                {
                    return;
                }

                active = {'key': key, 'elem': item};
                this.m_active = active;

                // update activedescendant
                this._focusItem(ui['previousItem'], item);
                // update current option
                this.SetOption("currentItem", key, {'_context': {originalEvent: event, internalSet: true, extraData: {'item': item}}, 'changed': true});
            }
            else if (key == this.m_active['key'])
            {
                active = {'key': key, 'elem': item};
                this.m_active = active;

                // update activedescendant
                this._focusItem(null, item);
            }
        }
        else
        {
            // item is null, just clears the current values
            this.m_active = null;
        }
    },

    /**
     * Highlight active element
     * @param {boolean=} force whether to force active element to focus
     * @protected
     */
    HighlightActive: function(force)
    {
        var item, target;

        // don't highlight and focus item if ancestor does not have focus
        if (this.m_active != null && this._getListContainer().hasClass("oj-focus-ancestor"))
        {   
            force = force || false;

            item = this.m_active['elem'];
            this._highlightElem(item, "oj-focus");

            if (this.GetFocusMode() === this.FOCUS_MODE_ITEM)
            {
                item = this.getFocusItem(item);
                target = document.activeElement;
                // Focus active element to focus only if specified, or target is not child of active element
                if (force || !item.get(0).contains(target))
                {
                    item.get(0).focus();
                } // else targetting child of active element so let it focus
            }
        }
    },

    /**
     * Unhighlight the active index, and turn the active index to selected instead if selectActive is true.
     * @protected
     */
    UnhighlightActive: function()
    {
        if (this.m_active != null)
        {
            this._unhighlightElem(this.m_active['elem'], "oj-focus");
        }
    },

    _handleClickActive: function(item, event)
    {
        this._activeAndFocus(item, event);
    },

    _activeAndFocus: function(item, event)
    {
        // make sure that it is visible
        this._scrollToVisible(item[0]);

        // unhighlight any previous active item
        this.UnhighlightActive();

        // update active and frontier
        this._setActive(item, event);

        // highlight active
        this.HighlightActive();
    },
    /************************************ end Active item ******************************/

    /************************************* Selection ***********************************************/
    /**
     * Check if selection enabled by options on the list
     * @return {boolean} true if selection enabled
     * @private
     */
    _isSelectionEnabled: function()
    {
        return (this.GetOption("selectionMode") != "none");
    },

    /**
     * Check whether multiple selection is allowed by options on the list
     * @return {boolean} true if multiple selection enabled
     * @private
     */
    _isMultipleSelection: function()
    {
        return (this.GetOption("selectionMode") == "multiple");
    },

    /**
     * Check whether the item is selectable
     * @param {Element} item the item element
     * @return {boolean} true if item is selectable
     * @protected
     */
    IsSelectable: function(item)
    {
        item = this.getFocusItem($(item)).get(0);
        return item.hasAttribute("aria-selected");
    },

    /**
     * Filter the array of selection.  Remove any items that are not selectable, or if there are more than one items
     * when selectionMode is single.
     * @param {Array} selection array of selected items
     * @return {Array} filtered array of items
     * @private
     */
    _filterSelection: function(selection)
    {
        var filtered, i, elem;

        filtered = [];
        for (i=0; i<selection.length; i++)
        {
            elem = this.FindElementByKey(selection[i]);
            if (elem != null)
            {
                if (this.IsSelectable(elem))
                {
                    filtered.push(selection[i]);

                    // if single selection mode, we can stop
                    if (!this._isMultipleSelection())
                    {
                        break;
                    }
                }
            }
        }

        return filtered;
    },

    /**
     * Unhighlights the selection.  Does not change selection, focus, anchor, or frontier
     * @private
     */
    _unhighlightSelection: function()
    {
        var self, elem;

        if (this.m_keyElemMap == null)
        {  
            return;
        }

        self = this;
        $.each(this.GetOption("selection"), function(index, value)
        {
            elem = self.FindElementByKey(value);
            if (elem != null)
            {
                self._unhighlightElem(elem, "oj-selected");
            }
        });
    },

    _highlightElem: function(elem, style)
    {
        this.HighlightUnhighlightElem(elem, style, true);
    },

    _unhighlightElem: function(elem, style)
    {
        this.HighlightUnhighlightElem(elem, style, false);
    },

    /**
     * Highlight or unhighlight an element
     * @param {jQuery|Element} elem the element the highlight or unhighlight
     * @param {string} style the style to add or remove
     * @param {boolean} highlight true if it's to highlight, false if it's to unhighlight
     * @protected
     */
    HighlightUnhighlightElem: function(elem, style, highlight)
    {
        var group;

        elem = $(elem);

        if (style == "oj-selected")
        {
            this.getFocusItem(elem).attr("aria-selected", highlight ? "true" : "false");
        }

        // if item is a group, the highlight should be apply to the group item element
        group = elem.children("."+this.getGroupItemStyleClass());
        if (group.length > 0)
        {
            elem = $(group[0]);
        }

        if (highlight)
        {
            elem.addClass(style);
        }
        else
        {
            elem.removeClass(style);
        }    
    },

    /**
     * Handles click to select multiple cells/rows
     * @param {jQuery} item the item clicked on
     * @param {Event} event the click event
     * @protected
     */
    HandleClickSelection: function(item, event)
    {
        var ctrlKey, shiftKey;

        // make sure that it is visible
        this._scrollToVisible(item[0]);

        ctrlKey = this._ctrlEquivalent(event);
        shiftKey = event.shiftKey;
        if (this._isMultipleSelection())
        {
            if (!ctrlKey && !shiftKey)
            {
                this.SelectAndFocus(item, event);
            }
            else if (!ctrlKey && shiftKey)
            {
                // active item doesn't change in this case
                this._extendSelection(item, event);
            }
            else
            {
                this._augmentSelectionAndFocus(item, event);
            }
        }
        else
        {
            this.SelectAndFocus(item, event);
        }
    },

    /**
     * Handles tap to select multiple cells/rows
     * @param {jQuery} item the item clicked on
     * @param {Event} event the click event
     * @private
     */
    _handleTouchSelection: function(item, event)
    {
        if (this._isMultipleSelection())
        {
            // treat this as like ctrl+click
            this._augmentSelectionAndFocus(item, event);
        }
        else
        {
            this.SelectAndFocus(item, event);
        }
    },

    /**
     * Clear the current selection.
     * @param {boolean} updateOption true if the underlying selection option should be updated, false otherwise.
     * @private
     */
    _clearSelection: function(updateOption)
    {
        // unhighlight previous selection
        this._unhighlightSelection();

        if (updateOption)
        {
            this.SetOption("selection", [], {'_context': {originalEvent: null, internalSet: true, extraData: {'items': $()}}, 'changed': true});
        }

        // clear selection frontier also
        this.m_selectionFrontier = null;
    },

    /**
     * Selects the focus on the specified element
     * Select and focus is an asynchronus call
     * @param {jQuery} item the item clicked on
     * @param {Event} event the click event
     * @protected
     */
    SelectAndFocus: function(item, event)
    {
        // clear selection
        this._clearSelection(false);

        // add the elem to selection
        this._augmentSelectionAndFocus(item, event, []);
    },

    /**
     * Shift+click to extend the selection
     * @param {jQuery} item the item to extend selection to
     * @param {Event} event the key event
     * @private
     */
    _extendSelection: function(item, event)
    {
        var current;

        if (this.m_active == null)
        {
            return;
        }
    
        // checks if selection has changed
        current = this.m_selectionFrontier;
        if (current == item)
        {
            return;
        }

        // remove focus style on the item click on
        this._unhighlightElem(item, "oj-focus");

        this._extendSelectionRange(this.m_active['elem'], item, event);
    },

    /**
     * Extend the selection
     * @param {jQuery} from the item to extend selection from
     * @param {jQuery} to the item to extend selection to
     * @param {Event} event the event that triggers extend
     * @private
     */
    _extendSelectionRange: function(from, to, event)
    {
        // clear selection as we'll be just re-highlight the entire range
        this._clearSelection(false);

        // update frontier
        this.m_selectionFrontier = to;        

        // highlights the items between active item and new item
        this._highlightRange(from, to, event);
        this.HighlightActive();
    },

    /**
     * Highlight the specified range
     * @param {jQuery} start the start of the range
     * @param {jQuery} end the end of the range
     * @param {Event} event the event that triggers the highlight
     * @private
     */
    _highlightRange: function(start, end, event)
    {
        var selection, selectedItems, items, startIndex, endIndex, from, to, i, item, key;

        selection = [];
        selectedItems = [];
        items = this._getItemsCache();
        startIndex = items.index(start); 
        endIndex = items.index(end);

        if (startIndex > endIndex)
        {
            from = endIndex;
            to = startIndex;
        }
        else
        {
            from = startIndex;
            to = endIndex;
        }

        // exclude start and include end
        for (i=from; i<=to; i++)
        {
            item = items[i];
            if (this.IsSelectable(item))
            {
                key = this.m_contentHandler.GetKey(item);

                this._applySelection(item, key);
                selection.push(key);
                selectedItems.push(item);
            }
        }

        // trigger the optionChange event
        this.SetOption("selection", selection, {'_context': {originalEvent: event, internalSet: true, extraData: {'items': $(selectedItems)}}, 'changed': true});
    },

    /**
     * Apply selection to the element
     * @param {jQuery|Element} element the item to apply selection
     * @param {Object} key the key of the item
     * @private
     */
    _applySelection: function(element, key)
    {
        // update map that keeps track of key->element
        if (this.m_keyElemMap == null)
        {
            this.m_keyElemMap = {};
        }
        this.m_keyElemMap[key] = $(element).attr("id");

        // highlight selection
        this._highlightElem(element, 'oj-selected');
    },

    /**
     * Ctrl+click to add item to the current selection
     * @param {jQuery} item the item to augment selection to
     * @param {Event} event the event that triggers the selection
     * @param {Array=} selection the optional selection to augment, if not specified, use current selection
     * @private
     */
    _augmentSelectionAndFocus: function(item, event, selection)
    {
        var active, key, index, selectedItems, i;

        active = item;
        key = this.GetKey(item[0]);

        if (selection == undefined)
        {
            selection = this.GetOption("selection").slice(0);
        }
        this.UnhighlightActive();

        index = selection.indexOf(key);
        if (index > -1)
        {
            // it was selected, deselect it
            this._unhighlightElem(item, "oj-selected");
            selection.splice(index, 1);
        }
        else
        {
            this.m_selectionFrontier = item;
            this._applySelection(item, key);
            selection.push(key);
        }

        selectedItems = new Array(selection.length);
        for (i = 0; i < selection.length; i++)
        {
            selectedItems[i] = this.FindElementByKey(selection[i]);
        }

        // update active cell and frontier
        this._setActive(active, event);

        // highlight index
        this.HighlightActive();

        // trigger option change
        this.SetOption("selection", selection, {'_context': {originalEvent: event, internalSet: true, extraData: {'items': $(selectedItems)}}, 'changed': true});
    },

    /**
     * Toggle selection of an item.  If an item was selected, it deselects it.  If an item was not selected, it selects it.
     * @param {Event} event the event that triggers the selection
     * @param {boolean} keepCurrentSelection true if selecting an item would not deselect other selected items, false otherwise
     * @param {boolean} skipIfNotSelected true if an selected item should not be deselected, false otherwise
     * @protected
     */
    ToggleSelection: function(event, keepCurrentSelection, skipIfNotSelected)
    {
        // if it's currently selected, deselect it
        var selection, selectedItems, item, key, index, i;

        selection = this.GetOption("selection").slice(0);
        item = this.m_active['elem'];
        key = this.m_active['key'];        

        index = selection.indexOf(key);
        if (index > -1)
        {
            if (skipIfNotSelected)
            {
                return;
            }

            // it was selected, deselect it
            this._unhighlightElem(item, "oj-selected");
            selection.splice(index, 1);

            if (selection.length == 0)
            {
                this.m_selectionFrontier = null;
            }
        }
        else
        {
            if (this.IsSelectable(item[0]))
            {
                // deselect any selected items
                if (!keepCurrentSelection)
                {
                    this._clearSelection(false);
                    selection.length = 0;
                }

                this.m_selectionFrontier = item;

                // select current item
                this._applySelection(item, key);
                selection.push(key);
            }
        }

        selectedItems = new Array(selection.length);
        for (i = 0; i < selection.length; i++)
        {
            selectedItems[i] = this.FindElementByKey(selection[i]);
        }

        // trigger option change
        this.SetOption("selection", selection, {'_context': {originalEvent: event, internalSet: true, extraData: {'items': $(selectedItems)}}, 'changed': true});
    },

    /**
     * Handles key event for selection or active
     * @param {Event} event
     * @return {boolean} true if the event is processed
     * @protected
     */
    HandleSelectionOrActiveKeyDown: function(event)
    {
        var keyCode, current, ctrlKey, shiftKey, processed = false, first, last, ui;

        // this could happen if nothing in the list is focusable
        if (this.m_active == null)
        {
            return false;
        }

        keyCode = event.keyCode;
        current = this.m_active['elem'];

        if (this._isActionableMode())
        {
            // Esc key goes to navigation mode
            if (keyCode == this.ESC_KEY)
            {
                this._setActionableMode(false);

                // disable all tabbable elements in the item again
                this._disableAllTabbableElements(current);

                // force focus back on the active cell
                this.HighlightActive(true);
                processed = true;
            }
            else if (keyCode === this.TAB_KEY)
            {
                // check if it's the last element in the item
                first = current.find("[data-first]");  
                last = current.find("[data-last]");
                if (event.shiftKey)
                {
                    if (first.length > 0 && last.length > 0 && first != last && event.target == first[0])
                    {
                        // recycle to last focusable element in the cell
                        last[0].focus();
                        processed = true;
                    }
                }
                else
                {
                    if (first.length > 0 && last.length > 0 && first != last && event.target == last[0])
                    {
                        // recycle to first focusable element in the cell
                        first[0].focus();
                        processed = true;
                    }
                } 
                // otherwise don't process and let browser handles tab
            }
        }
        else
        {        
            // F2 key goes to actionable mode
            if (keyCode == this.F2_KEY)
            {
                // re-enable all tabbable elements
                this._enableAllTabbableElements(current);                    

                // focus on first focusable item in the cell
                first = current.find("[data-first]");
                if (first.length > 0)
                {
                    first[0].focus();
                    this._setActionableMode(true);
                }
            }
            else if (keyCode == this.SPACE_KEY && this._isSelectionEnabled())
            {
                ctrlKey = this._ctrlEquivalent(event);
                shiftKey = event.shiftKey;
                if (shiftKey && !ctrlKey && this.m_selectionFrontier != null && this._isMultipleSelection())
                {
                    // selects contiguous items from last selected item to current item
                    this._extendSelectionRange(this.m_selectionFrontier, this.m_active['elem'], event);
                }
                else
                {
                    // toggle selection, deselect previous selected items
                    this.ToggleSelection(event, ctrlKey && !shiftKey && this._isMultipleSelection(), false);
                }
                processed = true;
            }
            else if (keyCode == this.ENTER_KEY && this._isSelectionEnabled())
            {
                // selects it if it's not selected, do nothing if it's already selected
                this.ToggleSelection(event, false, true);
            }
            else if (this.IsArrowKey(keyCode))
            {
                ctrlKey = this._ctrlEquivalent(event);
                shiftKey = event.shiftKey;
                if (!ctrlKey)
                {
                    processed = this.HandleArrowKeys(keyCode, (shiftKey && this._isSelectionEnabled() && this._isMultipleSelection()), event);
                }
            }
        }

        return processed;
    },
    /********************************** End Selection **********************************************/

    /********************************** Disclosure **********************************************/
    /**
     * Whether group items can be expand/collapse.
     * @return {boolean} true if group items can be expand/collapse, false otherwise.
     */
    isExpandable: function()
    {
        return this.GetOption("drillMode") != "none";
    },
    /**
     * Whether ListView should expand all expandable items.
     * @return {boolean} true if expand all, false otherwise
     * @private
     */
    _isExpandAll: function()
    {
        var expanded = this.GetOption("expanded");
        if (expanded === 'auto')
        {
            // if drillMode is none and no expanded state is specified, expand all
            if (!this.isExpandable())
            {
                return true;
            }
        }
        else if (expanded === 'all')
        {
            return true;
        }

        return false;
    },

    /**
     * Expand an item with specified key.
     * Invoked by widget
     * @param {Object} key the key of the group item to expand
     * @param {boolean} beforeVetoable true if beforeExpand event can be veto, false otherwise
     * @param {boolean} fireBefore true if this should trigger a beforeExpand event
     * @param {boolean} fireAfter true if this should trigger an expand event
     */
    expandKey: function(key, beforeVetoable, fireBefore, fireAfter)
    {
        var item = this.FindElementByKey(key);
        if (item != null)
        {
            this.ExpandItem($(item), null, false, key, beforeVetoable, fireAfter, fireBefore);    
        }
    },

    /**
     * Handle expand operation
     * @param {Event} event the event that triggers the expand
     * @private
     */
    _expand: function(event)
    {
        var item = this.FindItem(event.target);
        if (item != null && item.length > 0)
        {
            this.ExpandItem(item, event, true, null, true, true, true);
        }
    },

    /**
     * Expand an item
     * @param {jQuery} item the item to expand
     * @param {Event} event the event that triggers expand.  Note that event could be null in the case where this is programmatically done by the widget
     * @param {boolean} animate true if animate the expand operation, false otherwise
     * @param {Object|null} key the key of the item, if not specified, the logic will figure it out from the item
     * @param {boolean} beforeVetoable true if beforeExpand event can be veto, false otherwise
     * @param {boolean} fireEvent true if fire expand event, false otherwise
     * @param {boolean} fireBeforeEvent true if fire beforeexpand event, false otherwise
     * @protected
     */
    ExpandItem: function(item, event, animate, key, beforeVetoable, fireEvent, fireBeforeEvent)
    {
        var ui, cancelled;

        // checks if it's already collapsed or not collapsible at all
        if (this.GetState(item) != this.STATE_COLLAPSED)
        {
            return;
        }

        // if key wasn't specified, find it
        if (key == null)
        {
            key = this.GetKey(item[0]);
        }
        ui = {"item": item, "key": key};

        if (fireBeforeEvent)
        {
            cancelled = !this.Trigger("beforeExpand", event, ui);
            if (cancelled && beforeVetoable) 
            {
                return;
            }
        }

        this.signalTaskStart(); // signal method task start
        this.m_contentHandler.Expand(item, function(groupItem){this._expandSuccess(groupItem, animate, event, ui, fireEvent)}.bind(this));

        // clear items cache
        this.m_items = null;

        // prevent item click handler to trigger
        if (event != null)
        {
            event.stopPropagation();
        }

        this.signalTaskEnd(); // signal method task end
    },

    /**
     * @param {Element} groupItem
     * @param {boolean} animate
     * @param {Event} event
     * @param {Object} ui
     * @param {boolean} fireEvent
     * @private
     */
    _expandSuccess: function(groupItem, animate, event, ui, fireEvent)
    {
        var item, collapseClass, expandClass, groupItemStyleClass, key, expanded, clone;

        this.signalTaskStart(); // signal method task start

        this.AnimateExpand($(groupItem), animate);

        item = groupItem.parentNode;

        item = $(item);
        // update aria expanded
        this.SetState(item, this.STATE_EXPANDED);
        // update icon
        collapseClass = this.getCollapseIconStyleClass();
        expandClass = this.getExpandIconStyleClass();
        groupItemStyleClass = this.getGroupItemStyleClass();
        item.children("."+groupItemStyleClass).find("."+collapseClass).removeClass(collapseClass).addClass(expandClass);

        // fire expand event
        if (fireEvent)
        {
            this.Trigger("expand", event, ui);
        }

        this.signalTaskEnd(); // signal method task end
    },

    /**
     * Adjust the max height of ancestors of a group items.
     * @param {jQuery} groupItem the group item where we want to adjust its ancestors max height
     * @param {number} delta the height to increase
     * @private
     */
    _adjustAncestorsMaxHeight: function(groupItem, delta)
    {
        var maxHeight;

        groupItem.parentsUntil("ul.oj-component-initnode", "ul."+this.getGroupStyleClass()).each(function(index)
        {
            maxHeight = parseInt($(this).css("maxHeight"), 10);
            if (maxHeight > 0)
            {
                $(this).css("maxHeight", (maxHeight + delta) +"px");
            }
        });
    },

    /**
     * Animate expand operation
     * @param {jQuery} groupItem the group item that is expand (todo: not consistent with animateCollapse)
     * @param {boolean} animate true if animate expand, false otherwise
     * @protected
     */
    AnimateExpand: function(groupItem, animate)
    {
        var totalHeight = 0;

        if (animate)
        {
            this.signalTaskStart(); // signal task start

            groupItem.children().each(function()
            {
                totalHeight = totalHeight + $(this).outerHeight(true);
            });

            // for touch we'll need to re-adjust the max height of parent nodes since max height doesn't get remove
            if (this._isTouchSupport())
            {
                this._adjustAncestorsMaxHeight(groupItem, totalHeight);
            }

            if (this.m_expandTransitionEndListener == null)
            {
                this.m_expandTransitionEndListener = this._handleExpandTransitionEnd.bind(this);
            }

            groupItem.css("maxHeight", "0px");
            groupItem.on("transitionend", this.m_expandTransitionEndListener);

            this.signalTaskStart(); // signal expand animation started. Ends in _handleExpandTransitionEnd()
            requestAnimationFrame(function() {
                groupItem.css("maxHeight", totalHeight+"px");
            });

            this.signalTaskEnd(); // signal task end
        }
        else
        {
            // for touch it will need max height set initially in order for it to animate correctly
            if (this._isTouchSupport())
            {
                groupItem.children().each(function()
                {
                    totalHeight = totalHeight + $(this).outerHeight(true);
                });
                groupItem.css("maxHeight", totalHeight+"px");

                this._adjustAncestorsMaxHeight(groupItem, totalHeight);
            }
            else
            {
                groupItem.css("maxHeight", "");
            }

            this.AnimateExpandComplete(groupItem);
        }
    },

    _handleExpandTransitionEnd: function(event)
    {
        var groupItem, item;

        groupItem = $(event.target);
        // remove transition listener before reseting max height
        groupItem.off("transitionend", this.m_expandTransitionEndListener);
        // on ios removing max-height will cause double animation
        if (!this._isTouchSupport())
        {
            groupItem.css("maxHeight", "");
        }

        this.AnimateExpandComplete(groupItem);

        this.signalTaskEnd(); // signal expand animation ended. Started in this.AnimateExpand()
    },

    /**
     * Invoked when expand animation is completed.  Class who overrides AnimateExpand
     * must call this method upon finish animation.
     * @param {jQuery} groupItem the item to collapse
     * @protected
     */
    AnimateExpandComplete: function(groupItem)
    {
        groupItem.removeClass(this.getGroupCollapseStyleClass()).addClass(this.getGroupExpandStyleClass());
    },

    /**
     * Collapse an item with specified key.
     * Invoked by widget
     * @param {Object} key the key of the group item to collapse
     * @param {boolean} fireBefore true if this should trigger a beforeCollapse event
     * @param {boolean} fireAfter true if this should trigger a collapse event
     */
    collapseKey: function(key, fireBefore, fireAfter)
    {
        var item = this.FindElementByKey(key);
        if (item != null)
        {
            this.CollapseItem($(item), null, false, key, fireBefore, fireAfter);    
        }
    },

    _collapse: function(event)
    {
        var item = this.FindItem(event.target);
        if (item != null && item.length > 0)
        {
            this.CollapseItem(item, event, true, null, true, true);
        }        
    },

    /**
     * Collapse an item
     * @param {jQuery} item the item to expand
     * @param {Event} event the event that triggers collapse.  Note that event could be null in the case where this is programmatically done by the widget
     * @param {boolean} animate true if animate the collapse operation, false otherwise
     * @param {Object|null} key the key of the item, if not specified, the logic will figure it out from the item
     * @param {boolean} beforeVetoable true if beforeCollapse event can be veto, false otherwise
     * @param {boolean} fireEvent true if fire collapse event, false otherwise
     * @protected
     */
    CollapseItem: function(item, event, animate, key, beforeVetoable, fireEvent)
    {
        var ui, cancelled, collapseClass, expandClass, expanded;

        // checks if it's already collapsed or not collapsible at all
        if (this.GetState(item) != this.STATE_EXPANDED)
        {
            return;
        }

        // fire beforeCollapse event
        if (key == null)
        {
            key = this.GetKey(item[0]);
        }
        ui = {"item": item, "key": key};

        cancelled = !this.Trigger("beforeCollapse", event, ui);
        if (cancelled && beforeVetoable) 
        {
            return;
        }

        this.signalTaskStart(); // signal method task start

        // animate collapse
        this.AnimateCollapse(item, animate);

        // update aria expanded
        this.SetState(item, this.STATE_COLLAPSED);
        // update icon
        collapseClass = this.getCollapseIconStyleClass();
        expandClass = this.getExpandIconStyleClass();
        item.find("."+expandClass).first().removeClass(expandClass).addClass(collapseClass);

        // clear items cache
        this.m_items = null;

        // prevent item click handler to trigger
        if (event != null)
        {
            event.stopPropagation();
        }

        if (fireEvent)
        {
            this.Trigger("collapse", event, ui);
        }

        this.signalTaskEnd(); // signal method task end
    },

    /**
     * Animate collapse operation
     * To be change by NavList
     * @param {jQuery} item the item to collapse
     * @param {boolean} animate true if animate the collapse operation, false otherwise
     * @protected
     */
    AnimateCollapse: function(item, animate)
    {
        var totalHeight = 0, groupItem, self = this;

        groupItem = item.children("ul").first();

        if (animate)
        {
            this.signalTaskStart(); // signal task start

            if (this.m_collapseTransitionEndListener == null)
            {
                this.m_collapseTransitionEndListener = this._handleCollapseTransitionEnd.bind(this);
            }

            groupItem.children().each(function()
            {
                totalHeight = totalHeight + $(this).outerHeight();
            });

            // temporarily disable transition
            groupItem.css("transition-property", "none");
            groupItem.css("maxHeight", totalHeight+"px");
            // re-enable transition
            groupItem.css("transition-property", "");

            groupItem.on("transitionend", this.m_collapseTransitionEndListener);
            // need the timeout here to avoid browser skipping the transition
            setTimeout(function() {
                self.signalTaskStart(); // signal collapse animation started. Ends in _handleCollapseTransitionEnd()
                groupItem.css("maxHeight", "0px");

                self.signalTaskEnd(); // signal task end
            }, 100);
        }
        else
        {
            groupItem.css("maxHeight", "0px");

            this.AnimateCollapseComplete(groupItem);
        }
    },

    _handleCollapseTransitionEnd: function(event)
    {
        var groupItem, item;

        groupItem = $(event.target);
        // remove transition listener before reseting max height
        groupItem.off("transitionend", this.m_collapseTransitionEndListener);

        this.AnimateCollapseComplete(groupItem);

        this.signalTaskEnd(); // signal collapse animation ended. Started in AnimateCollapse()
    },

    /**
     * Invoked when collapse animation is completed.  Class who overrides AnimateCollapse
     * must call this method upon finish animation.
     * @param {jQuery} groupItem the item to collapse
     * @private
     */
    AnimateCollapseComplete: function(groupItem)
    {
        groupItem.removeClass(this.getGroupExpandStyleClass()).addClass(this.getGroupCollapseStyleClass());

        // ask the content handler to do the collapse operation
        // content handler might have been destroyed if animation ended after destroy is called
        if (this.m_contentHandler != null)
        {
            this.m_contentHandler.Collapse(groupItem);
        }
    },

    /**
     * Collapse all currently expanded items
     * @private
     */
    _collapseAll: function()
    {
        var self, items;

        this.signalTaskStart(); // signal method task start

        self = this;
        items = this._getItemsCache();
        items.each(function() 
        {
            // collapseItem checks whether item is expanded
            self.CollapseItem($(this), null, false, null, false, false);                
        });

        this.signalTaskEnd(); // signal method task end
    },

    /**
     * Gets the keys of currently expanded items.
     * Invoke by widget
     * @return {Array} array of keys of currently expanded items.
     */
    getExpanded: function()
    {
        var expanded, self, items, item;

        expanded = [];

        self = this;
        items = this._getItemsCache();
        items.each(function() 
        {
            item = $(this);
            if (self.GetState(item) == self.STATE_EXPANDED)
            {
                expanded.push(self.GetKey(item[0]));
            }
        });

        return expanded;
    },
    /********************************* End Disclosure *******************************************/
    
    /**
     * Returns widget constructor.  Used by ContentHandler
     */
    getWidgetConstructor: function () 
    {
        return oj.Components.getWidgetConstructor(this.element);
    },
    
    /*********************************** Style Classes *********************************************/
    /**
     * To be change by NavList
     * @return {string} the container style class
     * @protected
     */
    GetContainerStyleClass: function()
    {
        if (this._isTouchSupport())
        {
            return "oj-listview oj-listview-container-touch";
        }
        else
        {
            return "oj-listview oj-listview-container";
        }
    },

    /**
     * To be change by NavList
     * @return {string} the main element style class
     * @protected
     */
    GetStyleClass: function()
    {
        return "oj-listview-element";
    },

    /**
     * To be change by NavList.  Access by ContentHandler.
     * @return {string} the list item style class
     */
    getItemStyleClass: function()
    {
        return "oj-listview-item";
    },

    /**
     * To be change by NavList.  Access by ContentHandler.
     * @return {string} the focused element style class
     */
    getFocusedElementStyleClass: function()
    {
        return "oj-listview-focused-element";
    },

    /**
     * To be change by NavList.  Access by ContentHandler.
     * @return {string} the list item element style class
     */
    getItemElementStyleClass: function()
    {
        return "oj-listview-item-element";
    },

    /**
     * To be change by NavList.  Access by ContentHandler.
     * @return {string} the group item element style class
     */
    getGroupItemStyleClass: function()
    {
        return "oj-listview-group-item";
    },

    /**
     * To be change by NavList.  Access by ContentHandler.
     * @return {string} the group element style class
     */
    getGroupStyleClass: function()
    {
        return "oj-listview-group";
    },

    /**
     * To be change by NavList.  Access by ContentHandler.
     * @return {string} the group expand style class
     */
    getGroupExpandStyleClass: function()
    {
        return "oj-listview-collapsible-transition";
    },

    /**
     * To be change by NavList.  Access by ContentHandler.
     * @return {string} the group collapse style class
     */
    getGroupCollapseStyleClass: function()
    {
        return this.getGroupExpandStyleClass();
    },

    /**
     * To be change by NavList
     * @return {string} the collapse icon style class
     */
    getCollapseIconStyleClass: function()
    {
        return "oj-listview-collapse-icon";
    },

    /**
     * To be change by NavList
     * @return {string} the expand icon style class
     */
    getExpandIconStyleClass: function()
    {
        return "oj-listview-expand-icon";
    },

    /**
     * To be change by NavList
     * @return {string} the depth style class
     */
    getDepthStyleClass: function(depth)
    {
        return "";
    },
    /********************************* End Style Classes *******************************************/

    /*********************************** Pin Header *********************************************/
    /**
     * Register scroll listener
     * @private
     */
    _registerScrollHandler: function()
    {
        var self = this;

        this.ojContext._off(this._getListContainer(), "scroll");

        if (this._isPinGroupHeader())
        {
            this.ojContext._on(this._getListContainer(), {
                "scroll": function(event)
                {
                    self._handlePinGroupHeader();
                }
            });
        }
    },

    /**
     * Whether group header should be pin
     * @return {boolean} true if group header should be pin or false otherwise
     * @private
     */
    _isPinGroupHeader: function()
    {
        return (this.GetOption("groupHeaderPosition") != "static");
    },

    /**
     * Retrieve the visible (flattened) group items cache, create one if it is null.
     * @return {jQuery} a list of group items
     * @private
     */
    _getGroupItemsCache: function()
    {
        var selector;

        if (this.m_groupItems == null)
        {
            selector = "."+this.getGroupItemStyleClass() + ":visible";
            this.m_groupItems = this.element.find(selector).filter(function(index)
            {
                // if it's expanded and it has children
                if (!$(this).parent().hasClass("oj-collapsed"))
                {
                    if ($(this).next().children().length > 0)
                    {
                        return true;
                    }
                }

                return false;
            });
        }
        return this.m_groupItems;
    },

    /**
     * Unpin a pinned group header
     * @param {Element} groupItem the group header element to unpin
     * @private
     */
    _unpinGroupItem: function(groupItem)
    {
        groupItem.style.position = "static";
        groupItem.style.top = "auto";
        groupItem.style.width = "auto";
    },

    /**
     * Gets the next group item.  This could be a group item from a different parent.
     * @param {Element} groupItem the reference group item.
     * @return {Element|null} the next group item or null if one cannot be found
     * @private
     */
    _getNextGroupItem: function(groupItem)
    {
        var groupItems, index;

        groupItems = this._getGroupItemsCache();
        index = groupItems.index(groupItem);
        if (index > -1 && index < groupItems.length-1)
        {
            return groupItems[index+1];
        }

        return null;
    },

    /**
     * Pin a group header
     * @param {Element} groupItem the group header element to pin
     * @param {number} scrollTop the scrolltop position of the listview container
     * @private
     */
    _pinGroupItem: function(groupItem, scrollTop)
    {
        var width, height, next;

        width = groupItem.offsetWidth;
        height = groupItem.offsetHeight;

        next = this._getNextGroupItem(groupItem);
        // todo: get rid of 5
        if (next != null && next.offsetTop <= scrollTop + height + 5)
        {
            scrollTop = scrollTop - height;
        }

        groupItem.style.position = "absolute";
        groupItem.style.top = scrollTop + 'px';
        groupItem.style.width = width + 'px';
    },

    /**
     * Pin the header as neccessary when user scrolls.
     * @private
     */
    _handlePinGroupHeader: function()
    {
        var container, scrollTop, groupItemToPin, groupItems, pinHeaderHeight, i, groupItem, top, bottom, next;

        container = this._getListContainer().get(0);
        scrollTop = container.scrollTop;

        // see if we are at the top
        if (this.m_groupItemToPin != null && scrollTop == 0)
        {
            this._unpinGroupItem(this.m_groupItemToPin);
            this.m_groupItemToPin = null;
            return;
        }

        // find the group item to pin
        groupItems = this._getGroupItemsCache();
        pinHeaderHeight = 0;
        if (this.m_groupItemToPin != null)
        {
            pinHeaderHeight = this.m_groupItemToPin.offsetHeight;
        }

        for (i=0; i<groupItems.length; i++)
        {
            groupItem = groupItems[i];
            if (this.m_groupItemToPin == groupItem)
            {
                continue;
            }

            top = groupItems[i].offsetTop;
            bottom = top + groupItem.parentNode.offsetHeight;

            // if bottom half is in view but not the top half
            if (top < scrollTop && bottom > scrollTop + pinHeaderHeight)
            {
                groupItemToPin = groupItem;
                break;
            }
        }

        // found the group item to pin
        if (groupItemToPin != null && groupItemToPin != this.m_groupItemToPin)
        {
            // unpin the previous item
            if (this.m_groupItemToPin != null)
            {
                this._unpinGroupItem(this.m_groupItemToPin);
            }

            this._pinGroupItem(groupItemToPin, scrollTop);
            this.m_groupItemToPin = groupItemToPin;
        }
        else if (this.m_groupItemToPin != null)
        {
            // is the current pin header touching the next item
            next = this._getNextGroupItem(this.m_groupItemToPin);
            if (next != null && next.offsetTop <= scrollTop + pinHeaderHeight)
            {
                // make sure they really touches
                this.m_groupItemToPin.style.top = (next.offsetTop - pinHeaderHeight) + 'px';
                return;
            }

            this.m_groupItemToPin.style.top = scrollTop + 'px';
        }
    },

    /**
     * Scroll to the specified group header
     * @param {Element} groupHeader the group header div element
     * @private
     */
    _scrollToGroupHeader: function(groupHeader)
    {
        var container, currentScrollTop;

        container = this._getListContainer().get(0);
        currentScrollTop = container.scrollTop;

        // unpin any pinned group header first before scroll to header
        if (this.m_groupItemToPin != null)
        {
            this._unpinGroupItem(this.m_groupItemToPin);
            this.m_groupItemToPin = null;
        }

        container.scrollTop = groupHeader.offsetTop;

        // if it wasn't scroll (ex: already at the end), we'll have to explicitly try to see if we need to pin again
        if (this._isPinGroupHeader() && currentScrollTop == container.scrollTop)
        {
            this._handlePinGroupHeader();
        }

        // set the first item in group current
        this._setFirstFocusableItemInGroupCurrent(groupHeader);
    },

    /**
     * Find the first focusable item within the group and make it current
     * @param {Element} groupHeader the group header 
     * @private
     */
    _setFirstFocusableItemInGroupCurrent: function(groupHeader)
    {
        var self = this, items, item;

        items = $(groupHeader).next().children();
        items.each(function() 
        {
            item = $(this);

            // make sure item can receive focus
            if (!self.SkipFocus(item))
            {
                self.SetOption('currentItem', this.key);
                return false;
            }
        });
    }
    /********************************* End Pin Header *******************************************/
});

/**
 * Copyright (c) 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
/**
 * @ojcomponent oj.ojListView
 * @augments oj.baseComponent
 * @since 1.1.0
 *
 * @classdesc
 * <h3 id="listViewOverview-section">
 *   JET ListView Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#listViewOverview-section"></a>
 * </h3>
 *
 * <p>Description: The JET ListView enhances a HTML list element into a themable, WAI-ARIA compliant, mobile friendly component with advance interactive features.</p>
 *
 * <h3 id="data-section">
 *   Data
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#data-section"></a>
 * </h3>
 * <p>The JET ListView gets its data in three different ways.  The first way is from a TableDataSource.  There are several types of TableDataSource that
 * are available out of the box:</p>
 * <ul>
 * <li>oj.ArrayTableDataSource</li>
 * <li>oj.CollectionTableDataSource</li>
 * <li>oj.PagingTableDataSource</li>
 * </ul>
 *
 * <p><b>oj.ArrayTableDataSource</b> - Use this when the underlying data is an array object or an observableArray.  In the observableArray case, ListView will automatically react
 * when items are added or removed from the array.  See the documentation for oj.ArrayTableDataSource for more details on the available options.</p>
 *
 * <p><b>oj.CollectionTableDataSource</b> - Use this when oj.Collection is the model for the underlying data.  Note that the ListView will automatically react to model event from
 * the underlying oj.Collection.  See the documentation for oj.CollectionTableDataSource for more details on the available options.</p>
 *
 * <p><b>oj.PagingTableDataSource</b> - Use this when the ListView is driven by an associating ojPagingControl.  See the documentation for oj.PagingTableDataSource for more
 * details on the available options.</p>
 *
 * <p>The second way is from a TreeDataSource.  This is typically used to display data that are logically categorized in groups.  There are several types
 * of TreeDataSource that are available out of the box:</p>
 * <ul>
 * <li>oj.JsonTreeDataSource</li>
 * <li>oj.CollectionTreeDataSource</li>
 * </ul>
 *
 * <p><b>oj.JsonTreeDataSource</b> - Use this when the underlying data is a JSON object.  See the documentation for oj.JsonTreeDataSource for more details on the available options.</p>
 *
 * <p><b>oj.CollectionTreeDataSource</b> - Use this when oj.Collection is the model for each group of data.  See the documentation for oj.CollectionTableDataSource
 * for more details on the available options.</p>
 *
 * <p>Finally, ListView also supports static HTML content as data.  The structure of the content can be either flat or hierarhical.</p>
 *
 * <p>Example of flat static content</p>
 * <pre class="prettyprint">
 * <code>&lt;ul id="listView" data-bind="ojComponent: {component: 'ojListView'}">
 *   &lt;li>&lt;a id="item1" href="#">Item 1&lt;/a>&lt;/li>
 *   &lt;li>&lt;a id="item2" href="#">Item 2&lt;/a>&lt;/li>
 *   &lt;li>&lt;a id="item3" href="#">Item 3&lt;/a>&lt;/li>
 * &lt;/ul>
 * </code></pre>
 *
 * <p>Example of hierarchical static content</p>
 * <pre class="prettyprint">
 * <code>&lt;ul id="listView" data-bind="ojComponent: {component: 'ojListView'}">
 *   &lt;li>&lt;a id="group1" href="#">Group 1&lt;/a>
 *     &lt;ul>
 *       &lt;li>&lt;a id="item1-1" href="#">Item 1-1&lt;/a>&lt;/li>
 *       &lt;li>&lt;a id="item1-2" href="#">Item 1-2&lt;/a>&lt;/li>
 *     &lt;/ul>
 *   &lt;/li>
 *   &lt;li>&lt;a id="group2" href="#">Group 2&lt;/a>
 *     &lt;ul>
 *       &lt;li>&lt;a id="item2-1" href="#">Item 2-1&lt;/a>&lt;/li>
 *       &lt;li>&lt;a id="item2-2" href="#">Item 2-2&lt;/a>&lt;/li>
 *     &lt;/ul>
 *   &lt;/li>
 * &lt;/ul>
 * </code></pre>
 *
 * <h3 id="touch-section">
 *   Touch End User Information
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#touch-section"></a>
 * </h3>
 *
 * {@ojinclude "name":"touchDoc"}
 *
 * <h3 id="keyboard-section">
 *   Keyboard End User Information
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
 * </h3>
 *
 * {@ojinclude "name":"keyboardDoc"}
 *
 * <h3 id="context-section">
 *   Item Context
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#context-section"></a>
 * </h3>
 *
 * <p>For all item options, developers can specify a function as the return value.  The function takes a single argument, which is an object that contains contextual information about the particular item.  This gives developers the flexibility to return different value depending on the context.</p>
 *
 * <p>The context paramter contains the following keys:</p>
 * <table class="keyboard-table">
 *   <thead>
 *     <tr>
 *       <th>Key</th>
 *       <th>Description</th>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <td><kbd>component</kbd></td>
 *       <td>A reference to the ListView widget constructor.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>datasource</kbd></td>
 *       <td>A reference to the data source object. (Not available for static content)</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>index</kbd></td>
 *       <td>The index of the item, where 0 is the index of the first item.  In the hierarchical case the index is relative to its parent.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>key</kbd></td>
 *       <td>The key of the item.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>data</kbd></td>
 *       <td>The data object for the item.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>parentElement</kbd></td>
 *       <td>The list item element.  The renderer can use this to directly append content.</td>
 *     </tr>
 *   </tbody>
 * </table>
 *
 * <p></p>
 * <p>If the data is hierarchical, the following additional contextual information are available:</p>
 * <table class="keyboard-table">
 *   <thead>
 *     <tr>
 *       <th>Key</th>
 *       <th>Description</th>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <td><kbd>depth</kbd></td>
 *       <td>The depth of the item.  The depth of the first level children under the invisible root is 1.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>parentKey</kbd></td>
 *       <td>The key of the parent item.  The parent key is null for root node.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>leaf</kbd></td>
 *       <td>Whether the item is a leaf or a group item.</td>
 *     </tr>
 *   </tbody>
 * </table>
 *
 * <h3 id="perf-section">
 *   Performance
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#perf-section"></a>
 * </h3>
 *
 * <h4>Data Set Size</h4>
 * <p>As a rule of thumb, it's recommended that applications limit the amount of data to display.  Displaying large
 * number of items in ListView makes it hard for user to find what they are looking for, but affects the load time and
 * scrolling performance as well.  If displaying large number of items is neccessary, use a paging control with ListView
 * to limit the number of items to display at a time.  Setting <code class="prettyprint">scrollPolicy</code> to
 * 'loadMoreOnScroll' will also reduce the number of items to display initially.</p>
 *
 * <h4>Item Content</h4>
 * <p>ListView allows developers to specify arbitrary content inside its item. In order to minimize any negative effect on
 * performance, you should avoid putting a large number of heavy-weight components inside because as you add more complexity
 * to the structure, the effect will be multiplied because there can be many items in the ListView.</p>
 *
 * <h4>Expand All</h4>
 * <p>While ListView provides a convenient way to initially expand all group items in the ListView, it might have an impact
 * on the initial rendering performance since expanding each group item might cause a fetch from the server depending on
 * the TreeDataSource.  Other factors that could impact performance includes the depth of the tree, and the number of children
 * in each level.</p>
 */
oj.__registerWidget('oj.ojListView', $['oj']['baseComponent'],
{
    widgetEventPrefix: 'oj',
    options:
            {
               /**
                * The current item.  This is typically the item the user navigated to.  Note that if current
                * is set to an item that is currently not available (not fetched in highwater mark scrolling case or
                * inside a collapsed parent node), then the value is ignored.
                *
                * @expose
                * @public
                * @instance
                * @memberof! oj.ojListView
                * @type {Object}
                * @default <code class="prettyprint">null</code>
                *
                * @example <caption>Get the current item:</caption>
                * $( ".selector" ).ojListView("option", "currentItem");
                *
                * @example <caption>Set the current item on the ListView during initialization:</caption>
                * $(".selector").ojListView({"currentItem", "item2"});
                */
                currentItem: null,
                /**
                 * The data source for the ListView accepts either a oj.TableDataSource or oj.TreeDataSource.
                 * See the data source section in the introduction for out of the box data source types.
                 * If the data attribute is not specified, the child elements are used as content.  If there's no
                 * content specified, then an empty list is rendered.
                 *
                 * @expose
                 * @memberof! oj.ojListView
                 * @instance
                 * @type {oj.TableDataSource|oj.TreeDataSource}
                 * @default <code class="prettyprint">null</code>
                 *
                 * @example <caption>Initialize the ListView with a one-dimensional array:</caption>
                 * $( ".selector" ).ojListView({ "data": new oj.ArrayTableDataSource([1,2,3])});
                 *
                 * @example <caption>Initialize the ListView with an oj.Collection:</caption>
                 * $( ".selector" ).ojListView({ "data": new oj.CollectionTableDataSource(collection)});
                 */
                data: null,
                /**
                 * Changes the expand and collapse operations on ListView.  If "none" is specified, then
                 * the current expanded state is fixed and user cannot expand or collapse an item.
                 *
                 * @expose
                 * @memberof! oj.ojListView
                 * @instance
                 * @type {string}
                 * @default <code class="prettyprint">collapsible</code>
                 * @ojvalue {string} "collapsible" group item can be expanded or collapsed by user.
                 * @ojvalue {string} "none" the expand state of a group item cannot be changed by user.
                 *
                 * @example <caption>Initialize the list view with a fixed expanded state:</caption>
                 * $( ".selector" ).ojListView({ "drillMode": "none" });
                 */
                drillMode: "collapsible",
                /**
                 * Specifies which items in ListView should be expanded. Specifies "all" value to expand all items.  Specifies
                 * an array of keys to expand specific items.
                 *
                 * The default value is "auto", which means that ListView will determine which items are expanded by default.
                 * Specifically, if drillMode is set to "none", then all items are expanded, any other values for
                 * drillMode will not cause any items to expand by default.
                 *
                 * Note that expanded does not return the currently expanded items.  This only returns what is specified
                 * by default.  To retrieve the keys of currently expanded items, use the <code class="prettyprint">getExpanded</code>
                 * method.
                 *
                 * @expose
                 * @memberof! oj.ojListView
                 * @instance
                 * @type {Array.<Object>|string}
                 * @default <code class="prettyprint">[]</code>
                 *
                 * @example <caption>Initialize the list view with a fixed expanded state:</caption>
                 * $( ".selector" ).ojListView({ "expanded": ["group1", "group2"] });
                 */
                expanded: "auto",
                /**
                 * Specifies how the group header should be positioned.  If "sticky" is specified, then the group header 
                 * is fixed at the top of the ListView as the user scrolls.
                 *
                 * @expose 
                 * @memberof! oj.ojListView
                 * @instance
                 * @default <code class="prettyprint">sticky</code>
                 * @ojvalue {string} "static" The group header position updates as user scrolls.
                 * @ojvalue {string} "sticky" this is the default.  The group header is fixed at the top when user scrolls.
                 */
                groupHeaderPosition: "sticky",
                /**
                 * The item option contains a subset of options for items.
                 *
                 * @expose
                 * @memberof! oj.ojListView
                 * @instance
                 */
                item: {
                    /**
                     * Whether the item is focusable.  An item that is not focusable cannot be clicked on or navigated to.
                     * See <a href="#context-section">itemContext</a> in the introduction to see the object passed into the focusable function.
                     *
                     * @expose
                     * @alias item.focusable
                     * @memberof! oj.ojListView
                     * @instance
                     * @type {function(Object)|boolean}
                     * @default <code class="prettyprint">true</code>
                     *
                     * @example <caption>Initialize the ListView such that only leaf items are focusable:</caption>
                     * $( ".selector" ).ojListView({ "data":data, "item": { "focusable": function(itemContext) {
                     *                                            return itemContext['leaf'];}}});
                     */
                    focusable: true,
                    /**
                     * The renderer function that renders the content of the item. See <a href="#context-section">itemContext</a>
                     * in the introduction to see the object passed into the renderer function.
                     * The function returns either a String or a DOM element of the content inside the item.
                     * If the developer chooses to manipulate the list element directly, the function should return
                     * nothing. If no renderer is specified, ListView will treat the data as a String.
                     *
                     * @expose
                     * @alias item.renderer
                     * @memberof! oj.ojListView
                     * @instance
                     * @type {function(Object)|null}
                     * @default <code class="prettyprint">null</code>
                     *
                     * @example <caption>Initialize the ListView with a renderer:</caption>
                     * $( ".selector" ).ojListView({ "data":data, "item": { "renderer": function(itemContext) {
                     *                                            return itemContext['data'].get('FIRST_NAME');}}});
                     *
                     * @example <caption>Get or set the <code class="prettyprint">renderer</code> option, after initialization:</caption>
                     * // set the renderer function
                     * $( ".selector" ).ojListView( "option", "item.renderer", myFunction});
                     */
                    renderer: null,
                    /**
                     * Whether the item is selectable.  Note that if selectionMode is set to "none" this option is ignored.  In addition,
                     * if selectable is set to true, then the focusable option is automatically overridden and set to true.
                     * See <a href="#context-section">itemContext</a> in the introduction to see the object passed into the selectable function.
                     *
                     * @expose
                     * @alias item.selectable
                     * @memberof! oj.ojListView
                     * @instance
                     * @type {function(Object)|boolean}
                     * @default <code class="prettyprint">true</code>
                     *
                     * @example <caption>Initialize the ListView such that the first 3 items are not selectable:</caption>
                     * $( ".selector" ).ojListView({ "data":data, "item": { "selectable": function(itemContext) {
                     *                                            return itemContext['index'] > 3;}}});
                     */
                    selectable: true
                    /**
                     * The knockout template used to render the content of the item.
                     *
                     * This attribute is only exposed via the <code class="prettyprint">ojComponent</code> binding, and is not a
                     * component option.
                     *
                     * @ojbindingonly
                     * @name item.template
                     * @memberof! oj.ojListView
                     * @instance
                     * @type {string|null}
                     * @default <code class="prettyprint">null</code>
                     *
                     * @example <caption>Specify the <code class="prettyprint">template</code> when initializing ListView:</caption>
                     * // set the template
                     * &lt;ul id="listview" data-bind="ojComponent: {component: 'ojListView', data: dataSource, item: {template: 'my_template'}}"&gt;&lt;/ul&gt;
                     */
                },
                /**
                 * Specifies the mechanism used to scroll the data inside the list view. Possible values are: auto and loadMoreOnScroll.
                 * When loadMoreOnScroll is specified, additional data is fetched when the user scrolls to the bottom of the ListView.
                 * Note that currently this option is only available when TableDataSource is used.
                 *
                 * @expose
                 * @memberof! oj.ojListView
                 * @instance
                 * @type {string|null}
                 * @default <code class="prettyprint">auto</code>
                 * @ojvalue {string} "auto" the behavior is determined by the component.
                 * @ojvalue {string} "loadMoreOnScroll" additional data is fetched when the user scrolls to the bottom of the ListView.
                 *
                 * @example <caption>Initialize the list view with a fixed expanded state:</caption>
                 * $( ".selector" ).ojListView({ "scrollPolicy": "loadMoreOnScroll" });
                 */
                scrollPolicy: "auto",
                /**
                 * scrollPolicy options.
                 * <p>
                 * The following options are supported:
                 * <ul>
                 *   <li>fetchSize: Fetch size for scroll.</li>
                 *   <li>maxCount: Maximum rows which will be displayed before fetching more rows will be stopped.</li>
                 * </ul>
                 * When scrollPolicy is loadMoreOnScroll, the next block of rows is fetched
                 * when the user scrolls to the end of the list. The fetchSize option
                 * determines how many rows are fetched in each block.
                 * Note that currently this option is only available when TableDataSource is used.
                 *
                 * @expose
                 * @instance
                 * @memberof! oj.ojListView
                 * @type {Object.<string, number>|null}
                 * @property {number} fetchSize the number of rows to fetch in each block of rows
                 * @default <code class="prettyprint">25</code>
                 * @property {number} maxCount the maximum total number of rows to fetch
                 * @default <code class="prettyprint">500</code>
                 */
                scrollPolicyOptions: {'fetchSize': 25, 'maxCount': 500},
                /**
                 * The current selections in the ListView. An empty array indicates nothing is selected.
                 *
                 * @expose
                 * @memberof! oj.ojListView
                 * @instance
                 * @type {Array.<Object>}
                 * @default <code class="prettyprint">[]</code>
                 *
                 * @example <caption>Initialize the list view with specific selection:</caption>
                 * $( ".selector" ).ojListView({ "data":data, "selection": ["item1", "item2"] });
                 */
                selection: [],
                /**
                 * Specifies whether selection can be made and the cardinality of selection in the ListView.
                 * Selection is initially disabled, but setting the value to null will disable selection.
                 *
                 * @expose
                 * @memberof! oj.ojListView
                 * @instance
                 * @type {string}
                 * @default <code class="prettyprint">none</code>
                 * @ojvalue {string} "none" selection is disabled.
                 * @ojvalue {string} "single" only one item can be selected at a time.
                 * @ojvalue {string} "multiple": multiple items can be selected at the same time.
                 *
                 * @example <caption>Initialize the list view to enable multiple selection:</caption>
                 * $( ".selector" ).ojListView({ "data":data, "selectionMode": "multiple" });
                 */
                selectionMode: "none",
                /**
                 * Triggered before the current item is changed via the <code class="prettyprint">current</code> option or via the UI.
                 *
                 * @expose
                 * @event
                 * @memberof! oj.ojListView
                 * @instance
                 * @property {Event} event <code class="prettyprint">jQuery</code> event object
                 * @property {Object} ui Parameters
                 * @property {Object} ui.previousKey the key of the previous item
                 * @property {jQuery} ui.previousItem the previous item
                 * @property {Object} ui.key the key of the new current item
                 * @property {jQuery} ui.item the new current item
                 *
                 * @example <caption>Initialize the ListView with the <code class="prettyprint">beforeCurrentItem</code> callback specified:</caption>
                 * $( ".selector" ).ojListView({
                 *     "beforeCurrentItem": function( event, ui ) {
                 *         // return false to veto the event, which prevents the item to become focus
                 *     }
                 * });
                 *
                 * @example <caption>Bind an event listener to the <code class="prettyprint">ojbeforecurrentitem</code> event:</caption>
                 * $( ".selector" ).on( "ojbeforecurrentitem", function( event, ui ) {} );
                 */
                beforeCurrentItem: null,
                /**
                 * Triggered before an item is expanded via the <code class="prettyprint">expanded</code> option,
                 * the <code class="prettyprint">expand</code> method, or via the UI.
                 *
                 * @expose
                 * @event
                 * @memberof! oj.ojListView
                 * @instance
                 * @property {Event} event <code class="prettyprint">jQuery</code> event object
                 * @property {Object} ui Parameters
                 * @property {Object} ui.key the key of the item to be expanded
                 * @property {jQuery} ui.item the item to be expanded
                 *
                 * @example <caption>Initialize the ListView with the <code class="prettyprint">beforeExpand</code> callback specified:</caption>
                 * $( ".selector" ).ojListView({
                 *     "beforeExpand": function( event, ui ) {
                 *         // return false to veto the event, which prevents the item to expand
                 *     }
                 * });
                 *
                 * @example <caption>Bind an event listener to the <code class="prettyprint">ojbeforeexpand</code> event:</caption>
                 * $( ".selector" ).on( "ojbeforeexpand", function( event, ui ) {} );
                 */
                beforeExpand: null,
                /**
                 * Triggered before an item is collapsed via the <code class="prettyprint">expanded</code> option,
                 * the <code class="prettyprint">collapse</code> method, or via the UI.
                 *
                 * @expose
                 * @event
                 * @memberof! oj.ojListView
                 * @instance
                 * @property {Event} event <code class="prettyprint">jQuery</code> event object
                 * @property {Object} ui Parameters
                 * @property {Object} ui.key the key of the item to be collapsed
                 * @property {jQuery} ui.item the item to be collapsed
                 *
                 * @example <caption>Initialize the ListView with the <code class="prettyprint">beforeCollapse</code> callback specified:</caption>
                 * $( ".selector" ).ojListView({
                 *     "beforeCollapse": function( event, ui ) {
                 *         // return false to veto the event, which prevents the item to collapse
                 *     }
                 * });
                 *
                 * @example <caption>Bind an event listener to the <code class="prettyprint">ojbeforecollapse</code> event:</caption>
                 * $( ".selector" ).on( "ojbeforecollapse", function( event, ui ) {} );
                 */
                beforeCollapse: null,
                /**
                 * Triggered after an item has been collapsed via the <code class="prettyprint">expanded</code> option,
                 * the <code class="prettyprint">collapse</code> method, or via the UI.
                 *
                 * @expose
                 * @event
                 * @memberof! oj.ojListView
                 * @instance
                 * @property {Event} event <code class="prettyprint">jQuery</code> event object
                 * @property {Object} ui Parameters
                 * @property {Object} ui.key The key of the item that was just collapsed.
                 * @property {jQuery} ui.item The list item that was just collapsed.
                 *
                 * @example <caption>Initialize the ListView with the <code class="prettyprint">expand</code> callback specified:</caption>
                 * $( ".selector" ).ojListView({
                 *     "collapse": function( event, ui ) {}
                 * });
                 *
                 * @example <caption>Bind an event listener to the <code class="prettyprint">ojcollapse</code> event:</caption>
                 * $( ".selector" ).on( "ojcollapse", function( event, ui ) {} );
                 */
                collapse: null,
                /**
                 * Triggered after an item has been expanded via the <code class="prettyprint">expanded</code> option,
                 * the <code class="prettyprint">expand</code> method, or via the UI.
                 *
                 * @expose
                 * @event
                 * @memberof! oj.ojListView
                 * @instance
                 * @property {Event} event <code class="prettyprint">jQuery</code> event object
                 * @property {Object} ui Parameters
                 * @property {Object} ui.key The key of the item that was just expanded.
                 * @property {jQuery} ui.item The list item that was just expanded.
                 *
                 * @example <caption>Initialize the ListView with the <code class="prettyprint">expand</code> callback specified:</caption>
                 * $( ".selector" ).ojListView({
                 *     "expand": function( event, ui ) {}
                 * });
                 *
                 * @example <caption>Bind an event listener to the <code class="prettyprint">ojexpand</code> event:</caption>
                 * $( ".selector" ).on( "ojexpand", function( event, ui ) {} );
                 */
                expand: null,
                /**
                 * Fired whenever a supported component option changes, whether due to user interaction or programmatic
                 * intervention.  If the new value is the same as the previous value, no event will be fired.
                 *
                 * @expose
                 * @event
                 * @memberof! oj.ojListView
                 * @instance
                 * @property {Event} event <code class="prettyprint">jQuery</code> event object
                 * @property {Object} ui Parameters
                 * @property {string} ui.option the name of the option that is changing
                 * @property {boolean} ui.previousValue the previous value of the option
                 * @property {boolean} ui.value the current value of the option
                 * @property {jQuery} ui.item the current item (only available for option <code class="prettyprint">"currentItem"</code>)
                 * @property {jQuery} ui.items the selected items (only available for option <code class="prettyprint">"selection"</code>)
                 * @property {Object} ui.optionMetadata information about the option that is changing
                 * @property {string} ui.optionMetadata.writeback <code class="prettyprint">"shouldWrite"</code> or
                 *           <code class="prettyprint">"shouldNotWrite"</code>.  For use by the JET writeback mechanism.
                 *
                 * @example <caption>Initialize component with the <code class="prettyprint">optionChange</code> callback</caption>
                 * $(".selector").ojListView({
                 *   'optionChange': function (event, data) {
                 *        if (data['option'] === 'selection') { // handle selection change }
                 *    }
                 * });
                 * @example <caption>Bind an event listener to the ojoptionchange event</caption>
                 * $(".selector").on({
                 *   'ojoptionchange': function (event, data) {
                 *       window.console.log("option that changed is: " + data['option']);
                 *   };
                 * });
                 */
                optionChange: null,
                /**
                 * Triggered after all items in the ListView has been rendered.  Note that in the highwatermark scrolling case,
                 * all items means the items that are fetched so far.
                 *
                 * @expose
                 * @event
                 * @deprecated Use the <a href="#whenReady">whenReady</a> method instead. 
                 * @memberof! oj.ojListView
                 * @instance
                 * @property {Event} event <code class="prettyprint">jQuery</code> event object
                 * @property {Object} ui Parameters
                 *
                 * @example <caption>Initialize the ListView with the <code class="prettyprint">ready</code> callback specified:</caption>
                 * $( ".selector" ).ojListView({
                 *     "ready": function( event, ui ) {}
                 * });
                 *
                 * @example <caption>Bind an event listener to the <code class="prettyprint">ojready</code> event:</caption>
                 * $( ".selector" ).on( "ojready", function( event, ui ) {} );
                 */
                ready: null
            },

    /**
     * Create the listview
     * @override
     * @memberof! oj.ojListView
     * @protected
     */
    _ComponentCreate: function()
    {
        this._super();
        this._setup();
    },

    /**
     * Initialize the listview
     * @private
     */
    _setup: function()
    {
        var opts = {};
        opts.element = this.element;
        opts.ojContext = this;
        opts = $.extend(this.options, opts);

        this.listview = new oj._ojListView();
        this.listview.init(opts);
    },

    /**
     * Initialize the listview after creation
     * @protected
     * @override
     * @memberof! oj.ojListView
     */
    _AfterCreate: function ()
    {
        this._super();
        this.listview.afterCreate();
    },

    /**
     * Destroy the list view
     * @memberof! oj.ojListView
     * @private
     */
    _destroy: function()
    {
        this.listview.destroy();
        this._super();
    },

    /**
     * When the <a href="#contextMenu">contextMenu</a> option is set, this method is called when the user invokes the context menu via
     * the default gestures: right-click, pressHold, and <kbd>Shift-F10</kbd>.  Components should not call this method directly.
     *
     * @param {!Object} menu The JET Menu to open as a context menu.  Always non-<code class="prettyprint">null</code>.
     * @param {!Event} event What triggered the menu launch.  Always non-<code class="prettyprint">null</code>.
     * @param {string} eventType "mouse", "touch", or "keyboard".  Never <code class="prettyprint">null</code>.
     * @private
     */
    _NotifyContextMenuGesture: function(menu, event, eventType)
    {
        this.listview.notifyContextMenuGesture(menu, event, eventType);
    },

    /**
     * Sets multiple options
     * @param {Object} options the options object
     * @param {Object} flags additional flags for option
     * @override
     * @private
     */
    _setOptions: function(options, flags)
    {
        var needRefresh = this.listview.setOptions(options, flags);

        // updates the options last
        this._super(options, flags);

        if (needRefresh)
        {
            this.listview.refresh();
            this._fireIndexerModelChangeEvent();
        }
    },

   /**
    * Sets a single option
    * @param {Object} key the key for the option
    * @param {Object} value the value for the option
    * @override
    * @private
    */
    _setOption: function(key, value)
    {
        // checks whether value is valid for the key
        var valid = true;
        if (key == "selectionMode")
        {
            valid = (value == "none" || value == "single" || value == "multiple");
        }
        else if (key == "drillMode")
        {
            valid = (value == "collapsible" || value == "none");
        }
        else if (key == "scrollPolicy")
        {
            valid = (value == "auto" || value == "loadMoreOnScroll");
        }
        else if (key == "groupHeaderPosition")
        {
            valid = (value == "static" || value == "sticky");
        }

        // update option if it's valid otherwise throw an error
        if (valid)
        {
            this._super(key, value);
        }
        else
        {
            throw "Invalid value: "+value+" for key: "+key;
        }
    },

   /**
    * In browsers [Chrome v35, Firefox v24.5, IE9, Safari v6.1.4], blur and mouseleave events are generated for hidden content but not detached content,
    * so for detached content only, we must use this hook to remove the focus and hover classes.
    * @override
    * @private
    */
    _NotifyDetached: function()
    {
        this.listview.notifyDetached();
    },

   /**
    * Invoked when application calls oj.Components.subtreeShown.
    * @override
    * @private
    */
    _NotifyShown: function()
    {
        this.listview.notifyShown();
    },

    /********************************* public methods **************************************/
    /**
     * Returns a jQuery object containing the root dom element of the listview.
     *
     * <p>This method does not accept any arguments.
     *
     * @expose
     * @override
     * @memberof oj.ojListView
     * @instance
     * @return {jQuery} the root DOM element of list
     */
    'widget' : function ()
    {
        return this.listview.getRootElement();
    },

    /**
     * Redraw the entire list view after having made some external modifications.
     *
     * <p>This method does not accept any arguments.
     *
     * @expose
     * @memberof! oj.ojListView
     * @instance
     *
     * @example <caption>Invoke the <code class="prettyprint">refresh</code> method:</caption>
     * $( ".selector" ).ojListView( "refresh" );
     */
    refresh: function()
    {
        this._super();
        this.listview.refresh();
        this._fireIndexerModelChangeEvent();
    },

    /**
     * Returns a Promise that resolves when the component is ready, i.e. after data fetching, rendering, and animations complete. 
     * Note that in the highwatermark scrolling case, component is ready after data fetching, rendering, and associated animations of items fetched so far are complete.
     *
     * <p>This method does not accept any arguments.
     * 
     * @expose
     * @memberof oj.ojListView
     * @instance
     * @return {Promise} A Promise that resolves when the component is ready.
     */
    whenReady: function()
    {
        return this.listview.whenReady();
    },

    /**
     * Return the subcomponent node represented by the documented locator attribute values.
     * <p>
     * To lookup the disclosure icon the locator object should have the following:
     * <ul>
     * <li><b>subId</b>: 'oj-listview-disclosure'</li>
     * <li><b>key</b>: the key of the item</li>
     * </ul>
     *
     * @expose
     * @memberof! oj.ojListView
     * @instance
     * @override
     * @param {Object} locator An Object containing at minimum a subId property
     *        whose value is a string, documented by the component, that allows
     *         the component to look up the subcomponent associated with that
     *        string.  It contains:<p>
     *        component: optional - in the future there may be more than one
     *        component contained within a page element<p>
     *        subId: the string, documented by the component, that the component
     *        expects in getNodeBySubId to locate a particular subcomponent
     * @returns {Array.<(Element|null)>|Element|null} the subcomponent located by the subId string passed
     *          in locator, if found.<p>
     */
    getNodeBySubId: function(locator)
    {
        return this.listview.getNodeBySubId(locator);
    },

    /**
     * <p>Returns the subId string for the given child DOM node.  For more details, see
     * <a href="#getNodeBySubId">getNodeBySubId</a>.
     *
     * @expose
     * @memberof! oj.ojListView
     * @instance
     * @override
     * @param {!Element} node - child DOM node
     * @return {Object|null} The subId for the DOM node, or <code class="prettyprint">null</code> when none is found.
     */
    getSubIdByNode: function(node)
    {
        return this.listview.getSubIdByNode(node);
    },

    /**
     * {@ojinclude "name":"nodeContextDoc"}
     * @param {!Element} node - {@ojinclude "name":"nodeContextParam"}
     * @returns {Object|null} {@ojinclude "name":"nodeContextReturn"}
     *
     * @example {@ojinclude "name":"nodeContextExample"}
     *
     * @expose
     * @instance
     * @memberof oj.ojListView
     */
    getContextByNode: function(node)
    {
        return this.listview.getContextByNode(node);
    },

    /**
     * Expand an item.<p>
     * Note when vetoable is set to false, beforeExpand event will still be fired but the event cannot be veto.<p>
     *
     * @expose
     * @memberof oj.ojListView
     * @instance
     * @param {Object} key the key of the item to expand
     * @param {boolean} vetoable whether the event should be vetoable
     */
    expand: function (key, vetoable)
    {
        this.listview.expandKey(key, vetoable, true, true);
    },

    /**
     * Collapse an item.<p>
     * Note when vetoable is set to false, beforeCollapse event will still be fired but the event cannot be veto.<p>
     *
     * @expose
     * @memberof oj.ojListView
     * @instance
     * @param {Object} key the key of the item to collapse
     * @param {boolean} vetoable whether the event should be vetoable
     */
    collapse: function (key, vetoable)
    {
        this.listview.collapseKey(key, vetoable, true);
    },

    /**
     * Gets the key of currently expanded items.
     *
     * @expose
     * @memberof oj.ojListView
     * @instance
     * @return {Array} array of keys of currently expanded items
     */
    getExpanded: function ()
    {
        return this.listview.getExpanded();
    },

    /**
     * Gets the IndexerModel which can be used with the ojIndexer.  The IndexerModel provided by ListView
     * by defaults returns a list of locale dependent characters.  See translations for the key used to return
     * all characters.  When a user selects a character in the ojIndexer ListView will scroll to the group 
     * header (or the closest one) with the character as its prefix.
     *
     * @expose
     * @memberof oj.ojListView
     * @instance
     * @return {Object} ListView's IndexerModel to be used with the ojIndexer
     */
    getIndexerModel: function ()
    {
        if (this.indexerModel == null && oj.ListViewIndexerModel)
        {
            this.indexerModel = new oj.ListViewIndexerModel(this.listview);
        }
        return this.indexerModel;
    },

    /**
     * Fires a change event on the IndexerModel
     *
     * @private
     */
    _fireIndexerModelChangeEvent: function ()
    {
        if (this.indexerModel != null && this.indexerModel.fireChangeEvent)
        {
            this.indexerModel.fireChangeEvent();
        }
    }

    // Fragments
/**
 * <table class="keyboard-table">
 *   <thead>
 *     <tr>
 *       <th>Target</th>
 *       <th>Gesture</th>
 *       <th>Action</th>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <td rowspan="2">List Item</td>
 *       <td><kbd>Tap</kbd></td>
 *       <td>Focus on the item.  If <code class="prettyprint">selectionMode</code> is enabled, selects the item as well.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Press & Hold</kbd></td>
 *       <td>Display context menu</td>
 *     </tr>
 *     <tr>
 *       <td rowspan="2">Group Item</td>
 *       <td><kbd>Tap</kbd></td>
 *       <td>Expand or collapse the group item if <code class="prettyprint">drillMode</code> is set to collapsible.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Press & Hold</kbd></td>
 *       <td>Display context menu</td>
 *     </tr>
 *   </tbody>
 * </table>
 *
 * @ojfragment touchDoc - Used in touch gesture section of classdesc, and standalone gesture doc
 * @memberof oj.ojListView
 */

/**
 * <table class="keyboard-table">
 *   <thead>
 *     <tr>
 *       <th>Target</th>
 *       <th>Key</th>
 *       <th>Action</th>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <td rowspan = "13" nowrap>List Item</td>
 *       <td><kbd>F2</kbd></td>
 *       <td>Enters Actionable mode.  This enables keyboard action on elements inside the item, including navigate between focusable elements inside the item.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Esc</kbd></td>
 *       <td>Exits Actionable mode.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Tab</kbd></td>
 *       <td>When in Actionable Mode, navigates to next focusable element within the item.  If the last focusable element is reached, shift focus back to the first focusable element.
 *           When not in Actionable Mode, navigates to next focusable element on page (outside ListView).</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+Tab</kbd></td>
 *       <td>When in Actionable Mode, navigates to previous focusable element within the item.  If the first focusable element is reached, shift focus back to the last focusable element.
 *           When not in Actionable Mode, navigates to previous focusable element on page (outside ListView).</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>DownArrow</kbd></td>
 *       <td>Move focus to the item below.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>UpArrow</kbd></td>
 *       <td>Move focus to the item above.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+DownArrow</kbd></td>
 *       <td>Extend the selection to the item below.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+UpArrow</kbd></td>
 *       <td>Extend the selection to the item above.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+F10</kbd></td>
 *       <td>Launch the context menu if there is one associated with the current item.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Enter</kbd></td>
 *       <td>Selects the current item.  No op if the item is already selected.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Space</kbd></td>
 *       <td>Toggles to select and deselect the current item.  If previous items have been selected, deselects them and selects the current item.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+Space</kbd></td>
 *       <td>Selects contiguous items from the last selected item to the current item.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Ctrl+Space</kbd></td>
 *       <td>Toggles to select and deselect the current item while maintaining previous selected items.</td>
 *     </tr>
 *     <tr>
 *       <td rowspan = "2" nowrap>Group Item</td>
 *       <td><kbd>LeftArrow</kbd></td>
 *       <td>Collapse the current item if it is expanded and is collapsible.  For non-hierarchical data, do nothing.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>RightArrow</kbd></td>
 *       <td>Expand the current item if it has children and is expandable.  For non-hierarchical data, do nothing.</td>
 *     </tr>
 *   </tbody>
 * </table>
 *
 * @ojfragment keyboardDoc - Used in keyboard section of classdesc, and standalone gesture doc
 * @memberof oj.ojListView
 */
});

//////////////////     SUB-IDS     //////////////////

/**
 * <p>Sub-ID for the ojListView component's disclosure icon in group items.  See the <a href="#getNodeBySubId">getNodeBySubId</a>
 * method for details.</p>
 *
 * @deprecated Use the <a href="#oj-listview-disclosure">oj-listview-disclosure</a> option instead. 
 * @ojsubid oj-listview-icon
 * @memberof oj.ojListView
 *
 * @example <caption>Get the disclosure icon for the group item with key 'foo':</caption>
 * var node = $( ".selector" ).ojListView( "getNodeBySubId", {'subId': 'oj-listview-icon', 'key': 'foo'} );
 */

/**
 * <p>Sub-ID for the ojListView component's disclosure icon in group items.  See the <a href="#getNodeBySubId">getNodeBySubId</a>
 * method for details.</p>
 *
 * @ojsubid oj-listview-disclosure
 * @memberof oj.ojListView
 *
 * @example <caption>Get the disclosure icon for the group item with key 'foo':</caption>
 * var node = $( ".selector" ).ojListView( "getNodeBySubId", {'subId': 'oj-listview-disclosure', 'key': 'foo'} );
 */

/**
 * <p>Context for the ojListView component's items.</p>
 *
 * @property {number} index the zero based item index relative to its parent
 * @property {Object} key the key of the item
 * @property {Element} parent the parent group item.  Only available if item has a parent.
 * @property {boolean} group whether the item is a group.
 *
 * @ojnodecontext oj-listview-item
 * @memberof oj.ojListView
 */

});
