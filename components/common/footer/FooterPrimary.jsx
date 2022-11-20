import Link from 'next/link';

export default function FooterPrimary() {
  return (
    <>
      <header className="footer-primary-title">
        <h1>How can we help?</h1>
      </header>

      <div className="footer-primary-nav">
        <ul>
          <li>
            <Link href="/" title="about us">
              about us
            </Link>
          </li>

          <li>
            <Link href="/" title="careers">
              careers
            </Link>
          </li>

          <li>
            <Link href="/" title="affiliates">
              affiliates
            </Link>
          </li>

          <li>
            <Link href="/" title="advertising">
              advertising
            </Link>
          </li>
        </ul>

        <div className="footer-primary-nav-line"></div>

        <ul>
          <li>
            <Link href="/" title="style and fit">
              style and fit
            </Link>
          </li>

          <li>
            <Link href="/" title="faqs">
              faqs
            </Link>
          </li>

          <li>
            <Link href="/" title="delivery">
              delivery
            </Link>
          </li>

          <li>
            <Link href="/" title="returns">
              returns
            </Link>
          </li>
        </ul>
      </div>

      <footer className="footer-primary-terms">
        <Link href="/" title="terms">
          terms & conditions
        </Link>

        <Link href="/" title="terms">
          privacy & cookies
        </Link>
      </footer>
    </>
  );
}
