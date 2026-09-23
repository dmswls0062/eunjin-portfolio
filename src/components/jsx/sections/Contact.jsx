import '../../css/sections/Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="section-top">
        <span>05</span>
        <span>CONTACT</span>
      </div>

      <div className="contact-content">
        <p className="contact-label">
          Thank you for taking the time to visit my portfolio.
        </p>

        <h2>
          감사합니다<span>!</span>
        </h2>

        <a href="mailto:dmswls0062@naver.com" className="contact-email">
          dmswls0062@naver.com
        </a>

        <a
          href="https://github.com/dmswls0062"
          target="_blank"
          rel="noreferrer"
          className="github-link"
        >
          GITHUB ↗
        </a>
      </div>
    </section>
  )
}

export default Contact