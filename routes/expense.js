const express = require("express");
const {getExpense,addExpense
} = require("./../controllers/expenseControllerrs");
const {
  isAuthenticated,
  authorizeRoles,
} = require("./../middlewares/authenticate");

const router = express.Router();

router.route("/expense/get").get(isAuthenticated,getExpense);
router.route("/expense/add").post(isAuthenticated,addExpense);

// router
//   .route("/elite/getall")
//   .get(isAuthenticated, authorizeRoles("elite"), getAllUsers);

module.exports = router;
