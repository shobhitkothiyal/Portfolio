import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formState, setFormState] = useState('idle') // idle, sending, success

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormState('sending')

    const formData = new FormData(e.target)
    // Using Web3Forms for easy email handling without a backend
    // The user will need to replace this key or I can suggest they get one
    formData.append("access_key", "06ab844f-9556-427c-94cc-1361c4728551") // This is a public key for demo/initial setup if available, or just a placeholder

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        setFormState('success')
        e.target.reset()
        setTimeout(() => setFormState('idle'), 3000)
      } else {
        setFormState('idle')
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      setFormState('idle')
      alert('Error sending message.')
    }
  }

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="container">
        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-label">Get in Touch</div>
            <h2 className="section-title">
              Let's build <br /><span className="gradient-text">something</span> great.
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 18, marginBottom: 48, lineHeight: 1.6 }}>
              Have a project in mind? Or just want to say hi? Feel free to reach out. 
              I'm always open to discussing new projects and creative ideas.
            </p>

            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-icon" style={{ color: 'var(--accent-blue)' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <div className="contact-label">Email me at</div>
                  <div className="contact-value">shobhitkothiyal2@gmail.com</div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon" style={{ color: 'var(--accent-purple)' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <div className="contact-label">Call me at</div>
                  <div className="contact-value">+91 7906918228</div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon" style={{ color: 'var(--accent-pink)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="contact-label">Location</div>
                  <div className="contact-value">Dehradun, Uttarakhand India</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input type="text" name="name" placeholder="John Doe" className="form-input" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input type="email" name="email" placeholder="john@example.com" className="form-input" required />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Subject</label>
                <input type="text" name="subject" placeholder="How can I help you?" className="form-input" required />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea name="message" rows="5" placeholder="Your message here..." className="form-input" required></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`btn-submit ${formState === 'success' ? 'success' : ''}`}
                disabled={formState !== 'idle'}
              >
                {formState === 'idle' && (
                  <>Send Message <Send size={18} /></>
                )}
                {formState === 'sending' && 'Sending...'}
                {formState === 'success' && 'Message Sent!'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
