const express = require("express");
const {
  registerController,
  loginController,
  testController,
} = require("../controllers/authController.js");
const { isAdmin, requireSignIn } = require("../middlewares/authMiddleware.js");

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);
// protecg authenticated route
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: "true" });
});
router.get("/admin-auth", requireSignIn,isAdmin, (req, res) => {
  res.status(200).send({ ok: "true" });
});

module.exports = router;
