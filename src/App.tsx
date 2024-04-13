import './styles.css';
import { Header } from './components/header';
import { Container } from './components/container';
import { Hero } from './components/section/hero';
import { Usps } from './components/section/usps';

function App() {
  return (
    <>
      <Header />
      <main className="h-[300vh]">
        <div className="bg-background">
          <Hero />
          <Usps />
        </div>
        <div>
          <Container>3 col layout</Container>
        </div>
        <div>
          <Container>carousel with posters</Container>
        </div>
      </main>
    </>
  );
}

export default App;
