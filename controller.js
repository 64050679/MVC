// ฟังก์ชันจัดการการส่งฟอร์มสำหรับวัวสีขาว
function handleWhiteCowSubmit(event) {
  event.preventDefault();
  const cowId = document.getElementById('cowId').value;
  const farmId = document.getElementById('farmId').value;
  const ageYears = document.getElementById('ageYears').value;
  const ageMonths = document.getElementById('ageMonths').value;

  // Check if cowId is already registered
  if (isCowIdRegistered(cowId)) {
    alert('วัวที่มี ID นี้ได้ถูกลงทะเบียนแล้ว');
    return;
  }

  const cowData = {
    color: 'white',
    cowId,
    farmId,
    ageYears,
    ageMonths
  };

  // Save cow data using model.js function
  saveCowData(cowData);
  displayFarmDetails(farmId); // Display farm details
}

// ฟังก์ชันจัดการการส่งฟอร์มสำหรับวัวสีน้ำตาล
function handleBrownCowSubmit(event) {
  event.preventDefault();
  const cowId = document.getElementById('cowId').value;
  const farmId = document.getElementById('farmId').value;
  const motherCowId = document.getElementById('motherCowId').value;

  // Check if cowId is already registered
  if (isCowIdRegistered(cowId)) {
    alert('วัวที่มี ID นี้ได้ถูกลงทะเบียนแล้ว');
    return;
  }

  const cowData = {
    color: 'brown',
    cowId,
    farmId,
    motherCowId
  };

  // Save cow data using model.js function
  saveCowData(cowData);
  displayFarmDetails(farmId); // Display farm details
}

// ฟังก์ชันจัดการการส่งฟอร์มสำหรับวัวสีชมพู
function handlePinkCowSubmit(event) {
  event.preventDefault();
  const cowId = document.getElementById('cowId').value;
  const farmId = document.getElementById('farmId').value;
  const ownerFirstName = document.getElementById('ownerFirstName').value;
  const ownerLastName = document.getElementById('ownerLastName').value;

  // Check if cowId is already registered
  if (isCowIdRegistered(cowId)) {
    alert('วัวที่มี ID นี้ได้ถูกลงทะเบียนแล้ว');
    return;
  }

  const cowData = {
    color: 'pink',
    cowId,
    farmId,
    ownerFirstName,
    ownerLastName
  };

  // Save cow data using model.js function
  saveCowData(cowData);
  displayFarmDetails(farmId); // Display farm details
}
