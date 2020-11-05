
var express = require('express');
var router = express.Router();


let usersid = [
  {
    "id": 1,
    "username": "paulhal",
    "role": "admin"
  },
  {
    "id": 2,
    "username": "johndoe",
    "role": "guest"
  },
  {
    "id": 3,
    "username": "sarahjane",
    "role": "guest"
  }
];

router.get('/', (request, response) => {
  response.json(usersid);
});

router.get('/users/:id', (request, response) => {
  const accountId = Number(request.params.id);
  const getUser = usersid.find((account) => account.id === accountId);

  if (!getUser) {
    response.status(500).send('Account not found.')
  } else {
    response.json(getUser);
  }
});

router.post('/users/:id', (request, response) => {
  // newuserid = req.params.id;
  const newuserid = Number(request.params.id);
  const incomingUser = request.body;

  usersid.push(incomingUser);

  response.json(usersid);
});

router.put('/users/:id', (request, response) => {
  const newuserid = Number(request.params.id);
  const body = request.body;
  const account = usersid.find((account) => account.id === newuserid);
  const index = usersid.indexOf(account);

  if (!account) {
    response.status(500).send('Account not found.');
  } else {
    const updatedAccount = { ...account, ...body };

    usersid[index] = updatedAccount;

    response.send(updatedAccount);
  }
});

router.delete('/users/:id', (request, response) => {
  const newuserid = Number(request.params.id);
  const newusers = usersid.filter((account) => account.id != newuserid);

  if (!newusers) {
    response.status(500).send('Account not found.');
  } else {
    usersid = newusers;
    response.send(usersid);
  }
});
module.exports = router;