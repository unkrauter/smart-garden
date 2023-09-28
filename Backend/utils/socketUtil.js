const socketIO = require('socket.io');

let io;

/**
 * Initializes socket on the provided server.
 * 
 * @param {Object} server - The HTTP server instance.
 */
const init = (server) => {
    io = socketIO(server);

    io.on('connection', (socket) => {
        console.log('A user connected: ' + socket.id);

        socket.on('disconnect', () => {
            console.log('User disconnected: ' + socket.id);
        });
    });
};

/**
 * Sends real-time updates about sensors to connected clients.
 * 
 * @param {Object} sensorData - New sensor data.
 */
const sendSensorUpdates = (sensorData) => {
    io.emit('sensor-update', sensorData);
};

/**
 * Sends real-time notification to a specific user.
 * 
 * @param {number} userId - ID of the user.
 * @param {Object} notification - Notification data.
 */
const sendUserNotification = (userId, notification) => {
    io.to(userId).emit('notification', notification);
};

export {
    init,
    sendSensorUpdates,
    sendUserNotification
};