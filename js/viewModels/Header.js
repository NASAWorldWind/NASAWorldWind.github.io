/* 
 * Copyright (c) 2016, Bruce Schubert
 * ALL RIGHTS RESERVED
 */

/**
 * Header module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojdialog',
    'ojs/ojtoolbar', 'ojs/ojbutton', 'ojs/ojmenu'],
        function (oj, ko, $) {

            /**
             * The view model for the Header module
             */
            function HeaderViewModel() {
                var self = this;

                // Application Name used in Branding Area
                self.appName = ko.observable("NASA World Wind");
                self.appShortName = ko.observable("World Wind");

                // Media Queries for repsonsive header
                var smQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
                self.smScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);

                // Dropdown menu states
                self.menuItemSelect = function (event, ui) {
                    switch (ui.item.attr("id")) {
                        // Go to the NASA World Wind Research GitHub site
                        case "research":
                            window.open("https://github.com/NASAWorldWindResearch", "_self");
                            break;
                        // Go to the NASA World Wind forum
                        case "forum":
                            window.open("http://forum.worldwindcentral.com", "_self");
                            break;
                        // Open the About Box
                        case "about":
                            $("#aboutDialog").ojDialog("open");
                            break;
                        default:
                    }
                };

            }
            return new HeaderViewModel();
        }
);
