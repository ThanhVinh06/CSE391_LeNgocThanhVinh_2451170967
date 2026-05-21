Câu A1:
    1. Khi gõ https://shopee.vn vào trình duyệt và nhấn Enter, các bước xảy ra theo thứ tự như sau:
        B1: Trình duyệt thực hiện DNS lookup để tìm địa chỉ IP tương ứng với tên miền shopee.vn
        B2: Sau khi có địa chỉ IP, trình duyệt gửi HTTP request (thường là GET) đến server của Shopee
        B3: Request được truyền qua mạng Internet, đi qua router, nhà mạng và các hệ thống trung gian để đến server
        B4: Server nhận request và tiến hành xử lý, ví dụ như truy xuất dữ liệu và tạo nội dung trang web
        B5: Server gửi lại HTTP response chứa các file như HTML, CSS và JavaScript về cho trình duyệt
        B6: Trình duyệt bắt đầu quá trình render bằng cách phân tích HTML, áp dụng CSS và thực thi JavaScript
        B7: Trang web được hiển thị hoàn chỉnh trên màn hình cho người dùng
    2. Tab Network trong Chrome DevTools cho thấy các thông tin:
        1. Danh sách tất cả các request mà trình duyệt gửi đến server khi tải trang web
        2. Các response mà server trả về tương ứng với từng request
        3. Loại tài nguyên của mỗi request như HTML (document), CSS (stylesheet), JavaScript (script), hình ảnh (image), dữ liệu API (fetch/XHR)
        4. Status code của từng request, ví dụ như 200 (thành công), 404 (không tìm thấy), 500 (lỗi server)
        5. Dung lượng của từng file được tải về
        6. Thời gian tải của từng request (mất bao lâu để tải xong)
        7. Tổng thời gian load của toàn bộ trang web
        ![alt text](<./screenshot/Screenshot 2026-04-22 184039.png)
        ![alt text](<./screenshot/Screenshot 2026-04-22 184245.png>)
Câu A2:
    Trang web bị Google đánh giá SEO thấp vì sử dụng quá nhiều thẻ <div> không có ý nghĩa (semantic), khiến Google khó hiểu cấu trúc và nội dung của trang.
    Các lỗi semantic và cách sửa lại là:
        1. Sử dụng <div class="header"> thay vì <header>. Điều này làm Google không biết đây là phần đầu trang
        Sửa lại thành <header>
        2. Menu điều hướng không dùng thẻ <nav>. Menu đang đặt trong <div> nên không thể hiện rõ đây là navigation
        Sửa lại thành <nav>
        3. Nội dung chính không dùng <main>. Toàn bộ phần nội dung đang nằm trong <div class="main">
        Sửa lại thành <main> 
        4. Sản phẩm không dùng <article>. Một sản phẩm là nội dung độc lập nhưng lại dùng <div>
        Sửa lại thành <article>
        5. Tiêu đề sản phẩm không dùng thẻ heading (<h1>, <h2>). Đang dùng <div class="title"> nên Google không hiểu đây là tiêu đề
        Sửa lại thành <h2>
        6. Ảnh không có thuộc tính alt. Điều này làm giảm SEO và accessibility
        Thêm alt cho <img>
        7. Footer không dùng thẻ <footer>. Đang dùng <div> nên không rõ đây là phần cuối trang
        Sửa lại thành <footer>
Câu A3: 
    Kết quả hiển thị của đoạn code HTML:
        Hộp 1
        Text A Text B
        Hộp 2
        Text C Text D
        Hộp 3
    Giải thích:
        Thẻ <div> là phần tử dạng block nên mỗi lần xuất hiện sẽ chiếm toàn bộ chiều ngang và tự động xuống dòng. Vì vậy “Hộp 1”, “Hộp 2” và “Hộp 3” đều nằm trên các dòng riêng biệt
        Thẻ <span> và <strong> là phần tử inline nên chúng chỉ chiếm đúng phần nội dung của mình và sẽ nằm cùng dòng với nhau nếu còn chỗ. Vì vậy “Text A” và “Text B” nằm trên cùng một dòng, tương tự “Text C” và “Text D” cũng nằm cùng một dòng
        Ngoài ra, thẻ <strong> chỉ có tác dụng in đậm nội dung (Text D) nhưng vẫn là inline nên không làm xuống dòng
