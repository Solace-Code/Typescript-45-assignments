// Assignment 39 Album //

// Objective Create a object storing basic information of the album and print it out //

// Creating an object //

interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

// Creating a fuction to take in information //

function make_album(artist: string, title: string, tracks?: number): Album {
    const album: Album = {
        artist: artist,
        title: title
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Create three different albums //

const album1 = make_album("Artist1", "Album1");
const album2 = make_album("Artist2", "Album2", 10); // Including number of tracks
const album3 = make_album("Artist3", "Album3");

// Print each album //

console.log(album1);
console.log(album2);
console.log(album3);
