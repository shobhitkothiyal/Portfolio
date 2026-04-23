import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const skills = [
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "GitHub",
icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
]

function SkillCard({ skill, index, isInView }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    card.style.setProperty('--mouse-x', `${x}%`)
    card.style.setProperty('--mouse-y', `${y}%`)
  }

  return (
<motion.div
  ref={cardRef}
  className="skill-card"
  onMouseMove={handleMouseMove}
  whileHover={{
    scale: 1.08,
    rotateX: 6,
    rotateY: -6,
  }}
  transition={{ type: "spring", stiffness: 200, damping: 15 }}
>
      <div
        className="skill-icon"

        style={{ background: `${skill.color}15` }}
      >
        <img src={skill.icon} alt={skill.name} />
        
      </div>
      <div className="skill-name">{skill.name}</div>
    
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Tech Stack</div>
          <h2 className="section-title">
            Languages & <span className="gradient-text">Tools</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 500, marginBottom: 8 }}>
            Technologies I use daily to build fast, scalable, and beautiful products.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} isInView={isInView} />
          ))}
        </div>

        <div className="line-decoration">
          <span>{skills.length} technologies</span>
        </div>
      </div>
    </section>
  )
}
