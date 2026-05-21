/* eslint-disable */
/* Portfolio cases + works data */

const CASES = [
  {
    id: "ai-os",
    ix: "01",
    pill: "FLAGSHIP",
    title: "OS Second Brain",
    titleEm: "— vận hành Marketing bằng AI",
    sub: "Hệ thống tự động hoá Marketing end-to-end",
    role: "Founder / Architect",
    year: "2025 — Nay",
    scope: "Strategy · System · Content · Automation",
    client: "Thương hiệu nội bộ + áp dụng cho khách hàng",
    lead: "Tôi tự xây hệ thống AI thay thế khối lượng công việc của một <strong>phòng Marketing 5 người</strong> — Content Writer, Designer, Editor, Web Dev và Researcher — vận hành độc lập một thương hiệu cao cấp.",
    body: [
      "OS Second Brain là một workspace kết hợp Obsidian + AI Agents + workflow automation. Mọi tri thức về thị trường, sản phẩm, đối thủ, khách hàng được số hoá thành các node liên kết để AI có thể truy xuất theo ngữ cảnh.",
      "Đầu ra: brief content tự động, draft bài viết, kịch bản video, art-direction cho hình ảnh, và kế hoạch xuất bản đa kênh — toàn bộ chỉ cần một người vận hành điều phối.",
    ],
    tags: ["AI Workflow", "Obsidian", "Prompt Engineering", "Automation", "System Design"],
    results: [
      { n: "100%", c: "Giảm chi phí phòng Marketing truyền thống" },
      { n: "5→1", c: "Quy mô vận hành: 5 người → 1 người" },
      { n: "24/7", c: "Hệ thống chạy liên tục, không gián đoạn" },
    ],
    imageLayout: "os-pair",
    slots: [
      { id: "ai-2", label: "Claude Code · OS workflow", src: "assets/ai-os/ai-2.png", className: "ratio-1610" },
      { id: "ai-3", label: "Obsidian · knowledge graph", src: "assets/ai-os/ai-3.png", className: "ratio-1610" },
    ],
  },
  {
    id: "brand-11k",
    ix: "02",
    pill: "GROWTH",
    title: "0 → 11K Followers",
    titleEm: "— phễu Personal Branding 3 tầng",
    sub: "Tăng trưởng kênh cá nhân trong 2 tháng",
    role: "Strategist · Creator",
    year: "2025 — Nay",
    scope: "Personal Branding · Content System · Distribution",
    client: "Self-employed · Dream 100",
    lead: "Tăng trưởng kênh Facebook cá nhân từ <strong>0 lên 11.000 followers trong 2 tháng</strong> bằng phễu nội dung 3 tầng và kỹ thuật phân tích đối tượng \"Dream 100\".",
    body: [
      "Tầng 1 — Viral kéo traffic: nội dung bắt trend, hook mạnh, dễ chia sẻ để mở rộng tầm tiếp cận tự nhiên.",
      "Tầng 2 — Storytelling định hình danh tính: bài viết góc nhìn cá nhân, behind-the-scenes, để follower nhận diện và tin tưởng.",
      "Tầng 3 — Chuyên môn để chuyển đổi: case study, framework, sản phẩm/dịch vụ. Đây là tầng tạo doanh thu.",
      "Phương pháp này có thể đóng gói trực tiếp cho môi giới BĐS hoặc đại diện dự án — đối tượng cần Personal Brand mạnh để gây dựng uy tín và rút ngắn chu kỳ chốt deal.",
    ],
    tags: ["Personal Branding", "Content Funnel", "Dream 100", "Storytelling", "Social Growth"],
    results: [
      { n: "11K", c: "Followers chỉ trong 2 tháng" },
      { n: "3 tầng", c: "Phễu nội dung Viral → Story → Pro" },
      { n: "100+", c: "Dream 100 — đối tượng mục tiêu" },
    ],
    imageLayout: "brand-stack",
    slots: [
      { id: "br-1", label: "Insights · 2.5M views / +33%", src: "assets/brand-11k/br-1.png", className: "hero-wide" },
      { id: "br-2", label: "Phân tích phim · grid 1", src: "assets/brand-11k/br-2.png", className: "ratio-43" },
      { id: "br-3", label: "Collection · grid 2", src: "assets/brand-11k/br-3.png", className: "ratio-43" },
    ],
  },
  {
    id: "danh-hien",
    ix: "03",
    pill: "HIGH-TICKET",
    title: "Danh Hiển Jewelry",
    titleEm: "— Media cho ngành trang sức kim cương",
    sub: "Sản xuất truyền thông thị giác cao cấp",
    role: "Content Creator · Video Editor",
    year: "2025",
    scope: "Photography · Video · Motion · 2D",
    client: "Danh Hiển Jewelry · Bác sĩ Lương Ngọc",
    lead: "Sản xuất toàn bộ tài nguyên Media — quay, chụp, dựng video, thiết kế 2D — cho ngành <strong>trang sức kim cương và thẩm mỹ cao cấp</strong>, hai ngành yêu cầu tính thẩm mỹ và sự chính xác về chi tiết cực cao.",
    body: [
      "Insight chính: khách hàng cao cấp không mua sản phẩm — họ mua trải nghiệm và cảm xúc qua từng khung hình. Mọi shoot đều được setup ánh sáng, góc máy, hậu kỳ để tôn lên chất liệu và câu chuyện thương hiệu.",
      "Tệp khách hàng High-ticket của hai dự án này rất tương đồng với khách hàng BĐS hạng sang — cùng nhu cầu về uy tín thương hiệu, tính độc bản, và sự an toàn về quyết định mua.",
    ],
    tags: ["High-ticket", "Photography", "Video Production", "Motion Graphic", "Premium"],
    results: [
      { n: "2", c: "Thương hiệu cao cấp được phụ trách full Media" },
      { n: "Multi", c: "Đa kênh: Ads · Facebook · TikTok · Web" },
      { n: "End-to-end", c: "Từ pre-pro đến output cuối" },
    ],
    imageLayout: "trio",
    slots: [
      { id: "dh-1", label: "Product shot · ring", className: "ratio-45", src: "assets/danh-hien/dh-1.jpg" },
      { id: "dh-2", label: "Lifestyle frame", className: "ratio-45", src: "assets/danh-hien/dh-2.jpg" },
      { id: "dh-3", label: "Editorial frame", className: "ratio-45", src: "assets/danh-hien/dh-3.jpg" },
    ],
    videos: [
      { id: "dh-v1", src: "assets/danh-hien/dh-v1.mp4", label: "Diamond ring · master cut" },
      { id: "dh-v2", src: "assets/danh-hien/dh-v2.mp4", label: "White-gold collection" },
      { id: "dh-v3", src: "assets/danh-hien/dh-v3.mp4", label: "Pink-gold edition" },
    ],
    links: [
      { label: "Drive · Danh Hiển Jewelry", url: "https://drive.google.com/drive/folders/1M1BIP35gSl6NzeiMBKM7D2-yDYcJqXEG?usp=sharing" },
    ],
  },
];

const WORKS = [
  {
    tag: "AESTHETIC",
    role: "Content & Media",
    title: "Bác sĩ Lương Ngọc",
    desc: "Toàn bộ Media cho thẩm mỹ viện cao cấp — quay, chụp, dựng, 2D đa kênh.",
    year: "2025",
    note: "HIGH-TICKET",
    slot: "lng-1",
    src: "assets/works/lng-1.png",
    fit: "cover",
    url: "https://drive.google.com/drive/folders/1RsHlwaT5ejlxQnz__2RgMLYVD2VyxSD2?usp=sharing",
  },
  {
    tag: "ANIMATION",
    role: "Animator · Motion",
    title: "Me Xừ Đức · YouTube",
    desc: "Video Animation (Moho) & Motion Graphic — đỉnh điểm 1.5 triệu view/video.",
    year: "2022 — 2024",
    note: "1.5M VIEW",
    slot: "mxd-1",
    src: "assets/works/mxd-1.png",
    fit: "cover",
    url: "https://www.youtube.com/@mexuduc",
  },
];

window.PORTFOLIO_DATA = { CASES, WORKS };
