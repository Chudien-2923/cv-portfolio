/* eslint-disable */
/* Featured cases section + Selected works grid */

const LightboxContext = React.createContext(null);

function Lightbox() {
  const [state, setState] = React.useState(null); // { src, alt }
  React.useEffect(() => {
    window.__openLightbox = (src, alt) => setState({ src, alt });
    const onKey = (e) => {if (e.key === "Escape") setState(null);};
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      delete window.__openLightbox;
    };
  }, []);
  React.useEffect(() => {
    if (state) document.body.style.overflow = "hidden";else
    document.body.style.overflow = "";
    return () => {document.body.style.overflow = "";};
  }, [state]);
  if (!state) return null;
  return (
    <div className="lightbox" onClick={() => setState(null)} role="dialog" aria-modal="true">
      <button className="lb-close" aria-label="Đóng">
        <span>ESC</span>
        <span className="x">✕</span>
      </button>
      <img src={state.src} alt={state.alt || ""} onClick={(e) => e.stopPropagation()} />
      {state.alt ? <div className="lb-cap" onClick={(e) => e.stopPropagation()}>{state.alt}</div> : null}
    </div>);

}
window.Lightbox = Lightbox;

function openLightboxFromSlot(slotEl, fallbackSrc, alt) {
  // Try plain img first (author SVG fallback)
  const plain = slotEl.querySelector("img.slot-svg");
  if (plain && plain.src) {window.__openLightbox && window.__openLightbox(plain.src, alt);return;}
  // image-slot custom element — read from shadow DOM
  const slot = slotEl.querySelector("image-slot");
  if (slot && slot.shadowRoot) {
    const img = slot.shadowRoot.querySelector("img");
    if (img && img.getAttribute("src")) {
      window.__openLightbox && window.__openLightbox(img.getAttribute("src"), alt);
      return;
    }
  }
  if (fallbackSrc) window.__openLightbox && window.__openLightbox(fallbackSrc, alt);
}
window.openLightboxFromSlot = openLightboxFromSlot;

function VideoCell({ v }) {
  const [state, setState] = React.useState("checking"); // checking | ok | missing
  React.useEffect(() => {
    let cancelled = false;
    fetch(v.src, { method: "HEAD" }).
    then((r) => {
      if (cancelled) return;
      if (r.ok) setState("ok");else
      setState("missing");
    }).
    catch(() => {if (!cancelled) setState("missing");});
    return () => {cancelled = true;};
  }, [v.src]);
  return (
    <div className={"vid" + (state !== "ok" ? " missing" : "")}>
      {state === "ok" ?
      <video
        src={v.src}
        muted
        loop
        playsInline
        preload="metadata"
        onMouseEnter={(e) => {e.currentTarget.play().catch(() => {});}}
        onMouseLeave={(e) => {e.currentTarget.pause();}}
        onClick={(e) => {
          const el = e.currentTarget;
          if (el.paused) el.play().catch(() => {});else
          el.pause();
        }}>
      </video> :

      <div className="vid-empty">
          <span className="ic">▶</span>
          <span className="cap">{state === "checking" ? "Đang kiểm tra…" : "Đang chờ file mp4"}</span>
        </div>
      }
      <span className="vid-tag">{v.label}</span>
      {state === "ok" && <span className="vid-play" aria-hidden="true">▶</span>}
    </div>);

}

