import FooterNav from './FooterNav';
import FooterConnect from './FooterConnect';
import FooterContact from './FooterContact';

export default function Footer() {
  return (
    <>
      <div className="footer-inner container">
        <section className="footer-contact d-none d-lg-block">
          <FooterContact></FooterContact>
        </section>

        <section className="footer-nav">
          <FooterNav></FooterNav>
        </section>

        <section className="footer-connect">
          <FooterConnect></FooterConnect>
        </section>
      </div>
    </>
  );
}
