import HeaderPrimary from './HeaderPrimary';
import HeaderSecondary from './HeaderSecondary';

export default function HeaderLarge() {
  return (
    <>
      <div className="header-large">
        <section className="header-secondary">
          <HeaderSecondary></HeaderSecondary>
        </section>

        <section className="header-primary">
          <HeaderPrimary></HeaderPrimary>
        </section>
      </div>
    </>
  );
}
