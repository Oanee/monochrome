import Header from '../components/common/header/Header';
import BannerMain from '../components/homepage/BannerMain';

export default function Home() {
  return (
    <div>
      <header className="header">
        <Header></Header>
      </header>

      <main className="content">
        <BannerMain></BannerMain>
      </main>

      <footer className="footer"></footer>
    </div>
  );
}
