export default function About() {
  return (
    <section id="about" className="about-section" style={{ scrollMarginTop: '110px' }}>
      <div className="about-inner">
        <div className="about-header">
          <span className="about-label">ABOUT</span>
          <h1> Atelier Noir is <span> made slowly.</span></h1>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              Founded between Porto and Kyoto, Atelier Noir designs garments with a simple rule:
              fewer releases, better materials, and finishing that lasts.
            </p>
            <p>
              Our pieces are patterned by hand and made in small ateliers. We believe clothing should
              disappear into your life—season after season.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">02</div>
              <div className="stat-label">EDITIONS PER YEAR</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">YEARS BUILT TO LAST</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">∞</div>
              <div className="stat-label">LIFETIME MENDING</div>
            </div>
          </div>
        </div>

        <div className="about-highlights">
          <div className="highlight">
            <div className="highlight-icon">✂</div>
            <div>
              <h3>Hand-finished seams</h3>
              <p>Every stitch is checked by the maker.</p>
            </div>
          </div>

          <div className="highlight">
            <div className="highlight-icon">❍</div>
            <div>
              <h3>Natural fibers</h3>
              <p>Undyed wools, linen, and cotton—no synthetics.</p>
            </div>
          </div>

          <div className="highlight">
            <div className="highlight-icon">◫</div>
            <div>
              <h3>Lower-impact packaging</h3>
              <p>Plastic-free materials and reusable garment bags.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

