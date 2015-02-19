// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // ALL CODE IS KATE'S

  tagName: 'tr',    // row tag

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'), // same as libraryentryview

  events: {                    // same as libraryentryview
    'click': function() {
      this.model.dequeue();             // KATE
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));  // same as libraryentryview
  }




});
