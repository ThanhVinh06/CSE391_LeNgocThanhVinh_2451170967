const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

// Biến đếm xếp loại
let gioi = 0;
let kha = 0;
let trungBinh = 0;
let yeu = 0;

// Tổng điểm từng môn
let tongMath = 0;
let tongPhysics = 0;
let tongCS = 0;

// Điểm TB theo giới tính
let tongNam = 0;
let soNam = 0;

let tongNu = 0;
let soNu = 0;

// Sinh viên cao nhất và thấp nhất
let maxStudent = null;
let minStudent = null;

console.log("| STT | Tên    | TB   | Xếp loại     |");
console.log("|-----|--------|------|---------------|");

// Duyệt mảng sinh viên
for (let i = 0; i < students.length; i++) {

    let student = students[i];

    // Tính điểm trung bình
    let average =
        student.math * 0.4 +
        student.physics * 0.3 +
        student.cs * 0.3;

    // Làm tròn 1 chữ số thập phân
    average = average.toFixed(1);

    // Xếp loại
    let rank = "";

    if (average >= 8.0) {
        rank = "Giỏi";
        gioi++;
    }
    else if (average >= 6.5) {
        rank = "Khá";
        kha++;
    }
    else if (average >= 5.0) {
        rank = "Trung bình";
        trungBinh++;
    }
    else {
        rank = "Yếu";
        yeu++;
    }

    // In bảng
    console.log(
        `| ${i + 1} | ${student.name} | ${average} | ${rank} |`
    );

    // Cộng điểm từng môn
    tongMath += student.math;
    tongPhysics += student.physics;
    tongCS += student.cs;

    // Tìm sinh viên cao nhất
    if (maxStudent === null || average > maxStudent.average) {

        maxStudent = {
            name: student.name,
            average: average
        };
    }

    // Tìm sinh viên thấp nhất
    if (minStudent === null || average < minStudent.average) {

        minStudent = {
            name: student.name,
            average: average
        };
    }

    // Tính TB theo giới tính
    if (student.gender === "M") {

        tongNam += Number(average);
        soNam++;
    }
    else if (student.gender === "F") {

        tongNu += Number(average);
        soNu++;
    }
}

// Đếm xếp loại
console.log("\n=== Thống kê xếp loại ===");

console.log("Giỏi:", gioi);
console.log("Khá:", kha);
console.log("Trung bình:", trungBinh);
console.log("Yếu:", yeu);

// Sinh viên cao nhất
console.log("\n=== Sinh viên điểm cao nhất ===");

console.log(
    `${maxStudent.name} - ${maxStudent.average}`
);

// Sinh viên thấp nhất
console.log("\n=== Sinh viên điểm thấp nhất ===");

console.log(
    `${minStudent.name} - ${minStudent.average}`
);

// Điểm TB toàn lớp từng môn
let avgMath = (tongMath / students.length).toFixed(1);
let avgPhysics = (tongPhysics / students.length).toFixed(1);
let avgCS = (tongCS / students.length).toFixed(1);

console.log("\n=== Điểm TB toàn lớp ===");

console.log("Math:", avgMath);
console.log("Physics:", avgPhysics);
console.log("CS:", avgCS);

// Bonus: TB theo giới tính
let avgMale = (tongNam / soNam).toFixed(1);
let avgFemale = (tongNu / soNu).toFixed(1);

console.log("\n=== Điểm TB theo giới tính ===");

console.log("Nam:", avgMale);
console.log("Nữ:", avgFemale);