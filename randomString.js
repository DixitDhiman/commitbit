var express = require('express');
var router = express.Router();
var RandomString = require('./models/randomString');


router.get("/api/randomString", (req, res) => {
  const { skip = '0', limit = 10, sortKey = 'created_at', sortBy = -1, search = '' } = req.query;
  let sortQuery = {};
  sortQuery[sortKey] = sortBy;

  RandomString
    .find({ isDeleted: false })
    .sort(sortQuery)
    .skip(Number(skip))
    .limit(limit)
    .exec((error, results) => {
      if (error) console.log("Error : ", error);
      res.status(200).send({ data: results });
    });
});


router.post("/api/randomString", (req, res) => {
  console.log("Request data : ", req.body);
  const jsonData = req.body;  /* Uncommmented when data stream from front end */
  // const jsonData = {
  //   name: 'type1',
  //   type: 'strin Type'
  // }
  RandomString(jsonData).save((error, results) => {
    if (error) console.log("Error : ", error);
    res.status(200).send({ data: results });
  });
});


module.exports = router;