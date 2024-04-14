import './styles.css';
import { Header } from './components/header';
import { Hero } from './components/section/hero';
import { Usps } from './components/section/usps';
import { VideoCarousel } from './components/section/video-carousel';

function App() {
  return (
    <>
      <Header />
      <main className="h-[300vh]">
        <div className="relative z-10 bg-background">
          <Hero />
          <Usps />
        </div>
        <VideoCarousel />
        <div className="h-[300vh]" />
      </main>
    </>
  );
}

export default App;
