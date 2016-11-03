/* 
 * Copyright (C) 2016 United States Government as represented by the Administrator of the
 * National Aeronautics and Space Administration. All Rights Reserved.
 */

/**
 * AndroidExamples module
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojrouter', 'ojs/ojnavigationlist'
], function (oj, ko) {
    /**
     * The view model for the Android Downloads content
     */
    function AndroidDownloads() {
        var self = this;
        self.latest = ko.observable();
        $.getJSON('https://api.github.com/repos/nasaworldwind/worldwindandroid/releases/latest', function( data ) {
            self.latest(data.tag_name);
        });

    };

    return AndroidDownloads;
});