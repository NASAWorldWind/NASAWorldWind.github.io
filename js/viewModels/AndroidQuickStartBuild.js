/* 
 * Copyright (C) 2016 United States Government as represented by the Administrator of the
 * National Aeronautics and Space Administration. All Rights Reserved.
 */

/**
 * AndroidQuickStartBuild module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'codemirror',
    'codemirror/mode/clike/clike',
    'codemirror/mode/xml/xml',
    'ojs/ojcollapsible',
    'ojs/ojtabs'
], function (oj, ko, $, CodeMirror) {
    /**
     * The view model for the Build view
     */
    function AndroidQuickStartBuild() {
        var self = this;

        // Update the DOM elements "after" the DOM is attached to this view model
        self.handleAttached = function () {
            var javaSnippet = CodeMirror.fromTextArea(document.getElementById("java-snippet"), {
                lineNumbers: false,
                mode: "text/x-java",
                readOnly: true,
                theme: 'android'
            });

            var layoutSnippet = CodeMirror.fromTextArea(document.getElementById("layout-snippet"), {
                lineNumbers: false,
                matchBrackets: true,
                mode: "application/xml",
                readOnly: true,
                theme: 'android'
            });

            var manifestSnippet = CodeMirror.fromTextArea(document.getElementById("manifest-snippet"), {
                lineNumbers: false,
                matchBrackets: true,
                mode: "application/xml",
                readOnly: true,
                theme: 'android'
            });

            var javaCode = CodeMirror.fromTextArea(document.getElementById("java-code"), {
                lineNumbers: true,
                mode: "text/x-java",
                readOnly: true,
                theme: 'android'
            });

            var layoutCode = CodeMirror.fromTextArea(document.getElementById("layout-code"), {
                lineNumbers: true,
                matchBrackets: true,
                mode: "application/xml",
                readOnly: true,
                theme: 'android'
            });

            var manifestCode = CodeMirror.fromTextArea(document.getElementById("manifest-code"), {
                lineNumbers: true,
                matchBrackets: true,
                mode: "application/xml",
                readOnly: true,
                theme: 'android'
            });

             
            
        };

        // Populate the latest released version hosted on Bintray
        self.latest = ko.observable();
        self.latest('Check https://bintray.com/nasaworldwind/WorldWindAndroid for the latest');
        var url = 'dynamicAssets/android/latestBintrayVersion.json';
        $.get(url).done(function (jqXhr, text, exception) {
            if (jqXhr.name) {
                self.latest('compile \"gov.nasa.worldwind.android.worldwind:' + jqXhr.name + '@aar\"');
            }
        })
        .fail(function (jqXhr, text, exception) {
            console.log('There was a failure retrieving the response: ' + text + ' exception: ' + exception);
        });
    }  

    return AndroidQuickStartBuild;
});
