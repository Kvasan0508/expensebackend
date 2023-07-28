const express = require("express");
const {
  logoutUser,
  loginUser,
  registerUser,checkLoggedIn
} = require("./../controllers/eliteControllers");
const {
  isAuthenticated,
  authorizeRoles,
} = require("./../middlewares/authenticate");

const router = express.Router();

router.route("/elite/Register").post(registerUser);
router.route("/elite/login").post(loginUser);
router.route("/elite/logout").get(logoutUser);
router.route("/elite/isLoggedin").get(checkLoggedIn);


// router
//   .route("/elite/getall")
//   .get(isAuthenticated, authorizeRoles("elite"), getAllUsers);

module.exports = router;
