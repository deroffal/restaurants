const Restaurant = require('../models/Restaurant');

exports.get = (req, res, next) => {
  Restaurant.findOne({
      restaurant_id: req.query.id
    })
    .then((restaurant) => {
      res.status(200).json(restaurant)
    })
    .catch((error) => {
      res.status(404).json({
        error: error
      })
    });
};

exports.list = (req, res, next) => {
  let query = req.query;

  let restaurantQuery = ['name', 'borough', 'cuisine']
    .filter((param) => typeof query[param] != 'undefined')
    .reduce((accumulator, param) => ({
      ...accumulator,
      [param]: query[param]
    }), {});


  Restaurant.find(restaurantQuery)
    .then((restaurant) => {
      res.status(200).json(restaurant)
    })
    .catch((error) => {
      res.status(404).json({
        error: error
      })
    });
};
