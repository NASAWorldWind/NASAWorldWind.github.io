/* 
 * Copyright (C) 2016 United States Government as represented by the Administrator of the
 * National Aeronautics and Space Administration. All Rights Reserved.
 */

/**
 * Java module
 */
define(['ojs/ojcore', 'knockout','ojs/ojrouter','ojs/ojnavigationlist'
], function (oj, ko) {
    // Create a child router named 'javatopic' for the main router's 'java' routerState
    var childRouter = oj.Router.rootInstance.createChildRouter('javatopic', 'java');
    childRouter.configure({
        'getstarted': {label: 'Get Started', value: "JavaGetStarted", isDefault: true},
        'guide': {label: 'Developers Guide', value: "JavaDevGuide"},
        'api': {label: 'API Documentation', value: 'JavaApi'}
        //'examples': {label: 'Examples', value: "JavaExamples"}
    });
    childRouter.go();
    
    /**
     * The view model for the Java SDK content view template
     */
    function JavaContentViewModel() {
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
    return JavaContentViewModel;
});
