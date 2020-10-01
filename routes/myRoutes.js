const router = require('express').Router();
//const data = require('../data.json');
const DataDemo = require('../models/DemoData');

router.get('/courses', (req, res) => {
    DataDemo.find((err, data) => {
        if (err) {
            console.log(err);
        } else {
         res.send(data);
        }
    });
});

// router.get('/addData', (req, res) => {
//     let data = [{
//             "id": 1,
//             "title": "Axios React",
//             "author": "Adrian Twarog",
//             "developer": "Mr. Pipes"
//         },
//         {
//             "id": 2,
//             "title": "Blah, blah, React Native",
//             "author": "Adrian Twarog"
//         },
//         {
//             "id": 3,
//             "title": "Some Axios Javascript Thingy",
//             "author": "Adrian Twarog"
//         }];
//     let newData = [...data];
//     for (let i = 0; i < newData.length; i++) {
//         let id = newData[i].id;
//         let title = newData[i].title;
//         let author = newData[i].author;
//         let developer = newData[i].developer;
//         let dataDemo = new DataDemo({
//             id,
//             title,
//             author,
//             developer
//         });
//         dataDemo.save();
//     }
//     res.sendStatus(200);
// });

module.exports = router;