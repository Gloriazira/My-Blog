var express = require('express');
var router = express.Router();


var categories = [
  {
    id:1, 
    category:"fashion"
  },
  {
    id:2, 
    category:"Business"
  },
  {
    id:3, 
    category:"Agriculture"
  }
];

//READ - read all
router.get('/', function(req, res, next) {
  res.json(categories);
});

//READ -read one
router.get('/:id', (request, response) => {
  const newCats = Number(request.params.id);
  const getCategories = categories.find((account) => account.id === newCats);

  if (!getCategories) {
    response.status(500).send('Account not found.')
  } else {
    response.json(getCategories);
  }
});

//UPDATE
router.post('/:id', function(req, res, next) {
  catId = req.params.id;
  var newCats = req.body;
  categories.push(newCats)
  res.json(categories);
});

//UPDATE
router.put('/:id', function(req, res, next) {
  var updateCategories = req.body;
  catId = req.params.id;
  categories.forEach(categoryy => {
    if (categoryy.id === parseInt(catId)){
      categoryy.category = updateCategories.category;
    }
  });
  res.json(categories);
});

//DELETE
router.delete('/:id', function(req, res, next) {
  res.json(
    categories.filter(
      categoryy => categoryy.id !== parseInt(req.params.id
      )
    )
  );
});
module.exports = router;