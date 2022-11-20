export default function FooterSecondary() {
  return (
    <>
      <header className="footer-secondary-connect">
        <div className="footer-secondary-connect-newsletter">
          <div className="footer-secondary-connect-newsletter-title">
            <h1>Let's connect</h1>
          </div>
          <form>
            <label for="email">Be the first to receive exclusives offers</label>
            <div className="form-email">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>

            <div className="form-cta">
              <button
                type="submit"
                className="button button-uppercase button-small"
              >
                Submit
              </button>
            </div>

            <div className="form-checkbox">
              <input
                type="checkbox"
                name="Privacy Policy"
                id="Privacy Policy"
                required
              />
              <label for="Privacy Policy">
                I agree with
                <span> Privacy Policy </span>
                and i want to receive emails from Monochrome
              </label>
            </div>
          </form>
        </div>
      </header>

      <footer className="footer-secondary-social">
        <div className="footer-secondary-connect-social-title">
          <h1>We are highly likeable</h1>
        </div>

        <ul>
          <li>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </li>

          <li>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>

          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>

          <li>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
