export default function BannerMain() {
  return (
    <>
      <div className="banner-main-image">
        <picture>
          <img src="/images/banners/banner-tiny.png" alt="Banner"></img>
        </picture>

        <div className="banner-main-image-button">
          <a
            href="/"
            title="New in"
            className="button button-small button-uppercase"
          >
            New in
          </a>
        </div>
      </div>
    </>
  );
}
