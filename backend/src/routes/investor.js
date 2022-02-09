const express = require("express")

const router = express.router()

const investorController = require("../controllers/Investor")

router.post("/login", investorController.login)
router.post("/signup", investorController.signup)
router.put("/editProfile", investorController.edit)
router.delete("/deleteAccount", investorController.delete)

module.exports = router