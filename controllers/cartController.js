//const Cart = require("../models/cartModel");
//const product = require("../models/productModel");
const user = require("../models/userModel");

// GET /cart
exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate('items.product');
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// // POST /cart
// exports.addToCart = async (req, res) => {
//   const { productId, quantity } = req.body;
//   try {
//     let cart = await Cart.findOne({ user: req.user._id });
//     if (!cart) {
//       cart = new Cart({ user: req.user._id, items: [] });
//     }

//     const itemIndex = cart.items.findIndex(item => item.product.equals(productId));
//     if (itemIndex > -1) {
//       cart.items[itemIndex].quantity += quantity;
//     } else {
//       cart.items.push({ product: productId, quantity });
//     }

//     await cart.save();
//     res.status(200).json(cart);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };
const Cart = require("../models/cartModel");
const Product = require("../models/productModel"); // Import Product model

// POST /cart
exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    let cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      cart = new Cart({ user: req.user._id, items: [] });
    }

    const itemIndex = cart.items.findIndex(item => item.product.equals(productId));
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ product: productId, quantity });
    }

    await cart.save();

    // Fetch product details to return with response
    const productDetails = await Product.findById(productId);

    res.status(200).json({  product: productDetails }); // Include product details in the response
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};


//const Cart = require('../models/cart'); // Import your Cart model

exports.removeFromCart = async (req, res) => {
  const productId = req.params.id; // Product ID from URL parameter

  try {
    // Find the cart where the product with given ID exists
    const cart = await Cart.findOne({ 'items.product': productId });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    // Find the item index in the cart.items array
    const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);

    if (itemIndex === -1) {
      return res.status(404).json({ message: 'Item not found in cart' });
    }

    // Remove the item from the cart.items array
    cart.items.splice(itemIndex, 1);
    await cart.save();

    res.status(200).json({ message: 'Item removed from cart successfully', cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