Câu A4:
    Ba thẻ này đều nằm trong <table>, nhưng mỗi thẻ có vai trò riêng:
    1. <thead> 
        1.1 Dùng để chứa phần tiêu đề của bảng
        1.2 Thường gồm các cột như: Tên, Giá, Số lượng,...
        1.3 Hay dùng thẻ <th> (in đậm, căn giữa)
        Hiểu đơn giản là phần đầu bảng (tiêu đề)
    2. <tbody>
        2.1 Chứa dữ liệu chính của bảng
        2.2 Bao gồm nhiều hàng <tr> với các ô <td>
        Hiểu đơn giản là phần nội dung chính (dữ liệu)
    3. <tfoot> (Table Foot)
        3.1 Chứa phần tổng kết hoặc ghi chú
        Ví dụ: tổng số sản phẩm, tổng tiền,...
        Hiểu đơn giản là phần cuối bảng (tổng kết)
    Không nên dùng table để tạo layout trang web vi:
        1. <table> sinh ra để hiển thị dữ liệu, không phải để bố cục
        2. Khó bảo trì, code rối (layout bằng table phải lồng nhiều <tr>,<td>)
        3. Hiệu năng kém (vd: làm trang web hiển thị chậm hơn)
        4. Không hiển thị tốt trên nhiều thiết bị (không tự thích nghi được với các kích thước màn hình khác nhau)
Câu B3:
    Lỗi 1: Dòng 1 — <!DOCTYPE> không đầy đủ — Cách sửa: <!DOCTYPE html>
    Lỗi 2: Dòng 4 — Thẻ <title> không đóng — Cách sửa: <title>Trang web</title>
    Lỗi 3: Dòng 5 — Sai giá trị charset "utf8" — Cách sửa: <meta charset="UTF-8">
    Lỗi 4: Dòng 9 — Thẻ <h1> không đóng đúng — Cách sửa: <h1>Welcome to ShopTLU<h1> thành <h1>Welcome to ShopTLU</h1>
    Lỗi 5: Dòng 13 — Thẻ <a> không đóng — Cách sửa: <a href="home">Trang chủ<a> thành <a href="home">Trang chủ</a>
    Lỗi 6: Dòng 13–14 — Link nội bộ sai định dạng — Cách sửa: Nên dùng anchor: href="#home" hoặc href="#products"
    Lỗi 7: Dòng 20 — Thẻ <img> thiếu dấu ngoặc kép và thuộc tính alt — Cách sửa: <img src="iphone.jpg" alt="iPhone 16 Pro">
    Lỗi 8: Dòng 22 — Sai thứ tự đóng thẻ <b> và <p> — Cách sửa: <p>Giá: <b>25.990.000đ</b></p>
    Lỗi 9: Dòng 27–34 — Table thiếu semantic (<thead>, <tbody>) — Cách sửa: Thêm cấu trúc: <thead> cho tiêu đề, <tbody> cho dữ liệu
    Lỗi 10: Dòng 29 — Dùng <td> cho header — Cách sửa: Sửa <td> thành <th> cho hàng tiêu đề
    Lỗi 11: Dòng 38 — Dùng thêm <main> thứ hai (sai semantic) — Cách sửa: Chỉ được có 1 <main>, đổi thành <aside>
    Lỗi 12: Dòng 43 — Thẻ <p> trong footer không đóng — Cách sửa: Sửa thành: <p>Copyright 2026</p>
Câu B4:
    1.
    ![alt text](<screenshot/Screenshot 2026-04-24 185658.png>)
    ![alt text](<screenshot/Screenshot 2026-04-24 185751.png>)
    2. <table> không tìm thấy trên trang
        Trang sử dụng <div> và CSS để hiển thị dữ liệu thay vì bảng.
        Do đó: Không có <thead>, không có <tbody>
    3. Form
        action: không hiển thị
        method: không hiển thị
    
    Các input: 
    type = "text": nhập email/ số điện thoại/ tên đăng nhập
    type = "password": nhập mật khẩu
    button/submit: nút đăng nhập

![alt text](<screenshot/Screenshot 2026-04-24 190858.png>)
   
Câu C1:
<!DOCTYPE html>

<html lang="vi">
<head>
    <meta charset="UTF-8"> <!-- để hiển thị tiếng Việt -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- giúp hiển thị trên điện thoại -->
    <title>Chi tiết sản phẩm</title> <!-- tên trang -->
</head>
<body>

<header>
    <!-- header: phần đầu trang, thường chứa logo + menu -->
    <h1>Shop bán hàng</h1>
    <nav>
        <!-- nav: dùng để chứa các link điều hướng -->
        <a href="#">Trang chủ</a>
        <a href="#">Sản phẩm</a>
        <a href="#">Giỏ hàng</a>
    </nav>
