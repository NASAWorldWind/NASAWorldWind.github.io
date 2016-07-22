/* 
 * Copyright (C) 2016 United States Government as represented by the Administrator of the
 * National Aeronautics and Space Administration. All Rights Reserved.
 */

/**
 * AndroidQuickStart module
 */
define(['ojs/ojcore', 'knockout','ojs/ojrouter','ojs/ojnavigationlist'
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
    function AndroidQuickStartViewModel() {
        var self = this;
        /**
         * The child router is bound to the view's ojNavigationList menu.
         */
        self.router = childRouter;

        /**
         * Sets the selected item in the ojNavigationList menu.
         */
        self.navListSelection = ko.observable(childRouter.defaultStateId);

        /**
         * Synchronizes the router's default state to the selected item,
         * allowing this page to restore its contents if it's recreated.
         */
        self.onNavListOptionChange = function (event, data) {
            if (data['option'] === 'selection') {
                // make the new selection the default
                self.router.defaultStateId = self.navListSelection();
            }
        };
    }
    
    return AndroidQuickStartViewModel;
});