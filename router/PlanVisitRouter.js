const express = require("express");
const router = express.Router();
const PlanVisitController = require("../controllers/PlanVisitController");

router.route("").post(PlanVisitController.Create);
// router.route("/:id").put(CropSoilSeasonMapController.Update);
router.route("").get(PlanVisitController.getList);
// router.route("/query").get(CropSoilSeasonMapController.getListFilter);
module.exports = router;