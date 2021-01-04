const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
  restaurant_id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String
  },
  borough: {
    type: String
  },
  cuisine: {
    type: String
  },
});


module.exports = mongoose.model('restaurants', restaurantSchema);
