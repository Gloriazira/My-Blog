var express = require('express');
var router = express.Router();

//Declaring an array
var reactions = [
  {
    "id": 1, 
    "postName":"Fashion",
    "reactionLike": "1900",
    "reactionUnlike": "300"
  },
  {
  "id": 2, 
  "postName":"Adverts",
  "reactionLike": "200",
  "reactionUnlike": "0"
}
];

//READ - read all
router.get('/', function(req, res) {
  res.json(reactions);
});

//READ -read one
router.get('/:id', (request, response) => {
  const newReaction = Number(request.params.id);
  const getReactions = reactions.find((account) => account.id === newReaction);

  if (!getReactions) {
    response.status(500).send('Account not found.')
  } else {
    response.json(getReactions);
  }
});

//CREATE
router.post('/:id', function(req, res) {
  likeId = req.params.id;
  var newReaction = req.body;
  reactions.push(newReaction);
  res.json(reactions);
});

//UPDATE
router.put('/:id', function(req, res) {
  var updateReactions = req.body;
  likeId = req.params.id;
  reactions.forEach(react => {
    if (react.id === parseInt(likeId)){
      react.num = updateReactions.num;
    }
  });
  res.json(reactions);
});

//DELETE
router.delete('/:id', function(req, res) {
  res.json(
    reactions.filter(
      react => react.id !== parseInt(req.params.id
      )
    )
  );
});
module.exports = router;