
$(document).ready(function() {

    // Use jQuery to get a reference to `load-songs`
    const loadSongs = $("#load-songs")
    loadSongs.text("Load Songs")
    // Use jQuery to get a reference to `song-list`
    const songList = $("#song-list")
 

        

    loadSongs.click(() => { // add click event handler to load button
        $.ajax("songs.json") // make API call to "songs.json file"
            .then(responseFromSongsJS => {
                // loop through parameter object (songs) and return the array of data
                for (let i in responseFromSongsJS) {
                    
                    responseFromSongsJS[i].forEach(song => {
                       
                        let songSection = $("<section>");
                        songSection.attr("class", "song");
                        // creates <h1> element. sets class and text song name
                        let hOne = $("<h1>");
                        hOne.attr("class", "song_title");
                        hOne.text(`${song.title}`);
                        
                        let newSection = $("<section>");
                        newSection.attr("class", "song_description")
                        newSection.text(`Performed by ${song.artist} on the album ${song.album}`);
                        
                        hOne.appendTo(songSection);
                        newSection.appendTo(songSection);
                        
                        songSection.appendTo(songList);
                    });
                }
            })
    });

});
   

