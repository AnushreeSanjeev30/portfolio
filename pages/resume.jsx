export default function ResumePage() {
  return (
    <main style={{ fontFamily: 'Inter, system-ui, Arial, sans-serif', background: '#0b0b0b', color: '#fff', minHeight: '100vh', padding: '24px 32px' }}>
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <h1 style={{ margin: 0, fontWeight: 600 }}>Resume</h1>
        <div style={{ display: 'flex', gap: 12 }}>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#fff', border: '1px solid rgba(255,255,255,0.25)', padding: '8px 12px', borderRadius: 8 }}>View</a>
          <a href="/resume.pdf" download style={{ textDecoration: 'none', color: '#0b0b0b', background: '#fff', border: '1px solid rgba(255,255,255,0.25)', padding: '8px 12px', borderRadius: 8 }}>Download</a>
        </div>
      </header>

      <section style={{ border: '1px solid rgba(255,255,255,0.2)', borderRadius: 12, overflow: 'hidden', background: 'rgba(255,255,255,0.04)' }}>
        <iframe
          title="Resume"
          src="/resume.pdf"
          style={{ width: '100%', height: 700, border: 'none', background: '#111' }}
        />
      </section>
      <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: 12 }}>Place your file at <code>public/resume.pdf</code>.</p>
    </main>
  );
}
