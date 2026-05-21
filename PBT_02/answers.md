Câu A1:
    1. type="email" → Ô nhập text bình thường → tự kiểm tra có dấu @ và đúng định dạng email → Dùng cho đăng ký tài khoản, nhập email khách hàng
    2. type="password" → Ô nhập nhưng bị ẩn ký tự (hiện dấu *** hoặc ●**) → không có validation mạnh, chỉ ẩn nội dung → Dùng cho đăng nhập tài khoản
    3. type="number" → Ô nhập số, có thể có nút tăng/giảm → chỉ cho nhập số, có thể giới hạn min/max → Dùng nhập số lượng sản phẩm
    4. type="tel" → Ô nhập số điện thoại → không kiểm tra chặt nhưng hỗ trợ bàn phím số trên mobile → Dùng nhập số điện thoại khách hàng
    5. type="date" → Hiện lịch để chọn ngày → kiểm tra đúng định dạng ngày → Dùng chọn ngày giao hàng
    6. type="time" → Chọn giờ (giờ/phút) → kiểm tra định dạng thời gian → Dùng chọn giờ nhận hàng
    7. type="url" → Ô nhập link → tự kiểm tra có dạng URL (http/https) → Dùng nhập link website của shop/đối tác
    8. type="checkbox" → Ô vuông tích chọn (có thể chọn nhiều) → không có validation sẵn → Dùng chọn nhiều sản phẩm hoặc đồng ý điều khoản
    9. type="radio" → Nút tròn, chỉ chọn 1 trong nhiều → không có validation sẵn → Dùng chọn phương thức thanh toán (COD, chuyển khoản)
    10. type="file" → Nút chọn file từ máy → có thể giới hạn loại file → Dùng upload ảnh sản phẩm hoặc ảnh đánh giá
Câu A2: 
    Trường hợp 1:
    <input type="text" required value="">
    Khi submit, form không được gửi.
    Lý do: thuộc tính required bắt buộc phải nhập dữ liệu, nhưng ô đang để trống nên vi phạm điều kiện.
    Trường hợp 2:
    <input type="email" value="abc">
    Khi submit, form không được gửi.
    Lý do: type="email" yêu cầu đúng định dạng email (phải có ký tự @). Giá trị "abc" không hợp lệ nên bị chặn.
    Trường hợp 3:
    <input type="number" min="1" max="10" value="15">
    Khi submit, form không được gửi.
    Lý do: giá trị 15 vượt quá max="10", nên không thỏa điều kiện.
    Trường hợp 4:
    <input type="text" pattern="[0-9]{10}" value="abc123">
    Khi submit, form không được gửi.
    Lý do: pattern yêu cầu chuỗi phải gồm đúng 10 chữ số. "abc123" không đúng định dạng nên không hợp lệ.
    Trường hợp 5:
    <input type="password" minlength="8" value="123">
    Khi submit, form không được gửi.
    Lý do: minlength="8" yêu cầu ít nhất 8 ký tự, nhưng "123" chỉ có 3 ký tự nên bị từ chối.
    So sánh:
        Trường hợp 1:
        <input type="text" required value="">
        Theo lý thuyết, form không được submit vì required bắt buộc phải nhập nhưng đang để trống.
        Trong thực tế (như hình), form vẫn submit → có thể do không có <form> hoặc validation bị tắt.
        Trường hợp 2:
        <input type="email" value="abc">
        Theo lý thuyết, form không được submit vì type="email" yêu cầu đúng định dạng (phải có @), nhưng "abc" không hợp lệ.
        Thực tế vẫn submit → do validation không hoạt động.
        Trường hợp 3:
        <input type="number" min="1" max="10" value="15">
        Theo lý thuyết, form không được submit vì giá trị 15 vượt quá max="10".
        Thực tế vẫn submit → do form không kích hoạt validation.
        Trường hợp 4:
        <input type="text" pattern="[0-9]{10}" value="abc123">
        Theo lý thuyết, form không được submit vì không khớp pattern (phải là 10 chữ số).
        Thực tế vẫn submit → do validation bị bỏ qua.
        Trường hợp 5:
        <input type="password" minlength="8" value="123">
        Theo lý thuyết, form không được submit vì không đủ độ dài tối thiểu 8 ký tự.
        Thực tế vẫn submit → do validation không được áp dụng.
