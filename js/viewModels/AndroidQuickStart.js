/* 
 * Copyright (C) 2016 United States Government as represented by the Administrator of the
 * National Aeronautics and Space Administration. All Rights Reserved.
 */

/**
 * AndroidQuickStart module
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojrouter', 'ojs/ojnavigationlist'
], function (oj, ko) {
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
    }
    AndroidQuickStart.lastSelectedItem = "AndroidQuickStartOverview";

    return AndroidQuickStart;
});