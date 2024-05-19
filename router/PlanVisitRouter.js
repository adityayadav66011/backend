const express = require("express");
const router = express.Router();
const PlanVisitController = require("../controllers/PlanVisitController");

router.route("").post(PlanVisitController.Create);
// router.route("/:id").put(CropSoilSeasonMapController.Update);
router.route("").get(PlanVisitController.getList);

router.route("/plan-colleague").get(PlanVisitController.getPlanColleague);
router.route("/plan-colleague").post(PlanVisitController.cretePlanColleague);
router.route("/plan-detail").get(PlanVisitController.getVisitDetail);
router.route("/plan-detail").post(PlanVisitController.CreateVisitDetail);

router.route("/plan-detail/recommended-crop").get(PlanVisitController.getRecommendCrop);
router.route("/plan-detail/recommended-crop").post(PlanVisitController.CreateRecommendCrop);
router.route("/plan-detail/recommended-crop/:customer_code").get(PlanVisitController.getLastRecommendCrop);


router.route("/plan-detail/recommended-material").get(PlanVisitController.getRecommendMaterial);
router.route("/plan-detail/recommended-material").post(PlanVisitController.CreateRecommendMaterial);
router.route("/plan-detail/recommended-material/:customer_code").get(PlanVisitController.getLastRecommendMaterial);

module.exports = router;