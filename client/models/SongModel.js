// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function() {
    this.set('votes', 0);
    this.set('timesPlayed', 0);
  },

  play: function(){
    this.trigger('play', this);
    this.played();
  },

  enqueue: function() {
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  },

  ended: function() {
    this.trigger('ended', this);
  },

  // voting & counting
  votes: function() {
    return this.get('votes');
  },

  playCount: function() {
    return this.get('timesPlayed');
  },

  upvote: function() {
    var currentVotes = this.votes();
    currentVotes+=1;
    this.set('votes', currentVotes);
  },

  downvote: function(){
    var currentVotes = this.votes();
    currentVotes-=1;
    this.set('votes', currentVotes);
  },

  played: function() {
    var currentCount = this.playCount();
    currentCount+=1;
    this.set('timesPlayed', currentCount);
  }

});
