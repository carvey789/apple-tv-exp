import { Button } from './button';
import { Container } from './container';

export const Header = () => {
  return (
    <>
      <header className="bg-backgroundContrast text-white">
        <Container className="flex items-center min-h-11">
          <a href="/" className="h-11 flex items-center p-6 -ml-6 text-xl">
            👾 <span className="sr-only">Back to homepage</span>
          </a>
        </Container>
      </header>
      <div className="sticky top-0 bg-backgroundContrast text-white">
        <Container className="flex justify-between items-center min-h-11">
          <p className="text-xl font-semibold">Apple TV +</p>{' '}
          <Button size="small">Test</Button>
        </Container>
      </div>
    </>
  );
};
