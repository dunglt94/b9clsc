let result = document.getElementById("result");
function checkmonth() {
    let month = +document.getElementById("month").value;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            result.innerHTML = `Result: Tháng ${month} có 31 ngày`;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            result.innerHTML = `Result: Tháng ${month} có 30 ngày`;
            break;
        case 2:
            result.innerHTML = `Result: Tháng ${month} có 28 hoặc 29 ngày`;
            break;
        default:
            result.innerHTML = `Result: Vui lòng nhập lại.`;
    }
}
