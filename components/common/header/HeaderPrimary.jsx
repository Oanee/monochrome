import Link from 'next/link';

export default function HeaderPrimary() {
  return (
    <>
      <div className="container">
        <div className="header-primary-inline d-lg-none">
          <div className="header-menu">
            <a href="/" title="Menu">
              <i className="fa-solid fa-bars"></i>
            </a>
          </div>

          <div className="header-search">
            <form>
              <input
                type="search"
                name="search"
                id="search"
                placeholder="search"
              />

              <button type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="d-none d-lg-block">
          <ul>
            <li>
              <Link href="/" title="New Arrivals">
                New Arrivals
              </Link>
            </li>

            <li>
              <Link href="/" title="Brands">
                Brands
              </Link>
            </li>

            <li>
              <Link href="/" title="Men's">
                Men's
              </Link>
            </li>

            <li>
              <Link href="/" title="Women's">
                Women's
              </Link>
            </li>

            <li>
              <Link href="/" title="Accesories">
                Accesories
              </Link>
            </li>

            <li>
              <Link href="/" title="Lookbook">
                Lookbook
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
