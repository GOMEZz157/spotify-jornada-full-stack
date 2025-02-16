import {artistArray} from "../../front-end/src/assets/database/artists.js"
import {songsArray} from "../../front-end/src/assets/database/songs.js"
import { db } from "./connect.js";

const newArtistArray = artistArray.map((currentArtistObj, index) => {
    const newArtistObj = {...currentArtistObj};
    delete newArtistObj.id

    return newArtistObj;
})

const newSongsArray = songsArray.map((currentSongsObj, index) => {
    const newSongsArray = {...currentSongsObj};
    delete newSongsArray.id

    return newSongsArray;
})

const responseSongs = await db.collection("songs").insertMany(newSongsArray)
const responseArtists = await db.collection("artists").insertMany(newArtistArray)

console.log(responseArtists)
console.log(responseSongs)

// console.log(newArtistArray)