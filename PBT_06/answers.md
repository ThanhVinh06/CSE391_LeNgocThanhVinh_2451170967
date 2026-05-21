Câu A1:
    1. Kích thước màn hình < 768px
    Ở kích thước này chỉ áp dụng: col-12
    Mỗi box chiếm toàn bộ 12 cột nên mỗi hàng chỉ chứa 1 box.
    Layout:
    [ Box 1 ]
    [ Box 2 ]
    [ Box 3 ]
    [ Box 4 ]
    → Số box trên 1 hàng: 1 box.
    2. Kích thước màn hình 768px – 991px
    Ở kích thước này áp dụng: col-md-6
    Mỗi box chiếm 6/12 cột nên mỗi hàng chứa được 2 box.
    Layout:
    [ Box 1 ] [ Box 2 ]
    [ Box 3 ] [ Box 4 ]
    → Số box trên 1 hàng: 2 box.
    3. Kích thước màn hình ≥ 992px
    Ở kích thước này áp dụng: col-lg-3
    Mỗi box chiếm 3/12 cột nên một hàng chứa được 4 box.
    Layout:
    [ Box 1 ] [ Box 2 ] [ Box 3 ] [ Box 4 ]
    → Số box trên 1 hàng: 4 box.
    col-md-6 nghĩa là:
        Khi màn hình đạt kích thước md (≥ 768px),
        phần tử sẽ chiếm 6/12 cột,
        tương đương 50% chiều rộng hàng.
    Tại sao không cần viết col-sm-12?
        Bootstrap hoạt động theo cơ chế mobile-first.
        Khi viết: col-12
        thì class này đã tự áp dụng cho các màn hình nhỏ hơn md.
        Vì vậy không cần viết thêm: col-sm-12
        do nó bị dư thừa.
Câu A2: 
    1. Giải thích class d-none d-md-block
        gồm:
            d-none: ẩn element (display: none)
            d-md-block: từ kích thước md trở lên thì hiển thị dưới dạng block
        Khi màn hình nhỏ hơn 768px:
        → element bị ẩn.
        Khi màn hình từ 768px trở lên:
        → element được hiển thị.
    2. Liệt kê 5 spacing utilities và giải thích
        1)mt-3
        m = margin
        t = top
        → tạo khoảng cách phía trên.
        2) mb-auto
        m = margin
        b = bottom
        auto = tự động
        → margin-bottom tự động.
        3) px-4
        p = padding
        x = trái và phải
        → tạo padding trái và phải.
        4) py-2
        py-2
        p = padding
        y = trên và dưới
        → tạo padding trên và dưới.
        5) ms-5
        ms-5
        m = margin
        s = start
        → tạo margin bên trái.
    3. Sự khác nhau giữa .container, .container-fluid, .container-md
        1) .container
            Có chiều rộng cố định theo từng breakpoint.
            Nội dung nằm giữa màn hình.
            Không chiếm toàn bộ chiều ngang.
            → thường dùng cho layout website thông thường.
        2) .container-fluid
            Luôn chiếm 100% chiều rộng màn hình.
            Kéo dài toàn bộ chiều ngang ở mọi kích thước.
            → thường dùng cho banner hoặc layout full-width.
        3) .container-md
            Nhỏ hơn md:
            → chiếm toàn bộ chiều ngang.
            Từ md trở lên:
            → hoạt động giống .container.
            → responsive linh hoạt hơn .container.