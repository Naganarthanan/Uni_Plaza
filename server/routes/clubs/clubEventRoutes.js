const express = require("express");
const router = express.Router();
const clubEventController = require("../../controllers/clubs/clubEventController");

router.get("/", clubEventController.getAllClubEvents);
router.get("/:id", clubEventController.getClubEvent);
router.post("/", clubEventController.createClubEvent);
router.put("/:id", clubEventController.updateClubEvent);
router.delete("/:id", clubEventController.deleteClubEvent);

module.exports = router;
