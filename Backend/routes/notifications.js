const notifications = [
    {
        id: 1,
        userId: 1,
        message: 'Rose needs watering today.',
        date: '2023-09-22',
        read: false 
    {
        id: 2,
        userId: 1,
        message: 'Basil will need to be pruned soon.',
        date: '2023-09-21',
        read: true
    },
    

/**
 * Fetches all notifications for a user.
 *
 * @param {number} userId 
 * @returns {Array}
 */
const getNotificationsByUserId = (userId) => {
    return notifications.filter(notification => notification.userId === userId);
};

/**
 * Marks a notification as read.
 *
 * @param {number} id - The notification ID.
 */
const markAsRead = (id) => {
    const notificationIndex = notifications.findIndex(notification => notification.id === id);
    if (notificationIndex !== -1) {
        notifications[notificationIndex].read = true;
    }
};

/**
 * Adds a new notification.
 *
 * @param {Object} notificationData
 */
const addNotification = (notificationData) => {
    const newNotificationId = notifications[notifications.length - 1].id + 1;
    const newNotification = {
        id: newNotificationId,
        ...notificationData
    };
    notifications.push(newNotification);
};

/**
 * Deletes a notification by ID.
 *
 * @param {number} id 
 */
const deleteNotification = (id) => {
    const notificationIndex = notifications.findIndex(notification => notification.id === id);
    if (notificationIndex !== -1) {
        notifications.splice(notificationIndex, 1);
    }
};

export {
    getNotificationsByUserId,
    markAsRead,
    addNotification,
    deleteNotification
};