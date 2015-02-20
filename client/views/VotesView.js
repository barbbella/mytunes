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

  events: {
    'click #upVote': function() {
      this.model.upvote();
      this.render();
    },
    'click #downVote': function() {
      this.model.downvote();
      this.render();
    }
  },

  render: function(){
    var vote = this.model.votes();
    var html = [
      '<input id=upVote type="image" src="views/images/thumbsUp.png"/>',
      '<input id=downVote type="image" src="views/images/thumbsDown.png"/>',
      '<br/>',
      '<h2> Votes: ' + vote + '</h2>'
      ].join('');
    // var count = this.model.playCount();
    // var vote = this.model.votes();
    return this.$el.html(html);
  }

});