Câu A1: 
    Cách 1. Inline CSS
    Inline CSS là cách viết CSS trực tiếp trong thuộc tính style của thẻ HTML.
    Ví dụ:
    <h1 style="color: blue; font-size: 32px;">Tiêu đề</h1>
    Ưu điểm:
        Nhanh, tiện lợi khi cần chỉnh sửa ngay lập tức
        Không cần tạo file CSS riêng
    Nhược điểm:
        Không tái sử dụng được cho nhiều phần tử
        Làm mã HTML trở nên rối và khó đọc
        Khó bảo trì khi dự án lớn
    Khi nên dùng:
        Khi cần test nhanh giao diện
        Khi cần override tạm thời một style cụ thể
    2. Internal CSS
    Internal CSS được viết trong thẻ <style> bên trong phần <head> của file HTML.
    Ví dụ:
    <head>
    <style>
        h1 {
        color: blue;
        font-size: 32px;
        }
    </style>
    </head>
    Ưu điểm:
        Dễ quản lý hơn Inline CSS
        Phù hợp cho các trang đơn giản
    Nhược điểm:
        Không thể tái sử dụng cho nhiều trang khác
        Làm file HTML dài và khó quản lý khi lớn
    Khi nên dùng:
        Khi xây dựng trang web đơn (single page)
        Khi làm prototype hoặc bài tập nhỏ
    3. External CSS
    External CSS là cách tách CSS ra thành một file riêng và liên kết với HTML thông qua thẻ <link>.
    Ví dụ:
    <head>
    <link rel="stylesheet" href="styles.css">
    </head>
    /* styles.css */
    h1 {
    color: blue;
    font-size: 32px;
    }
    Ưu điểm:
        Tái sử dụng cho nhiều trang web
        Dễ bảo trì và quản lý
        Trình duyệt có thể cache giúp tăng tốc độ tải trang
    Nhược điểm:
        Cần thêm file riêng
        Phải tải file CSS từ bên ngoài
    Khi nên dùng:
        Trong các dự án thực tế
        Website có nhiều trang hoặc cần mở rộng
        Câu hỏi thêm
    Nếu một phần tử HTML đồng thời chịu tác động của cả ba cách trên, thì Inline CSS sẽ được ưu tiên cao nhất, sau đó đến Internal CSS, và cuối cùng là External CSS.
    Giải thích:
    Điều này dựa trên nguyên tắc độ ưu tiên (specificity) và cascade của CSS. Inline CSS được gắn trực tiếp vào phần tử nên có mức ưu tiên cao nhất. Trong khi đó, Internal và External CSS phụ thuộc vào selector và thứ tự khai báo, nhưng nhìn chung sẽ có độ ưu tiên thấp hơn Inline.
Câu A2:
    1. `h1`
    → Selector này chọn tất cả thẻ `<h1>` trong tài liệu.
    Kết quả:
    → `ShopTLU`
    2. `.price`
    → Chọn tất cả phần tử có class `price`.
    Kết quả:
    → `25.990.000đ`
    → `45.990.000đ`
    3. `#app header`
    → Chọn thẻ `<header>` nằm bên trong phần tử có id `app`.
    Kết quả (toàn bộ nội dung header):
    → `ShopTLU Home Products About`
    4. `nav a:first-child`
    → Chọn thẻ `<a>` là con đầu tiên trong `<nav>`.
    Trong `<nav>`:
    `<a href="/">Home</a>` là phần tử đầu tiên
    Kết quả:
    → `Home`
    5. `.product.featured h2`
    → Chọn `<h2>` nằm trong phần tử có đồng thời class `product` và `featured`.
    Kết quả:
    → `MacBook Pro`
    6. `article > p`
    → Chọn tất cả `<p>` là con trực tiếp của `<article>`.
    Mỗi `<article>` có 2 thẻ `<p>`:
    Kết quả:
    → `25.990.000đ`
    → `Mô tả sản phẩm...`
    → `45.990.000đ`
    → `Mô tả sản phẩm...`
    7. `a[href="/"]`
    → Chọn thẻ `<a>` có thuộc tính `href="/"`.
    Kết quả:
    → `Home`
    8. `.top-bar.dark h1`
    → Chọn `<h1>` nằm trong phần tử có cả 2 class `top-bar` và `dark`.
    Kết quả:
    → `ShopTLU`
