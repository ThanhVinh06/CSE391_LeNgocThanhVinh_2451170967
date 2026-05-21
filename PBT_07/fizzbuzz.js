console.log("=== Classic FizzBuzz ===");

for (let i = 1; i <= 100; i++) {

    // Chia hết cho cả 3 và 5
    if (i % 3 === 0 && i % 5 === 0) {

        console.log("FizzBuzz");
    }

    // Chia hết cho 3
    else if (i % 3 === 0) {

        console.log("Fizz");
    }

    // Chia hết cho 5
    else if (i % 5 === 0) {

        console.log("Buzz");
    }

    // Không chia hết
    else {

        console.log(i);
    }
}

function customFizzBuzz(n, rules) {

    console.log("\n=== Custom FizzBuzz ===");

    for (let i = 1; i <= n; i++) {

        let result = "";

        // Duyệt từng rule
        for (let j = 0; j < rules.length; j++) {

            let rule = rules[j];

            // Nếu chia hết
            if (i % rule.divisor === 0) {

                result += rule.word;
            }
        }

        // Nếu không có từ nào
        if (result === "") {

            console.log(i);
        }
        else {

            console.log(i + " = " + result);
        }
    }
}

customFizzBuzz(30, [

    { divisor: 3, word: "Fizz" },

    { divisor: 5, word: "Buzz" },

    { divisor: 7, word: "Jazz" }

]);