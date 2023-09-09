//Model
const keywords = ['declare'];//keyword ของโจทย์
const operators = ['+', '='];//symbol ที่กำหนดจากโจทย์

function analyze() {
    const sourceCode = document.getElementById('sourceCode').value;//อ่าน input ที่เข้ามา
    const words = splitWord(sourceCode);//จากนั้นทำการตัดคำที่เว้นช่องว่างกันด้วยการ split
    const wordTypes1 = classifyTypes('v1',words);
    const wordTypes2 = classifyTypes('v2',words);

    ShowResult(wordTypes1);//show model version1
    ShowResult(wordTypes2);//show model version2
}

//Control
function classifyTypes(version,tokens) {
    const tokenTypes = [];//ประกาศ tokenTypes list เพื่อไว้เก็บผลลัพธ์ที่ได้ 

    if (version == 'v1')
    {
        for (const token of tokens) {
            //ถ้าเจอสัญลักษณ์ // นำหน้า ให้ข้ามบรรทัดดังกล่าวไปในกระบวนการตัดคำและบ่งบอกประเภท
            if(token.substring(0, 2) == "//"){
                continue;
            } else if (keywords.includes(token)) {
                tokenTypes.push(token + ' is Keyword');//เช็คว่าใช่ decare ไหมถ้าใช่ก็ push decare is keyword เข้า ไปเก็บใน tokenType
            } else if (operators.includes(token)) {
                tokenTypes.push(token + ' is Symbol');// ถ้าเจอ "+" หรือ "=" token นั้นจะเป็น symbol จากนั้นก็ push ไปเก็บใน tokenType
            } else if (/^[a-z]+$/.test(token)) {
                tokenTypes.push(token + ' is Identifier');//เช็คว่าเป็นคำนั้นตัวอักษรพิมพ์เล็กทั้งหมดไหมถ้าใช่เเสดงว่าเป็นตัวเเปร จากนั้นก็ push ไปเก็บใน tokenType
            } else if (/^\d+$/.test(token)) {
                tokenTypes.push(token + ' is Literal');//เช็คว่าเป็นจำนวนเต็มไหมถ้าใช่ ก็ push ไปเก็บใน tokenType
            }
        }
    }

    else if (version == 'v2')//ทำเหมือน v1 เเค่เปลี่ยนคำเเสดงผล
    {
        for (const token of tokens) {
            if(token.substring(0, 2) == "//"){
                continue;
            } else if (keywords.includes(token)) {
                tokenTypes.push(token + ' Keyword and Sign');
            } else if (operators.includes(token)) {
                tokenTypes.push(token + 'is Assignment');
            } else if (/^[a-zA-Z]+$/.test(token)) {
                tokenTypes.push(token + ' is Variable');
            } else if (/^\d+$/.test(token)) {
                tokenTypes.push(token + ' is Integer');
            }
        }
    }
    return tokenTypes
}

function splitWord(sourceCode) {
    // Split source code into individual tokens
    return sourceCode.split(/\s+/); 
}

//เเสดงผลลัพธ์ผ่านหน้า web โดยใช้ hmtl
function ShowResult(tokenTypes) {
    const resultDiv = document.getElementById('result');//link 

    for (const type of tokenTypes) {
        const p = document.createElement('p');
        p.textContent = type;
        resultDiv.appendChild(p);//เพิ่ม element ลงไป
    }
    const br = document.createElement('br');//เว้นวรรค
    resultDiv.appendChild(br);
}
