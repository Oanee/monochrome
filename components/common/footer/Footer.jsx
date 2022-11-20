import FooterPrimary from './FooterPrimary';
import FooterSecondary from './FooterSecondary';

export default function Footer() {
  return (
    <>
      <section className="footer-primary">
        <FooterPrimary></FooterPrimary>
      </section>

      <section className="footer-secondary">
        <FooterSecondary></FooterSecondary>
      </section>
    </>
  );
}
