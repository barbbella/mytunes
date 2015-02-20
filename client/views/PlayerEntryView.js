var PlayerEntryView = Backbone.View.extend({

  tagName: 'div',

  template: _.template('<h3>(<%= artist %>)</h3><h3><%= title %></h3>'),

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});