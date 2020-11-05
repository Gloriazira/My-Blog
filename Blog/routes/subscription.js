var express = require('express');
var router = express.Router();


var subs = [
  {
    id:1, 
    subscription:"user1 subscribed"
  },
  {
    id:2, 
    subscription:"user2 subscribed"
  },
  {
    id:3, 
    subscription:"user3 subscribed"
  }
];

//READ - read all
router.get('/', function(req, res, next) {
  res.json(subs);
});

//READ -read one
router.get('/:id', (request, response) => {
  const newSubs = Number(request.params.id);
  const getSubs = subs.find((account) => account.id === newSubs);

  if (!getSubs) {
    response.status(500).send('Account not found.')
  } else {
    response.json(getSubs);
  }
});

//CREATE
router.post('/:id', function(req, res, next) {
  subId = req.params.id;
  var newSubscription = req.body;
  subs.push(newSubscription)
  res.json(subs);
});

//UPDATE
router.put('/:id', function(req, res, next) {
  updatesubs = req.body;
  subId = req.params.id;
  subs.forEach(subs => {
    if (subs.id === parseInt(subId)){
      subs.subscription = updatesubs.subscription;
    }
  });
  res.json(subs);
});

//DELETE
router.delete('/:id', function(req, res, next) {
  res.json(subs.filter(subs => subs.id !== parseInt(req.params.id)));
});
module.exports = router;