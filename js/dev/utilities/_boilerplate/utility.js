define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {

    var View = Backbone.View.extend({

        events: {},

        initialize: function () {},

        render: function () {
            return this;
        }

    });

    return new View();
});