Câu A3:
    1. Trường hợp 1: content-box (mặc định)
        Trong mô hình content-box, thuộc tính width chỉ tính cho nội dung (content), không bao gồm padding và border. Do đó, kích thước thực tế của phần tử sẽ được tính bằng:
        Chiều rộng thực tế = width + padding (trái + phải) + border (trái + phải)
        Với:
        width = 400px
        padding = 20px mỗi bên → tổng = 40px
        border = 5px mỗi bên → tổng = 10px
        ⇒ Chiều rộng hiển thị thực tế:
        400 + 40 + 10 = 450px
        Ngoài ra, phần tử còn có margin:
        margin = 10px mỗi bên → tổng = 20px
        ⇒ Không gian chiếm trên trang:
        450 + 20 = 470px
    Kết luận:
        Chiều rộng hiển thị = 450px
        Không gian chiếm trên trang = 470px
    2. Trường hợp 2: border-box
        Trong mô hình border-box, thuộc tính width đã bao gồm content + padding + border. Vì vậy:
        Chiều rộng hiển thị luôn bằng giá trị width đã khai báo
        ⇒ Chiều rộng hiển thị:
        = 400px
        Để tính kích thước phần content thực tế, ta trừ đi padding và border:
        padding tổng = 40px
        border tổng = 10px
        ⇒ Kích thước content:
        400 - 40 - 10 = 350px
        Không gian chiếm trên trang vẫn bao gồm margin:
        margin tổng = 20px
        ⇒ Không gian chiếm trên trang:
        400 + 20 = 420px
    Kết luận:
        Chiều rộng hiển thị = 400px
        Kích thước content thực tế = 350px
        Không gian chiếm trên trang = 420px
    3. Trường hợp 3: Margin Collapse
        Khi hai phần tử block đứng liền kề theo chiều dọc, margin của chúng không cộng lại mà xảy ra hiện tượng margin collapse.
        Với:
        .box-a có margin-bottom = 25px
        .box-b có margin-top = 40px
        Theo quy tắc margin collapse:
        Khoảng cách giữa hai phần tử = giá trị margin lớn hơn
        ⇒ Khoảng cách thực tế:
        = 40px
    Giải thích:
        Khoảng cách không phải là 65px vì hai margin dọc đã bị “gộp” lại thành một, và trình duyệt chỉ lấy giá trị lớn nhất thay vì cộng lại.
    4. Trường hợp nâng cao (margin âm)
    Với:
        margin-bottom của .box-a = -10px
        margin-top của .box-b = 40px
        Khi có margin âm, quy tắc là:
        Khoảng cách = margin lớn nhất + margin nhỏ nhất
        ⇒ Khoảng cách:
        40 + (-10) = 30px
    Kết luận:
        Khoảng cách giữa hai box = 30px
Câu A4: 
    Xét các quy tắc CSS cùng áp dụng cho phần tử:
    <p class="price" id="main-price">
    1. Tính specificity của từng rule
        Trong CSS, độ ưu tiên (specificity) được tính theo bộ ba (a, b, c), trong đó:
        a: số lượng ID selector
        b: số lượng class, attribute, pseudo-class
        c: số lượng element, pseudo-element
        Rule A:
        p { color: black; }
        Có 1 element selector
        ⇒ Specificity: (0, 0, 1)
        Rule B:
        .price { color: blue; }
        Có 1 class selector
        ⇒ Specificity: (0, 1, 0)
        Rule C:
        #main-price { color: red; }
        Có 1 ID selector
        ⇒ Specificity: (1, 0, 0)
        Rule D:
        p.price { color: green; }
        Có 1 element và 1 class
        ⇒ Specificity: (0, 1, 1)
    2. Xác định màu của phần tử
        Khi nhiều rule cùng áp dụng cho một phần tử, trình duyệt sẽ chọn rule có specificity cao nhất.
        So sánh các giá trị:
        Rule A: (0, 0, 1)
        Rule B: (0, 1, 0)
        Rule D: (0, 1, 1)
        Rule C: (1, 0, 0)
        Ta thấy Rule C có giá trị lớn nhất vì có ID selector.
        ⇒ Phần tử sẽ nhận màu từ Rule C.
        Kết luận: Màu của phần tử là đỏ (red).
    3. Trường hợp có inline style
        Nếu phần tử được viết như sau:
        <p class="price" id="main-price" style="color: orange;">
        Inline style có độ ưu tiên cao hơn tất cả các selector thông thường.
        Do đó, giá trị color: orange sẽ ghi đè tất cả các rule CSS bên ngoài.
        Kết luận: Màu của phần tử là cam (orange).
    4. Trường hợp Rule A có !important
        Nếu Rule A được viết lại:
        p { color: black !important; }
        Trong CSS, !important có độ ưu tiên cao hơn tất cả các rule thông thường, kể cả rule có specificity cao hơn.
        Do đó, dù Rule C có ID selector, Rule A vẫn được ưu tiên vì có !important.
        Kết luận: Màu của phần tử là đen (black).
