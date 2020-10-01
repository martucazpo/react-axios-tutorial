const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8000;

const data = require('./data.json');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/courses', (req, res) => {
    res.send(data);
});

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
