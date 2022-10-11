const MAX_NUMBER_OF_VARIABLES = 50

const isVariablesQuantityValid = (variablesQuantity) => {
    if (variablesQuantity <= 0) return false;
    if (variablesQuantity > MAX_NUMBER_OF_VARIABLES) return false;
    return true;
}

const getVariablesQuantityValidationNotifications = (variablesQuantity) => {
    const notifications = [];
    
    if (variablesQuantity <= 0) {
        notifications.push('There Must Be At Least One Variable!');
    }  
    if (variablesQuantity > MAX_NUMBER_OF_VARIABLES) {
        notifications.push('There Cannot Be More Than 50 Variables');
    }

    return notifications;
}