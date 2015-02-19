// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.playFirst(); // KATE

    //this.on('enqueue', function(song){
    //  console.log("did you get here?");
    //  this.push(song);
    //}, this);

    // listener for dequeue

    // listener for ended
    // ended runs playFirst again

    this.on('enqueue', this.enqueue, this);
  },
  playFirst: function(){

    // if this.at(0) exists
      // play it
      // remove it (use this.shift which also returns it to be played)
    // if it does not exist, do nothing

  },
  enqueue: function(song) {
    this.push(song);
  }



});