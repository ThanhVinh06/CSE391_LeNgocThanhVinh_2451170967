// Random số từ 1 -> 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Số lần đoán tối đa
const maxAttempts = 7;

// Đếm số lần đoán
let attempts = 0;

// Lưu các số đã đoán
let guessedNumbers = [];

alert("Game đoán số bắt đầu!");
alert("Bạn có 7 lượt để đoán số từ 1 đến 100.");

while (attempts < maxAttempts) {

    // Nhập số
    let input = prompt("Nhập số bạn đoán (1 - 100):");

    // Nếu nhấn Cancel
    if (input === null) {
        alert("Bạn đã thoát game!");
        break;
    }

    // Ép kiểu sang number
    let guess = Number(input);

    // Validate input
    if (
        isNaN(guess) ||
        guess < 1 ||
        guess > 100
    ) {
        alert("Vui lòng nhập số từ 1 đến 100!");
        continue;
    }

    // Kiểm tra nhập trùng
    if (guessedNumbers.includes(guess)) {
        alert("Bạn đã đoán số này rồi!");
        continue;
    }

    // Lưu số đã đoán
    guessedNumbers.push(guess);

    // Tăng số lượt đoán
    attempts++;

    // Kiểm tra kết quả
    if (guess === randomNumber) {

        alert(`Đúng rồi! Bạn đoán đúng sau ${attempts} lần!`);
        break;
    }
    else if (guess < randomNumber) {

        alert("Cao hơn!");
    }
    else {

        alert("Thấp hơn!");
    }

    // Hết lượt
    if (attempts === maxAttempts) {

        alert(
            `Bạn đã hết lượt!\nĐáp án đúng là: ${randomNumber}`
        );
    }
}