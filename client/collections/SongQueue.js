// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    //this.playFirst(); // KATE

    this.on('enqueue', this.enqueue, this);
    //this.on('enqueue', this.playFirst, this);
    this.on('dequeue', this.dequeue, this);
    this.on('ended', this.dequeue, this);
    this.on('ended', this.playFirst, this);
  },

  playFirst: function(){
    if (this.at(0)) {
      this.at(0).play();
    }
  },

  enqueue: function(song) {
    this.push(song);
    if (this.length === 1) {
      this.playFirst();
    }
  },

  dequeue: function(song) {
    this.remove(song);
  }




});