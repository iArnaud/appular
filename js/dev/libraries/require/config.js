/*
 * Dev Config Settings
 */
requirejs.config({
    baseUrl: '/js/dev',
    paths: {
        'jqueryLib': 'libraries/jquery/jquery-1.9.1',
        'jquery': 'libraries/jquery/jquery',
        'jqueryFunctions': 'libraries/jquery/functions',
        'underscoreLib': 'libraries/underscore/underscore-1.4.4',
        'underscore': 'libraries/underscore/underscore',
        'backboneLib': 'libraries/backbone/backbone-1.0.0',
        'backbone': 'libraries/backbone/backbone',
        'moment': 'libraries/moment/moment',
        'numeral': 'libraries/numeral/numeral',
        'domReady': 'libraries/require/plugins/domReady',
        'async': 'libraries/require/plugins/async',
        'json': 'libraries/require/plugins/json',
        'text': 'libraries/require/plugins/text'
    },
    deps: [
        'jqueryFunctions'
    ]
});