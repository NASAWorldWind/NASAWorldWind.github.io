/* 
 * Copyright (C) 2016 United States Government as represented by the Administrator of the
 * National Aeronautics and Space Administration. All Rights Reserved.
 */

/**
 * AndroidTutorialBasicGlobe module
 */
define(['ojs/ojcore', 'knockout', 'codemirror',
    'codemirror/mode/clike/clike',
    'codemirror/mode/xml/xml'
], function (oj, ko, CodeMirror) {

    function AndroidTutorialBasicGlobe(params) {
        var self = this,
            javaSnippet,
            javaCode,
            xmlCode;

        // Update the DOM elements "after" the DOM is attached to this view model
        self.handleAttached = function () {
            javaSnippet = CodeMirror.fromTextArea(document.getElementById("java-snippet"), {
                mode: "text/x-java",
                readOnly: true,
                theme: 'android'
            });
            javaCode = CodeMirror.fromTextArea(document.getElementById("java-code"), {
                lineNumbers: true,
                matchBrackets: true,
                mode: "text/x-java",
                readOnly: true,
                theme: 'android'
            });
            xmlCode = CodeMirror.fromTextArea(document.getElementById("xml-code"), {
                lineNumbers: true,
                matchBrackets: true,
                mode: "application/xml",
                readOnly: true,
                theme: 'android'
            });

        };

    }

    return AndroidTutorialBasicGlobe;
});
