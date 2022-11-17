export default function HeaderPrimary() {
  return (
    <>
      <div className="container header-primary-inline">
        <div className="header-menu">
          <a href="/" title="Menu">
            <i className="fa-solid fa-bars"></i>
          </a>
        </div>

        <div className="header-search">
          <form>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="search"
            />

            <button type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
