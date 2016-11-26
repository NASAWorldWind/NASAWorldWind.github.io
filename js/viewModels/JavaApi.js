/* 
 * Copyright (C) 2016 United States Government as represented by the Administrator of the
 * National Aeronautics and Space Administration. All Rights Reserved.
 */

/**
 * JavaApi module
 */
define(['ojs/ojcore', 'knockout'
], function (oj, ko) {
    /**
     * The view model for the Java API documentation view template
     */
    function JavaApiContentViewModel() {
        var self = this;
        self.url = "assets/java/latest/javadoc/";
    }
    
    return JavaApiContentViewModel;
});