function CaseBlock({ c, idx }) {
  const layout = c.imageLayout || "default";
  return (
    <article className="case" id={c.id}>
      <div className="case-meta reveal">
        <div className="ix">
          <span className="pill">{c.pill}</span>
          <span>CASE · {c.ix}</span>
        </div>
        <h3 dangerouslySetInnerHTML={{ __html: c.title + ' <em>' + c.titleEm + '</em>' }}></h3>
        <div className="sub">{c.sub}</div>
        <div className="kv">
          <div className="row"><div className="k">Vai trò</div><div className="v">{c.role}</div></div>
          <div className="row"><div className="k">Thời gian</div><div className="v">{c.year}</div></div>
          <div className="row"><div className="k">Phạm vi</div><div className="v">{c.scope}</div></div>
          <div className="row"><div className="k">Khách hàng</div><div className="v">{c.client}</div></div>
        </div>
        <div className="tags">
          {c.tags.map((t, i) =>
          <span key={t} className={"t" + (i < 2 ? " pri" : "")}>{t}</span>
          )}
        </div>
      </div>

      <div className="case-body reveal d1">
        <p className="lead" dangerouslySetInnerHTML={{ __html: c.lead }}></p>
        <div className="body">
          {c.body.map((p, i) => <p key={i}>{p}</p>)}
        </div>

        <div className={"case-images " + layout}>
          {c.slots.map((s) =>
          <div key={s.id} className={"slot " + (s.className || "")}>
              {s.src && /\.svg$/i.test(s.src) ?
            <img src={s.src} alt={s.label} className="slot-svg" style={{ width: "1px" }} /> :
            <image-slot id={s.id} shape="rect" placeholder={s.label} {...s.src ? { src: s.src } : {}} {...s.fit ? { fit: s.fit } : {}}></image-slot>
            }
            </div>
          )}
        </div>

        {c.videos && c.videos.length ?
        <div className="case-videos">
            <div className="case-videos-label">
              <span className="dot"></span>
              <span>Video reels · {c.videos.length} files</span>
            </div>
            <div className="case-videos-grid">
              {c.videos.map((v) => <VideoCell key={v.id} v={v} />)}
            </div>
          </div> :
        null}

        {c.links && c.links.length ?
        <div className="case-links">
            <div className="case-videos-label">
              <span className="dot"></span>
              <span>Links · {c.links.length} drive folders</span>
            </div>
            <div className="case-links-grid">
              {c.links.map((l, i) => {
              const has = !!l.url;
              return (
                <a
                  key={i}
                  href={has ? l.url : undefined}
                  target={has ? "_blank" : undefined}
                  rel={has ? "noopener noreferrer" : undefined}
                  className={"link" + (has ? "" : " empty")}
                  onClick={(e) => {if (!has) e.preventDefault();}}>
                  
                    <span className="ix">{String(i + 1).padStart(2, "0")}</span>
                    <span className="lbl">{l.label}</span>
                    <span className="state">{has ? "Mở Drive" : "Thêm link"}</span>
                    <span className="arr">↗</span>
                  </a>);

            })}
            </div>
          </div> :
        null}

        <div className="results">
          {c.results.map((r) =>
          <div key={r.c} className="r">
              <div className="n">{r.n}</div>
              <div className="c">{r.c}</div>
            </div>
          )}
        </div>
      </div>
    </article>);

}

function Cases() {
  const { CASES } = window.PORTFOLIO_DATA;
  return (
    <section id="cases" className="section" data-screen-label="03 Featured Cases">
      <div className="section-head reveal">
        <div className="num">03 / Dự án nổi bật</div>
        <h2 className="title">3 case <em>tôi tự hào nhất.</em></h2>
        <div className="right">Ba dự án định hình tư duy hiện tại — AI · Brand · High-ticket.</div>
      </div>
      <div className="cases">
        {CASES.map((c, i) => <CaseBlock key={c.id} c={c} idx={i} />)}
      </div>
    </section>);

}
window.Cases = Cases;

function Works() {
  const { WORKS } = window.PORTFOLIO_DATA;
  return (
    <section id="works" className="section" data-screen-label="04 Selected Works">
      <div className="section-head reveal">
        <div className="num">04 / Dự án khác</div>
        <h2 className="title">Selected <em>Works.</em></h2>
        <div className="right">Những dự án khác — campaign, KOL, motion, technical bridge — góp phần hình thành stack hiện tại.</div>
      </div>
      <div className="works">
        {WORKS.map((w, i) => {
          const hasUrl = !!w.url;
          const Tag = hasUrl ? "a" : "div";
          const props = hasUrl ?
          { href: w.url, target: "_blank", rel: "noopener noreferrer" } :
          {};
          return (
            <Tag
              key={w.slot}
              className={"work reveal d" + Math.min(i % 3, 3)}
              {...props}>
            <div className="work-img">
              <span className="corner-tag">{w.tag}</span>
              <image-slot id={w.slot} shape="rect" placeholder={w.title + " — " + w.tag} {...(w.src ? { src: w.src } : {})} {...(w.fit ? { fit: w.fit } : {})}></image-slot>
            </div>
            <div className="work-body">
              <div className="role-tag">{w.role}</div>
              <h4>{w.title}</h4>
              <p>{w.desc}</p>
              <div className="meta">
                <span>{w.year}</span>
                <span className="num">{hasUrl ? <>Mở <span style={{ marginLeft: 4 }}>↗</span></> : w.note}</span>
              </div>
            </div>
          </Tag>);

        })}
      </div>
    </section>);

}
window.Works = Works;