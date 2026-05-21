Câu A1:
    1.Thẻ viewport chuẩn:
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        Giải thích các thuộc tính:
            name="viewport": dùng để khai báo cấu hình viewport cho trình duyệt trên thiết bị di động
            width=device-width: chiều rộng của trang web sẽ bằng đúng chiều rộng thực tế của thiết bị
            initial-scale=1.0: đặt mức zoom ban đầu của trang là 100%
    2. Nếu thiếu thẻ này thì iPhone sẽ hiển thị trang như thế nào?
        Nếu không có thẻ <meta viewport>, iPhone sẽ mặc định xem trang web như một trang desktop có chiều rộng khoảng 980px rồi tự động thu nhỏ toàn bộ trang để vừa màn hình điện thoại
        Kết quả:
            Chữ hiển thị rất nhỏ
            Nút bấm khó thao tác
            Người dùng phải zoom mới đọc được nội dung
            Có thể xuất hiện scroll ngang
            Trải nghiệm sử dụng trên mobile rất kém
    3. Mobile-First và Desktop-First khác nhau như thế nào?
        3.1 Mobile-First
            Mobile-First là cách thiết kế giao diện cho mobile trước, sau đó dùng media query để mở rộng cho tablet và desktop. Cách này thường sử dụng min-width
            Ví dụ với breakpoint 768px:
                .container {
                    flex-direction: column;
                }
                @media (min-width: 768px) {
                    .container {
                        flex-direction: row;
                    }
                }
            Ý nghĩa:
            Dưới 768px: layout dạng cột cho mobile
            Từ 768px trở lên: chuyển thành dạng hàng cho màn hình lớn hơn
        3.2 Desktop-First
            Desktop-First là cách viết giao diện desktop trước rồi dùng media query để thu nhỏ cho mobile Cách này thường dùng max-width
            Ví dụ:
                /* Desktop */
                .container {
                    flex-direction: row;
                }
                /* Mobile */
                @media (max-width: 768px) {
                    .container {
                        flex-direction: column;
                    }
                }
            Ý nghĩa:
                Desktop hiển thị dạng hàng
                Khi màn hình nhỏ hơn hoặc bằng 768px thì đổi thành dạng cột
    4. Tại sao Mobile-First được khuyên dùng?
        Mobile-First được khuyên dùng vì hiện nay phần lớn người dùng truy cập web bằng điện thoại. Ngoài ra:
        Website sẽ tải nhanh và tối ưu hiệu năng tốt hơn trên mobile
        Google ưu tiên Mobile-First Indexing nên có lợi cho SEO
        Giúp lập trình viên tập trung vào nội dung quan trọng trước
        Dễ mở rộng giao diện từ nhỏ lên lớn hơn là thu nhỏ từ desktop xuống mobile
