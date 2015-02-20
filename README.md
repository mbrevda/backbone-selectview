# SelectView
**SelectView** is a [Backbone.js](http://backbonejs.org/) view that provides full 
lifecycle support for a colleciton-backed select item, including autorendering of children elements.
It also adds **sorting, filtering, and pagination**. It remains 
simple, fluent, and idiomatic by relying on [KinView](https://github.com/mbrevda/backbone-kinview)
for the underlying view management.

# Installation

SelectView has been designed to `require`'d by [browserify](http://browserify.org/),
and is currently only supported in that environment. To install:

```
npm install backbone-collectionview --save
```

# Code

## CI
SelectView continuous integrations is handled by Wercker:
[![wercker status](https://app.wercker.com/status/171dca4520f12b89235931894ea23b00/s "wercker status")](https://app.wercker.com/project/bykey/171dca4520f12b89235931894ea23b00)

## Testing
SelectView maintains 100% test coverage. To manually run the tests, install with with --dev (as above) and run:

```
gulp testc
```

You can generate a HTML code coverage report by appending the `--html` switch

## Issues
Issues can be opened in the [usual location](https://github.com/mbrevda/backbone-selectview/issues), pull requests welcome!

# Usage
 
## Getting started
Getting started with SelectView is as simple as creating a new Backbone view:

```js
var SelectView = require('backbone-selectview')

var table = SelectView.extend({
    // regular Backbone.View opts here
})

```

Passing a collection to the view will allow the view to auto-append all items of the collection to the table and manage their lifecycle including adding items as they get added to the collection, appending the items to the table, and cleaning up when the child view is removed. To pass a collection to the table:

```js
var SelectView = require('backbone-collectionview')

var table = SelectView.extend({
    collection: new Backbone.Collection([/* models */])
    // regular Backbone.View opts here
})
```
note: `view.setCollection(collection)` can also be called to (re)set the views collection

## Filtering/Sorting/Pagination

SelectView has built in support for filtering the collection data appended to the view.
Please see [backbone-collection](https://github.com/mbrevda/backbone-collectionview#filtering--sorting)
for the full api
