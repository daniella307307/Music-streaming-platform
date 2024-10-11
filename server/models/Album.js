const mongoose = require('mongoose')
const Schema = mongoose.Schema;

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
      }
})

module.exports = mongoose.model('Album', AlbumSchema);