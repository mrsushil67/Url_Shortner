const router = require("express").Router()
const controler = require("./controller")

router.get("/:skey",controler.dolongUrl)
router.post("/url",controler.doshortUrl)



module.exports = router