class NotificationService {
    constructor() {
        this.subscribers = [];
    }

    subscribe(callback) {
        if (typeof callback === 'function') {
            this.subscribers.push(callback);
        }
    }

    unsubscribe(callback) {
        this.subscribers = this.subscribers.filter(sub => sub !== callback);
    }

    notify(message) {
        this.subscribers.forEach(callback => callback(message));
    }

    sendPushNotification(notification) {
        // Implementation for sending push notifications
        console.log('Sending push notification:', notification);
        this.notify(notification.message);
    }

    sendEmailNotification(emailDetails) {
        // Implementation for sending email notifications
        console.log('Sending email notification:', emailDetails);
        this.notify(`Email sent to ${emailDetails.to}`);
    }

    sendAlertNotification(alertDetails) {
        // Implementation for sending alert notifications
        console.log('Sending alert notification:', alertDetails);
        this.notify(`Alert: ${alertDetails.message}`);
    }
}

export default new NotificationService();