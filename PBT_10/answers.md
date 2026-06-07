Câu A1:
Thứ tự output: 
1 - Start
4 - End
3 - Promise
6 - Promise 2
2 - Timeout 0ms
7 - Nested timeout
5 - Timeout 100ms
Event Loop
Event Loop là cơ chế giúp JavaScript xử lý các tác vụ bất đồng bộ.
Nhiệm vụ của Event Loop là:
Theo dõi Call Stack.
Khi Call Stack rỗng, lấy tác vụ từ Queue để thực hiện.
Luôn ưu tiên Microtask Queue trước Macrotask Queue.
Microtask Queue
Microtask Queue chứa các tác vụ có độ ưu tiên cao như:
Promise.then()
Promise.catch()
Promise.finally()
queueMicrotask()
Các tác vụ trong Microtask Queue luôn được thực hiện trước Macrotask Queue.
Macrotask Queue
Macrotask Queue chứa các tác vụ như:
setTimeout()
setInterval()
DOM Events
Message Events
Các tác vụ này chỉ được thực hiện khi Microtask Queue đã rỗng.
Câu A2: 
1. await fetch(...) — fetch trả về gì? Tại sao cần await?
fetch() dùng để gửi HTTP Request đến server.
fetch() không trả dữ liệu ngay mà trả về một Promise.
Cần dùng await để chờ Promise hoàn thành và nhận đối tượng Response
2. response.ok — Khi nào false?
response.ok có giá trị:
true khi status từ 200–299
false khi status nằm ngoài khoảng này
3. response.json() — Tại sao cần await lần nữa?
response.json() dùng để chuyển dữ liệu JSON thành Object JavaScript.
Phương thức này cũng trả về một Promise nên phải dùng await.
4. try...catch — Catch những lỗi gì?
Bắt được
a. Network Error
b. JSON Parse Error
c. Lỗi do throw Error()
Không tự động bắt
404, 403, 500 không tự động vào catch
Câu A3:
1. Sơ đồ 3 trạng thái của Promise
Promise có 3 trạng thái chính:
           Pending
          /       \
         /         \
        /           \
 Fulfilled       Rejected
2. Callback Hell là gì?
Callback Hell là tình trạng nhiều callback lồng nhau liên tiếp, làm cho code khó đọc, khó bảo trì và khó xử lý lỗi.
Đặc điểm:
Nhiều cấp callback lồng nhau.
Code bị thụt vào sâu.
Khó theo dõi luồng thực thi.
Dễ phát sinh lỗi.
3. Ví dụ Callback Hell (4 cấp)
loginUser(function(user){

    getProfile(user.id, function(profile){

        getPosts(profile.id, function(posts){

            getComments(posts[0].id, function(comments){

                console.log(comments);

            });

        });

    });

});

Cấu trúc thực tế:
loginUser()
 └─ getProfile()
     └─ getPosts()
         └─ getComments()

Code bị lồng nhiều tầng nên rất khó đọc.
4. Refactor bằng Promise
loginUser()
    .then(user => {
        return getProfile(user.id);
    })
    .then(profile => {
        return getPosts(profile.id);
    })
    .then(posts => {
        return getComments(posts[0].id);
    })
    .then(comments => {
        console.log(comments);
    })
    .catch(error => {
        console.error(error);
    });

Ưu điểm:
Không còn lồng nhiều callback.
Dễ đọc hơn.
Xử lý lỗi tập trung bằng catch().
5. Refactor bằng async/await
async function loadData(){

    try{

        const user =
            await loginUser();

        const profile =
            await getProfile(user.id);

        const posts =
            await getPosts(profile.id);

        const comments =
            await getComments(posts[0].id);

        console.log(comments);

    }
    catch(error){

        console.error(error);

    }
}
Ưu điểm:
Cú pháp giống code đồng bộ.
Dễ đọc và dễ bảo trì.
Tránh Callback Hell.
Dễ xử lý lỗi bằng try...catch.
Câu C1: 
1. Network Errors (Mất kết nối mạng)
Nguyên nhân
Người dùng mất Internet.
Wi-Fi bị ngắt.
Server không thể truy cập.
DNS lỗi.
Cách xử lý
Hiển thị thông báo thân thiện cho người dùng.
Cho phép thử lại (Retry).
Không làm ứng dụng bị crash.
Ví dụ:
try {
    const response = await fetch(url);
}
catch(error) {
    console.log("Không có kết nối mạng");
}
Thông báo cho người dùng:
Không thể kết nối tới máy chủ.
Vui lòng kiểm tra Internet và thử lại.
2. API Errors
Server phản hồi nhưng trả về mã lỗi HTTP.
a. 404 Not Found
Nguyên nhân
API hoặc tài nguyên không tồn tại.
Ví dụ:
GET /products/999999
Xử lý
if(response.status === 404){
    alert("Sản phẩm không tồn tại");
}

