const mongodb = require('../db/connect');

const getAllData = async (req, res, next) => {
  const result = await mongodb.getDb().db('data').collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingleData = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('data').collection('contacts').find({_id: userId});
  console.log(result)
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

module.exports = { getAllData, getSingleData };