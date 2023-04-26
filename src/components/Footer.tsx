import {GitHub, LinkedIn, Twitter} from '@mui/icons-material';
import {useTranslation} from 'next-i18next';
import Link from 'next/link';
import {motion} from 'framer-motion';

const Footer = () => {
  const {t} = useTranslation('common');
  return (
    <div className='w-full border-t-2 border-dark flex justify-between items-center p-8 font-medium text-lg'>
      <div>
        <span className='cursor-default'>
          {new Date().getFullYear()} &copy; {t('footer.rights')}
        </span>
      </div>
      <div className='flex gap-4 items-center justify-center'>
        <motion.div
          whileHover={{scale: 1.4}}
          whileTap={{scale: 0.8}}
        >
          <Link
            className='hover:text-[#1DA1F2]'
            href='https://twitter.com/LeoneGue10'
            passHref
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Twitter'
            title='Twitter'
          >
            <Twitter className='w-10 h-10' />
          </Link>
        </motion.div>
        <motion.div
          whileHover={{scale: 1.4}}
          whileTap={{scale: 0.8}}
        >
          <Link
            className='hover:text-[#2867B2]'
            href='https://www.linkedin.com/in/leonel-guerrero-065b95243/'
            passHref
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
            title='LinkedIn'
          >
            <LinkedIn className='w-10 h-10' />
          </Link>
        </motion.div>
        <motion.div
          whileHover={{scale: 1.4}}
          whileTap={{scale: 0.8}}
        >
          <Link
            className='hover:text-[#181717]'
            href='https://github.com/LeoGCode'
            passHref
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'
            title='GitHub'
          >
            <GitHub className='w-10 h-10' />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
