const router = require('express').Router();

// We are using hardcoded data here, where would our data usually come from? Remember - we haven't yet set up a database or Sequelize in our app.
const dishes = [
  {
    id: 1,
    dish_name: 'why is MvC so important',
    description: 'MVC allows developers to maintain a true separation of concerns, devising their code between the model layer for data, the view layer for design, and the controller layer for application logic. ',
    has_nuts: false
  },
  {
    id: 2,
    dish_name: 'Authentication vs Authorization',
    description:
      'there is a difference between authentication and authoriztion Authentication means confirming your own identity, whereas authoriztion means being allowed acess to system',
    has_nuts: true
  },
  {
    id: 3,
    dish_name: 'Object related maping ',
    description:
      'I have really loved learning about orm its really somplified the way i create quesries in SQL!',
    has_nuts: false
  },

  
];

// get all dishes
router.get('/', async (req, res) => {
  res.render('all', { dishes });
});

// get one dish
router.get('/dish/:num', async (req, res) => {
  return res.render('dish', dishes[req.params.num - 1]);
});

router.get('/login', async (req, res) => {
    res.render('login');
  });
module.exports = router;