Câu A2:
    Breakpoints là các mốc kích thước màn hình dùng trong Responsive Design để thay đổi giao diện phù hợp với từng thiết bị khác nhau. Khi màn hình đạt đến một kích thước nhất định thì CSS sẽ đổi layout để website dễ nhìn và dễ sử dụng hơn
    Các breakpoints phổ biến theo Bootstrap gồm:
        1. Mobile nhỏ — < 576px
        Kích thước: nhỏ hơn 576px
        Thiết bị đại diện: iPhone SE, điện thoại Android nhỏ
        Ví dụ layout:
        Lưới sản phẩm nên hiển thị 1 cột để người dùng dễ đọc và dễ bấm
        Ví dụ CSS:
        .product-grid {
            grid-template-columns: 1fr;
        }
        2. Mobile lớn — ≥ 576px
        Kích thước: từ 576px trở lên
        Thiết bị đại diện: iPhone Plus, điện thoại màn hình lớn
        Ví dụ layout:
        Có thể hiển thị 2 cột sản phẩm
        Ví dụ:
        @media (min-width: 576px) {
            .product-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        3. Tablet — ≥ 768px
        Kích thước: từ 768px trở lên
        Thiết bị đại diện: iPad, tablet
        Ví dụ layout:
        Thường hiển thị 2 hoặc 3 cột sản phẩm
        Ví dụ:
        @media (min-width: 768px) {
            .product-grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        4. Desktop nhỏ — ≥ 992px
        Kích thước: từ 992px trở lên
        Thiết bị đại diện: laptop nhỏ
        Ví dụ layout:
        Có thể hiển thị 4 cột sản phẩm
        Ví dụ:
        @media (min-width: 992px) {
            .product-grid {
                grid-template-columns: repeat(4, 1fr);
            }
        }
        5. Desktop lớn — ≥ 1200px
        Kích thước: từ 1200px trở lên
        Thiết bị đại diện: màn hình desktop lớn
        Ví dụ layout:
        Có thể hiển thị 5 hoặc 6 cột sản phẩm vì có nhiều không gian hơn
        6. Desktop rất lớn — ≥ 1400px
        Kích thước: từ 1400px trở lên
        Thiết bị đại diện: màn hình 2K, 4K hoặc ultrawide
        Ví dụ layout:
        Hiển thị nhiều cột hơn hoặc tăng khoảng cách giữa các phần tử để giao diện thoáng hơn
Câu A3:
    Chiều rộng màn hình | .container width
    375px(iPhone SE)    |    100%
    600px               |    540px
    800px               |    720px
    1000px              |    960px
    1400px              |    1140px
Câu A4:
    SCSS là một CSS preprocessor giúp viết CSS dễ quản lý và ngắn gọn hơn. SCSS bổ sung thêm nhiều tính năng như variables, nesting, mixins và inheritance. Sau khi viết SCSS, hệ thống sẽ compile thành CSS để trình duyệt đọc được
    1. Variables ($primary-color)
        Variables dùng để lưu màu sắc, font-size, spacing,… nhằm tránh viết lặp lại nhiều lần
        Ví dụ:
            $primary-color: #2563eb;
            .button {
                background: $primary-color;
            }
            .title {
                color: $primary-color;
            }
        Ý nghĩa:
            Chỉ cần đổi giá trị của $primary-color một lần thì tất cả phần dùng biến này sẽ tự đổi theo
            Dễ bảo trì và đồng bộ giao diện
    2. Nesting (viết CSS lồng nhau)
        Nesting cho phép viết CSS theo cấu trúc giống HTML, giúp code dễ đọc hơn
        Ví dụ:
            .navbar {
                background: black;

                a {
                    color: white;
                }

                a:hover {
                    color: yellow;
                }
            }
        Sau khi compile sẽ thành CSS:
            .navbar {
                background: black;
            }
            .navbar a {
                color: white;
            }
            .navbar a:hover {
                color: yellow;
            }
        Ý nghĩa:
            Code gọn hơn
            Nhìn rõ mối quan hệ giữa các phần tử
    3. Mixins (@mixin, @include)   
        Mixins giống như hàm trong lập trình, dùng để tái sử dụng nhiều đoạn CSS.
        Ví dụ:
            @mixin flex-center {
            display: flex;
            justify-content: center;
            align-items: center;
            }
            .box {
                @include flex-center;
            }
        Ý nghĩa:
            @mixin dùng để định nghĩa
            @include dùng để sử dụng lại
            Giúp tránh lặp code nhiều lần
    4. @extend / Inheritance
        @extend cho phép một class kế thừa CSS của class khác.
        Ví dụ:
            .button {
                padding: 10px;
                border-radius: 5px;
            }
            .primary-button {
                @extend .button;
                background: blue;
            }
        Ý nghĩa:
            .primary-button sẽ có toàn bộ style của .button
            Giúp tái sử dụng CSS nhanh hơn
    5. Tại sao trình duyệt không đọc được file .scss?
        Trình duyệt chỉ hiểu CSS thông thường nên không thể đọc trực tiếp cú pháp SCSS như:
            $variable
            @mixin
            nesting
            @extend
        Vì vậy cần compile SCSS thành CSS trước khi chạy trên trình duyệt
    6. Cần bước gì để chuyển SCSS → CSS?
        Cần dùng SCSS compiler để biên dịch file .scss thành .css
        Ví dụ:
            Live Sass Compiler trong VS Code
            Vite
            Webpack
            Node Sass
        Ví dụ lệnh:
            npx sass style.scss style.css
        Sau khi compile:
            Developer viết SCSS
            Compiler chuyển thành CSS
            Browser đọc file CSS để hiển thị giao diện website
Câu B3:
    # SCSS Compile Command
    Cài Sass:
    npm install -g sass
    Lệnh compile SCSS → CSS:
    sass scss/style.scss style.css
    Hoặc watch mode:
    sass --watch scss/style.scss:style.css
Câu C1:
    ![alt text](<screenshot/Screenshot 2026-05-18 010514.png>)
    ![alt text](<screenshot/Screenshot 2026-05-18 010600.png>)
    ![alt text](<screenshot/Screenshot 2026-05-18 010621.png>)
    ![alt text](<screenshot/Screenshot 2026-05-18 011148.png>)
Câu C2:
    1. Wireframe Mobile (< 768px)
    ┌────────────────────┐
    │ LOGO       Hotline │
    ├────────────────────┤
    │                    │
    │    HERO IMAGE      │
    │                    │
    ├────────────────────┤
    │   Ảnh món ăn 1     │
    ├────────────────────┤
    │   Ảnh món ăn 2     │
    ├────────────────────┤
    │   Ảnh món ăn 3     │
    ├────────────────────┤
    │   Ảnh món ăn 4     │
    ├────────────────────┤
    │   Ảnh món ăn 5     │
    ├────────────────────┤
    │   Ảnh món ăn 6     │
    ├────────────────────┤
    │   FORM ĐẶT BÀN     │
    │  ngày / giờ / ...  │
    ├────────────────────┤
    │    GOOGLE MAPS     │
    ├────────────────────┤
    │       FOOTER       │
    └────────────────────┘
    Giải thích
        Mobile hiển thị 1 cột để dễ đọc
        Grid món ăn hiển thị 1 cột
        Form đặt bàn nằm dưới danh sách món ăn
        Không dùng sidebar để tránh chật màn hình
        Có thể ẩn bớt nội dung phụ để giao diện gọn hơn
    2. Wireframe Tablet (768px – 1023px)
    ┌──────────────────────────────┐
    │ LOGO              Hotline    │
    ├──────────────────────────────┤
    │                              │
    │         HERO IMAGE           │
    │                              │
    ├────────────┬─────────────────┤
    │  Món ăn 1  │   Món ăn 2      │
    ├────────────┼─────────────────┤
    │  Món ăn 3  │   Món ăn 4      │
    ├────────────┼─────────────────┤
    │  Món ăn 5  │   Món ăn 6      │
    ├──────────────────────────────┤
    │        FORM ĐẶT BÀN          │
    ├──────────────────────────────┤
    │         GOOGLE MAPS          │
    ├──────────────────────────────┤
    │           FOOTER             │
    └──────────────────────────────┘
    Giải thích
        Grid món ăn hiển thị 2 cột
        Form vẫn nằm dưới gallery món ăn
        Google Maps nằm dưới form
        Layout vẫn chủ yếu 1 cột lớn nhưng nội dung rộng hơn mobile
    3. Wireframe Desktop (≥ 1024px)
    ┌──────────────────────────────────────────────┐
    │ LOGO                 MENU         Hotline    │
    ├──────────────────────────────────────────────┤
    │                                              │
    │               HERO IMAGE                     │
    │                                              │
    ├───────────────────┬──────────────────────────┤
    │                   │                          │
    │   GRID MÓN ĂN     │      FORM ĐẶT BÀN        │
    │     3 CỘT         │                          │
    │                   │                          │
    ├───────────────────┴──────────────────────────┤
    │               GOOGLE MAPS                    │
    ├──────────────────────────────────────────────┤
    │                  FOOTER                      │
    └──────────────────────────────────────────────┘
    Giải thích
        Desktop dùng layout 2 cột:
        bên trái là gallery món ăn
        bên phải là form đặt bàn
        Grid món ăn hiển thị 3 cột
        Không cần sidebar riêng vì nội dung chưa quá nhiều
        Google Maps nằm full width phía dưới
