const pricePlanNames = {
    PRICEPLAN0: "price-plan-0",
    PRICEPLAN1: "price-plan-1",
    PRICEPLAN2: "price-plan-2",
};

const supplierNames = {
    AQUA_GAUGE: "AquaGauge",
    FLOW_TRACK: "FlowTrack ",
    BLUE_WAVE: "BlueWave",
};

const pricePlans = {
    [pricePlanNames.PRICEPLAN0]: {
        supplier: supplierNames.AQUA_GAUGE,
        rate: 10,
    },
    [pricePlanNames.PRICEPLAN1]: {
        supplier: supplierNames.BLUE_WAVE,
        rate: 2,
    },
    [pricePlanNames.PRICEPLAN2]: {
        supplier: supplierNames.FLOW_TRACK,
        rate: 1,
    },
};

module.exports = { pricePlans, pricePlanNames };