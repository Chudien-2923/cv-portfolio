/* eslint-disable */
/* About, Stats, Capabilities, Stack, Process, Contact sections */

// === About ===
function About() {
  return (
    <section id="about" className="about" data-screen-label="02 About">
      <div className="about-grid">
        <div className="reveal">
          <div className="label">Về tôi · 02</div>
          <h2>Xây hệ thống. Kể câu chuyện. <em>Tăng trưởng có chủ đích.</em></h2>
        </div>
        <div className="body reveal d1">
          <p>
            Tôi là <strong>Phan Duy Diện</strong> — Senior Digital Marketing, người tin rằng một marketer giỏi trong thời đại AI không cần một team đông, mà cần <strong>một hệ thống đúng</strong>.
          </p>
          <p>
            Tôi đã tự xây OS Second Brain — workspace Obsidian + AI Agents thay thế khối lượng công việc của một phòng Marketing 5 người, vận hành độc lập thương hiệu bồn tắm Japandi Thuỷ Nguyên từ con số 0.
          </p>
          <p>
            Trước đó, tôi sản xuất truyền thông cho ngành <strong>trang sức kim cương, thẩm mỹ cao cấp</strong>, làm video Animation đạt 1.5 triệu view, và quản lý chiến dịch ngân sách tỷ đồng. Mọi thứ tôi làm đều xoay quanh một câu hỏi: <em>làm sao tạo ra giá trị truyền thông cao nhất với nguồn lực tối ưu nhất.</em>
          </p>
          <p>
            Hiện tại tôi đang tìm cơ hội mang tư duy này vào <strong>thị trường Bất động sản</strong> — nơi Personal Branding, content cao cấp và quản trị chiến dịch quy mô lớn đều là những lợi thế tôi có thể đóng góp ngay.
          </p>
          <div className="quote">
            "Một người + một hệ thống đúng = một phòng Marketing."
            <span className="by">— Triết lý vận hành của tôi</span>
          </div>
        </div>
      </div>
    </section>
  );
}
window.About = About;

// === Stats bar (between about and cases) ===
function Stats() {
  return (
    <div className="section tight" style={{ paddingTop: 0, paddingBottom: 0, maxWidth: 'var(--maxw)' }}>
      <div className="stats reveal">
        <div className="stat">
          <div className="lbl">Followers</div>
          <div className="num">11K<small>+</small></div>
          <div className="desc">Facebook · trong 2 tháng, từ 0</div>
        </div>
        <div className="stat">
          <div className="lbl">View video</div>
          <div className="num">1.5M<small>+</small></div>
          <div className="desc">Đỉnh điểm 1 video Animation</div>
        </div>
        <div className="stat">
          <div className="lbl">Ngân sách</div>
          <div className="num">~1<small>tỷ</small></div>
          <div className="desc">VNĐ quản lý / chiến dịch POSM</div>
        </div>
        <div className="stat">
          <div className="lbl">KOL · KOC</div>
          <div className="num">100<small>+</small></div>
          <div className="desc">Brief & quản lý chất lượng</div>
        </div>
      </div>
    </div>
  );
}
window.Stats = Stats;

