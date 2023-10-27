// biến lưu giá trị đã nhập và kết quả
const inputDisplay = document.getElementById("input");
const outputDisplay = document.getElementById("output")
// biến lưu giá trị input/output hiện có
let currentInput = "";
let currentOutput = "";

// hàm cập nhật input và output
function updateInput() {
    inputDisplay.textContent = currentInput;
}

function updateOutput() {
    outputDisplay.textContent = currentOutput;
}

function handleButtonClick(event) {
    //trả về button được click
    const button = event.target;
    //trả về nội dung của button
    const buttonText = button.textContent;

    if (buttonText === "CE") {
        currentInput = "";
        currentOutput = "";
    } else if (buttonText === "Del") {
        //xóa ký tự cuối cùng trong chuỗi input
        currentInput = currentInput.slice(0, -1);
    } else if (buttonText === "=") {
        try {
            currentOutput = eval(currentInput).toString();
        } catch (error) {
            currentOutput = "Error";
        }
    } else {
        currentInput += buttonText;
    }
    updateInput();
    updateOutput();
}

// lấy tất cả button
const buttons = document.querySelectorAll("button");
//thêm sự kiện click cho tất các button
buttons.forEach(button => {
    button.addEventListener("click", handleButtonClick);
});