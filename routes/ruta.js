const express = require("express")
const router = express.Router()
const apicontroller = require("../controllers/apicontroller")

router.get("/",apicontroller.verificar)
router.post("/",apicontroller.recibir)

module.exports = router