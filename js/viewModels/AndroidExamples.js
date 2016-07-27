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
     * The view model for the Android Examples content
     */
    function AndroidExamples() {
        var self = this;
        this.itemOnly = function (context) {
            return context['leaf'];
        };
        this.selectedItem = ko.observable('home');

        this.dataSource = new oj.ArrayTableDataSource(AndroidExamples.listItems, {idAttribute: 'module'});
        this.selectedModule = ko.observable(AndroidExamples.lastSelectedModule);
        this.optionChange = function (event, ui) {
            if (ui.option == 'selection') {
                self.selectedModule(ui.value);  // ui.value contains the 'idAttribute' assigned in the ArrayTableDataSource
                AndroidQuickStart.lastSelectedModule = self.selectedModule();
            }
        };
    }

    AndroidExamples.listItems = [
        {
            label: "Tutorials",
            module: "AndroidQuickStartOverview"
        },
        {
            label: "Examples",
            module: "AndroidQuickStartSetup"
        },
        {
            label: "Build",
            module: "AndroidQuickStartBuild"
        },
        {
            label: "Run",
            module: "AndroidQuickStartRun"
        }
    ];
    AndroidExamples.lastSelectedModule = AndroidExamples.listItems[0].module;

    return AndroidExamples;
});