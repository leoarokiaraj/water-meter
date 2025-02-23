const { pricePlans, pricePlanNames } = require("../price-plans/price-plans");

const meters  = {
    METER0: "water-meter-0",
    METER1: "water-meter-1",
    METER2: "water-meter-2",
    METER3: "water-meter-3",
    METER4: "water-meter-4",
};

const meterPricePlanMap = {
    [meters.METER0]: pricePlans[pricePlanNames.PRICEPLAN0],
    [meters.METER1]: pricePlans[pricePlanNames.PRICEPLAN1],
    [meters.METER2]: pricePlans[pricePlanNames.PRICEPLAN2],
};

module.exports = { meterPricePlanMap, meters };