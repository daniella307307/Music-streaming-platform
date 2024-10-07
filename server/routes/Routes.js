const express = require('express')
const UserController = require('../controllers/UserController')
const router = express.Router();

router.post('/', UserController.login);
router.post('/signup', UserController.register)
router.delete('/delete/:id', UserController.delete_user)
router.post('/logout', UserController.logout);

module.exports = router;