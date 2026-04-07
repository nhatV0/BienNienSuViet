/**
 * BIÊN NIÊN SỬ VIỆT - DỮ LIỆU HỆ THỐNG (NÂNG CẤP)
 * Hướng dẫn: 
 * 1. Thêm nhân vật mới bằng cách copy khối {...} vào cuối mảng.
 * 2. Nội dung chia làm: biography (tiểu sử), activities (quá trình), legacy (giá trị hiện tại).
 * 3. 'period' tự động phân loại vào Tab tương ứng.
 */

window.HISTORICAL_DATA = [
    {
        id: "hung-vuong",
        name: "Hùng Vương",
        period: "Sơ Khai",
        year: "2879 TCN - 258 TCN",
        image: "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=800",
        summary: "Các vị vua khai sinh ra nhà nước Văn Lang, đặt nền móng đầu tiên cho dân tộc.",
        biography: "Thời đại Hùng Vương khởi đầu với Kinh Dương Vương, sau đó là Lạc Long Quân và Âu Cơ. Con trưởng của Lạc Long Quân lên ngôi lấy hiệu là Hùng Vương, đóng đô ở Phong Châu (Phú Thọ).",
        activities: "Thiết lập hệ thống hành chính sơ khai với các bộ lạc, dạy dân trồng lúa nước, chế tác đồ đồng (trống đồng Đông Sơn). Xây dựng các phong tục tập quán nền tảng như bánh chưng bánh giầy.",
        legacy: "Biểu tượng thiêng liêng về nguồn cội 'Con Rồng Cháu Tiên'. Ngày Giỗ Tổ Hùng Vương (10/3 Âm lịch) trở thành ngày lễ quốc gia, thắt chặt khối đại đoàn kết dân tộc.",
        tags: ["Văn Lang", "Sơ Khai", "Giỗ Tổ"],
        side: "left"
    },
    {
        id: "an-duong-vuong",
        name: "An Dương Vương",
        period: "Sơ Khai",
        year: "257 TCN - 179 TCN",
        image: "https://images.unsplash.com/photo-1599707334391-702214420712?auto=format&fit=crop&q=80&w=800",
        summary: "Vị vua nước Âu Lạc, người xây thành Cổ Loa và sở hữu Nỏ Thần.",
        biography: "Thục Phán vốn là thủ lĩnh bộ tộc Tây Âu, sau khi đánh bại vua Hùng cuối cùng, ông thống nhất Lạc Việt và Tây Âu thành nước Âu Lạc.",
        activities: "Xây dựng thành Cổ Loa với kiến trúc xoáy ốc độc đáo, chế tạo nỏ liên châu bắn một lần ra hàng trăm mũi tên, tạo dựng quân đội hùng mạnh để chống giặc ngoại xâm.",
        legacy: "Di tích thành Cổ Loa là minh chứng cho trình độ quân sự và kỹ thuật xây dựng vượt bậc của người Việt cổ. Bài học về cảnh giác bảo vệ đất nước thông qua truyền thuyết Mỵ Châu - Trọng Thủy.",
        tags: ["Âu Lạc", "Cổ Loa", "Nỏ Thần"],
        side: "right"
    },
    {
        id: "hai-ba-trung",
        name: "Hai Bà Trưng",
        period: "Bắc Thuộc",
        year: "Năm 40 - 43",
        image: "https://images.unsplash.com/photo-1585128719715-46776b56a0d1?auto=format&fit=crop&q=80&w=800",
        summary: "Hai nữ anh hùng phất cờ khởi nghĩa tại Hát Môn chống lại ách đô hộ nhà Đông Hán.",
        biography: "Trưng Trắc và Trưng Nhị là con gái Lạc tướng Mê Linh. Do căm thù quân xâm lược giết hại chồng (Thi Sách) và áp bức nhân dân, Hai Bà đã phất cờ khởi nghĩa.",
        activities: "Khởi nghĩa nổ ra tại Hát Môn, nhanh chóng giải phóng 65 thành trì. Trưng Trắc lên ngôi vua, đóng đô ở Mê Linh, giữ vững nền độc lập trong 3 năm trước khi hy sinh anh dũng.",
        legacy: "Tôn vinh vai trò và sức mạnh của phụ nữ Việt Nam. Khẳng định khát vọng độc lập cháy bỏng của dân tộc ngay từ những thế kỷ đầu Công nguyên.",
        tags: ["Khởi nghĩa", "Mê Linh", "Phụ nữ Việt"],
        side: "left"
    },
    {
        id: "ngo-quyen",
        name: "Ngô Quyền",
        period: "Độc Lập",
        year: "Năm 938",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=2000",
        summary: "Vị tổ trung hưng kết thúc 1000 năm Bắc thuộc.",
        biography: "Quê ở Đường Lâm (Sơn Tây), là con rể của Dương Đình Nghệ. Ông là người tài đức vẹn toàn, được tướng sĩ và nhân dân hết lòng tin phục.",
        activities: "Lãnh đạo trận thủy chiến lịch sử trên sông Bạch Đằng năm 938, dùng kế cắm cọc nhọn tiêu diệt quân Nam Hán. Lên ngôi vua, thiết lập triều chính tự chủ.",
        legacy: "Mở ra thời kỳ độc lập, tự chủ lâu dài cho Việt Nam. Trận Bạch Đằng trở thành bài học kinh điển về nghệ thuật quân sự tận dụng địa hình thủy triều.",
        tags: ["Bạch Đằng", "Độc Lập", "Sử Việt"],
        side: "left"
    },
    {
        id: "tran-hung-dao",
        name: "Trần Hưng Đạo",
        period: "Độc Lập",
        year: "Thế kỷ XIII",
        image: "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&q=80&w=800",
        summary: "Danh tướng kiệt xuất 3 lần đánh bại quân Nguyên Mông.",
        biography: "Tên thật là Trần Quốc Tuấn, thuộc dòng dõi hoàng tộc nhà Trần. Ông là vị tướng hội tụ đủ Nhân - Nghĩa - Trí - Dũng - Tín.",
        activities: "Tổng chỉ huy quân đội nhà Trần trong các cuộc kháng chiến chống Nguyên Mông. Soạn thảo 'Hịch tướng sĩ' khích lệ tinh thần quân đội, trực tiếp chỉ huy chiến thắng Bạch Đằng 1288.",
        legacy: "Tư tưởng 'Khoan thư sức dân làm kế sâu rễ bền gốc'. Ông được nhân dân thờ phụng là Đức Thánh Trần, trở thành linh hồn của lòng yêu nước Việt Nam.",
        tags: ["Nhà Trần", "Nguyên Mông", "Hịch Tướng Sĩ"],
        side: "right"
    }
];
