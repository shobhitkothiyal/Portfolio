import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
   title: 'E-Commerce Clone',
    desc: 'A full-featured fashion e-commerce platform with product browsing, cart, authentication, and responsive UI inspired by Uptownie.',
    image: '../src/images/ecommerce-clone.png',
    tags: [
      { label: 'React.js', color: '#61dafb' },
      { label: 'Node.js', color: '#68a063' },
      { label: 'MongoDB', color: '#4db33d' },
      { label: 'Express', color: '#f59e0b' },
      { label: 'Redux', color: '#764abc' },
      { label: 'Tailwind CSS', color: '#8b5cf6' },
      { label: 'Razorpay', color: '#f43f5e' },
    ],
    gradient: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(0,0,0,0.8))',
    liveUrl: '#',
    githubUrl: 'https://github.com/shobhitkothiyal/Ecommerce-Clone',
  },
  {
   title: 'ISMS - Intern Management Software System',
    desc: 'A company-level system developed during internship to manage intern data, tasks, and performance with role-based access and real-time updates.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    tags: [
      { label: 'React.js', color: '#61dafb' },
      { label: 'Node.js', color: '#68a063' },
      { label: 'MySQL', color: '#f59e0b' },
      { label: 'Redux', color: '#764abc' },
      { label: 'Tailwind CSS', color: '#8b5cf6' },
    ],
    gradient: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(0,0,0,0.8))',
    liveUrl: '#',
    githubUrl: '#',
  },
  // {
  //   title: 'Social Media App',
  //   desc: 'Micro-blogging platform with socket-based real-time chat, infinite scroll, and multimedia support.',
  //   image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop',
  //   tags: [
  //     { label: 'Express', color: '#f59e0b' },
  //     { label: 'MongoDB', color: '#4db33d' },
  //     { label: 'Redis', color: '#dc2626' },
  //   ],
  //   gradient: 'linear-gradient(135deg, rgba(236,72,153,0.15), rgba(0,0,0,0.8))',
  //   liveUrl: '#',
  //   githubUrl: '#',
  // },
]

function ProjectCard({ project, index, isInView }) {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.15,
      }}
    >
      <div className="project-image" style={{ background: project.gradient }}>
        <img src={project.image} alt={project.title} loading="lazy" />
        <div className="project-image-overlay" />
      </div>
      <div className="project-content">
        <div className="project-title">
          <span>{project.title}</span>
          <div style={{ display: 'flex', gap: 12 }}>
            <a href={project.githubUrl} title="Source code">
              <Github size={18} />
            </a>
            <a href={project.liveUrl} title="Live demo">
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
        <p className="project-desc">{project.desc}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span
              key={tag.label}
              className="project-tag"
              style={{
                background: `${tag.color}15`,
                color: tag.color,
              }}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 500, marginBottom: 8 }}>
            A selection of my recent full stack projects, designed and built from scratch.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>

        <div className="line-decoration">
          <span>More coming soon</span>
        </div>
      </div>
    </section>
  )
}
