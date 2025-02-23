const read = (getData , req ) => {
    const meter = req.params.waterMeterId;
    return getData(meter);
};

const store = (setData , req ) => {
    const data = req.body;
    return setData(data.waterMeterId, data.electricityReadings);
};


module.exports = { read, store };