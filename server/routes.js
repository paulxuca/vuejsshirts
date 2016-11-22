const router = require('express').Router(); // eslint-disable-line new-cap
const NounProject = require('the-noun-project');
const cors = require('cors');

const config = require('./config');



const nP = new NounProject({
  key: config.np.key,
  secret: config.np.secret,
});

router.use(cors());

router.get('/art', (req, res) => {
  const { term } = req.query;
  nP.getIconsByTerm(term, { limit: 20 }, (err, data) => {
    if (err) res.status(400).json(err);
    res.status(200).json(data);
  });
});

module.exports = router;
