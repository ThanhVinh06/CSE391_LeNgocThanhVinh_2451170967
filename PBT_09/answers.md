Câu A1: 
1. Vẽ DOM Tree
div#app
├── header
│   ├── h1
│   │   └── "Todo App"
│   └── nav
│       ├── a.active
│       │   └── "All"
│       ├── a
│       │   └── "Active"
│       └── a
│           └── "Completed"
│
└── main
    ├── form#todoForm
    │   ├── input#todoInput
    │   └── button
    │       └── "Add"
    │
    └── ul#todoList
        ├── li.todo-item
        │   └── "Learn HTML"
        └── li.todo-item.completed
            └── "Learn CSS"
2. Query Selector
Chọn thẻ <h1>
    document.querySelector("h1");
Chọn input trong form
    document.querySelector("#todoForm input");
Chọn tất cả .todo-item
    document.querySelectorAll(".todo-item");
Chọn link đang active
    document.querySelector("a.active");
    Hoặc
    document.querySelector("nav a.active");
Chọn <li> đầu tiên trong #todoList
    document.querySelector("#todoList li:first-child");
Chọn tất cả <a> bên trong <nav>
    document.querySelectorAll("nav a");
Câu A2:
  innerHTML                                    | textContent                
 Đọc hoặc ghi nội dung HTML bên trong phần tử  | Đọc hoặc ghi văn bản thuần 
 Hiểu và render các thẻ HTML                   | Không render HTML          
 Có thể tạo thêm phần tử HTML mới              | Chỉ hiển thị text          
 Chậm hơn vì phải phân tích HTML               | Nhanh hơn                  
 Có nguy cơ XSS nếu dùng dữ liệu từ người dùng | An toàn hơn                

Ví dụ:
    Dùng innerHTML
    <div id="demo"></div>
    document.querySelector("#demo").innerHTML =
        "<h2>Xin chào</h2>";
    Kết quả:
    <h2>Xin chào</h2>
    Tiêu đề sẽ được render thành thẻ HTML.
    Dùng textContent
    document.querySelector("#demo").textContent =
        "<h2>Xin chào</h2>";
    Kết quả hiển thị trên màn hình:
    <h2>Xin chào</h2>
    Thẻ <h2> được xem như văn bản bình thường.
Dùng innerHTML
    Khi muốn:
        Thêm HTML động
        Tạo thẻ mới từ JavaScript
Dùng textContent
    Khi:
        Hiển thị dữ liệu người dùng nhập
        Chỉ cần văn bản
        Muốn tránh lỗi bảo mật
Câu hỏi bảo mật: Tại sao innerHTML gây lỗ hổng XSS?
XSS (Cross-Site Scripting) xảy ra khi dữ liệu do người dùng nhập được đưa trực tiếp vào HTML và trình duyệt thực thi mã độc bên trong.
Ví dụ người dùng nhập:
<img src=x onerror="alert('Hacked!')">
const userInput =
    document.querySelector("#search").value;
document.querySelector("#result").innerHTML =
    userInput;
