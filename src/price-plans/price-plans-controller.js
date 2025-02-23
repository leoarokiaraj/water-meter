const { pricePlans } = require("./price-plans");
const { usageForAllPricePlans } = require("../usage/usage");

const recommend = (getReadings , req ) => {
    const meter = req.params.waterMeterId;
    const pricePlanComparisons = usageForAllPricePlans(pricePlans, getReadings(meter)).sort((a, b) => extractCost(a) - extractCost(b))
    if("limit" in req.query) {
        return pricePlanComparisons.slice(0, req.query.limit);
    }
    return pricePlanComparisons;
};

const extractCost = (cost ) => {
    const [, value]  = Object.entries(cost).find( ([key]) => key in pricePlans)
    return value
}

const compare = (getData , req ) => {
    const meter = req.params.waterMeterId;
    const pricePlanComparisons = usageForAllPricePlans(pricePlans, getData(meter));
    return {
        waterMeterId: req.params.waterMeterId,
        pricePlanComparisons,
    };
};

module.exports = { recommend, compare };
