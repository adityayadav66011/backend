const express = require("express");
const router = express.Router();
const CropSoilSeasonMapController = require("../controllers/CropSoilSeasonMapController");

router.route("").post(CropSoilSeasonMapController.Create);
router.route("/:id").put(CropSoilSeasonMapController.Update);
router.route("").get(CropSoilSeasonMapController.getList);
// router.route("/query").get(CropSoilSeasonMapController.getListFilter);
module.exports = router;