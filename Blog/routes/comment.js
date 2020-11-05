var express = require('express');
var router = express.Router();


var comments = [
  {
    id:1,
    content:"wow!"
  },
  {
    id:2,
    content:"I Love this!"
  },
  {
    id:3,
    content:"Nice one!"
  },
]

//READ - read all
router.get('/', function(req, res, next) {
  res.json(comments);
});

//READ -read one
router.get('/:id', (request, response) => {
  const newComment = Number(request.params.id);
  const getComment = comments.find((account) => account.id === newComment);

  if (!getComment) {
    response.status(500).send('Account not found.')
  } else {
    response.json(getComment);
  }
});

//CREATE
router.post('/:id', function(req, res, next) {
  commentId = req.params.id;
  var newComment = req.body;
  comments.push(newComment);
  res.json(comments);
});

//UPDATE
router.put('/:id', function(req, res, next) {
  var updatecomments = req.body;
  commentId = req.params.id;
  comments.forEach(comment => {
    if (comment.id === parseInt(commentId)){
      comment.content = updatecomments.content;
    }
  });
  res.json(comments);
});

//DELETE
router.delete('/:id', function(req, res, next) {
  res.json(
    comments.filter(
      comment => comment.id !== parseInt(req.params.id
        )
        )
        );
});


module.exports = router;