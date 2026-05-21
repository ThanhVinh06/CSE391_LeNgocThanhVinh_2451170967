Câu A1:
    1. Function Declaration
    function tinhThueBaoHiem(luong) {

        let thue = 0;

        if (luong > 11000000) {

            thue = luong * 0.1;
        }

        return {
            thue: thue,
            thuc_nhan: luong - thue
        };
    }
    // Test
    console.log(tinhThueBaoHiem(15000000));

    2. Function Expression
    const tinhThueBaoHiem2 = function(luong) {

        let thue = 0;

        if (luong > 11000000) {

            thue = luong * 0.1;
        }

        return {
            thue: thue,
            thuc_nhan: luong - thue
        };
    };
    // Test
    console.log(tinhThueBaoHiem2(15000000));

    3. Arrow Function
    const tinhThueBaoHiem3 = (luong) => {

        let thue = 0;

        if (luong > 11000000) {

            thue = luong * 0.1;
        }

        return {
            thue: thue,
            thuc_nhan: luong - thue
        };
    };
    // Test
    console.log(tinhThueBaoHiem3(15000000));
    3 cách này có khác nhau về hosting
    Ví dụ:
        1. Function Declaration — Có hoisting hoàn toàn
        console.log(cong(2, 3));
        function cong(a, b) {
            return a + b;
        }
        //Kết quả: 5
        2. Function Expression — Không hoisting function
        console.log(tru(5, 2));
        const tru = function(a, b) {
            return a - b;
        };
        //Kết quả: ReferenceError
        3. Arrow Function — Giống Function Expression
        console.log(nhan(2, 4));
        const nhan = (a, b) => {
            return a * b;
        };
        //Kết quả: ReferenceError
        Giải thích

        Arrow function thường gán cho: const nên không gọi trước khi khai báo được.
Câu A2: 
    Đoạn 1: 
    Dự đoán:
        1
        2
        3
        2
        2
    Đoạn 2:
    Dự đoán:
        var: 3
        var: 3
        var: 3

        let: 0
        let: 1
        let: 2  
Câu A3:
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // 1. Lấy các số chẵn
    const evenNumbers =
        nums.filter(num => num % 2 === 0);
    console.log(evenNumbers);
    // [2, 4, 6, 8, 10]

    // 2. Nhân mỗi số với 3
    const multiplyBy3 =
        nums.map(num => num * 3);
    console.log(multiplyBy3);
    // [3, 6, 9, ..., 30]

    // 3. Tính tổng tất cả
    const total =
        nums.reduce((sum, num) => sum + num, 0);
    console.log(total);
    // 55

    // 4. Tìm số đầu tiên > 7
    const firstGreaterThan7 =
        nums.find(num => num > 7);
    console.log(firstGreaterThan7);
    // 8

    // 5. Kiểm tra CÓ số > 10 không
    const hasGreaterThan10 =
        nums.some(num => num > 10);
    console.log(hasGreaterThan10);
    // false

    // 6. Kiểm tra TẤT CẢ đều > 0
    const allGreaterThan0 =
        nums.every(num => num > 0);
    console.log(allGreaterThan0);
    // true

    // 7. Tạo mảng "Số X là [chẵn/lẻ]"
    const evenOddText =
        nums.map(num =>
            `Số ${num} là ${num % 2 === 0 ? "chẵn" : "lẻ"}`
        );
    console.log(evenOddText);
    // ["Số 1 là lẻ", "Số 2 là chẵn", ...]

    // 8. Đảo ngược mảng (không mutate gốc)
    const reversed =
        [...nums].reverse();
    console.log(reversed);
    // [10, 9, ..., 1]
Câu A4:
    const product = {
    name: "iPhone 16",
    price: 25990000,
    specs: { ram: 8, storage: 256, color: "Titan" }
    };

    // Destructuring
    const { name, price, specs: { ram, color } } = product;
    console.log(name, price, ram, color);  //  iPhone 16 25990000 8 Titan
    console.log(specs);                     // ReferenceError

    // Spread
    const updated = { ...product, price: 23990000, sale: true };
    console.log(updated.price);            // 23990000
    console.log(updated.sale);             // true
    console.log(product.price);            // 25990000

    // Spread gotcha
    const copy = { ...product };
    copy.specs.ram = 16;
    console.log(product.specs.ram);        // 16
Câu C1:
    const processOrders = (orders) =>

    orders
        .filter(order =>
            order.status === "completed" &&
            order.total > 100000
        )

        .map(({ id, customer, total }) => ({

            id,

            customer,

            total,

            discount: total * 0.1,

            finalTotal: total - (total * 0.1)
        }))

        .sort(
            (a, b) => b.finalTotal - a.finalTotal
        );
Câu C2:
    const miniArray = {

        map(arr, fn) {

            const result = [];

            for (let i = 0; i < arr.length; i++) {

                result.push(
                    fn(arr[i], i, arr)
                );
            }

            return result;
        },


        filter(arr, fn) {

            const result = [];

            for (let i = 0; i < arr.length; i++) {

                if (fn(arr[i], i, arr)) {

                    result.push(arr[i]);
                }
            }

            return result;
        },


        reduce(arr, fn, initialValue) {

            let accumulator = initialValue;

            for (let i = 0; i < arr.length; i++) {

                accumulator = fn(
                    accumulator,
                    arr[i],
                    i,
                    arr
                );
            }

            return accumulator;
        }
    };


    console.log(
        miniArray.map(
            [1, 2, 3],
            x => x * 2
        )
    );

    console.log(
        miniArray.filter(
            [1, 2, 3, 4],
            x => x > 2
        )
    );

    console.log(
        miniArray.reduce(
            [1, 2, 3, 4],
            (a, b) => a + b,
            0
        )
    );