export default function AboutPage() {
  return (
    <main style={{ fontFamily: 'Inter, system-ui, Arial, sans-serif', background: '#000', color: '#fff', minHeight: '100vh' }}>
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 32px', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <span style={{ fontWeight: 700 }}>AS</span>
          <a href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</a>
          <a href="/resume" style={{ color: '#fff', textDecoration: 'none' }}>Resume</a>
        </nav>
        <div />
      </header>

      <section style={{ padding: '48px 32px' }}>
        <h1 style={{ fontSize: 40, margin: 0, fontWeight: 700 }}>About Me</h1>
        <p style={{ marginTop: 16, color: 'rgba(255,255,255,0.85)' }}>
          I am a Computer Science student at PES University.
        </p>
      </section>
    </main>
  );
}