Khi đó trình duyệt hiểu đây là một thẻ <img>.
Do src=x không tồn tại nên sự kiện:
onerror="alert('Hacked!')" được thực thi.
Kết quả:
Hacked!
=> JavaScript của kẻ tấn công được chạy trên trình duyệt người dùng.
Minh họa
<input id="search">
<button onclick="showResult()">Show</button>
<div id="result"></div>
function showResult() {
    const userInput =
        document.querySelector("#search").value;
    document.querySelector("#result").innerHTML =
        userInput;
}
Nếu nhập:
<img src=x onerror="alert('Hacked!')">
thì popup sẽ xuất hiện.
Câu A3:
Event Bubbling là cơ chế lan truyền sự kiện trong DOM. Khi một sự kiện xảy ra trên phần tử con, sự kiện đó sẽ được xử lý tại phần tử con trước, sau đó lan truyền dần lên các phần tử cha.
Trong đoạn mã đã cho, nút button nằm bên trong #inner, và #inner nằm bên trong #outer.
Khi người dùng click vào nút Click me, sự kiện click sẽ xảy ra theo thứ tự:
Phần tử button nhận sự kiện đầu tiên.
Sự kiện lan lên phần tử #inner.
Sự kiện tiếp tục lan lên phần tử #outer.
Do đó kết quả hiển thị trên Console là:
BUTTON
INNER
OUTER
Nếu bỏ comment dòng lệnh: e.stopPropagation();
thì phương thức stopPropagation() sẽ ngăn sự kiện tiếp tục lan truyền lên các phần tử cha.
Khi đó:
BUTTON vẫn được thực thi vì sự kiện xảy ra tại button.
INNER và OUTER sẽ không được thực thi.
Kết quả trên Console là:
BUTTON
Câu C1:
Lỗi 1: Sai tên sự kiện của nút giảm
Code sai
    document.querySelector("#decrementBtn").addEventListener("onclick", function() {
Sửa
    document.querySelector("#decrementBtn").addEventListener("click", function() {
Lỗi 2: Gán giá trị cho biến const
Code sai
countDisplay = count;
Sửa
countDisplay.textContent = count;
Lỗi 3: Xóa history bằng giá trị null
Code sai
historyList.innerHTML = null;
Sửa
historyList.innerHTML = "";
Lỗi 4: Quên gọi hàm remove()
Code sai
item.remove;
Sửa
item.remove();
Lỗi 5: Dữ liệu count lấy từ localStorage là chuỗi
Code sai
count = localStorage.getItem("count");
Sửa
count = Number(localStorage.getItem("count")) || 0;
Lỗi 6: Không khôi phục lịch sử từ localStorage
Hiện trạng
Khi lưu:
localStorage.setItem("history", historyList.innerHTML);
Nhưng khi tải lại trang:
window.addEventListener("load", () => {
    count = localStorage.getItem("count");
    countDisplay.textContent = count;
});
Không có đoạn nào lấy lại history.
Sửa
historyList.innerHTML =
    localStorage.getItem("history") || "";
Lỗi 7: Các item history tải lại sẽ mất sự kiện click
Nguyên nhân
Sau khi:
historyList.innerHTML =
    localStorage.getItem("history");
các thẻ <li> được tạo lại từ HTML nên các Event Listener cũ không còn.
Khi click vào history sẽ không xóa được.
Sửa
Gắn lại sự kiện:
historyList.querySelectorAll("li").forEach(li => {
    li.addEventListener("click", function() {
        deleteHistory(this);
    });
});
Lỗi 8: Dùng innerHTML để hiển thị số đếm
Code hiện tại
countDisplay.innerHTML = count;
Sửa
countDisplay.textContent = count;
Áp dụng cho cả nút Increment và Decrement.
Câu C2:
1. Tại sao bind event lên 1000 elements riêng lẻ là Bad Practice?
Khi gắn một Event Listener cho từng phần tử riêng lẻ, trình duyệt phải tạo và quản lý rất nhiều listener cùng lúc. Ví dụ với 1000 phần tử:
items.forEach(item => {
    item.addEventListener("click", handleClick);
});
Trình duyệt sẽ phải lưu trữ 1000 Event Listener trong bộ nhớ.
Nhược điểm
Tốn nhiều bộ nhớ (Memory).
Tăng thời gian khởi tạo trang.
Khó bảo trì mã nguồn.
Khi thêm phần tử mới bằng JavaScript phải gắn lại Event Listener cho phần tử đó.
Nếu số lượng phần tử lớn (1000, 5000 hoặc hơn), hiệu năng của ứng dụng có thể bị ảnh hưởng đáng kể.
Thay vì gắn sự kiện cho từng phần tử con, ta chỉ gắn một Event Listener lên phần tử cha.
Ví dụ:
document.querySelector("#list").addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        console.log(e.target.textContent);
    }
});
Nguyên lý hoạt động
Event Delegation tận dụng cơ chế Event Bubbling.
Khi người dùng click vào một phần tử con:
Sự kiện xảy ra ở phần tử con.
Event nổi bọt lên phần tử cha.
Listener của phần tử cha xử lý sự kiện.
Ưu điểm
Chỉ cần 1 Event Listener thay vì 1000 Listener.
    Tiết kiệm bộ nhớ.
    Tăng hiệu năng.
    Tự động hoạt động với các phần tử được thêm động sau này.
2. Refactor bằng DocumentFragment
Code ban đầu
for (let i = 0; i < 1000; i++) {
    const div = document.createElement("div");
    div.textContent = `Item ${i}`;
    document.body.appendChild(div);
}
Vấn đề
Mỗi lần gọi:
document.body.appendChild(div);
DOM sẽ thay đổi.
Trình duyệt phải:
    Cập nhật DOM.
    Tính toán lại layout.
    Vẽ lại giao diện.
Quá trình này được gọi là Reflow (hoặc Layout Recalculation).
Với 1000 phần tử:
    1000 lần append
    → 1000 lần cập nhật DOM
    → rất tốn thời gian
Cách tối ưu bằng DocumentFragment
const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
    const div = document.createElement("div");
    div.textContent = `Item ${i}`;
    fragment.appendChild(div);
}
document.body.appendChild(fragment);
Nhanh hơn vì: 
DocumentFragment là một vùng chứa tạm thời trong bộ nhớ.
Các phần tử được thêm vào Fragment sẽ:
Không xuất hiện trên giao diện.
Không làm thay đổi DOM thật.
Không gây Reflow trong quá trình tạo.
Sau khi hoàn thành:
document.body.appendChild(fragment);
toàn bộ 1000 phần tử được chèn vào DOM chỉ trong một lần.
So sánh
Cách làm	      | Số lần cập nhật DOM
append trực tiếp  |      1000 lần
DocumentFragment  |       1 lần