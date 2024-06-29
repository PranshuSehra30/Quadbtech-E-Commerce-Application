const express = require('express');
const formidable = require('express-formidable');
const {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productPhotoController,
  updateProductController,
  productCountController,
  productFiltersController,
  productListController,
  productCategoryController,
  searchProductController,
  relatedProductController,
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
router.delete('/delete-product/:pid', requireSignIn, isAdmin, deleteProductController);
//filter product
router.post("/product-filters", productFiltersController);

//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);
//category wise product
router.get("/product-category/:slug", productCategoryController);
//filter product
router.post("/product-filters", productFiltersController);

//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//search product
router.get("/search/:keyword", searchProductController);

//similar product
router.get("/related-product/:pid/:cid", relatedProductController);


module.exports = router;
