import { useState } from 'react';

import './styles.css';
import { Header } from './components/header';
import { Container } from './components/container';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main className="h-[300vh]">
        <div>
          <Container>Hero comp</Container>
        </div>
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
