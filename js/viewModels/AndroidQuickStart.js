/* 
 * Copyright (C) 2016 United States Government as represented by the Administrator of the
 * National Aeronautics and Space Administration. All Rights Reserved.
 */

/**
 * AndroidQuickStart module
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojrouter', 'ojs/ojnavigationlist'
], function (oj, ko) {

    // Some starter/seed code to implement a child router so the pages can be bookmarked and for back/prev navigation
    //var parentRouter = oj.Router.rootInstance.getChildRouter('androidtopic'),
    //    childRouter = parentRouter.createChildRouter('getstarted', 'androidtopic');
    //
    //childRouter.configure({
    //    'overview': {label: 'Overview', value: "AndroidQuickStartOverview", isDefault: true},
    //    'setup': {label: 'Setup', value: "AndroidQuickStartSetup"},
    //    'build': {label: 'Build', value: 'AndroidQuickStartBuild'},
    //    'run': {label: 'Run', value: 'AndroidQuickStartRun'},
    //    'tutorials': {label: 'Tutorials', value: "AndroidExamples"}
    //});

    /**
     * The view model for the Android SDK content view template
     */
    function AndroidQuickStart() {
        var self = this;

        this.itemOnly = function (context) {
            return context['leaf'];
        };
        this.selectedItem = ko.observable(AndroidQuickStart.lastSelectedItem);
        this.selectedItem.subscribe(function (newItem) {
            AndroidQuickStart.lastSelectedItem = newItem;
        });


        this.showModule = function(module) {
            self.selectedItem(module);
            //childRouter.go('/android/getstarted/run')
        }
    }
    AndroidQuickStart.lastSelectedItem = "AndroidQuickStartOverview";

    return AndroidQuickStart;
});