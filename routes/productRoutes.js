const express = require('express');
const formidable = require('express-formidable');
const {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productPhotoController,
  updateProductController,
} = require('../controllers/productController');
const { isAdmin, requireSignIn } = require('../middlewares/authMiddleware');

const router = express.Router();

// routes
router.post(
  '/create-product',
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

router.put(
  '/update-product/:pid',
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

// get products
router.get('/get-product', getProductController);

// single product
router.get('/get-product/:slug', getSingleProductController);

// get photo
router.get('/product-photo/:pid', productPhotoController);

// delete product
router.delete('/product/:pid', requireSignIn, isAdmin, deleteProductController);

module.exports = router;
