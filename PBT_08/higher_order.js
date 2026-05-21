function pipe(...fns) {

    return function(value) {

        return fns.reduce(

            (result, fn) => fn(result),

            value
        );
    };
}


const process = pipe(

    x => x * 2,

    x => x + 10,

    x => x.toString(),

    x => "Kết quả: " + x
);

console.log(process(5));



function memoize(fn) {

    const cache = {};

    return function(...args) {

        const key = JSON.stringify(args);

        if (cache[key] !== undefined) {

            console.log("Lấy từ cache...");

            return cache[key];
        }

        const result = fn(...args);

        cache[key] = result;

        return result;
    };
}


const expensiveCalc = memoize((n) => {

    console.log("Đang tính...");

    let result = 0;

    for (let i = 0; i < n; i++) {

        result += i;
    }

    return result;
});

console.log(expensiveCalc(1000000));

console.log(expensiveCalc(1000000));



function debounce(fn, delay) {

    let timeoutId;

    return function(...args) {

        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {

            fn(...args);

        }, delay);
    };
}


const search = debounce((query) => {

    console.log("Searching:", query);

}, 500);

search("i");
search("ip");
search("iph");
search("iphone");



async function retry(fn, maxAttempts = 3) {

    let attempts = 0;

    while (attempts < maxAttempts) {

        try {

            attempts++;

            console.log(`Lần thử ${attempts}...`);

            const result = await fn();

            return result;
        }

        catch (error) {

            console.log(`Lỗi: ${error.message}`);

            if (attempts >= maxAttempts) {

                throw new Error(
                    "Đã thử tối đa nhưng thất bại!"
                );
            }
        }
    }
}


let count = 0;

async function fakeApi() {

    count++;

    if (count < 3) {

        throw new Error("Server error");
    }

    return "Kết nối thành công!";
}


retry(fakeApi, 3)

    .then(result => {

        console.log(result);
    })

    .catch(error => {

        console.log(error.message);
    });