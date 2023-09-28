const users = [
    {
        id: 1,
        username: 'JaneDoe',
        email: 'jane@example.com',
        profilePicture: 'path_to_image1.jpg',
        gardenDetails: [
            // ... more details specific to Jane's garden
        ]
    },
    {
        id: 2,
        username: 'JohnDoe',
        email: 'john@example.com',
        profilePicture: 'path_to_image2.jpg',
        gardenDetails: [
            // ... more details specific to John's garden
        ]
    }
    // ... more users as needed
];

/**
 * Fetches a user by ID.
 *
 * @param {number} id - The user ID.
 * @returns {Object} - The user data.
 */
const getUserById = (id) => {
    return users.find(user => user.id === id);
};

/**
 * Fetches all users.
 *
 * @returns {Array} - List of all users.
 */
const getAllUsers = () => {
    return users;
};

/**
 * Adds a new user.
 *
 * @param {Object} userData - The data for the new user.
 */
const addUser = (userData) => {
    const newUserId = users[users.length - 1].id + 1; // Simple way to generate a new ID
    const newUser = {
        id: newUserId,
        ...userData
    };
    users.push(newUser);
};

/**
 * Updates user data by ID.
 *
 * @param {number} id - The user ID.
 * @param {Object} updates - The updates to be made.
 */
const updateUser = (id, updates) => {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...updates };
    }
};

/**
 * Deletes a user by ID.
 *
 * @param {number} id - The user ID.
 */
const deleteUser = (id) => {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
    }
};

export {
    getUserById,
    getAllUsers,
    addUser,
    updateUser,
    deleteUser
};