/* 
 * Copyright (c) 2016, Bruce Schubert
 * ALL RIGHTS RESERVED
 */

/**
 * Dashboard module
 */
define(['ojs/ojcore', 'knockout', 'jquery',
    'ojs/ojknockout', 'ojs/ojmasonrylayout', 'ojs/ojlistview'
], function (oj, ko, $) {
    /**
     * The view model for the dashboard view template
     */
    function Dashboard() {
        var self = this;

        // Repositories
        self.androidSdkUrl = "https://github.com/NASAWorldWind/WorldWindAndroid";
        self.javaSdkUrl = "https://github.com/NASAWorldWind/WorldWindJava";
        self.webSdkUrl = "https://github.com/NASAWorldWind/WebWorldWind";
        // Organizations
        self.researchUrl = "https://github.com/NASAWorldWindResearch/";
        self.worldwindUrl = "https://github.com/NASAWorldWind/";
    }

    return Dashboard;
});
