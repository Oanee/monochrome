import Link from 'next/link';

export default function HeaderSecondary() {
  return (
    <>
      <div className="header-inner container">
        <div className="header-connect d-none d-lg-block">
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

            <li>
              <a href="tel:+44 (0)10 2345 6789">CALL US +44 (0)10 2345 6789</a>
            </li>
          </ul>
        </div>

        <div className="header-logo">
          <a href="/" title="Monochrome">
            <h1>Monochrome</h1>
          </a>
        </div>

        <div className="header-controls">
          <form className="d-none d-lg-block">
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search"
            />
          </form>

          <ul>
            <li>
              <Link href="/" title="My account">
                <i className="fa-solid fa-user"></i>
              </Link>
            </li>

            <li>
              <Link href="/" title="My preferences">
                <i className="fa-solid fa-heart"></i>
              </Link>
            </li>

            <li>
              <Link href="/" title="My cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
