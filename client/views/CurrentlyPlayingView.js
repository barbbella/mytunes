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

  template: _.template('<h2>Now playing: <%= artist %> - <%= title %></h2>'),

  render: function(){
    var count = this.model.playCount();
    var vote = this.model.votes();
    return this.$el.html(this.template(this.model.attributes)
      + '<h3>Play Count: ' + count + '</h3>'
    );
  }

});