Câu B2:
    Hộp 1 (content-box): chiều rộng thực tế = 350px
    Giải thích:
        width = 300px
        padding = 20px x 2 = 40px
        border = 5px x 2 = 10px
        → Tổng = 300 + 40 + 10 = 350px
        Hộp 2 (border-box): chiều rộng thực tế = 300px
    Giải thích:
        box-sizing: border-box nên width đã bao gồm padding và border
    Sự khác biệt:
        content-box: width chỉ tính content → bị cộng thêm padding + border  
        border-box: width bao gồm tất cả → không bị tăng kích thước
        Không dùng border-box:
        Sidebar: 250 + 30 = 280
        Content: 500 + 40 = 540
        Ads: 250 + 30 = 280
        → Tổng = 1100px > 1000px → layout bị vỡ
    Dùng border-box:
        Tất cả giữ nguyên width như khai báo
        → Tổng = 1000px → layout đúng
Câu B3:
    1. Danh sách rules và specificity
        p → (0,0,1)  
        body p → (0,0,2)  
        .text → (0,1,0)  
        .highlight → (0,1,0)  
        p.text → (0,1,1)  
        .text.highlight → (0,2,0)  
        body .text.highlight → (0,2,1)  
        #demo → (1,0,0)  
        #demo.text → (1,1,0)  
        p#demo.text.highlight → (1,2,1)  
    2. Màu cuối cùng
        Element hiển thị màu: gold
    Giải thích:
        Rule cuối có specificity cao nhất nên override tất cả các rule khác.
    3. Thay đổi thứ tự rules
    Kết quả KHÔNG đổi nếu specificity khác nhau.
    Chỉ khi 2 rule có cùng specificity thì rule viết sau sẽ được áp dụng.
    Ví dụ:
        .text và .highlight cùng (0,1,0) → rule nào viết sau sẽ thắng.
Câu C1:
    1. Tính chiều rộng thực tế
    Vì đang dùng content-box (mặc định) nên:
    Chiều rộng thực tế = width + padding + border
    Sidebar
        width = 300px
        padding = 20px × 2 = 40px
        border = 1px × 2 = 2px
        ⇒ Chiều rộng thực tế:
        300 + 40 + 2 = 342px
    Content
        width = 660px
        padding = 30px × 2 = 60px
        border = 1px × 2 = 2px
        ⇒ Chiều rộng thực tế:
        660 + 60 + 2 = 722px
    Tổng: 342 + 722 = 1064px
    2. Giải thích layout bị vỡ
        Container chỉ có: 960px
        Nhưng tổng 2 cột: 1064px > 960px
    Do đó:
        Không đủ chỗ trên cùng 1 dòng .content bị đẩy xuống dòng mới
    3. Cách sửa
        Dùng border-box (chuẩn nhất)
            CSS sửa:
                * {
                    box-sizing: border-box;
                }
            Lúc này:
                sidebar = 300px (đã bao gồm padding + border)
                content = 660px
                300 + 660 = 960px → OK
Câu C2:
    1. Phân tích tổng quan
    Các rule quan trọng:
        body { font-size: 16px; color: #333; }
        .container { font-size: 14px; }
        .card { color: blue; }
        .card .title { font-size: 20px; }
        .card p { color: inherit; }
        #featured .title { color: red; }
        .highlight { color: green !important; }
    2. Phần tử: “Sản phẩm A” (h2)
    <h2 class="title highlight">Sản phẩm A</h2>
    Font-size
        body: 16px
        .container: 14px (override body do nằm trong container)
        .card .title: 20px
        Rule áp dụng trực tiếp vào h2 là .card .title
        ⇒ font-size = 20px
    Color
        Các rule ảnh hưởng:
        .card { color: blue }
        #featured .title { color: red }
        .highlight { color: green !important }
    Kết luận:
    "Sản phẩm A":
    font-size = 20px
    color = green
    3. “Mô tả sản phẩm” (p trong card featured)
    <p>Mô tả sản phẩm</p>
    Color
    .card { color: blue }
    .card p { color: inherit }
    inherit nghĩa là lấy từ cha (.card)
    ⇒ .card có:
    color: blue
    Lưu ý:
        Không có .highlight nên không bị override
    Kết luận:
        color = blue
    4. “Sản phẩm B” (h2)
    <h2 class="title">Sản phẩm B</h2>
    Font-size
    .card .title { font-size: 20px }
    ⇒ font-size = 20px
    Color
        .card { color: blue }
        không có .highlight
        không có #featured
        ⇒ kế thừa từ .card
        ⇒ color = blue
    Kết luận:
    "Sản phẩm B":
    font-size = 20px
    color = blue
    5. “Mô tả sản phẩm B” (p.highlight)
    <p class="highlight">...</p>
    Color
    .card { color: blue }
    .card p { color: inherit }
    .highlight { color: green !important }
    !important override hết
    ⇒ color = green
    Kết luận:
    color = green