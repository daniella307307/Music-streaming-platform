const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const trackSchema = new mongoose.Schema({
    title: String,
    url: String, // URL to the audio file
  });
  
const AlbumSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    coverImageUrl:{
        type: String,
        required: true
    },
    releaseDate: {
        type: Date,
        default: Date.now
      },
      artist: {
        type: String,
        required: true
      },
      tracks:[trackSchema], 
})

module.exports = mongoose.model('Album', AlbumSchema);