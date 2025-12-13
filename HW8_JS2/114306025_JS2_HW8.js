// 將每個運算定義為獨立的函數
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    // 檢查除數是否為 0
    if (b === 0) {
        alert("Cannot divide by zero!");
        return null;
    }
    return a / b;
}

function calculate() {
    // 取得輸入值
    var num1Input = document.getElementById("num1").value;
    var num2Input = document.getElementById("num2").value;
    var operator = document.getElementById("operator").value;
    var resultDisplay = document.getElementById("resultDisplay");
    var calcBtn = document.getElementById("calcBtn");

    // 轉換為數字
    var a = parseFloat(num1Input);
    var b = parseFloat(num2Input);

    if (isNaN(a) || isNaN(b)) {
        alert("Please enter valid numbers.");
        return;
    }

    var result = 0;

    // 根據運算符號呼叫對應函數
    switch (operator) {
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = subtract(a, b);
            break;
        case "*":
            result = multiply(a, b);
            break;
        case "/":
            result = divide(a, b);
            if (result === null) return; // 處理除以零的情況
            break;
        default:
            return;
    }

    // 顯示結果(保留兩位小數)
    resultDisplay.innerText = "Result = " + result.toFixed(2);
}

// 註冊事件監聽器
var btn = document.getElementById("calcBtn");
btn.addEventListener("click", calculate);

// 當運算符號改變時更改按鈕文字
document.getElementById("operator").addEventListener("change", function() {
    var op = this.value;
    var text = "Calculate";
    if(op === "+") text = "Add";
    else if(op === "-") text = "Subtract";
    else if(op === "*") text = "Multiply";
    else if(op === "/") text = "Divide";
    document.getElementById("calcBtn").innerText = text;
});