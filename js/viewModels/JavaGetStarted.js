/* 
 * Copyright (C) 2016 United States Government as represented by the Administrator of the
 * National Aeronautics and Space Administration. All Rights Reserved.
 */

/**
 * JavaGetStarted module
 */
define(['ojs/ojcore', 'knockout', 'jquery',
    'ojs/ojrouter', 'ojs/ojnavigationlist'
], function (oj, ko, $) {

    // Use caution when changing router names and state ids, as a change could break
    // a user's bookmark to that page.

    // Create a child router named 'getstartedtopic' for the javatopic router's 'getstarted' state.
    // See the router configuration ih Java.js
    var javaRouter = oj.Router.rootInstance.getChildRouter('javatopic'),
        childRouter = javaRouter.createChildRouter('getstartedtopic', 'getstarted');
    childRouter.configure({
        'overview': {label: 'Overview', value: "JavaGetStartedOverview", isDefault: true},
        'downloads': {label: 'Downloads', value: "JavaGetStartedDownloads"}
    });

    oj.Router.sync();

    /**
     * The view model for the Java Get Started content
     */
    function JavaGetStarted() {
        var self = this;

        // The router for this view; it's sync'd to the Get Started navigation menu
        this.router = childRouter;

        // Define a function to determine leaf items in the "Get Started" navigation menu (ojNavigationList);
        // we don't allow headings to be selected, only leaf items.
        this.isLeaf = function (context) {
            return context['leaf'];
        };

        // Create an observable to track the selected item in the view's ojNavigationList menu
        this.selectedItem = ko.observable(JavaGetStarted.lastSelectedItem);

        // When the selected menu item changes, synchronize the router
        // and, as a result, set the page's content to the current selection.
        this.selectedItem.subscribe(function (newItem) {
            self.router.go(newItem);

            // Ensure the parent item is expanded in the navigation list.
            // This is req'd when the selection is made programmatically.
            // Use JQuery to get the parent <ul> and then the parent <li>
            // TODO: This code should be in a routerState event handler.
            var $parent = $("#" + newItem).parent().parent();
            if ($parent.length) {
                $("#java-getstarted-menu").ojNavigationList("expand", $parent.attr("id"));
            }

            // Remember this selection so we can restore it if/when the view is recreated.
            JavaGetStarted.lastSelectedItem = newItem;
        });
    }

    // Set the default contents via a child router state
    JavaGetStarted.lastSelectedItem = "overview";

    return JavaGetStarted;
});
