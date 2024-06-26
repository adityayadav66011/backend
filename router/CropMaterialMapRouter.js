const express = require("express");
const router = express.Router();
const CropMaterialMapController = require("../controllers/CropMaterialMapController");

router.route("").post(CropMaterialMapController.Create);
router.route("/:id").put(CropMaterialMapController.Update);
router.route("").get(CropMaterialMapController.getList);
router.route("/cropCodes").get(CropMaterialMapController.getCropCodes);
router.route("/materialCodes").get(CropMaterialMapController.getMaterialCodes);

module.exports = router;
