const sensors = [
    {
        id: 1,
        type: 'humidity',
        value: '45%', // this can also be a number
        lastUpdated: '2023-09-20 10:30:00',
        userId: 1 // the ID of the user this sensor belongs to
    },
    {
        id: 2,
        type: 'light',
        value: 'Bright',
        lastUpdated: '2023-09-20 11:15:00',
        userId: 1
    },
    // ... more sensors as needed
];

/**
 * Fetches a sensor by ID.
 *
 * @param {number} id - The sensor ID.
 * @returns {Object} - The sensor data.
 */
const getSensorById = (id) => {
    return sensors.find(sensor => sensor.id === id);
};

/**
 * Fetches all sensors.
 *
 * @returns {Array} - List of all sensors.
 */
const getAllSensors = () => {
    return sensors;
};

/**
 * Adds a new sensor.
 *
 * @param {Object} sensorData - The data for the new sensor.
 */
const addSensor = (sensorData) => {
    const newSensorId = sensors[sensors.length - 1].id + 1; 
    const newSensor = {
        id: newSensorId,
        ...sensorData
    };
    sensors.push(newSensor);
};

/**
 * Updates sensor data by ID.
 *
 * @param {number} id - The sensor ID.
 * @param {Object} updates - The updates to be made.
 */
const updateSensor = (id, updates) => {
    const sensorIndex = sensors.findIndex(sensor => sensor.id === id);
    if (sensorIndex !== -1) {
        sensors[sensorIndex] = { ...sensors[sensorIndex], ...updates };
    }
};

/**
 * Deletes a sensor by ID.
 *
 * @param {number} id - The sensor ID.
 */
const deleteSensor = (id) => {
    const sensorIndex = sensors.findIndex(sensor => sensor.id === id);
    if (sensorIndex !== -1) {
        sensors.splice(sensorIndex, 1);
    }
};

export {
    getSensorById,
    getAllSensors,
    addSensor,
    updateSensor,
    deleteSensor
};