/* 
 * Copyright (C) 2016 United States Government as represented by the Administrator of the
 * National Aeronautics and Space Administration. All Rights Reserved.
 */

/**
 * AndroidQuickStart module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojrouter', 'ojs/ojnavigationlist'
], function (oj, ko, $) {

    // Use caution when changing router names and state ids, as a change could break
    // a user's bookmark to that page.
    
    // Create a child router named 'getstartedtopic' for the androidtopic's 'getstarted' state
    var androidRouter = oj.Router.rootInstance.getChildRouter('androidtopic'),
        childRouter = androidRouter.createChildRouter('getstartedtopic', 'getstarted');
    
    childRouter.configure({
        'overview': {label: 'Overview', value: "AndroidQuickStartOverview", isDefault: true},
        'install': {label: 'Setup', value: "AndroidQuickStartInstall"},
        'build': {label: 'Build', value: 'AndroidQuickStartBuild'},
        'run': {label: 'Run', value: 'AndroidQuickStartRun'},
        'basicglobe': {label: 'Tutorials', value: "AndroidTutorialBasicGlobe"},
        'wmslayer': {label: 'Tutorials', value: "AndroidTutorialWmsLayer"},
        'surfaceimage': {label: 'Tutorials', value: "AndroidTutorialSurfaceImage"},
        'lookatview': {label: 'Tutorials', value: "AndroidTutorialLookAtView"},
        'cameraview': {label: 'Tutorials', value: "AndroidTutorialCameraView"},
        'navigatorevents': {label: 'Tutorials', value: "AndroidTutorialNavigatorEvents"},
        'placemarks': {label: 'Tutorials', value: "AndroidTutorialPlacemarks"},
        'placemarkpicking': {label: 'Tutorials', value: "AndroidTutorialPlacemarkPicking"},
        'cameracontrols': {label: 'Tutorials', value: "AndroidTutorialCameraControls"},
        'showtessellation': {label: 'Tutorials', value: "AndroidTutorialShowTessellation"}
    });
    oj.Router.sync();
    
    /**
     * The view model for the Android SDK content view template
     */
    function AndroidQuickStart() {
        var self = this;
        
        this.router = childRouter;
        
        // In the ojNavigationList, we don't allow headings to be selected, only leaf items.
        this.isLeaf = function (context) {
            return context['leaf'];
        };
        
        // The selected item in the view's ojNavigationList
        this.selectedItem = ko.observable(AndroidQuickStart.lastSelectedItem);
        
        // When the selected item changes, syncronize the router 
        // and as a result the page content's to the current selection.
        this.selectedItem.subscribe(function (newItem) {
            self.router.go(newItem);
            
            // Ensure the parent item is expanded in the navigation list. 
            // This is req'd when the selection is made programmatically.
            // Use JQuery to get the parent <ul> and then the parent <li>
            // TODO: This code should be in a routerState event handler.
            var $parent = $("#" + newItem).parent().parent();
            if ($parent.length) {
                $("#android-getstarted-menu").ojNavigationList("expand", $parent.attr("id"));
            }
            
            // Remember this selection so we can restore it if the view is recreated
            AndroidQuickStart.lastSelectedItem = newItem;
        });
    }

    AndroidQuickStart.lastSelectedItem = "AndroidQuickStartOverview";

    return AndroidQuickStart;
});