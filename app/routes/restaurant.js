const express = require('express');
const router = express.Router();

const controller = require('../controllers/RestaurantController');

router.get('/', controller.get);
router.get('/list/', controller.list);

module.exports = router;