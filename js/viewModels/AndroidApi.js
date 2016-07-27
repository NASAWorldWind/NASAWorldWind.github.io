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

        /**
         * URL to API documentation
         */
        self.url = "assets/android/api-doc/";
    }

    return AndroidApiContentViewModel;
});
