// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    //this.playFirst(); // KATE


    this.on('enqueue', this.enqueue, this);
    this.on('enqueue', this.playFirst, this);
  },
  playFirst: function(){
    console.log(this.at(0));
    // if (this.at(0)) {
    if (this.at(0)) {
      var song = this.at(0);
      song.play();
      //this.model.play();
      this.dequeue();
    }

      // this.model.dequeue()
    // if it does not exist, do nothing

  },
  enqueue: function(song) {
    this.push(song);
  },

  dequeue: function(song) {
    this.remove(song);
  }



});