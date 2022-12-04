import HeaderLarge from '../components/common/header/HeaderLarge';
import HomeCatalogPreview from '../components/homepage/HomeCatalogPreview';
import Footer from '../components/common/footer/Footer';
import ProductPreview from '../components/homepage/ProductPreview';
import Header from '../components/common/header/Header';

export default function Product() {
  return (
    <>
      <div className="header d-lg-none">
        <Header></Header>
      </div>

      <div className="header-large d-none d-lg-block">
        <HeaderLarge></HeaderLarge>
      </div>

      <div className="content">
        <ProductPreview></ProductPreview>
      </div>

      <div className="product-choose">
        <HomeCatalogPreview></HomeCatalogPreview>

        <HomeCatalogPreview></HomeCatalogPreview>
      </div>

      <div className="footer">
        <Footer></Footer>
      </div>
    </>
  );
}
