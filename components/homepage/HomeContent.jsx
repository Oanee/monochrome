export default function HomeContent() {
  return (
    <>
      <section className="home-content container">
        <aside className="home-content-image">
          <picture>
            <img src="/images/accesory/accesory.png" alt="Accesorii" />
          </picture>
        </aside>

        <div className="home-content-main">
          <div className="home-content-main-title">
            <h1>Watches for entreprenours</h1>
          </div>

          <div className="home-content-main-text">
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness.
            </p>

            <p className="d-none d-lg-block">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
