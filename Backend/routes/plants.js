const plants = [
    {
        id: 1,
        name: 'Rose',
        species: 'Rosa spp.',
        waterFrequency: 'Every 2 days', 
        lastWatered: '2023-09-20',
        userId: 1 
    },
    {
        id: 2,
        name: 'Basil',
        species: 'Ocimum basilicum',
        waterFrequency: 'Every 3 days',
        lastWatered: '2023-09-19',
        userId: 1
    },
    
];

/**
 * Fetches a plant by ID.
 *
 * @param {number} id 
 * @returns {Object} 
 */
const getPlantById = (id) => {
    return plants.find(plant => plant.id === id);
};

/**
 * Fetches all plants.
 *
 * @returns {Array} - List of all plants.
 */
const getAllPlants = () => {
    return plants;
};

/**
 * Adds a new plant.
 *
 * @param {Object} plantData 
 */
const addPlant = (plantData) => {
    const newPlantId = plants[plants.length - 1].id + 1;
    const newPlant = {
        id: newPlantId,
        ...plantData
    };
    plants.push(newPlant);
};

/**
 * Updates plant data by ID.
 *
 * @param {number} id -plant ID.
 * @param {Object} updates 
 */
const updatePlant = (id, updates) => {
    const plantIndex = plants.findIndex(plant => plant.id === id);
    if (plantIndex !== -1) {
        plants[plantIndex] = { ...plants[plantIndex], ...updates };
    }
};

/**
 * Deletes a plant by ID.
 *
 * @param {number} id - The plant ID.
 */
const deletePlant = (id) => {
    const plantIndex = plants.findIndex(plant => plant.id === id);
    if (plantIndex !== -1) {
        plants.splice(plantIndex, 1);
    }
};

export {
    getPlantById,
    getAllPlants,
    addPlant,
    updatePlant,
    deletePlant
};