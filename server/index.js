const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoDb= require('./config/MongoDb')
const router = require ("./routes/Routes")
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());         
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1", router);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
