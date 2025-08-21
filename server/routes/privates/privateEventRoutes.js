const express = require("express");
const router = express.Router();
const privateEventController = require("../../controllers/privates/privateEventController");

router.get("/", privateEventController.getAllPrivateEvents);
router.get("/:id", privateEventController.getPrivateEvent);
router.post("/", privateEventController.createPrivateEvent);
router.put("/:id", privateEventController.updatePrivateEvent);
router.delete("/:id", privateEventController.deletePrivateEvent);

module.exports = router;
