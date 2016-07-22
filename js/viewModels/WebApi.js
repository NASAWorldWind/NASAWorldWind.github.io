/* 
 * Copyright (C) 2016 United States Government as represented by the Administrator of the
 * National Aeronautics and Space Administration. All Rights Reserved.
 */

/**
 * WebApi module
 */
define(['ojs/ojcore', 'knockout'
], function (oj, ko) {
    /**
     * The view model for the Web API documentation view template
     */
    function WebApiContentViewModel() {
        var self = this;

        /**
         * URL to API documentation
         */
        self.url = "http://worldwindserver.net/webworldwind/api-doc/";
    }

    return WebApiContentViewModel;
});
