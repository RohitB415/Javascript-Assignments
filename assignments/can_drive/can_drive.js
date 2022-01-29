function CanDrive(hasDrivingLiscence, isTired, isSober) {
    // Write you code here
    if (hasDrivingLiscence === true && isTired === false && isSober === true) {
        return "You can drive"
    }
    else if (hasDrivingLiscence === false) {
        return "You cannot drive"

    } 
    else{
        return "You shouldn't drive"
    }
}

module.exports = CanDrive;
