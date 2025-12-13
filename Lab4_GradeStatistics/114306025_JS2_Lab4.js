// 儲存所有學生的成績
var grades = []; 

var submitBtn = document.getElementById("submitBtn");

// 監聽按鈕點擊事件
submitBtn.addEventListener("click", function() {
    var mathInput = document.getElementById("mathGrade");
    var englishInput = document.getElementById("englishGrade");

    var math = parseFloat(mathInput.value);
    var eng = parseFloat(englishInput.value);

    // 驗證輸入是否為數字
    if (isNaN(math) || isNaN(eng)) {
        alert("Please enter valid numbers for both grades.");
        return;
    }

    // 計算該行的平均
    var rowAvg = (math + eng) / 2;

    // 將資料存入陣列
    var newEntry = {
        math: math,
        english: eng,
        average: rowAvg
    };
    grades.push(newEntry);

    // 更新表格內容
    addGradeRow(grades.length, newEntry);
    
    // 更新底部統計
    updateColumnAverages();

    // 清空
    mathInput.value = "";
    englishInput.value = "";
});

function addGradeRow(index, data) {
    var tbody = document.getElementById("gradeTableBody");
    
    // 使用樣板字串或字串串接建立新的一列 HTML
    var newRow = "<tr>" +
        "<td>" + index + "</td>" +
        "<td>" + data.math + "</td>" +
        "<td>" + data.english + "</td>" +
        "<td>" + data.average.toFixed(2) + "</td>" +
        "</tr>";
    
    // 將新列加入表格
    tbody.innerHTML += newRow;
}

function updateColumnAverages() {
    var totalMath = 0;
    var totalEng = 0;
    var totalRowAvg = 0;
    var count = grades.length;

    for (var i = 0; i < count; i++) {
        totalMath += grades[i].math;
        totalEng += grades[i].english;
        totalRowAvg += grades[i].average;
    }

    document.getElementById("mathAvg").innerText = (totalMath / count).toFixed(2);
    document.getElementById("engAvg").innerText = (totalEng / count).toFixed(2);
    document.getElementById("totalAvg").innerText = (totalRowAvg / count).toFixed(2);
}