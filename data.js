/**
 * DATA-DRIVEN: Bạn chỉ cần thêm đối tượng mới vào cuối mảng này.
 * id: Định danh duy nhất để link các tài liệu (như Wikipedia).
 * period: Giai đoạn lịch sử.
 * side: 'left' hoặc 'right' để hình ảnh trượt từ bên đó ra.
 */
const HISTORICAL_DATA = [
    {
        id: "hung-vuong",
        name: "Hùng Vương",
        period: "Thời kỳ Sơ Khai",
        year: "2879 TCN",
        image: "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=800", // Thay bằng path assets/ của bạn
        summary: "Vị vua khai sinh ra nhà nước Văn Lang, đặt nền móng cho dân tộc Việt.",
        description: "Truyền thuyết kể rằng Kinh Dương Vương làm vua nước Xích Quỷ, lấy con gái Động Đình Quân là Long Nữ sinh ra Sùng Lãm, tức Lạc Long Quân. Lạc Long Quân lấy Âu Cơ sinh ra một bọc trăm trứng, nở thành trăm con trai.",
        tags: ["Văn Lang", "Sơ Khai", "Lạc Long Quân"],
        side: "left"
    },
    {
        id: "hai-ba-trung",
        name: "Hai Bà Trưng",
        period: "Thời kỳ Bắc Thuộc",
        year: "Năm 40 - 43",
        image: "https://images.unsplash.com/photo-1599707334391-702214420712?auto=format&fit=crop&q=80&w=800",
        summary: "Cuộc khởi nghĩa chống lại ách đô hộ của nhà Đông Hán.",
        description: "Trưng Trắc và Trưng Nhị là hai chị em, con gái Lạc tướng huyện Mê Linh. Do căm thù quân xâm lược, hai bà đã phất cờ khởi nghĩa tại Hát Môn.",
        tags: ["Khởi nghĩa", "Bắc Thuộc", "Mê Linh"],
        side: "right"
    },
    {
        id: "ngo-quyen",
        name: "Ngô Quyền",
        period: "Thời kỳ Độc Lập",
        year: "Năm 938",
        image: "https://images.unsplash.com/photo-1585128719715-46776b56a0d1?auto=format&fit=crop&q=80&w=800",
        summary: "Người anh hùng với chiến thắng Bạch Đằng vang dội, kết thúc 1000 năm Bắc thuộc.",
        description: "Với kế sách cắm cọc nhọn dưới sông Bạch Đằng, Ngô Quyền đã tiêu diệt quân Nam Hán, mở ra kỷ nguyên độc lập tự chủ lâu dài cho dân tộc.",
        tags: ["Bạch Đằng", "Tiền Ngô Vương", "Độc Lập"],
        side: "left"
    }
    // THÊM NHÂN VẬT MỚI TẠI ĐÂY: 
    // Copy block trên, đổi thông tin và paste vào đây.
];
