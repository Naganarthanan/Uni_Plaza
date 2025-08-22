const express = require("express");
const router = express.Router();
const privateOtherController = require("../../controllers/privates/privateOtherController");

router.get("/", privateOtherController.getAllPrivateOthers);
router.get("/:id", privateOtherController.getPrivateOther);
router.post("/", privateOtherController.createPrivateOther);
router.put("/:id", privateOtherController.updatePrivateOther);
router.delete("/:id", privateOtherController.deletePrivateOther);

module.exports = router;
