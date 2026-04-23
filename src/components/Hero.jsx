import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'

export default function Hero({ isLoaded }) {
  const titleWords = ['Building', 'Scalable', 'Digital', 'Experiences.']

  return (
    <section id="hero" className="hero">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        style={{ textAlign: 'center', maxWidth: 900 }}
      >
        {/* Badge */}
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <span className="dot" />
          Available for work
        </motion.div>

        {/* Title — word by word */}
        <h1 className="hero-title">
          {titleWords.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 50, filter: 'blur(8px)' }}
              animate={isLoaded ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.7 + i * 0.12,
              }}
              style={{
                display: 'inline-block',
                marginRight: '0.3em',
              }}
              className={word === 'Scalable' ? 'gradient-text' : ''}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          className="hero-subtitle"
          style={{ margin: '0 auto 48px' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          I design and build high-performance web applications using the MERN stack.
          Focused on clean code, sleek UI, and seamless user experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <a href="#projects" className="btn-primary" onClick={(e) => {
            e.preventDefault()
            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
          }}>
            View Projects <ArrowRight size={18} />
          </a>
          <a href="#resume" className="btn-secondary" onClick={(e) => {
            e.preventDefault()
            document.querySelector('#resume')?.scrollIntoView({ behavior: 'smooth' })
          }}>
            <Download size={18} /> Download CV
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
        }}
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ delay: 2 }}
      >
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          color: 'var(--text-muted)',
          letterSpacing: 2,
          textTransform: 'uppercase',
        }}>
          Scroll
        </span>
        <motion.div
          style={{
            width: 1,
            height: 40,
            background: 'linear-gradient(to bottom, var(--accent-purple), transparent)',
          }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
