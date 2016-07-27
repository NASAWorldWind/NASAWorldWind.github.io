/* 
 * Copyright (C) 2016 United States Government as represented by the Administrator of the
 * National Aeronautics and Space Administration. All Rights Reserved.
 */

/**
 * Web (HTML5/JavaScript) module
 */
define(['ojs/ojcore', 'knockout','ojs/ojrouter','ojs/ojnavigationlist'
], function (oj, ko) {
    // Create a child router named 'webTopics' for the 'web' routerState
    var childRouter = oj.Router.rootInstance.createChildRouter('webtopic', 'web');
    
    childRouter.configure({
        //'quickStart': {label: 'Quick Start', value: "WebQuickStart", isDefault: true},
        'guide': {label: 'Developers Guide', value: "WebDevGuide", isDefault: true},
        'api': {label: 'API Documentation', value: 'WebApi'}
        //'examples': {label: 'Examples', value: "WebExamples"}
    });
    childRouter.go();
    
    /**
     * The view model for the Web SDK content view template
     */
    function WebContentViewModel() {
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
//                self.router.defaultStateId = data['value'];
                self.router.defaultStateId = self.navListSelection();
            }
        };        
    }
    return WebContentViewModel;
});