Thông báo:
Sản phẩm bạn tìm kiếm không tồn tại.
b. 500 Internal Server Error
Nguyên nhân
Lỗi phía máy chủ.
Xử lý
if(response.status === 500){
    alert("Hệ thống đang bảo trì");
}
Thông báo:
Máy chủ đang gặp sự cố.
Vui lòng thử lại sau.
c. 429 Too Many Requests
Nguyên nhân
Gửi quá nhiều request trong thời gian ngắn.
Xử lý
if(response.status === 429){
    alert("Bạn thao tác quá nhanh");
}
Thông báo:
Vui lòng chờ vài giây rồi thử lại.
Có thể kết hợp cơ chế Retry với thời gian chờ.
3. Timeout (API phản hồi quá chậm)
Yêu cầu
Nếu API phản hồi lâu hơn 10 giây thì hủy request.
Hàm fetchWithTimeout
async function fetchWithTimeout(url, ms = 10000) {

    const controller = new AbortController();

    const timeoutId = setTimeout(() => {
        controller.abort();
    }, ms);

    try {

        const response = await fetch(url, {
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        return response;

    } catch(error) {

        clearTimeout(timeoutId);

        throw error;
    }
}
Sử dụng
try {

    const response =
        await fetchWithTimeout(
            "/api/products",
            10000
        );

} catch(error) {

    console.log("Request timeout");

}
Ý nghĩa
Sau 10 giây request sẽ bị hủy.
Tránh người dùng phải chờ vô hạn.
Tăng trải nghiệm sử dụng.
4. Retry Logic
Mục tiêu
Nếu lỗi mạng xảy ra thì tự động thử lại tối đa 3 lần.
Hàm fetchWithRetry
async function fetchWithRetry(
    url,
    maxRetries = 3
){

    let attempt = 0;

    while(attempt < maxRetries){

        try{

            const response =
                await fetch(url);

            return response;

        }
        catch(error){

            attempt++;

            console.log(
                `Retry ${attempt}/${maxRetries}`
            );

            if(attempt >= maxRetries){
                throw error;
            }
        }
    }
}
Sử dụng
try{
    const response =
        await fetchWithRetry(
            "/api/products",
            3
        );
}
catch(error){

    console.log(
        "Không thể kết nối server"
    );
}
5. Kết hợp Timeout + Retry
Trong thực tế nên kết hợp cả hai:
async function fetchWithRetryAndTimeout(
    url,
    retries = 3
){

    for(let i = 0; i < retries; i++){

        try{

            return await fetchWithTimeout(
                url,
                10000
            );

        }
        catch(error){

            if(i === retries - 1){
                throw error;
            }
        }
    }
}
Ưu điểm:
Không chờ vô hạn.
Tự động phục hồi khi lỗi mạng tạm thời.
Tăng độ ổn định của ứng dụng.
Câu C2:
1. Promise.all()
Khi nào resolve?
Promise.all() sẽ resolve khi tất cả các Promise đều thành công.

Khi nào reject?
Chỉ cần một Promise bất kỳ bị reject, toàn bộ Promise.all() sẽ reject ngay lập tức.

Use Case
Dùng khi tất cả dữ liệu đều bắt buộc phải có mới tiếp tục xử lý.

Ví dụ: Trang sản phẩm cần tải đồng thời:
Thông tin sản phẩm
Danh sách đánh giá
Thông tin người bán

Nếu một API lỗi thì không thể hiển thị đầy đủ trang.

Ví dụ
async function loadProductPage() {

    try {

        const [product, reviews, seller] =
            await Promise.all([
                fetch("/api/product/1").then(r => r.json()),
                fetch("/api/reviews/1").then(r => r.json()),
                fetch("/api/seller/1").then(r => r.json())
            ]);

        console.log(product);
        console.log(reviews);
        console.log(seller);

    } catch(error) {

        console.log("Không thể tải dữ liệu");

    }
}
2. Promise.allSettled()
Khi nào resolve?
Khi tất cả Promise đều hoàn thành, bất kể thành công hay thất bại.

Khi nào reject?
Không reject.
Luôn trả về kết quả của tất cả Promise.

Use Case
Dùng khi muốn biết kết quả của từng API mà không muốn một lỗi làm dừng toàn bộ chương trình.

Ví dụ:
Dashboard quản trị tải:
Thống kê doanh thu
Danh sách khách hàng
Danh sách đơn hàng

Một API lỗi nhưng các dữ liệu còn lại vẫn hiển thị được.

Ví dụ
async function loadDashboard() {

    const results =
        await Promise.allSettled([
            fetch("/api/revenue"),
            fetch("/api/orders"),
            fetch("/api/customers")
        ]);

    console.log(results);
}

Kết quả:
[
  { status: "fulfilled", value: ... },
  { status: "rejected", reason: ... },
  { status: "fulfilled", value: ... }
]
3. Promise.race()
Khi nào resolve?
Khi Promise đầu tiên hoàn thành thành công.
Khi nào reject?
Khi Promise đầu tiên hoàn thành là reject.
Use Case
Thường dùng để tạo Timeout.
Ví dụ:
Nếu API phản hồi quá chậm thì hủy và báo lỗi.

Ví dụ
function timeout(ms){
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Timeout"));
        }, ms);
    });

}
Promise.race([
    fetch("/api/products"),
    timeout(5000)
])
.then(response => {
    console.log("Thành công");
})
.catch(error => {
    console.log(error.message);
});
Nếu API mất hơn 5 giây:
Timeout
4. Promise.any()
Khi nào resolve?
Khi có Promise đầu tiên thành công.
Khi nào reject?
Khi tất cả Promise đều thất bại.
Use Case
Dùng khi có nhiều nguồn dữ liệu dự phòng (backup server).
Chỉ cần một nguồn trả về dữ liệu là đủ.
Ví dụ
async function getData() {

    try {
        const data =
            await Promise.any([
                fetch("https://server1.com/data"),
                fetch("https://server2.com/data"),
                fetch("https://server3.com/data")
            ]);
        console.log("Nhận dữ liệu thành công");
    } catch(error) {
        console.log(
            "Tất cả server đều lỗi"
        );
    }
}
Nếu:
Server 1 lỗi
Server 2 lỗi
Server 3 thành công
=> Promise.any() vẫn resolve.