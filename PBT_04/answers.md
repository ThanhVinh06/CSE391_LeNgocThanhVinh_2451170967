Câu A1: 
    1. staitic
        Vẫn chiếm chỗ trong flow: Có
        Tham chiếu vị trí: Theo flow bình thường
        Cuộn theo trang: Có
        Use case: Layout mặc định
    2. relative
        Vẫn chiếm chỗ trong flow: Có
        Tham chiếu vị trí: So với vị trí gốc của chính nó
        Cuộn theo trang: Có
        Use case: Dịch nhẹ element
    3. absolute
        Vẫn chiếm chỗ trong flow: Không
        Tham chiếu vị trí: Cha có position khác static gần nhất
        Cuộn theo trang: Có
        Use case: Badge, tooltip, dropdown
    4. fixed
        Vẫn chiếm chỗ trong flow: Không 
        Tham chiếu vị trí: Viewport
        Cuộn theo trang: Không
        Use case: Chat button, header cố định
    5. sticky
        Vẫn chiếm chỗ trong flow: Ban đầu có -> như fixed khi dính
        Tham chiếu vị trí: Viewport khi scroll tới ngưỡng
        Cuộn theo trang: Có nhưng sẽ "dính"
        Use case: Sticky header, sticky table
Câu A2:
    TH1: Có 4 item.
    display: flex → mặc định xếp ngang
    flex: 1 → các item chia đều chiều rộng
    → Bố cục: 1 hàng, 4 cột bằng nhau
    +----+----+----+----+
    | 1  | 2  | 3  | 4  |
    +----+----+----+----+

    TH2: Có 6 item.
    flex-wrap: wrap → không đủ chỗ thì xuống hàng
    Mỗi item:
    width = 45%
    margin 2 bên ≈ tổng gần 50%
    → Mỗi hàng chứa được khoảng 2 item
    6 item ⇒ 3 hàng × 2 cột
    +--------+--------+
    |   1    |   2    |
    +--------+--------+
    +--------+--------+
    |   3    |   4    |
    +--------+--------+
    +--------+--------+
    |   5    |   6    |
    +--------+--------+

    TH3: Có 3 item.
    justify-content: space-between
    → item đầu sát trái, item cuối sát phải, item giữa nằm giữa
    align-items: center
    → căn giữa theo chiều dọc
    +------------------------------------+
    | 1               2               3  |
    +------------------------------------+

    TH4: Có 3 item.
    Grid tạo 3 cột:
    cột 1 = 200px
    cột 2 = phần còn lại (1fr)
    cột 3 = 200px
    giữa các cột có gap 20px
    → Layout kiểu sidebar - content - sidebar
    +--------+------------------+--------+
    | Item 1 |      Item 2      | Item 3 |
    | 200px  |       1fr        | 200px  |
    +--------+------------------+--------+

    TH5: Có 7 item.
    repeat(3, 1fr) → 3 cột bằng nhau
    Grid tự xuống hàng
    7 item ⇒
    Hàng 1: 3 item
    Hàng 2: 3 item
    Hàng 3: còn 1 item
    → Tổng: 3 hàng
    +----+----+----+
    | 1  | 2  | 3  |
    +----+----+----+
    +----+----+----+
    | 4  | 5  | 6  |
    +----+----+----+
    +----+
    | 7  |
    +----+
Câu C1:
    1. Navigation bar ngang (logo + menu + buttons)
        Trường hợp này nên dùng Flexbox vì navbar là layout theo một chiều ngang.
        Flexbox hỗ trợ rất tốt việc căn chỉnh các phần tử trên cùng một hàng bằng:
            display: flex;
            justify-content: space-between;
            align-items: center;
        Nhờ đó:
            Logo nằm bên trái
            Menu ở giữa
            Các nút Login/Register nằm bên phải
            Ngoài ra còn có thể căn giữa theo chiều dọc rất dễ dàng.
    2. Lưới ảnh Instagram (3 cột đều nhau, số ảnh không biết trước)
        Trường hợp này nên dùng CSS Grid vì đây là layout dạng lưới gồm nhiều hàng và nhiều cột.
        Grid giúp chia các cột đều nhau rất thuận tiện:
            grid-template-columns: repeat(3, 1fr);
        Khi thêm ảnh mới, Grid sẽ tự động xuống hàng nhưng vẫn giữ bố cục ổn định và đều nhau.
    3. Layout blog: main content + sidebar

        Trường hợp này nên dùng Grid vì layout có nhiều vùng rõ ràng:
            Main content
            Sidebar
        Grid giúp chia bố cục tổng thể dễ dàng, ví dụ:
            grid-template-columns: 1fr 300px;
        Trong đó:
            Nội dung chính chiếm phần lớn không gian
            Sidebar có chiều rộng cố định
    4. Footer với 4 cột thông tin
        Trường hợp này phù hợp với Grid hơn vì footer có nhiều cột đặt cạnh nhau.
        Grid giúp chia đều các cột rất trực quan:
            grid-template-columns: repeat(4, 1fr);
        Ngoài ra Grid cũng dễ responsive khi chuyển từ 4 cột xuống 2 cột hoặc 1 cột trên màn hình nhỏ
    5. Card sản phẩm (ảnh trên, text giữa, nút dưới — nút luôn dính đáy)
        Trường hợp này nên dùng Flexbox vì bố cục bên trong card là layout một chiều theo cột:
            Ảnh ở trên
            Nội dung ở giữa
            Nút ở dưới
        Dùng:
            display: flex;
            flex-direction: column;
        Sau đó dùng:
            margin-top: auto;
        Để đẩy nút “Mua” xuống đáy card. Đây là cách Flexbox xử lý rất hiệu quả.
Câu C2:
    Lỗi 1: Cards không đều chiều cao — nút "Mua" bị nhảy lên/xuống
    Nguyên nhân:
        Các card có lượng nội dung khác nhau nên chiều cao mỗi card khác nhau.
        Nút "Mua" nằm ngay sau nội dung nên card nào ít text thì nút nằm cao hơn, card nhiều text thì nút bị đẩy xuống thấp.
        Hiện tại .card chưa dùng Flexbox theo chiều dọc nên không thể giữ nút luôn ở đáy card.
    Sửa lại code:
        .card-container {
            display: flex;
            flex-wrap: wrap;
        }
        .card {
            width: 30%;
            margin: 1.5%;
            display: flex;
            flex-direction: column;
        }
        .card img {
            width: 100%;
        }
        .card h3 {
            font-size: 18px;
        }
        .card .btn {
            padding: 10px;
            margin-top: auto;
        }
    Lỗi 2: Muốn items nằm giữa cả ngang lẫn dọc trong container 100vh, nhưng item vẫn dính góc trái trên
        Nguyên nhân
        Container .hero đã có:
            display: flex;
        nhưng chưa dùng:
            justify-content
            align-items
        nên Flexbox vẫn dùng mặc định:
            ngang = flex-start
            dọc = stretch
        → nội dung vẫn nằm góc trái trên.
        Sửa lại code:
            .hero {
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .hero-content {
                text-align: center;
            }
    Lỗi 3: Sidebar bị co lại khi content quá dài
        Nguyên nhân
            Trong Flexbox, item mặc định có:
                flex-shrink: 1;
            nên sidebar được phép co nhỏ lại khi không đủ không gian.
            Khi .content quá dài hoặc quá rộng, sidebar bị ép nhỏ hơn 250px.
        Sửa lại code:
            .layout {
                display: flex;
            }
            .sidebar {
                width: 250px;

                flex-shrink: 0;
            }
            .content {
                flex: 1;
            }