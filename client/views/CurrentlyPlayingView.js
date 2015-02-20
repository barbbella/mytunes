var CurrentlyPlayingView = Backbone.View.extend({

  tagName: 'div',

  initialize: function() {
    if (this.model) {
      this.render();
    }
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  template: _.template('<i>Now playing: <%= artist %> - <%= title %></i>'),

  render: function(){
    var count = this.model.playCount();
    var vote = this.model.votes();
    return this.$el.html(this.template(this.model.attributes)
      + '<br><br><i>Play Count: ' + count + ' Votes: ' + vote + '</i>'

    );
  }

});
