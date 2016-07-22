/**
 * config for debug libraries
 */

requirejs.config({
  // Path mappings for the logical module names
  paths: {
    'knockout': 'libs/knockout/knockout-3.4.0.debug',
    'jquery': 'libs/jquery/jquery-2.1.3',
    'jqueryui-amd': 'libs/jquery/jqueryui-amd-1.11.4',
    'ojs': 'libs/oj/v2.0.2/debug',
    'ojL10n': 'libs/oj/v2.0.2/ojL10n',
    'ojtranslations': 'libs/oj/v2.0.2/resources',
    'signals': 'libs/js-signals/signals',
    'text': 'libs/require/text',
    'promise': 'libs/es6-promise/promise-1.0.0',
    'hammerjs': 'libs/hammer/hammer-2.0.4',
    'ojdnd': 'libs/dnd-polyfill/dnd-polyfill-1.0.0'
  },
  // Shim configurations for modules that do not expose AMD
  shim: {
    'jquery': {
      exports: ['jQuery', '$']
    }
  }
});
