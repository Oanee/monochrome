import Link from 'next/link';
import ProductTile from '../catalog/ProductTile';

export default function HomeCatalogPreviewWomen() {
  return (
    <>
      <section className="home-catalog-preview-women container">
        <header>
          <div className="home-catalog-preview-women-title">
            <h1>Women's</h1>
          </div>

          <div className="home-catalog-preview-women-description">
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the.
            </p>
          </div>
        </header>

        <ul className="home-catalog-preview-women-filter">
          <li>
            <Link href="/" className="button button-uppercase button-large">
              Bestsellers
            </Link>
          </li>

          <li>
            <Link href="/" className="button button-uppercase button-large">
              $ High to low
            </Link>
          </li>

          <li>
            <Link href="/" className="button button-uppercase button-large">
              $ Low to high
            </Link>
          </li>

          <li>
            <Link href="/" className="button button-uppercase button-large">
              New in
            </Link>
          </li>

          <li>
            <Link href="/" className="button button-uppercase button-large">
              White
            </Link>
          </li>

          <li>
            <Link href="/" className="button button-uppercase button-large">
              Black
            </Link>
          </li>
        </ul>

        <div className="home-catalog-preview-women-product">
          <ul className="product-tiles">
            <li>
              <ProductTile></ProductTile>
            </li>

            <li>
              <ProductTile></ProductTile>
            </li>

            <li>
              <ProductTile></ProductTile>
            </li>

            <li>
              <ProductTile></ProductTile>
            </li>
          </ul>

          <ul className="product-tiles">
            <li>
              <ProductTile></ProductTile>
            </li>

            <li>
              <ProductTile></ProductTile>
            </li>

            <li>
              <ProductTile></ProductTile>
            </li>

            <li>
              <ProductTile></ProductTile>
            </li>
          </ul>

          <ul className="product-tiles">
            <li>
              <ProductTile></ProductTile>
            </li>

            <li>
              <ProductTile></ProductTile>
            </li>

            <li>
              <ProductTile></ProductTile>
            </li>

            <li>
              <ProductTile></ProductTile>
            </li>
          </ul>

          <ul className="product-tiles">
            <li>
              <ProductTile></ProductTile>
            </li>

            <li>
              <ProductTile></ProductTile>
            </li>

            <li>
              <ProductTile></ProductTile>
            </li>

            <li>
              <ProductTile></ProductTile>
            </li>
          </ul>

          <ul className="product-tiles">
            <li>
              <ProductTile></ProductTile>
            </li>

            <li>
              <ProductTile></ProductTile>
            </li>

            <li>
              <ProductTile></ProductTile>
            </li>

            <li>
              <ProductTile></ProductTile>
            </li>
          </ul>

          <ul className="product-tiles">
            <li>
              <ProductTile></ProductTile>
            </li>

            <li>
              <ProductTile></ProductTile>
            </li>

            <li>
              <ProductTile></ProductTile>
            </li>

            <li>
              <ProductTile></ProductTile>
            </li>
          </ul>
        </div>

        <footer className="home-catalog-preview-women-cta">
          <a title="load more" className="button button-small">
            load more
          </a>
        </footer>
      </section>
    </>
  );
}
