const router = require('express').Router(); // eslint-disable-line new-cap
const NounProject = require('the-noun-project');
const apiConfig = require('./api.json');
const AWS = require('aws-sdk');

AWS.config.update({
  accessKey: apiConfig.s3key,
  secretAccessKey: apiConfig.s3secret,
  region: apiConfig.region,
});

const cors = require('cors');


const nP = new NounProject({
  key: apiConfig.npkey,
  secret: apiConfig.npsecret,
});

router.use(cors());

router.post('/upload', (req, res) => {
  console.log(req.body);
  res.status(200);
});

router.get('/art', (req, res) => {
  const { term } = req.query;
  nP.getIconsByTerm(term, { limit: 20 }, (err, data) => {
    if (err) res.status(400).json(err);
    res.status(200).json(data);
  });
});

module.exports = router;