</header>

<nav>
    <!-- dùng nav cho breadcrumb vì cũng là điều hướng -->
    <a href="#">Trang chủ</a> >
    <a href="#">Điện thoại</a> >
    <span>iPhone 16</span> <!-- span vì đây là trang hiện tại, không cần link -->
</nav>

<main>
    <!-- main: nội dung chính của trang -->

<section>
    <!-- section: chia khu vực ảnh sản phẩm -->
    <h2>Ảnh sản phẩm</h2>

    <figure>
        <!-- figure: nhóm các ảnh liên quan -->
        <img src="#" alt="ảnh 1">
        <img src="#" alt="ảnh 2">
        <img src="#" alt="ảnh 3">
        <img src="#" alt="ảnh 4">
        <img src="#" alt="ảnh 5">
        <figcaption>Hình ảnh iPhone 16</figcaption> <!-- mô tả cho nhóm ảnh -->
    </figure>
</section>

<section>
    <!-- section: thông tin sản phẩm -->
    <h2>Thông tin</h2>

    <article>
        <!-- article: vì đây là 1 sản phẩm riêng biệt -->
        <h3>Tên sản phẩm</h3>
        <p>Giá: <strong>...</strong></p> <!-- strong để nhấn mạnh -->
        <p>Đánh giá: ★★★★☆</p>
        <p>Mô tả sản phẩm...</p>
    </article>
</section>

<section>
    <!-- section: bảng thông số -->
    <h2>Thông số kỹ thuật</h2>

    <table>
        <!-- table: dùng cho dữ liệu dạng bảng -->
        <thead>
            <tr>
                <th>Thông số</th> <!-- th là tiêu đề -->
                <th>Chi tiết</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>...</td>
                <td>...</td>
            </tr>
        </tbody>
    </table>
</section>

<section>
    <!-- section: phần đánh giá -->
    <h2>Bình luận</h2>

    <article>
        <!-- mỗi bình luận là 1 khối riêng -->
        <p>Người dùng A: ...</p>
    </article>

    <article>
        <p>Người dùng B: ...</p>
    </article>
</section>

</main>

<aside>
    <!-- aside: phần bên cạnh, không phải nội dung chính -->
    <h2>Sản phẩm tương tự</h2>

<article>
    <p>Sản phẩm A</p>
</article>

<article>
    <p>Sản phẩm B</p>
</article>

</aside>

<footer>
    <!-- footer: phần cuối trang -->
    <p>&copy; 2026 Shop</p>
</footer>

</body>
</html>

Câu C2:
    Tôi không đồng ý hoàn toàn với ý kiến “chỉ cần dùng `<div>` cho mọi thứ”. Đúng là dùng `<div>` với class có thể làm được giao diện, nhưng về mặt kỹ thuật thì semantic HTML vẫn rất quan trọng.
    Thứ nhất là về SEO. Các thẻ semantic như `<header>`, `<nav>`, `<main>`, `<article>` giúp công cụ tìm kiếm hiểu được cấu trúc nội dung của trang web. Ví dụ, khi dùng `<article>` cho một bài viết hoặc sản phẩm, Google sẽ dễ nhận diện đâu là nội dung chính thay vì một đống `<div>` không có ý nghĩa. Điều này giúp trang có khả năng xếp hạng tốt hơn.
    Thứ hai là về accessibility (khả năng truy cập). Các công cụ hỗ trợ như screen reader sẽ dựa vào thẻ semantic để đọc và điều hướng cho người khiếm thị. Ví dụ, nếu dùng `<nav>`, người dùng có thể nhảy nhanh đến menu. Nhưng nếu dùng `<div>` thì screen reader không biết đó là khu vực điều hướng.
    Một ví dụ cụ thể là khi làm trang tin tức. Nếu mình dùng `<header>` cho tiêu đề, `<article>` cho nội dung chính và `<footer>` cho thông tin cuối bài, thì cả trình duyệt và công cụ hỗ trợ đều hiểu rõ cấu trúc trang. Điều này giúp trải nghiệm người dùng tốt hơn so với việc dùng toàn `<div>`.
    Tuy nhiên, `<div>` vẫn có chỗ dùng. Khi cần một khối để chia layout hoặc nhóm các phần tử mà không mang ý nghĩa cụ thể, thì `<div>` là phù hợp.
    Tóm lại, semantic HTML không phải là “tốn thời gian” mà là giúp code chuẩn hơn, dễ hiểu hơn và thân thiện hơn với cả máy và người.



