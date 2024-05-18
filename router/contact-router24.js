const express = require("express");
const router = express.Router();
const {
  submitContact24Form,
  getCurrencyNames,
  getGstNames,
  getStateCodes,
  getPaymentTermCodes,
  getCountryCodes,
  getZoneCodes,
  getPoolCodes,
  getStationCodes,
  getCityCodes,
  getSoilNames
} = require("../controllers/contact-controller24");

router.route("/currencyNames").get(getCurrencyNames);
router.route("/gstNames").get(getGstNames);
router.route("/stateCodes").get(getStateCodes);
router.route("/paymentTermCodes").get(getPaymentTermCodes);
router.route("/countryCodes").get(getCountryCodes);
router.route("/zoneCodes").get(getZoneCodes);
router.route("/poolCodes").get(getPoolCodes);
router.route("/stationCodes").get(getStationCodes);
router.route("/cityCodes").get(getCityCodes);
router.route("/soilNames").get(getSoilNames);

router.route("/Contact24").post(submitContact24Form);

module.exports = router;
