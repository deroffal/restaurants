const Restaurant = require('../models/Restaurant');

exports.get = (req, res) => {
    Restaurant.findOne({restaurant_id: req.query.id})
        .then((restaurant) => onSuccess(restaurant, res))
        .catch((error) => onError(error, res));
};

exports.list = (req, res) => {
    let query = req.query;

    let restaurantQuery = ['name', 'borough', 'cuisine']
        .filter((param) => typeof query[param] != 'undefined')
        .reduce((accumulator, param) => ({
            ...accumulator,
            [param]: query[param]
        }), {});


    Restaurant.find(restaurantQuery)
        .then((restaurant) => onSuccess(restaurant, res))
        .catch((error) => onError(error, res));
};


function onSuccess(restaurant, res) {
    return res.status(200).json(restaurant);
}

function onError(error, res) {
     console.error(error);
    return res.status(404).json({error: error});
}