// Code your solution in this file!
const drivers = ["Mell", "Gabby", "Champ", "Cooper"];
const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2) // returns Mell and Gabby
const returnLastTwoDrivers = (drivers) => drivers.slice(-2) // returns Champ and Cooper
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = (integer) => function (fare) {
  return fare * integer; //multiplies the fare by an interger
}
const fareDoubler = (amount) => amount * 2 //doubles the fare
const fareTripler = (amount) => amount * 3 // tripples the fare
const selectDifferentDrivers = (drivers, driverSelector) => driverSelector(drivers) // returns either returnFirstTwoDrivers or returnLastTwoDrivers