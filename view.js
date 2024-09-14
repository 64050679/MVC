// ฟังก์ชันเพื่อแสดงฟอร์มที่เลือก
function showForm(color) {
  const formContainer = document.getElementById("formContainer");
  let formHtml = "";

  if (color === "white") {
    formHtml = `
      <form onsubmit="handleWhiteCowSubmit(event)">
        <label for="cowId">ID วัว:</label>
        <input id="cowId" type="number" min="10000000" max="99999999" required />

        <label for="farmId">ID ฟาร์ม:</label>
        <input id="farmId" type="number" min="1" max="9" required />

        <label for="ageYears">อายุ (ปี):</label>
        <input id="ageYears" type="number" min="0" max="10" required />

        <label for="ageMonths">อายุ (เดือน):</label>
        <input id="ageMonths" type="number" min="0" max="11" required />

        <button type="submit">ลงทะเบียน</button>
      </form>
    `;
  } else if (color === "brown") {
    formHtml = `
      <form onsubmit="handleBrownCowSubmit(event)">
        <label for="cowId">ID วัว:</label>
        <input id="cowId" type="number" min="10000000" max="99999999" required />

        <label for="farmId">ID ฟาร์ม:</label>
        <input id="farmId" type="number" min="1" max="9" required />

        <label for="motherCowId">ID แม่วัว</label>
        <input id="motherCowId" type="number" min="10000000" max="99999999" required />

        <button type="submit">ลงทะเบียน</button>
      </form>
    `;
  } else if (color === "pink") {
    formHtml = `
      <form onsubmit="handlePinkCowSubmit(event)">
        <label for="cowId">ID วัว:</label>
        <input id="cowId" type="number" min="10000000" max="99999999" required />

        <label for="farmId">ID ฟาร์ม:</label>
        <input id="farmId" type="number" min="1" max="9" required />

        <label for="ownerFirstName">ชื่อ:</label>
        <input id="ownerFirstName" type="text" maxlength="8" required />

        <label for="ownerLastName">นามสกุล:</label>
        <input id="ownerLastName" type="text" maxlength="8" required />

        <button type="submit">ลงทะเบียน</button>
      </form>
    `;
  }

  formContainer.innerHTML = formHtml;
}
