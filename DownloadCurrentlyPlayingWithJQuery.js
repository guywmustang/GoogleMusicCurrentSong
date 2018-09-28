// ==UserScript==
// @name         Download Song on Google Music w/jQuery
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://play.google.com/music/listen*
// @require      https://code.jquery.com/jquery-3.3.1.slim.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.8/FileSaver.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var songTitle = "";
    var artistDiv = null;
    var songDiv = null;

    function getSongTitle() {


        if ($("#player-artist").is("div") !== null && $("#currently-playing-title").is("div")) {
            var artistText = $("#player-artist").text();
            var songText = $("#currently-playing-title").text();

            if (artistText && artistText.length > 0 && songText && songText.length > 0) {
                var song = artistText + " - " + songText;

                if (songTitle !== song) {
                  songTitle = song;
                  console.log("Downloading info: " + song);
                  var blob = new Blob([song], {type: "text/plain;charset=utf-8"});
                  saveAs(blob, "nowPlaying.txt");
                }
            }
        }
    }

    // Your code here...
    $(document).ready(function() {
        setInterval(getSongTitle, 5000);
    });
})();
