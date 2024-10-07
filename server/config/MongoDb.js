const mongoose = require('mongoose');

// Connect to MongoDB
const conn = mongoose.connect("mongodb://localhost:27017/Music", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Error connecting to MongoDB:', error));


module.exports = {
    conn
}
