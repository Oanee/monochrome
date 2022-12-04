import Link from 'next/link';

export default function ProductPreview() {
  return (
    <div className="product-preview container">
      <aside>
        <div className="product-preview-image">
          <Link href="/" title="Black watch">
            <picture>
              <img src="/images/products/black1.png" alt="watch" />
            </picture>
          </Link>
        </div>
        <div className="product-preview-image-footer">
          <ul>
            <li>
              <Link href="/">
                <i class="fa-solid fa-arrow-left"></i>
              </Link>
            </li>

            <li>
              <Link href="/">
                <picture>
                  <img src="images/products/black1.png" alt="watch" />
                </picture>
              </Link>
            </li>

            <li>
              <Link href="/">
                <picture>
                  <img src="images/products/black1.png" alt="watch" />
                </picture>
              </Link>
            </li>

            <li>
              <Link href="/">
                <picture>
                  <img src="images/products/black1.png" alt="watch" />
                </picture>
              </Link>
            </li>

            <li>
              <Link href="/">
                <picture>
                  <img src="images/products/black1.png" alt="watch" />
                </picture>
              </Link>
            </li>

            <li>
              <Link href="/">
                <i class="fa-solid fa-arrow-right"></i>
              </Link>
            </li>
          </ul>

          <div className="product-preview-image-footer-full">
            <Link href="/">view full size image</Link>
          </div>
        </div>
      </aside>

      <div className="product-preview-right">
        <div className="product-preview-right-title">
          <h1>Monochrome Max Bill - $425</h1>
        </div>

        <div className="product-preview-line"></div>

        <div className="product-preview-right-description">
          <div className="product-preview-right-description-title">
            <h2>description</h2>
          </div>

          <div className="product-preview-right-description-content">
            <p>
              Mr Max Bill was a true creative genius, carving out a career as a
              painter, architect, sculptor and designer. As well as leaving
              behind an expansive body of work, he was also an avid collector of
              watches, and this Junghans chronoscope timepiece is dedicated to
              his memory. Immaculately housed in a domed Plexiglass case and
              finished with a handsome leather strap, it's a highly technical
              piece in a stylish package.
            </p>
          </div>

          <div className="product-preview-line"></div>

          <div className="product-preview-right-details">
            <ul>
              <li>
                <Link href="/">size & fit</Link>
                <Link href="/">
                  <i class="fa-solid fa-plus"></i>
                </Link>
              </li>

              <li className="product-preview-line"></li>

              <li>
                <Link href="/">details & care</Link>
                <Link href="/">
                  <i class="fa-solid fa-plus"></i>
                </Link>
              </li>

              <li className="product-preview-line"></li>

              <li>
                <Link href="/">delivery & returns</Link>
                <Link href="/">
                  <i class="fa-solid fa-plus"></i>
                </Link>
              </li>

              <li className="product-preview-line"></li>
            </ul>
          </div>
        </div>

        <div className="product-preview-right-cta">
          <form>
            <div>
              <label for="add to bag">
                <i className="fa-solid fa-cart-shopping"></i>
              </label>

              <button
                id="add to bag"
                type="submit"
                className="button button-large"
              >
                Add to bag
              </button>
            </div>

            <div>
              <label for="wishlist">
                <i className="fa-regular fa-heart"></i>
              </label>
              <button
                id="wishlist"
                type="submit"
                className="button button-large"
              >
                Wishlist
              </button>
            </div>
          </form>
        </div>

        <div className="product-preview-right-shipping">
          <Link href="/">Shipping restrictions may apply</Link>
        </div>

        <div className="product-preview-line"></div>

        <div className="product-preview-right-follow">
          <ul>
            <li>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-youtube"></i>
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="product-preview-line"></div>

        <div className="product-preview-right-information">
          <ul>
            <li>Product code 668235</li>

            <li>
              <Link href="/"> Send us custom inquiry</Link>
            </li>

            <li>
              <Link href="/">
                Contact us
                <span> Customer Service</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
