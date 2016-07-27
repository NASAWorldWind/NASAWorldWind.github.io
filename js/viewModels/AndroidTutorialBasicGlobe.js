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
        var self = this;

        self.handleAttached = function () {
            var snippet = CodeMirror.fromTextArea(document.getElementById("java-snippet"), {
                mode: "text/x-java",
                readOnly: true
            });
            var editor = CodeMirror.fromTextArea(document.getElementById("java-code"), {
                lineNumbers: true,
                matchBrackets: true,
                mode: "text/x-java",
                readOnly: true
            });
            CodeMirror.fromTextArea(document.getElementById("xml-code"), {
                lineNumbers: true,
                matchBrackets: true,
                mode: "application/xml",
                readOnly: true
            });
        };

    }

    return AndroidTutorialBasicGlobe;
});
