import { useState } from 'react'

export default function Contact() {
  const [showMessage, setShowMessage] = useState(false)

  return (
    <section
      id="contact"
      className="contact-section contact-section--alt"
      style={{ scrollMarginTop: '110px' }}
    >
      {showMessage && (
<div className="toast-message">Message sent successfully.</div>
      )}
      <div className="contact-inner">
        <div className="contact-header">
          <span className="contact-label">CONTACT</span>
          <h1>Say hello. <span>We reply.</span></h1>
          <p className="contact-subtitle">For orders, sizing, or care advice — send a message and our atelier team  will respond. </p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-block">
              <div className="info-title"> Email </div>
              <div className="info-value"> support@ateliernoir.com </div>
            </div>
            <div className="info-block">
              <div className="info-title"> Studio </div>
              <div className="info-value"> Porto · Kyoto</div>
            </div>
            <div className="info-block">
              <div className="info-title"> Hours </div>
              <div className="info-value"> Mon–Fri · 10am–6pm</div>
            </div>
          </div>

          <form className="contact-form"
            onSubmit={(e) => {
              e.preventDefault()
              setShowMessage(true)
              setTimeout(() => {
                setShowMessage(false)
              }, 3000)
              e.target.reset()
            }}
          >
            <div className="form-row">
              <input  type="text" placeholder="Your name" required />
              <input type="email" placeholder="Your email" required />
            </div>

            <input className="form-full" type="text" placeholder="Subject" required />
            <textarea className="form-full" rows="6" placeholder="Message" required ></textarea>
            <button className="contact-submit" type="submit"
            >
              SEND MESSAGE →
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}