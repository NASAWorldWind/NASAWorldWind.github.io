/* 
 * Copyright (C) 2016 United States Government as represented by the Administrator of the
 * National Aeronautics and Space Administration. All Rights Reserved.
 */

/**
 * About module
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojrouter', 'ojs/ojnavigationlist'
], function (oj, ko) {
    
    // Create a child router named 'about' for the 'about' routerState
    var childRouter = oj.Router.rootInstance.createChildRouter('about', 'about');
    childRouter.configure({
        'statement': {label: 'Statement', value: "Statement", isDefault: true},
        'mission': {label: 'Mission and Vision', value: "Mission"}
    });
    childRouter.go();
    
    /**
     * The view model for the About module.
     */
    function AboutContentViewModel() {
        var self = this;
        self.router = childRouter;
        self.selectedItem = ko.observable('statement');
    }
    return AboutContentViewModel;
});
