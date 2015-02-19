var Backbone = require('backbone'),
    ChildView = require('backbone-collectionview').childView

module.exports = ChildView.extend({
    valueField: 'name',
    tagName: 'option',
    render: function() {
        this.$el.val(this.model.id || this.model.cid)
        this.$el.text(this.model.get(this.valueField))
    }
})
