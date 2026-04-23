import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FileText, Download } from 'lucide-react'

const timeline = [
  {
    date: 'Sep 2025 — Mar 2026',
    title: 'Full Stack Developer Intern',
    company: 'NovaNectar Services Pvt. Ltd.',
    desc: 'Developed and maintained 4+ full-stack modules using React, Redux, Node.js, and MongoDB. Built authentication flows, dashboards, and reporting features for an Intern Management System, improving UI consistency and performance.',
    color: '#3b82f6',
  },
  {
    date: 'Jun 2024 — Dec 2024',
    title: 'Full Stack Development Intern',
    company: 'Infonix Service Technology',
    desc: 'Delivered production-ready features using HTML, CSS, Bootstrap, PHP, and MySQL. Built dynamic forms with validation, integrated databases, and created responsive UI components.',
    color: '#8b5cf6',
  },
  {
    date: '2024 — Present',
    title: 'Full Stack Projects',
    company: 'Personal Work',
    desc: 'Built a MERN-based e-commerce platform with JWT authentication, Redux state management, and real-time cart system. Currently developing an Information Security Management System (ISMS) with role-based access and audit logging.',
    color: '#ec4899',
  },
]

export default function Resume() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="resume"
      className="section"
      style={{ background: 'var(--bg-secondary)' }}
      ref={ref}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Experience</div>
          <h2 className="section-title">
            My <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="resume-grid">
          {/* Timeline */}
          <div>
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                className="timeline-item"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2 + i * 0.15,
                }}
              >
                <div className="timeline-dot" style={{ background: item.color }} />
                <div className="timeline-date" style={{ color: item.color }}>
                  {item.date}
                </div>
                <div className="timeline-title">{item.title}</div>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12,
                  color: 'var(--text-muted)',
                  marginBottom: 8,
                }}>
                  @ {item.company}
                </div>
                <div className="timeline-desc">{item.desc}</div>
              </motion.div>
            ))}
          </div>

          {/* CTA Card */}
          <motion.div
            className="resume-cta-card"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <FileText size={48} color="var(--accent-blue)" />
            <h3 className="resume-cta-title">
              Looking for a new<br />professional challenge?
            </h3>
            <p className="resume-cta-desc">
              I am currently available for full-time roles or high-impact freelance
              projects. Download my full resume for my complete professional history.
            </p>
            <button className="btn-gradient">
              <Download size={20} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 8 }} />
              Download Full Resume
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
