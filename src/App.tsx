import { useState } from 'react';

import './styles.css';
import { Header } from './components/header';
import { Container } from './components/container';
import { Hero } from './components/section/hero';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main className="h-[300vh]">
        <Hero />
        <div>
          <Container>usps</Container>
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
