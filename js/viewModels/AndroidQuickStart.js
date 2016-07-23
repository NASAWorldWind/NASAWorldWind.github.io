/* 
 * Copyright (C) 2016 United States Government as represented by the Administrator of the
 * National Aeronautics and Space Administration. All Rights Reserved.
 */

/**
 * AndroidQuickStart module
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojrouter', 'ojs/ojnavigationlist'
], function (oj, ko) {
    // Create a child router named 'andoidQuickStart' for the 'quickStart' routerState
    var parentRouter = oj.Router.rootInstance.getChildRouter('androidTopics'),
            childRouter = parentRouter.createChildRouter('androidQuickStart', 'quickStart');

    childRouter.configure({
        'setup': {label: 'Setup', value: "AndroidQuickStartSetup", isDefault: true},
        'simple': {label: 'Simple', value: "AndroidQuickStartSimple"},
        'advanced': {label: 'Advanced', value: "AndroidQuickStartAdvanced"}
    });
    //childRouter.go();

    /**
     * The view model for the Android SDK content view template
     */
    function AndroidQuickStart() {
        var self = this;
        this.listItems = [
            {
                label: "Setup",
                module: "AndroidQuickStartSetup"
            },
            {
                label: "Simple",
                module: "AndroidQuickStartSimple"
            },
            {
                label: "Advanced",
                module: "AndroidQuickStartAdvanced"
            }
        ];
        this.dataSource = new oj.ArrayTableDataSource(this.listItems, {idAttribute: 'module'});
        this.selectedItem = ko.observable(this.listItems[0].label);
        this.selectedModule = ko.observable(this.listItems[0].module);       
        this.optionChange = function (event, ui) {
            if (ui.option == 'selection') {
                self.selectedItem(ui.item.text().trim());
                self.selectedModule(ui.value);  // ui.value contains the 'idAttribute' assigned in the ArrayTableDataSource
            }
        };

    }

    return AndroidQuickStart;
});