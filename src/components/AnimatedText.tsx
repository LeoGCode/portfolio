import {motion} from 'framer-motion';

type AnimatedTextProps = {
  text: string;
};

const phrase = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const AnimatedText = ({text}: AnimatedTextProps) => {
  return (
    <div className='w-full mx-auto py-2 flex justify-center items-center'>
      <motion.h1
        className='inline-block w-full text-dark font-bold capitalize text-6xl'
        variants={phrase}
        initial='initial'
        animate='animate'
      >
        {text.split(' ').map((word, index) => {
          return (
            <motion.span
              variants={singleWord}
              key={`${word}-${index}`}
              className='inline-block'
            >
              {word}&nbsp;
            </motion.span>
          );
        })}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
