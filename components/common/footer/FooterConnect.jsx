export default function FooterConnect() {
  return (
    <>
      <div className="footer-connect-newsletter">
        <div className="footer-connect-newsletter-title d-lg-none">
          <h1>Let's connect</h1>
        </div>
        <form>
          <label for="email" className="d-lg-none">
            Be the first to receive exclusives offers
          </label>

          <label for="email" className="d-none d-lg-block">
            sign up for our newsletter
          </label>

          <div className="form-email">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
          </div>

          <div className="form-footer">
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
          </div>
        </form>
      </div>

      <footer className="footer-connect-social">
        <div className="footer-connect-social-title d-lg-none">
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
