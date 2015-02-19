var should = require('should'),
	Backbone = require('backbone'),
	View = require('../')

describe('View', function(){
    beforeEach(function() {
        this.view = new View()
        this.collection = new Backbone.Collection([
                {name: 'bar0'},
                {name: 'bar1'},
                {name: 'bar2'}
            ])
    })

    it('Should build a select', function(){
        // no outerHTML here for some reason, so we take a roundabout route
        this.view.$el.children().should.have.lengthOf(0)
    })

    it('addOption() text', function(){
        var m = new Backbone.Model({name: 'bar'})
        this.view.addOption(m)
        this.view.$el.children().text().should.equal('bar')
        this.view.$el.children().val().should.equal(m.cid)
    })

    it('addOption() val', function(){
        var m = new Backbone.Model({id: 'foo', name: 'bar'})
        this.view.addOption(m)

        this.view.$el.children().val().should.equal('foo')
    })
    
    it('addOption() val when blank', function(){
        var m = new Backbone.Model({name: 'bar'})
        this.view.addOption(m)

        this.view.$el.children().val().should.equal(m.cid)
    })

    it('colleciton should auto populate', function(){
        this.view.setCollection(this.collection)
        
        this.view.$el.children().eq(0).text().should.equal('bar0')
        this.view.$el.children().eq(1).text().should.equal('bar1')
        this.view.$el.children().eq(2).text().should.equal('bar2')
    })
    
    it('filter', function(){
        this.view.setCollection(this.collection)
        this.view.addFilter('foo', function(model) {
            return model.get('name') !== 'bar2'    
        })  

        this.view.$el.children().should.have.lengthOf(2)
    })
})
