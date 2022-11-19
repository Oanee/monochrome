import Link from 'next/link';

export default function BannerMain() {
  return (
    <>
      <div className="banner-main d-lg-none">
        <div className="banner-main-inner container">
          <div className="button button-uppercase button-small banner-cta">
            <Link href="/" title="New in">
              New in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
