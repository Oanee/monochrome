import Link from 'next/link';

export default function FooterNav() {
  return (
    <>
      <header className="footer-nav-title d-lg-none">
        <h1>How can we help?</h1>
      </header>

      <div className="footer-nav-main">
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

        <div className="footer-nav-main-line d-lg-none"></div>

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

      <footer className="footer-nav-terms d-lg-none">
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
