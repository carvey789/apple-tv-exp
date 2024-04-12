import { useRef } from 'react';
import { Button } from '../button';
import { Container } from '../container';
import { useScroll, useTransform, motion } from 'framer-motion';

export const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ['start start', 'end end'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <div className="relative bg-background h-[300vh] text-white">
      <motion.div
        style={{ opacity }}
        ref={videoContainerRef}
        className="absolute -top-[--header-height] left-0 w-full h-[200vh]"
      >
        <img
          className="sticky top-0 h-screen w-screen object-cover"
          src="/posters/napoleon.webp"
          alt="Hero Napoleon"
        />
      </motion.div>
      <Container className="relative z-10 pb-7 h-[--hero-height]">
        <motion.div
          className="flex flex-col h-full items-start justify-end"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          whileInView="visible"
          exit="hidden"
          animate="hidden"
          viewport={{ amount: 0.9 }}
        >
          <h1 className="text-5xl font-bold mb-10">
            All Apple Originals. <br />
            Only on Apple TV+
          </h1>
          <Button size="large" className="mb-16">
            Stream now
          </Button>
          <p className="font-semibold">Watch on the 📺 app.</p>
        </motion.div>
      </Container>
    </div>
  );
};
