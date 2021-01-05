const {Router} = require('express');
const {query, oneOf} = require('express-validator');
const val = require('express-validator');
const router = Router();


const controller = require('../controllers/RestaurantController');

router.get(
    '/',
    query('id').isNumeric(),
    controller.get
);

router.get(
    '/list/',
    [
        query('name').optional().isString(),
        query('borough').optional().isString(),
        query('cuisine').optional().isString()
    ],
    controller.list
)
;

module.exports = router;
