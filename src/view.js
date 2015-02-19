var Backbone = require('backbone'),
    _ = require('underscore'),
    CollectionView = require('backbone-collectionview'),
    OptionView = require('./optionView.js')

module.exports = CollectionView.extend({
    childView: OptionView,
    tagName: 'select',
    //constructor: CollectionView,
    addOption: function(model) {
        return this.addChild(model)
    }
})
