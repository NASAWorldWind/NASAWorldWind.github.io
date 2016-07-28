/* 
 * Copyright (C) 2016 United States Government as represented by the Administrator of the
 * National Aeronautics and Space Administration. All Rights Reserved.
 */

/**
 * AndroidTutorialCameraControls module
 */
define(['ojs/ojcore', 'knockout', 'codemirror',
    'codemirror/mode/clike/clike',
    'codemirror/mode/xml/xml'
], function (oj, ko, CodeMirror) {
    /**
     * The view model for the main content view template
     */
    function AndroidTutorialCameraControls() {
        var self = this;
        self.handleAttached = function () {
            var editor = CodeMirror.fromTextArea(document.getElementById("java-code"), {
                lineNumbers: true,
                matchBrackets: true,
                mode: "text/x-java",
                readOnly: true,
                theme: 'android'
            });

        };
    }
    
    return AndroidTutorialCameraControls;
});
