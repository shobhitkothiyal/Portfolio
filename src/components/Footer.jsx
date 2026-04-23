import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <a href="#hero" className="nav-logo" style={{ marginBottom: 12, display: 'block' }}>
            <span className="gradient-text">PORTFOLIO</span>
          </a>
          <p className="footer-copy">
            © 2026 Developer Portfolio. Built with React, Vite & Framer Motion.
          </p>
        </div>

        <div className="footer-socials">
          <a href="#" className="footer-social" title="GitHub"><Github size={20} /></a>
          <a href="#" className="footer-social" title="LinkedIn"><Linkedin size={20} /></a>
          <a href="#" className="footer-social" title="Twitter"><Twitter size={20} /></a>
          
          <button 
            onClick={scrollToTop}
            className="footer-social" 
            style={{ 
              background: 'var(--bg-glass)', 
              border: '1px solid var(--border-subtle)',
              borderRadius: '10px',
              padding: '8px',
              marginLeft: '8px'
            }}
            title="Back to Top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  )
}
