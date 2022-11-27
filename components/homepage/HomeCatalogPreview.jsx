import Link from 'next/link';
import ProductTile from '../catalog/ProductTile';

export default function HomeCatalogPreview() {
  return (
    <>
      <section className="home-catalog-preview container">
        <div className="home-catalog-preview-line"></div>

        <div className="home-catalog-preview-title">
          <h1>Spring Collection</h1>
        </div>

        <div className="home-catalog-preview-product">
          <ul className="product-tiles">
            <li>
              <ProductTile></ProductTile>
            </li>

            <li>
              <ProductTile></ProductTile>
            </li>

            <li className="d-none d-lg-block">
              <ProductTile></ProductTile>
            </li>

            <li className="d-none d-lg-block">
              <ProductTile></ProductTile>
            </li>
          </ul>
        </div>

        <div className="home-catalog-preview-cta">
          <Link href="/" title="view all" className="button button-small">
            view all
          </Link>
        </div>
      </section>
    </>
  );
}
