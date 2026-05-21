Câu A1: 
    Đoạn 1: Dự đoán: undefined
    Đoạn 2: Dự đoán: ReferenceError
    Đoạn 3: Dự đoán: TypeError
    Đoạn 4: Dự đoán: [1, 2, 3, 4]
    Đoạn 5: Dự đoán: Trong block: 2
                     Ngoài block: 1
    Các kết quả bất ngờ
        1. var in ra undefined thay vì lỗi
        Do cơ chế: hoisting
        2. let bị lỗi dù cũng hoisting
        Do tồn tại: Temporal Dead Zone
        3. const vẫn sửa được array
        Vì:
            Không đổi được địa chỉ biến
            nhưng đổi nội dung object/array thì được.
Câu A2:
    console.log(typeof null);              // object
    console.log(typeof undefined);         // undefined
    console.log(typeof NaN);              // number
    console.log("5" + 3);                 // "53"
    console.log("5" - 3);                 // 2
    console.log("5" * "3");              // 15
    console.log(true + true);            // 2
    console.log([] + []);                // ""
    console.log([] + {});                // "[object Object]"
    console.log({} + []);               //0
    Tại sao "5" + 3 và "5" - 3 khác nhau?
    "5" + 3
    Toán tử + có chức năng:
        cộng số
        nối chuỗi
    Khi có string: "5" + 3
    JavaScript ưu tiên nối chuỗi: "5" + "3" → "53"

    "5" - 3
    Toán tử - chỉ dùng cho phép toán số học.
    JavaScript bắt buộc ép kiểu: 5 - 3 → 2
Câu A3: 
    console.log(5 == "5");                // true
    console.log(5 === "5");               // false
    console.log(null == undefined);       // true
    console.log(null === undefined);      // false
    console.log(NaN == NaN);             // false
    console.log(0 == false);             // true
    console.log(0 === false);            // false
    console.log("" == false);            // true
    Nên dùng == hay ===?
        Nên dùng: ===
        Tại sao?
        1. Tránh lỗi ép kiểu
        == tự động ép kiểu nên dễ gây bug khó phát hiện.
        Ví dụ: 0 == false → true nhưng nhiều khi không mong muốn.
        2. Kết quả rõ ràng hơn 5 === "5"
        → dễ hiểu và chính xác hơn.
Câu A4:
    Trong JavaScript có tất cả các giá trị falsy sau:
        false
        0
        -0
        0n
        ""
        null
        undefined
        NaN
    Dự đoán kết quả: 
        if ("0") console.log("A");           // In A
        if ("") console.log("B");            // không in
        if ([]) console.log("C");            // In C
        if ({}) console.log("D");            // In D
        if (null) console.log("E");          // không in
        if (0) console.log("F");             // không in
        if (-1) console.log("G");            // In G
        if (" ") console.log("H");           // In H
Câu A5:
    1. var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;
    2. var url = `https://api.example.com/users/${userId}/orders?page=${page}`;
    3. var html = `
        <div class="card">
            <h2>${title}</h2>
            <p>${description}</p>
            <span>Giá: ${price}đ</span>
        </div>
        `;
Câu C1: 
    Sau khi sửa:
        function tinhGiaGiamGia(giaBan, phanTramGiam) {
            // Kiểm tra kiểu dữ liệu
            if (typeof giaBan !== "number" || typeof phanTramGiam !== "number") {
                return "Dữ liệu không hợp lệ";
            }
            // Kiểm tra phần trăm giảm
            if (phanTramGiam < 0 || phanTramGiam > 100) {
                return "Phần trăm giảm không hợp lệ";
            }
            const giamGia = giaBan * phanTramGiam / 100;
            let giaSauGiam = giaBan - giamGia;
            // So sánh đúng
            if (giaSauGiam === 0) {
                console.log("Sản phẩm miễn phí!");
            }
            return giaSauGiam;
        }
        // Test
        const gia = tinhGiaGiamGia(100000, 20);
        console.log(`Giá sau giảm: ${gia}đ`);
        const gia2 = tinhGiaGiamGia(50000, 110);
        console.log(`Giá: ${gia2}`);
        // Vòng lặp
        for (let i = 0; i < 5; i++) {
            setTimeout(function () {
                console.log("Item " + i);
            }, 1000);
        }
    Liệt kê lỗi + giải thích + cách sửa
        1. Thiếu dấu ;
            Code cũ
            return "Phần trăm giảm không hợp lệ"
            Vấn đề
            JavaScript vẫn chạy được nhưng không đúng chuẩn code style.
            Sửa
            return "Phần trăm giảm không hợp lệ";
        2. Dùng phép gán = thay vì so sánh
            Code cũ
            if (giaSauGiam = 0)
            Vấn đề
            = là phép gán, không phải so sánh.
            Dòng này sẽ gán:
            giaSauGiam = 0
            sau đó điều kiện trở thành:
            if (0) → luôn false.
            Sửa
            if (giaSauGiam === 0)
            Dùng: === để so sánh chính xác.
        3. Truyền sai kiểu dữ liệu
            Code cũ
            tinhGiaGiamGia("100000", 20)
            Vấn đề
            "100000" là string, không phải number.
            JavaScript sẽ ép kiểu ngầm nhưng không an toàn.
            Sửa
            tinhGiaGiamGia(100000, 20)
        4. Thiếu kiểm tra kiểu dữ liệu đầu vào
            Vấn đề
            Nếu truyền:
            "abc"
            null
            undefined
            hàm có thể trả về:
            NaN
            Sửa
            Thêm:
            if (typeof giaBan !== "number" || typeof phanTramGiam !== "number")
        5. Nên dùng const thay cho var
            Code cũ
            var giamGia
            Vấn đề
            giamGia không thay đổi sau khi tạo.
            Sửa
            const giamGia
            Code an toàn hơn.
        6. Lỗi "ẩn" với var trong vòng lặp
            Code cũ
            for (var i = 0; i < 5; i++)
            Kết quả thực tế
            Sau 1 giây sẽ in:
                Item 5
                Item 5
                Item 5
                Item 5
                Item 5
            Tại sao?
                var có:
                function scope
                không có block scope.
                Tất cả callback trong setTimeout dùng chung 1 biến i.
                Sau khi vòng lặp kết thúc:
                i = 5
                nên tất cả đều in 5.
                Cách sửa bằng let
                Code đúng
                for (let i = 0; i < 5; i++)
                Vì sao let sửa được?
                let có:
                block scope
                Mỗi lần lặp tạo ra một biến i riêng.
                Kết quả:
                Item 0
                Item 1
                Item 2
                Item 3
                Item 4
        7. Nên dùng Template Literal thay vì nối chuỗi
            Code cũ
            "Giá sau giảm: " + gia + "đ"
            Sửa
            `Giá sau giảm: ${gia}đ`
            Code dễ đọc hơn.      