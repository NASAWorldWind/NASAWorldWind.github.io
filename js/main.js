/* 
 * Copyright (c) 2016, Bruce Schubert
 * ALL RIGHTS RESERVED
 */
requirejs.config({
// Path mappings for the logical module names
    paths: //injector:mainReleasePaths
            {
                'knockout': 'libs/knockout/knockout-3.4.0',
                'jquery': 'libs/jquery/jquery-2.1.3.min',
                'jqueryui-amd': 'libs/jquery/jqueryui-amd-1.11.4.min',
                'jquery-growl': 'libs/jquery-plugins/jquery.growl',
                'promise': 'libs/es6-promise/promise-1.0.0.min',
                'hammerjs': 'libs/hammer/hammer-2.0.4.min',
                'ojdnd': 'libs/dnd-polyfill/dnd-polyfill-1.0.0.min',
                'ojs': 'libs/oj/v2.0.2/debug',
                'ojL10n': 'libs/oj/v2.0.2/ojL10n',
                'ojtranslations': 'libs/oj/v2.0.2/resources',
                'signals': 'libs/js-signals/signals.min',
                'text': 'libs/require/text'
            }
    //endinjector
    ,
    // Shim configurations for modules that do not expose AMD
    shim: {
        'jquery': {
            exports: ['jQuery', '$']
        }
    },
    // This section configures the i18n plugin. It is merging the Oracle JET built-in translation
    // resources with a custom translation file.
    // Any resource file added, must be placed under a directory named "nls". You can use a path mapping or you can define
    // a path that is relative to the location of this main.js file.
    config: {
        ojL10n: {
            merge: {
                //'ojtranslations/nls/ojtranslations': 'resources/nls/menu'
            }
        }
    }
});
/**
 * A top-level require call executed by the Application.
 * Although 'ojcore' and 'knockout' would be loaded in any case (they are specified as dependencies
 * by the modules themselves), we are listing them explicitly to get the references to the 'oj' and 'ko'
 * objects in the callback
 *
 * @param {OracleJet} oj
 * @param {Knockout} ko
 * @param {JQuery} $
 */
require([
    'ojs/ojcore',
    'knockout',
    'jquery',
    'ojs/ojknockout',
    'ojs/ojrouter',
    'ojs/ojmodule',
    'ojs/ojoffcanvas',
    'ojs/ojnavigationlist',
    'ojs/ojarraytabledatasource'
], function (oj, ko, $) { // this callback gets executed when all required modules are loaded

    // Retrieve the router static root instance and configure the router states.
    // The mainContent section is using an ojModule.moduleConfig binding to load
    // the view/viewModels with the same names as the router state.
    var router = oj.Router.rootInstance,
            routerStateIcons;
            
    // Configure the router states
    // e.g.,  routerstate: {label: menu text, value: view model name}
    router.configure({
        'home': {label: 'Home', value: 'Home', isDefault: true},
        'dashboard': {label: 'Dashboard', value: 'Dashboard'},
        'android': {label: 'Android', value: 'Android'},
        'web': {label: 'Web', value: 'Web'},
        'java': {label: 'Java', value: 'Java'},
        'research': {label: 'Research', value: 'Research'}
    });
    // Create a syncronized list of icons to accompany the 
    routerStateIcons = {
        'home': {iconClass: 'fa fa-home fa-lg oj-navigationlist-item-icon'},
        'dashboard': {iconClass: 'fa fa-dashboard fa-lg oj-navigationlist-item-icon'},
        'android': {iconClass: 'fa fa-android fa-lg oj-navigationlist-item-icon'},
        'web': {iconClass: 'fa fa-globe fa-lg oj-navigationlist-item-icon'},
        'java': {iconClass: 'fa fa-coffee fa-lg oj-navigationlist-item-icon'},
        'research': {iconClass: 'fa fa-rocket fa-lg oj-navigationlist-item-icon'}};

    /**
     * Constructs the root view model for the application.
     */
    function RootViewModel() {
        var self = this,
                smQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY),
                mdQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.MD_UP),
                navData = [], i, numStates, state, icon;

        /**
         * A reference to the root router for the view.
         */
        self.router = router;

        // Create the main navigation menu data-source (an ArrayTableDataSource)
        // from the router and corresponding router icon classes.
        numStates = router.states.length;
        for (i = 0; i < router.states.length; i++) {
            state = router.states[i];
            icon = routerStateIcons[state.id];
            navData.push({name: state.label, id: state.id, iconClass: icon.iconClass});
        }
        self.navDataSource = new oj.ArrayTableDataSource(navData, {idAttribute: 'id'});


        // Create Knockout observable media queries to implement responsive behaviors
        self.smScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);
        self.mdScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(mdQuery);

        /**
         * Toggles the maim menu between the "nav bar" and and the "nav drawer" styles.
         * See the navDrawer.html ojNavigationList for usage.
         * @param {Object} event Not used.
         * @param {Object} ui
         */
        self.navChange = function (event, ui) {
            if (ui.option === 'selection' && ui.value !== self.router.stateId()) {
                // Only toggle navigation drawer when it's shown on small screens
                if (self.smScreen())
                    self.toggleDrawer();
                self.router.go(ui.value);
            }
        };

        // Parameters used by toggleDrawer, and mdScreen below.
        self.drawerParams = {
            displayMode: 'push',
            selector: '#offcanvas',
        };
        /**
         * Toggles the nav drawer. Called by navigation drawer
         * toggle button and after the selection of a nav drawer item.
         */
        self.toggleDrawer = function () {
            return oj.OffcanvasUtils.toggle(self.drawerParams);
        };

        // Close the drawer for medium and up screen sizes
        self.mdScreen.subscribe(function () {
            oj.OffcanvasUtils.close(self.drawerParams);
        });
    }

    oj.Router.defaults['urlAdapter'] = new oj.Router.urlParamAdapter();
    oj.Router.sync().then(
            function () {

                // Bind the RootViewModel for the content of the whole page body.
                ko.applyBindings(new RootViewModel(), document.getElementById('globalBody'));
            },
            function (error) {
                oj.Logger.error('Error in root start: ' + error.message);
            }
    );
}
);


