// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // ALL CODE IS KATE'S

  tagName: 'tr',    // row tag

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'), // same as libraryentryview

  // CODE BELOW FROM LIBRARYENTRYVIEW
  //events: {
  //  'click': function() {
  //    this.model.play();
  //  }
  //},

  render: function(){
    return this.$el.html(this.template(this.model.attributes));  // same as libraryentryview
  }




});