Câu A3:
    <label for="email"> quan trọng cho screen reader vì:
        Thẻ <label> đóng vai trò mô tả ý nghĩa của ô input. Khi sử dụng thuộc tính for liên kết với id của <input>, screen reader có thể đọc được tên trường dữ liệu.
        Nếu không có <label>, screen reader chỉ đọc chung chung như “edit text”, khiến người dùng không biết cần nhập thông tin gì. Ngược lại, khi có <label for="email">, screen reader sẽ đọc “Email, edit text”, giúp người dùng hiểu rõ mục đích của ô nhập.
        Ngoài ra, <label> còn giúp tăng trải nghiệm người dùng vì có thể click vào label để focus vào input.
    Dùng <fieldset> + <legend> khi:
        Có nhiều input liên quan với nhau, đặc biệt là radio hoặc checkbox.
        <fieldset> dùng để nhóm các input, còn <legend> là tiêu đề của nhóm đó. Điều này giúp screen reader hiểu được các input thuộc cùng một chủ đề.
    Ví dụ:
        <fieldset>
        <legend>Phương thức thanh toán</legend>
        <label><input type="radio" name="pay"> COD</label>
        <label><input type="radio" name="pay"> Chuyển khoản</label>
        </fieldset>
    Aria-label dùng khi:
        Aria-label được sử dụng khi phần tử không có nội dung văn bản rõ ràng, ví dụ như nút chỉ có icon.
    Không nên dùng aria-label khi đã có <label> vì:
        Gây trùng lặp thông tin
        Có thể ghi đè nội dung của <label>
        Làm code khó hiểu và khó bảo trì
Câu A4:
    1. loading="lazy" trên thẻ <img> cải thiện:
        1. Giảm thời gian tải ban đầu của trang
        2. Giảm dung lượng dữ liệu cần tải
        3. Tăng hiệu năng, đặc biệt với trang có nhiều ảnh
        Không nên dùng khi:
        1. Với ảnh nằm ở phần đầu trang (above-the-fold)
        2. Ảnh quan trọng như banner hoặc ảnh sản phẩm chính
        3. Vì nếu dùng lazy loading, ảnh có thể hiển thị chậm, ảnh hưởng trải nghiệm người dùng.
    2. Nên cung cấp nhiều <source> trong <video> vì:
        Các trình duyệt không hỗ trợ giống nhau về định dạng video. Việc cung cấp nhiều <source> giúp trình duyệt chọn định dạng phù hợp nhất mà nó hỗ trợ.
        Lợi ích:
        1.Tăng khả năng tương thích giữa các trình duyệt
        2.Đảm bảo video có thể phát được trong nhiều môi trường khác nhau
        3 định dạng video phổ biến:
            1. MP4
            2. WebM
            3. Ogg(OGV)
    3. Thuộc tính alt trên <img> được dùng để: 
        Hỗ trợ người dùng khiếm thị
        Hiển thị khi ảnh lỗi
        Hỗ trợ SEO
        Ví dụ alt:
            Ảnh sản phẩm iPhone 16:
            alt="iPhone 16 màu đen, màn hình 6.1 inch, camera kép"
            Ảnh trang trí (decorative):
            alt=""
            Ảnh biểu đồ doanh thu Q1/2026:
            alt="Biểu đồ doanh thu quý 1 năm 2026 tăng dần từ tháng 1 đến tháng 3"
Câu A5:
    Dùng cách 1 (<img>) khi:
        Cách 1 được dùng khi hình ảnh chỉ mang tính hiển thị đơn giản, không cần chú thích riêng. Nội dung của ảnh đã đủ rõ hoặc đã được mô tả trong phần văn bản xung quanh. Trong trường hợp này, chỉ cần sử dụng thẻ <img> với thuộc tính alt là đủ.
        Ví dụ thực tế:
            Ảnh logo hoặc icon trên thanh điều hướng (header)
            Ảnh thumbnail sản phẩm trong danh sách sản phẩm
    Dùng cách 2 (<figure> + <figcaption>) khi: 
        Cách 2 được dùng khi hình ảnh cần có chú thích đi kèm hoặc bản thân hình ảnh là một nội dung độc lập. Thẻ <figure> giúp nhóm ảnh và phần mô tả lại với nhau, còn <figcaption> dùng để cung cấp thông tin bổ sung cho ảnh.
        Ví dụ thực tế:
            Trang chi tiết sản phẩm: ảnh sản phẩm kèm tên và giá
            Bài viết blog: hình minh họa kèm chú thích (ví dụ: biểu đồ, ảnh giải thích)
