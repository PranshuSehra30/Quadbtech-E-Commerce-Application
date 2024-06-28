const express = require('express');
const router = express.Router();
const { getCart, addToCart, removeFromCart } = require('../controllers/cartController');

const { requireSignIn } = require('./../middlewares/authMiddleware.js');
// Route to retrieve the user's shopping cart
router.get('/', requireSignIn, getCart);

// Route to add an item to the cart
router.post('/', requireSignIn, addToCart);

// Route to remove an item from the cart
router.delete('/:id', requireSignIn, removeFromCart);

module.exports = router;
