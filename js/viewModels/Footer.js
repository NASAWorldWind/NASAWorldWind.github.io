/* 
 * Copyright (c) 2016, Bruce Schubert
 * ALL RIGHTS RESERVED
 */

/**
 * Footer module
 */
define(['ojs/ojcore', 'knockout'], function (oj, ko) {
    /**
     * The view model for the footer module.
     * This module is used to display links on the bottom of the About Box dialog.
     */
    function FooterViewModel() {
        var self = this;
        self.footerLinks = ko.observableArray([
            new FooterLink('Contact Us', 'contactUs', 'mailto:Patrick.Hogan@nasa.gov')
        ]);
    }

    function FooterLink(name, id, linkTarget) {
        this.name = name;
        this.linkId = id;
        this.linkTarget = linkTarget;
    }

    return new FooterViewModel();
});
