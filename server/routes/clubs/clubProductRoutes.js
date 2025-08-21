const express = require("express");
const router = express.Router();
const clubProductController = require("../../controllers/clubs/clubProductController");

router.get("/", clubProductController.getAllClubProducts);
router.get("/:id", clubProductController.getClubProduct);
router.post("/", clubProductController.createClubProduct);
router.put("/:id", clubProductController.updateClubProduct);
router.delete("/:id", clubProductController.deleteClubProduct);

module.exports = router;
