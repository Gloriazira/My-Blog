
var express = require('express');
var router = express.Router();


let postsId = [
  {
  "id": 1,
  "postitle": "Daily Inspiration",
  "postContent": "Always Believe you can do it"
},
{
  "id": 2,
  "postitle": "What Atiku told the Media",
  "postContent": "Atiku said that he will never give up on this presidential position"
}
];

//READ -read all
router.get('/', (request, response) => {
  response.json(postsId);
});

//READ -read one
router.get('/:id', (request, response) => {
  const newPostId = Number(request.params.id);
  const getPost = postsId.find((account) => account.id === newPostId);

  if (!getPost) {
    response.status(500).send('Account not found.')
  } else {
    response.json(getPost);
  }
});

//CREATE
router.post('/:id', (request, response) => {
  const incomingPost = request.body;

  postsId.push(incomingPost);

  response.json(postsId);
});

//UPDATE
router.put('/:id', (request, response) => {
  const newPostId = Number(request.params.id);
  const body = request.body;
  const account = postsId.find((account) => account.id === newPostId);
  const index = postsId.indexOf(account);

  if (!account) {
    response.status(500).send('Account not found.');
  }
  else {
    const updateposts = { ...account, ...body };
    postsId[index] = updateposts;
  response.send(updateposts);
  }
});

//DELETE
router.delete('/:id', (request, response) => {
  const newPostId = Number(request.params.id);
  const newPost = postsId.filter((account) => account.id != newPostId);

  if (!newPost) {
    response.status(500).send('Account not found.');
  } else {
    postsId = newPost;
    response.send(postsId);
  }
});
module.exports = router;