
$(document).ready(function() {

    // Use jQuery to get a reference to `load-songs`
    const loadSongs = $("#load-songs")
    // Use jQuery to get a reference to `song-list`
    const songList = $("#song-list")

    /*
        Attach a click handler to the button with jQuery. When
        the button is clicked, use $.ajax() to load `songs.json`
        from the file system
        */
    $("#load-songs").click( () => {
        $.ajax(songs.json).then(
        
        const songSection = $("<section>").addClass("song")
        const hOne = $("<h1>").addClass("song_title").text(song.title)
        const newSection = $("<section>").addClass("song_description")
        hOne.appendTo(songSection)
        newSection.appendTo(songSection)
    }
    


    /*
        Chain a `.then()` method to the ajax call, and when
        it is complete build a DOM component for each song with
        the following structure. Use the jQuery append() method
        to put an HTML representation of each song the DOM as a
        child component of the .

            <section class="song">
                <h1 class="song__title">{Title of song}</h1>
                <section class="song__description">
                    Performed by {artist} on the album {album}
                </section>
            </section>
    */
})