Câu C1:
    Lỗi 1: Dòng 2 — Input “Tên” không có <label for="...">
    Vi phạm accessibility vì screen reader không biết đây là trường gì.
    Sửa:
    <label for="name">Tên:</label>
    <input type="text" id="name" name="name" required>
    Lỗi 2: Dòng 4 — Input email không có <label>
    Người dùng và screen reader khó hiểu mục đích của ô nhập.
    Sửa:
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="Email của bạn" required>
    Lỗi 3: Dòng 6 — Input password không có <label> và thiếu validation
    Không đảm bảo accessibility và chưa có ràng buộc độ dài.
    Sửa:
    <label for="password">Mật khẩu:</label>
    <input type="password" id="password" name="password" required minlength="8">
    Lỗi 4: Dòng 7 — Input “Nhập lại mật khẩu” không có <label>
    Ngoài ra HTML không thể tự kiểm tra trùng password.
    Sửa:
    <label for="confirm">Nhập lại mật khẩu:</label>
    <input type="password" id="confirm" name="confirm" required minlength="8">
    Lỗi 5: Dòng 9 — Phone dùng type="text" không đúng
    Không tận dụng được validation và bàn phím số.
    Sửa:
    <label for="phone">Số điện thoại:</label>
    <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" placeholder="Nhập 10 số">
    Lỗi 6: Dòng 9 — Dùng value="0901234567" không phù hợp
    Giá trị mặc định có thể gây hiểu nhầm là dữ liệu thật.
    Sửa:
    <input type="tel" id="phone" name="phone" placeholder="Nhập số điện thoại">
    Lỗi 7: Dòng 11 — <select> không có <label>
    Không đảm bảo accessibility.
    Sửa:
    <label for="city">Thành phố:</label>
    <select id="city" name="city">
        <option value="">--Chọn thành phố--</option>
        <option>Hà Nội</option>
        <option>TP.HCM</option>
    </select>
    Lỗi 8: Dòng 16 — Phần “Tôi đồng ý điều khoản” không có checkbox input
    Thiếu input nên không thể chọn và không thể validate.
    Sửa:
    <label>
        <input type="checkbox" required> Tôi đồng ý điều khoản
    </label>
Câu C2:
    1. Pattern regex
        CMND/CCCD (12 chữ số):
        pattern="[0-9]{12}"
        → Chỉ chấp nhận đúng 12 chữ số
        Số tài khoản (10–15 chữ số):
        pattern="[0-9]{10,15}"
        → Chấp nhận từ 10 đến 15 chữ số
    2. HTML5 validation có đủ an toàn cho ngân hàng không?
        Không đủ an toàn.
        Lý do:
        HTML5 validation chỉ chạy ở phía trình duyệt (frontend)
        Người dùng có thể:
        Tắt validation (novalidate)
        Sửa code bằng DevTools
        Gửi request trực tiếp lên server
        → Vì vậy, nếu chỉ dùng HTML thì dữ liệu vẫn có thể bị gửi sai hoặc bị tấn công.
    3. 3 loại validation HTML5 KHÔNG làm được
        So sánh giữa các field
        Ví dụ: kiểm tra “nhập lại PIN có trùng không”
        Kiểm tra dữ liệu đã tồn tại chưa
        Ví dụ: email đã đăng ký hay chưa
        Logic phức tạp theo điều kiện
        Ví dụ: nếu chọn loại tài khoản A thì phải nhập thêm thông tin B
        → Những trường hợp này cần dùng JavaScript hoặc backend
    4. 2 rủi ro nếu chỉ validate Frontend
        Người dùng bypass validation
        → Gửi dữ liệu sai hoặc dữ liệu độc hại lên server
        Nguy cơ tấn công (ví dụ: SQL Injection)
        → Nếu backend không kiểm tra lại, hệ thống có thể bị khai thác
