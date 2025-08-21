const express = require("express");
const router = express.Router();
const clubOtherController = require("../../controllers/clubs/clubOtherController");

router.get("/", clubOtherController.getAllClubOthers);
router.get("/:id", clubOtherController.getClubOther);
router.post("/", clubOtherController.createClubOther);
router.put("/:id", clubOtherController.updateClubOther);
router.delete("/:id", clubOtherController.deleteClubOther);

module.exports = router;
