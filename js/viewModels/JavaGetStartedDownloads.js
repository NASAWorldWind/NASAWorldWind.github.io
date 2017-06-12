/* 
 * Copyright (C) 2016 United States Government as represented by the Administrator of the
 * National Aeronautics and Space Administration. All Rights Reserved.
 */

/**
 * JavaGetStartedDownloads module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojrouter', 'ojs/ojnavigationlist'
], function (oj, ko, $) {
    /**
     * The view model for the Java > Get Started > Downloads content
     */
    function JavaGetStartedDownloads() {
        var self = this;

        self.releasesUrl = ko.observable("https://github.com/NASAWorldWind/WorldWindJava/releases");
        self.latestTag = ko.observable('');
        self.latestUrl =  ko.observable("https://github.com/NASAWorldWind/WorldWindJava/releases/latest");
        self.dailyTag =  ko.observable('');
        self.dailyUrl =  ko.observable("https://github.com/NASAWorldWind/WorldWindJava/releases");

        // Get the "tag" name of the latest release
        $.getJSON('https://api.github.com/repos/nasaworldwind/worldwindjava/releases/latest', function( result ) {
            self.latestTag(result.tag_name);
        });

        // Find the "Daily Build" release and update the dailyUrl and dailyTag
        $.getJSON('https://api.github.com/repos/nasaworldwind/worldwindjava/releases', function( result ) {
            $.each(result, function(i, item) {
                if (item.tag_name.startsWith("daily")) {
                    self.dailyTag(item.tag_name);
                    self.dailyUrl("https://github.com/NASAWorldWind/WorldWindJava/releases/tag/" + item.tag_name);
                    return false;   // breaks out of JQuery .each()
                }
            });
        });
    };

    return JavaGetStartedDownloads;
});