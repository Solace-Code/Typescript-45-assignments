// Assignment 39 Album //
// Creating a fuction to take in information //
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Create three different albums //
var album1 = make_album("Artist1", "Album1");
var album2 = make_album("Artist2", "Album2", 10); // Including number of tracks
var album3 = make_album("Artist3", "Album3");
// Print each album //
console.log(album1);
console.log(album2);
console.log(album3);
