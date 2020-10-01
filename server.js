if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(routes);

mongoose.connect(process.env.DATABASE_URI || MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  },
  () => {
    console.log('The mon(goose) is on the loose');
  });

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
