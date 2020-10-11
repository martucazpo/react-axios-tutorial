const router = require('express').Router();
const DataDemo = require('../models/DemoData');

router.get('/courses', (req, res) => {
    DataDemo.find((err, data) => {
        if (err) {
            console.log(err);
        } else {
         res.json(data);
        }
    });
});

router.post('/courses', (req, res) => {
    let {author, id, title, developer} = req.body;
    let dataDemo = new DataDemo({
        author, id, title, developer
    });
    dataDemo.save();
    res.sendStatus(200);
});

router.patch('/courses/:id', (req, res) => {
    let id = req.params.id;
    let { title } = req.body;
    console.log(title);
    DataDemo.findOneAndUpdate({ id : id}, { $set: {
        title
    }}, {new:true}, (err) => {
        if (err) {
            console.log(err);
        } else {
            res.sendStatus(200);
        }
    });
});

router.delete('/courses/:id', (req, res) => {
    let id = req.params.id;
    DataDemo.findOneAndDelete({id : id}, (err) => {
        if (err) {
            console.log(err);
        } else {
            res.sendStatus(200);
        }
    })
});

module.exports = router;