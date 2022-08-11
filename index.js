// Code your solution here


const findMatching = (driverArray, string) => {
    return driverArray.filter(driver => driver.toLowerCase() === string.toLowerCase());
}

const fuzzyMatch = (driverArray, string) => {
    return driverArray.filter((driver) => driver[0] === string[0]);
}

const matchName = (driverArray, string) =>  {
    return driverArray.filter((driver) => driver.name ===string);
};



// // This is roughly what I reduced it from.


// const findMatching = (driverArray, string) => {
//     return driverArray.filter(function (driver) {
//         return driver.toLowerCase() === string.toLowerCase();
//     })
// }

// const fuzzyMatch = (driverArray, string) => {
//     return driverArray.filter(function (driver) {
//         return driver[0] === string[0];
//     })
// }

// const matchName = (driverArray, string) => {
//     return driverArray.filter(function (driver) {
//         return driver.toLowerCase() === string.toLowerCase();
//     })
// }