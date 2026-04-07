/**
 * BIÊN NIÊN SỬ VIỆT - DỮ LIỆU HỆ THỐNG
 * Hướng dẫn: 
 * 1. Để thêm nhân vật mới, hãy copy một khối {...} và dán vào cuối mảng.
 * 2. Trường 'period' sẽ tự động tạo Tab trên trang chủ.
 * 3. Trường 'side' (left/right) quyết định hướng trượt của hình ảnh khi cuộn.
 */

window.HISTORICAL_DATA = [
    {
        id: "hung-vuong",
        name: "Hùng Vương",
        period: "Sơ Khai",
        year: "2879 TCN - 258 TCN",
        image: "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=800",
        summary: "Các vị vua khai sinh ra nhà nước Văn Lang, đặt nền móng đầu tiên cho dân tộc.",
        description: "Thời đại Hùng Vương là khởi đầu của lịch sử Việt Nam với 18 đời vua trị vì. Đây là thời kỳ hình thành những giá trị văn hóa cốt lõi của người Việt như truyền thuyết Bánh Chưng Bánh Giầy, Thánh Gióng, và Sơn Tinh Thủy Tinh.",
        tags: ["Văn Lang", "Sơ Khai", "Phong Châu"],
        side: "left"
    },
    {
        id: "an-duong-vuong",
        name: "An Dương Vương",
        period: "Sơ Khai",
        year: "257 TCN - 179 TCN",
        image: "https://images.unsplash.com/photo-1599707334391-702214420712?auto=format&fit=crop&q=80&w=800",
        summary: "Vị vua nước Âu Lạc, người xây thành Cổ Loa và sở hữu Nỏ Thần.",
        description: "Thục Phán An Dương Vương đã thống nhất hai bộ tộc Lạc Việt và Tây Âu. Ông nổi tiếng với việc xây dựng tòa thành xoáy ốc Cổ Loa kiên cố và sử dụng linh vật Kim Quy để chế tạo nỏ liên châu bắn một lần ra hàng trăm mũi tên.",
        tags: ["Âu Lạc", "Cổ Loa", "Thục Phán"],
        side: "right"
    },
    {
        id: "hai-ba-trung",
        name: "Hai Bà Trưng",
        period: "Bắc Thuộc",
        year: "Năm 40 - 43",
        image: "https://images.unsplash.com/photo-1585128719715-46776b56a0d1?auto=format&fit=crop&q=80&w=800",
        summary: "Hai nữ anh hùng phất cờ khởi nghĩa tại Hát Môn chống lại nhà Đông Hán.",
        description: "Trưng Trắc và Trưng Nhị đã lãnh đạo nhân dân đánh đuổi thái thú Tô Định, giành lại 65 thành trì. Hai Bà lên ngôi vua, đóng đô ở Mê Linh, khẳng định tinh thần bất khuất của phụ nữ Việt Nam.",
        tags: ["Khởi nghĩa", "Mê Linh", "Nữ Vương"],
        side: "left"
    },
    {
        id: "ly-nam-de",
        name: "Lý Nam Đế",
        period: "Bắc Thuộc",
        year: "Năm 541 - 548",
        image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=800",
        summary: "Người khai sinh ra nhà Tiền Lý và đặt tên nước là Vạn Xuân.",
        description: "Lý Bí lãnh đạo nhân dân khởi nghĩa đánh đuổi quân nhà Lương. Ông lên ngôi Hoàng đế, lấy hiệu là Lý Nam Đế, xây dựng nhà nước tự chủ đầu tiên với mong muốn đất nước mãi mãi tươi đẹp như mùa xuân (Vạn Xuân).",
        tags: ["Vạn Xuân", "Tiền Lý", "Lý Bí"],
        side: "right"
    },
    {
        id: "ngo-quyen",
        name: "Ngô Quyền",
        period: "Độc Lập",
        year: "Năm 938",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=2000",
        summary: "Anh hùng dân tộc với chiến thắng Bạch Đằng vang dội, kết thúc 1000 năm Bắc thuộc.",
        description: "Bằng kế sách cắm cọc nhọn dưới lòng sông Bạch Đằng, Ngô Quyền đã tiêu diệt quân Nam Hán, mở ra kỷ nguyên độc lập tự chủ lâu dài cho dân tộc. Ông được sử gia tôn vinh là 'vị tổ trung hưng' của Việt Nam.",
        tags: ["Bạch Đằng", "Tiền Ngô Vương", "Đường Lâm"],
        side: "left"
    },
    {
        id: "tran-hung-dao",
        name: "Trần Hưng Đạo",
        period: "Độc Lập",
        year: "Thế kỷ XIII",
        image: "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&q=80&w=800",
        summary: "Vị tướng kiệt xuất 3 lần đánh bại quân Nguyên Mông xâm lược.",
        description: "Hưng Đạo Đại Vương Trần Quốc Tuấn nổi tiếng với tác phẩm Hịch Tướng Sĩ và tư tưởng 'khoan thư sức dân'. Ông là biểu trưng của lòng yêu nước và tài quân sự lỗi lạc, được thế giới công nhận là một trong những danh tướng vĩ đại nhất.",
        tags: ["Nhà Trần", "Sát Thát", "Đông A"],
        side: "right"
    }
];
