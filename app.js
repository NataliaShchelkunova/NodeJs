const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");

app.listen(process.env.PORT);
const port = process.env.PORT || 8000;

const apiRoutes = require('./src/modules/routes/routes');

app.use(cors());

const url = "mongodb+srv://User:Restart987@cluster0.mttvv.mongodb.net/TestDB?retryWrites=true&w=majority";
mongoose.connect(url);

app.use(express.json());
app.use('/', apiRoutes);

app.listen(port, () => {
  console.log('Example app listening on ' + port);
});
