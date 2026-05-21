/* eslint-disable */
/* Hero + About + Stats + Process + Stack sections */

const { useEffect, useRef, useState } = React;

// === Reveal-on-scroll hook ===
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {if (e.isIntersecting) e.target.classList.add('in');});
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
window.useReveal = useReveal;

// === Active section in nav ===
function useActiveSection() {
  const [active, setActive] = useState('top');
  useEffect(() => {
    const ids = ['top', 'about', 'cases', 'works', 'caps', 'stack', 'contact'];
    const handler = () => {
      let cur = 'top';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= window.innerHeight * 0.35) cur = id;
      }
      setActive(cur);
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return active;
}
window.useActiveSection = useActiveSection;

// === Nav ===
function Nav() {
  const active = useActiveSection();
  const link = (id, label) =>
  <a href={"#" + id} className={active === id ? 'active' : ''} key={id}>{label}</a>;

  return (
    <nav className="nav">
      <a href="#top" className="brand">
        <span className="dot"></span>
        <span>PDD — Portfolio</span>
      </a>
      <div className="links">
        {link('about', 'About')}
        {link('cases', 'Cases')}
        {link('works', 'Works')}
        {link('caps', 'Services')}
        {link('stack', 'Stack')}
        {link('contact', 'Contact')}
      </div>
      <a href="CV Phan Duy Dien.html" target="_blank" className="cta">
        <span>Xem CV</span>
        <span>↗</span>
      </a>
    </nav>);

}
window.Nav = Nav;

// === Hero ===
function Hero() {
  return (
    <section id="top" className="hero" data-screen-label="01 Hero">
      <div className="hero-top">
        <div>
          <div className="eyebrow reveal">
            <span className="line"></span>
            <span>Portfolio · 2026 · Sài Gòn</span>
          </div>
          <h1 className="reveal d1">
            <span className="stack">Phan Duy</span>
            <span className="stack"><span className="last">Diện</span></span>
          </h1>
          <div className="roles reveal d2">
            <span>Senior Digital Marketing</span>
            <span className="sep">/</span>
            <span>AI System Builder</span>
            <span className="sep">/</span>
            <span>Content Strategist</span>
          </div>
          <p className="lead reveal d3">
            Tôi xây <strong>hệ thống Marketing tự động bằng AI</strong>, sản xuất truyền thông cho ngành High-ticket, và tăng trưởng Personal Brand từ con số 0 lên tới 11K Follower. Hiện tập trung mang tư duy này vào <strong>thị trường Bất động sản</strong>.
          </p>
          <div className="ctas reveal d4">
            <a href="#cases" className="btn">
              <span>Xem dự án nổi bật</span>
              <span className="arr">→</span>
            </a>
            <a href="#contact" className="btn ghost">
              <span>Liên hệ</span>
              <span className="arr">↗</span>
            </a>
          </div>
        </div>

        <div className="hero-portrait reveal d2">
          <span className="corner tl">PDD · 2026</span>
          <image-slot id="hero-portrait" shape="rect" placeholder="Ảnh chân dung chính"></image-slot>
          <span className="corner br">SR. MKT</span>
        </div>
      </div>

      <div className="hero-meta reveal d3">
        <div className="cell">
          <div className="k">Năm sinh</div>
          <div className="v">2002 <span className="grn">· Nhâm Ngọ</span></div>
        </div>
        <div className="cell">
          <div className="k">Hiện tại</div>
          <div className="v">MARKETING DIRECTOR · Thuỷ Nguyên</div>
        </div>
        <div className="cell">
          <div className="k">Định hướng</div>
          <div className="v">Senior Marketing · <span className="grn">BĐS / SRT</span></div>
        </div>
        <div className="cell">
          <div className="k">Trạng thái</div>
          <div className="v"><span className="grn">●</span> Sẵn sàng cộng tác</div>
        </div>
      </div>

      <div className="scroll-cue">SCROLL</div>
    </section>);

}
window.Hero = Hero;