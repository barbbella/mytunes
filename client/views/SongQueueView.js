// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "queueTable",      // Kate: added tagName, updated libraryTable name

  initialize: function() {
    this.render();            // Kate

    this.collection.on('enqueue', function(){
      this.render();
    }, this);

  },

  //render: function() {           ORIGINAL FROM REPO
  //  return this.$el;
  //}

  // CODE BELOW FROM LIBRARYVIEW
  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
