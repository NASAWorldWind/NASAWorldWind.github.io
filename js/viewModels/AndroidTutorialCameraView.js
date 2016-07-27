/* 
 * Copyright (C) 2016 United States Government as represented by the Administrator of the
 * National Aeronautics and Space Administration. All Rights Reserved.
 */

/**
 * AndroidTutorialCameraView module
 */
define(['ojs/ojcore', 'knockout', 'codemirror',
    'codemirror/mode/clike/clike',
    'codemirror/mode/xml/xml'
], function (oj, ko, CodeMirror) {

    function AndroidTutorialCameraView() {
        var self = this;

        self.handleAttached = function () {

            var editor = CodeMirror.fromTextArea(document.getElementById("java-code"), {
                lineNumbers: true,
                matchBrackets: true,
                mode: "text/x-java",
                readOnly: true
            });

        };
    }
    
    return AndroidTutorialCameraView;
});
