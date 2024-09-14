// Array to store registered cows
let registeredCows = [];

// Function to save a cow's data
function saveCowData(cowData) {
  registeredCows.push(cowData);
  console.log("Cow registered:", cowData);
}

// Function to check if a cowId is already registered
function isCowIdRegistered(cowId) {
  return registeredCows.some(cow => cow.cowId === cowId);
}

// Function to get all registered cows
function getAllRegisteredCows() {
  return registeredCows;
}

// Function to clear all registered cows (for testing or resetting)
function clearAllCows() {
  registeredCows = [];
  console.log("All cow data cleared.");
}

// Function to display farm details based on farmId
function displayFarmDetails(farmId) {
  const farmDetails = registeredCows.filter(cow => cow.farmId === farmId);
  console.log("Farm details:", farmDetails);
  alert('รายละเอียดฟาร์ม: ' + JSON.stringify(farmDetails));
}
