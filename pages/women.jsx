import Header from '../components/common/header/Header';
import Footer from '../components/common/footer/Footer';
import HeaderLarge from '../components/common/header/HeaderLarge';
import HomeCatalogPreviewWomen from '../components/homepage/HomeCatalogPreviewWomen';

export default function Women() {
  return (
    <>
      <div className="header d-lg-none">
        <Header></Header>
      </div>

      <div className="header-large d-none d-lg-block">
        <HeaderLarge></HeaderLarge>
      </div>

      <div className="content">
        <HomeCatalogPreviewWomen></HomeCatalogPreviewWomen>
      </div>

      <div className="footer">
        <Footer></Footer>
      </div>
    </>
  );
}
