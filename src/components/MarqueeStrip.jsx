const items = [
  'HTML',
  'CSS',
  'JavaScript',
  'React.js',
  'Redux',
  'Node.js',
  'Express.js',
  'Bootstrap',
  'MongoDB',
  'MySQL',
  'Tailwind CSS',
  'Git & GitHub' 
]

export default function MarqueeStrip() {
  // Duplicate for seamless loop
  const doubled = [...items, ...items]

  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} style={{ display: 'contents' }}>
            <span className="marquee-item">{item}</span>
            <span className="marquee-separator">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
