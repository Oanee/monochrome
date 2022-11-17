export default function HeaderSecondary() {
  return (
    <>
      <div className="header-logo">
        <a href="/" title="Monochrome">
          <h1>Monochrome</h1>
        </a>
      </div>

      <div className="header-controls">
        <ul>
          <li>
            <a href="/" title="My account">
              <i className="fa-regular fa-user"></i>
            </a>
          </li>

          <li>
            <a href="/" title="My preferences">
              <i className="fa-regular fa-heart"></i>
            </a>
          </li>

          <li>
            <a href="/" title="My cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
