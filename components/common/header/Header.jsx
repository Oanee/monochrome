import HeaderPrimary from './HeaderPrimary';
import HeaderSecondary from './HeaderSecondary';
import BannerMain from './BannerMain';

export default function Header() {
  return (
    <>
      <section className="header-secondary container mt-4">
        <HeaderSecondary></HeaderSecondary>
      </section>

      <section className="header-primary">
        <HeaderPrimary></HeaderPrimary>
      </section>

      <section className="banner-main">
        <BannerMain></BannerMain>
      </section>
    </>
  );
}
