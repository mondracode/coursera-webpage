(function (window){

  // DO NOT attach the speakWord variable to the 'byeSpeaker' object.
  var speakWord = "Good Bye";

  var byeSpeaker= {
    speak : function (name) {
      console.log(speakWord + " " + name);
    }
  };

  
  window.byeSpeaker = byeSpeaker;

})(window);

