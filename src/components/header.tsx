import { Button } from './button';
import { Container } from './container';

export const Header = () => {
  return (
    <>
      <header className="bg-backgroundContrast relative z-20 text-white">
        <Container className="flex items-center min-h-[--header-row-height]">
          <a
            href="/"
            className="h-[--header-row-height] flex items-center p-6 -ml-6 text-xl"
          >
            👾 <span className="sr-only">Back to homepage</span>
          </a>
        </Container>
      </header>
      <div className="sticky z-20 top-0 bg-backgroundContrast text-white">
        <Container className="flex justify-between items-center min-h-[--header-row-height]">
          <p className="text-xl font-semibold">Apple TV +</p>{' '}
          <Button size="small">Stream now</Button>
        </Container>
      </div>
    </>
  );
};
