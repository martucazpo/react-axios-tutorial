const router = require('express').Router();
const DataDemo = require('../models/DemoData');
const data = require("../data.json");

router.get('/', (req, res) => {
    
    let newData = [...data];
    for (let i = 0; i < newData.length; i++) {
        let id = newData[i].id;
        let title = newData[i].title;
        let author = newData[i].author;
        let developer = newData[i].developer;
        let dataDemo = new DataDemo({
            id,
            title,
            author,
            developer
        });
        dataDemo.save();
    }
    res.sendStatus(200);
});

module.exports = router;