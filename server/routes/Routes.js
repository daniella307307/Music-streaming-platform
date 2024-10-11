const express = require('express');
const UserController = require('../controllers/UserController');
const albumController = require('../controllers/albumController')
const router = express.Router();

router.post('/login', UserController.login);
router.post('/signup', UserController.register);
router.delete('/delete/:id', UserController.delete_user);
router.post('/logout', UserController.logout);
// Get all albums
router.get('/getAll', albumController.getAlbums);

// Get album by ID
router.get('/:id', albumController.getAlbumById);

// Create new album
router.post('/', albumController.createAlbum);

// Update album by ID
router.put('/:id', albumController.updateAlbum);

// Delete album by ID
router.delete('/:id', albumController.deleteAlbum);

module.exports = router;
