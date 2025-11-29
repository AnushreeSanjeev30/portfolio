import { useEffect, useRef, useState } from 'react';

function ScrollingNumbers({ speed = 40, fontSize = 96, color = '#111', fade = true }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let frame;
    let y = 0;
    const step = () => {
      y += speed / 60;
      container.style.transform = `translateY(${y}px)`;
      const height = container.scrollHeight;
      const wrapperHeight = container.parentElement.clientHeight;
      if (y > height - wrapperHeight) y = 0; // loop
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [speed]);

  const numbers = Array.from({ length: 100 }, (_, i) => i % 10);

  return (
    <div style={{ position: 'relative', height: 300, overflow: 'hidden' }}>
      {fade && (
        <>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(#fff, transparent 20%, transparent 80%, #fff)' }} />
        </>
      )}
      <div ref={containerRef} style={{ willChange: 'transform' }}>
        {numbers.map((n, idx) => (
          <div key={idx} style={{
            height: fontSize * 1.2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize,
            color,
            fontWeight: 700,
            letterSpacing: 2
          }}>
            {n}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main style={{ fontFamily: 'Inter, system-ui, Arial, sans-serif', background: '#000', color: '#ffffff', minHeight: '100vh',
      backgroundImage: `
        radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
        radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)
      `,
      backgroundPosition: '0 0, 8px 8px',
      backgroundSize: '16px 16px'
    }}>
      {/* Top nav */}
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 32px', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <span style={{ fontWeight: 700 }}>AS</span>
          <a href="#projects" style={{ color: '#ffffff', textDecoration: 'none' }}>Projects</a>
          <a href="#about" style={{ color: '#ffffff', textDecoration: 'none' }}>AboutMe</a>
          <a href="/resume" style={{ color: '#ffffff', textDecoration: 'none' }}>Resume</a>
        </nav>
        <div />
      </header>

      {/* Hero two-column layout: text left, portrait right */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 560px', alignItems: 'center', gap: 32, padding: '48px 32px' }}>
        {/* Left: Welcome text */}
        <div>
          <h1 style={{ fontSize: 56, lineHeight: 1.2, margin: 0, fontWeight: 700 }}>Welcome to my PORTFOLIO WEBSITE</h1>
          <p style={{ marginTop: 16, color: 'rgba(255,255,255,0.85)' }}>
            Explore my projects an my journey through the world of technology and innovation and Computer Science.
          </p>
        </div>

        {/* Right: Portrait image */}
        <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.06)', height: 560, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/portrait.jpg" alt="Portrait" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 12, filter: 'grayscale(20%) contrast(1.05)' }} />
        </div>
      </section>

      {/* Contact Me section at the end of homepage */}
      <section id="contact" style={{ padding: '48px 32px', borderTop: '1px solid rgba(255,255,255,0.2)', maxWidth: 920, margin: '0 auto' }}>
        <h2 style={{ margin: 0, fontSize: 40, fontWeight: 700, textAlign: 'center' }}>Contact Us</h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', textAlign: 'center', marginTop: 8 }}>Get in touch to learn more.</p>

        <form onSubmit={(e) => e.preventDefault()} style={{ marginTop: 24, display: 'grid', gap: 16 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <label style={{ display: 'block', fontSize: 12, marginBottom: 6, color: 'rgba(255,255,255,0.8)' }}>FIRST NAME *</label>
              <input type="text" placeholder="First Name" required style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.25)', background: 'rgba(255,255,255,0.06)', color: '#fff' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 12, marginBottom: 6, color: 'rgba(255,255,255,0.8)' }}>LAST NAME *</label>
              <input type="text" placeholder="Last Name" required style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.25)', background: 'rgba(255,255,255,0.06)', color: '#fff' }} />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: 12, marginBottom: 6, color: 'rgba(255,255,255,0.8)' }}>EMAIL ADDRESS *</label>
            <input type="email" placeholder="Email" required style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.25)', background: 'rgba(255,255,255,0.06)', color: '#fff' }} />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: 12, marginBottom: 6, color: 'rgba(255,255,255,0.8)' }}>NOTES *</label>
            <textarea placeholder="Notes" required rows={4} style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.25)', background: 'rgba(255,255,255,0.06)', color: '#fff', resize: 'vertical' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <label style={{ display: 'block', fontSize: 12, marginBottom: 6, color: 'rgba(255,255,255,0.8)' }}>COUNTRY *</label>
              <select required style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.25)', background: 'rgba(255,255,255,0.06)', color: '#fff' }}>
                <option value="" style={{ color: '#000' }}>Country</option>
                <option style={{ color: '#000' }} value="IN">India</option>
                <option style={{ color: '#000' }} value="US">United States</option>
                <option style={{ color: '#000' }} value="UK">United Kingdom</option>
                <option style={{ color: '#000' }} value="CA">Canada</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 12, marginBottom: 6, color: 'rgba(255,255,255,0.8)' }}>JOB TITLE</label>
              <input type="text" placeholder="Job Title" style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.25)', background: 'rgba(255,255,255,0.06)', color: '#fff' }} />
            </div>
          </div>

          <button type="submit" style={{ marginTop: 8, width: '100%', padding: '14px 16px', borderRadius: 12, border: 'none', background: 'linear-gradient(90deg, #6a5cff, #6a8bff)', color: '#fff', fontWeight: 600 }}>Submit</button>
        </form>
      </section>

      {/* Bottom bar */}
      <footer style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 32px', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
        <div style={{ color: 'rgba(255,255,255,0.85)' }}>© {new Date().getFullYear()} Anushree</div>
        <div style={{ display: 'flex', gap: 12, color: 'rgba(255,255,255,0.85)' }}>
          <a href="#projects" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.85)' }}>Projects</a>
          <a href="/about" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.85)' }}>AboutMe</a>
          <a href="/resume" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.85)' }}>Resume</a>
        </div>
      </footer>

      {/* Resume section removed from homepage */}
    </main>
  );
}
