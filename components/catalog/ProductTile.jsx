import Link from 'next/link';

export default function ProductTile() {
  return (
    <>
      <div className="product-tile">
        <header className="product-tile-header">
          <div className="product-tile-image">
            <Link href="/product" title="Black watch">
              <picture>
                <img src="/images/products/black1.png" alt="Watch" />
              </picture>
            </Link>

            <div className="product-tile-badge">
              <Link href="/" title="Preferences">
                <i className="fa-regular fa-heart"></i>
              </Link>
            </div>
          </div>
        </header>

        <footer className="product-tile-footer">
          <div className="product-tile-title">
            <Link href="/product" title="Black watch">
              <h1>Monochrome</h1>
            </Link>
          </div>

          <div className="product-tile-footer-pricing">
            <Link href="/product" title="Black watch">
              $425
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}
