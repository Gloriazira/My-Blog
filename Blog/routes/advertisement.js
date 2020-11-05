var express = require('express');
var router = express.Router();

let adverts = [
  {
    "id": 1,
    "adtitle": "Jumia Bonanza",
    "addate": "15/11/2020",
    "addescription":"Buy Jumia Products with 90% discount",
    "adcompany": "Jumia",

  },
  {
    "id": 2,
    "adtitle": "Jumia Bonanza",
    "addate": "15/11/2020",
    "addescription":"Buy Jumia Products with 90% discount",
    "adcompany": "Jumia",

  }
]

//READ -read all
router.get('/', function(req, res) {
  res.json(adverts);
});

//READ -read one
router.get('/:id', (request, response) => {
  const newAdvert = Number(request.params.id);
  const getAdvert = adverts.find((account) => account.id === newAdvert);

  if (!getAdvert) {
    response.status(500).send('Account not found.')
  } else {
    response.json(getAdvert);
  }
});

//CREATE
router.post('/:id', function(req, res, next) {
  advertId = req.params.id;
  var newAdvert = req.body;
  subs.push(newAdvert)
  res.json(adverts);
});

//UPDATE
router.put('/:id', function(req, res, next) {
  updateadverts = req.body;
  advertId = req.params.id;
  adverts.forEach(newAdvert => {
    if (newAdvert.id === parseInt(advertId)){
      adverts.advertisement = updateAdvert.advertisement;
    }
  });
  res.json(adverts);
});

//DELETE
router.delete('/:id', function(req, res, next) {
  res.json(adverts.filter(newAdvert => newAdvert.id !== parseInt(req.params.id)));
});

module.exports = router;