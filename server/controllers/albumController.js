const Album = require('../models/Album');

// Get all albums
exports.getAlbums = async (req, res) => {
  try {
    const albums = await Album.find();
    res.status(200).json(albums);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get album by ID
exports.getAlbumById = async (req, res) => {
  try {
    const album = await Album.findById(req.params.id);
    if (!album) {
      return res.status(404).json({ message: 'Album not found' });
    }
    res.status(200).json(album);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Create new album
exports.createAlbum = async (req, res) => {
  const { name, coverImageUrl, artist } = req.body;
  
  if (!name || !coverImageUrl || !artist) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newAlbum = new Album({
      name,
      coverImageUrl,
      artist,
    });
    const savedAlbum = await newAlbum.save();
    res.status(201).json(savedAlbum);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Update album by ID
exports.updateAlbum = async (req, res) => {
  try {
    const updatedAlbum = await Album.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedAlbum) {
      return res.status(404).json({ message: 'Album not found' });
    }

    res.status(200).json(updatedAlbum);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Delete album by ID
exports.deleteAlbum = async (req, res) => {
  try {
    const deletedAlbum = await Album.findByIdAndDelete(req.params.id);
    if (!deletedAlbum) {
      return res.status(404).json({ message: 'Album not found' });
    }
    res.status(200).json({ message: 'Album deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.getTrackById = async(req,res) =>{
    try{
        const album = await Album.findById(req.params.albumId);
        if(!album){
            return res.status(404).json({message: 'Album not found'});
        }
        const track = album.tracks.id(req.params.trackId);
        if(!track){
            return res.status(404).json({message: 'Track not found'});
        }
        res.status(200).json(track);
    }catch(error){
        res.status(500).json({message: 'Server error', error});
    }
}