// === Capabilities / Services ===
function Capabilities() {
  const caps = [
    {
      ix: "01", title: "AI Marketing System",
      desc: "Xây OS Second Brain, prompt system, workflow automation cho phòng Marketing — vận hành một mình ngang team 5 người.",
      items: ["Obsidian + AI Agents", "Prompt Engineering", "Auto Workflow"],
    },
    {
      ix: "02", title: "Personal Branding",
      desc: "Phễu content 3 tầng + Dream 100. Đóng gói được cho cá nhân, môi giới, hoặc đại diện dự án.",
      items: ["Funnel Design", "Dream 100", "Content Strategy"],
    },
    {
      ix: "03", title: "High-ticket Media",
      desc: "Sản xuất Media cho ngành cao cấp — trang sức, thẩm mỹ, BĐS. Tối ưu cho chuyển đổi & uy tín thương hiệu.",
      items: ["Photography", "Video Production", "Art Direction"],
    },
    {
      ix: "04", title: "Motion · Animation",
      desc: "After Effects, Moho, Premiere — đặc biệt mạnh ở video giới thiệu dự án và explainer cho ngành cần kể chuyện trực quan.",
      items: ["After Effects", "Premiere Pro", "Moho Animation"],
    },
    {
      ix: "05", title: "Campaign Management",
      desc: "Điều phối ngân sách tỷ đồng, đa xưởng, KOL/KOC đa nền tảng. Trải nghiệm thực chiến từ thời ở agency.",
      items: ["POSM · In ấn", "KOL / KOC Brief", "Multi-channel Booking"],
    },
    {
      ix: "06", title: "Technical Bridge",
      desc: "Nền tảng Front-end giúp tôi làm cầu nối giữa Marketing — Dev — Designer, và trực tiếp xử lý hạ tầng Website.",
      items: ["HTML / CSS", "Web Systems", "BA · Bridging"],
    },
  ];
  return (
    <section id="caps" className="caps" data-screen-label="05 Services">
      <div className="caps-inner">
        <div className="section-head reveal">
          <div className="num">05 / Dịch vụ</div>
          <h2 className="title">Tôi có thể đảm nhiệm <em>điều gì.</em></h2>
          <div className="right">Sáu mảng năng lực cốt lõi · có thể đảm nhận độc lập hoặc kết hợp.</div>
        </div>
        <div className="caps-grid">
          {caps.map((c, i) => (
            <div key={c.ix} className={"cap reveal d" + Math.min(i % 3 + 1, 3)}>
              <div className="num">{c.ix}</div>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
              <ul>{c.items.map((it) => <li key={it}>{it}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Capabilities = Capabilities;

// === Stack ===
function Stack() {
  const rows = [
    { lab: "Chiến lược", items: [["Phễu Content 3 tầng", true], ["Personal Branding", true], ["Dream 100", false], ["Project Management", false], ["KOLs · Vendors", false]] },
    { lab: "AI · Systems", items: [["OS Second Brain", true], ["Obsidian + Agents", true], ["Prompt Engineering", true], ["Auto Workflow", false]] },
    { lab: "Creative · Design", items: [["Photoshop", false], ["Illustrator", false], ["Figma", false], ["Canva", false]] },
    { lab: "Video · Motion", items: [["After Effects", true], ["Premiere Pro", false], ["CapCut", false], ["Moho Animation", true]] },
    { lab: "Tech", items: [["HTML / CSS", false], ["Front-end basics", false], ["Website systems", false]] },
  ];
  return (
    <section id="stack" className="section" data-screen-label="06 Stack">
      <div className="section-head reveal">
        <div className="num">06 / Stack</div>
        <h2 className="title">Công cụ tôi <em>dùng hằng ngày.</em></h2>
        <div className="right">Đậm là thứ tôi mạnh nhất và tạo ra khác biệt thực tế.</div>
      </div>
      <div className="stack reveal d1">
        <div className="stack-side">
          <h3>Một stack vừa đủ — nhưng đủ sâu để vận hành cả một thương hiệu.</h3>
          <p>
            Tôi không gom công cụ cho có. Mỗi thứ trong stack đều có vai trò cụ thể trong workflow OS Second Brain — từ nghiên cứu, lên ý tưởng, sản xuất tới phân phối.
          </p>
        </div>
        <div className="stack-list">
          {rows.map((r) => (
            <div className="stack-row" key={r.lab}>
              <div className="lab">{r.lab}</div>
              <div className="items">
                {r.items.map(([name, star]) => (
                  <span key={name} className={"it" + (star ? " star" : "")}>{name}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Stack = Stack;

// === Process ===
function Process() {
  const steps = [
    { ix: "01 · Decode", h: "Hiểu thương hiệu", p: "Phỏng vấn, audit thị trường, định vị tệp khách — feed vào Second Brain." },
    { ix: "02 · Design", h: "Thiết kế hệ thống", p: "Brand voice, content pillar, prompt system, workflow tự động hoá." },
    { ix: "03 · Deliver", h: "Sản xuất & phân phối", p: "Content, video, ad, website — vận hành đa kênh, một người điều phối." },
    { ix: "04 · Defend", h: "Đo lường & lặp", p: "Tracking, A/B, tối ưu phễu — đảm bảo growth không phụ thuộc hên xui." },
  ];
  return (
    <section className="section tight" data-screen-label="07 Process">
      <div className="section-head reveal">
        <div className="num">07 / Quy trình</div>
        <h2 className="title">Tôi <em>làm việc</em> thế nào.</h2>
        <div className="right">Bốn bước — vận hành như một hệ thống, không phải một dự án rời.</div>
      </div>
      <div className="process">
        {steps.map((s, i) => (
          <div key={s.ix} className={"step reveal d" + Math.min(i, 3)}>
            <div className="ix">{s.ix}</div>
            <h5>{s.h}</h5>
            <p>{s.p}</p>
            <div className="arr">→</div>
          </div>
        ))}
      </div>
    </section>
  );
}
window.Process = Process;

// === Contact ===
function Contact() {
  return (
    <section id="contact" className="contact" data-screen-label="08 Contact">
      <div className="contact-inner">
        <div className="eyebrow reveal">Liên hệ · 08</div>
        <h2 className="reveal d1">
          Làm điều<br/>
          <em>lớn hơn —</em><br/>
          cùng nhau.
        </h2>
        <p className="sub reveal d2">
          Tôi đang tìm cơ hội Senior Marketing tại các công ty BĐS (đặc biệt là SRT) hoặc thương hiệu High-ticket. Nếu bạn muốn nói chuyện — gọi, nhắn, hoặc email đều được.
        </p>

        <div className="contact-grid reveal d3">
          <div className="c-item">
            <div className="k">Email</div>
            <div className="v"><a href="mailto:dien3254@gmail.com">dien3254@gmail.com</a></div>
            <div className="arr">↗</div>
          </div>
          <div className="c-item">
            <div className="k">Facebook</div>
            <div className="v"><a href="https://facebook.com/chudien2329" target="_blank">fb.com/chudien2329</a></div>
            <div className="arr">↗</div>
          </div>
          <div className="c-item">
            <div className="k">Portfolio</div>
            <div className="v"><a href="https://behance.net/dinphan2305" target="_blank">behance.net/dinphan2305</a></div>
            <div className="arr">↗</div>
          </div>
          <div className="c-item">
            <div className="k">CV</div>
            <div className="v"><a href="CV Phan Duy Dien.html" target="_blank">Xem CV PDF</a></div>
            <div className="arr">↗</div>
          </div>
        </div>

        <div className="foot">
          <div>© 2026 · Phan Duy Diện</div>
          <div>Designed & coded · Forest Green · Sài Gòn</div>
        </div>
      </div>
    </section>
  );
}
window.Contact = Contact;
