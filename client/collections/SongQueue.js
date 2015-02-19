// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  },
  playFirst: function(){
    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(this.at(0));
    }, this);


  }

});