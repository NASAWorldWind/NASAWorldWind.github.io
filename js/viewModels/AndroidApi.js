/* 
 * Copyright (C) 2016 United States Government as represented by the Administrator of the
 * National Aeronautics and Space Administration. All Rights Reserved.
 */

/**
 * AndroidApi module
 */
define(['ojs/ojcore', 'knockout'
], function (oj, ko) {
    /**
     * The view model for the Android API documentation view template
     */
    function AndroidApiContentViewModel() {
        var self = this;

        // The javadocs located here are updated when needed by the build of the website
        self.url = 'dynamicAssets/android/latest/javadoc/';

        /**
         * Attempts to retrieve the version for which the website API documentation supports.
         * The information for the version is provided during the Travis CI process conducted
         * during tagged builds.
         */
        self.version = ko.observable();
        var url = 'dynamicAssets/android/latestBintrayVersion.json';
        $.get(url).done(function (jqXhr, text, exception) {
            if (jqXhr.name) {
                self.version('- Version: ' + jqXhr.name);
            }
        });
    }

    return AndroidApiContentViewModel;
});
