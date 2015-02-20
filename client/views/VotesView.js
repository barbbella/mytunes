var VotesView = Backbone.View.extend({

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

  render: function(){
    // var count = this.model.playCount();
    // var vote = this.model.votes();
    return this.$el.html('<input type="image" src="views/images/thumbsUp.jpg"/>');
  }

});