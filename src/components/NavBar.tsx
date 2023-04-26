import Link from 'next/link';
import {useRouter} from 'next/router';
import {useTranslation} from 'next-i18next';
import {motion} from 'framer-motion';
import {useEffect, useState} from 'react';
import {FileDownloadOutlined} from '@mui/icons-material';

const links = [
  {href: '/', label: 'home'},
  {href: '/experience', label: 'experience'},
  {href: '/projects', label: 'projects'},
  {href: '/about', label: 'about'},
  {href: '/contact', label: 'contact'},
];

type CustomLinkProps = {
  href: string;
  title: string;
  className?: string;
};

const CustomLink = ({href, title, className = ''}: CustomLinkProps) => {
  const {pathname} = useRouter();
  const isCurrentPath = pathname === href;

  return (
    <motion.div whileHover={isCurrentPath ? {} : {scale: 1.2}}>
      <Link
        href={href}
        className={`${className} relative group`}
      >
        {title}
        <span
          className={`absolute w-full h-[2px] bg-black -bottom-2.5 left-0 transform scale-x-0 
          group-hover:scale-x-100 transition-transform duration-200 ease-in-out
        ${isCurrentPath ? 'scale-x-100' : ''}`}
        ></span>
      </Link>
    </motion.div>
  );
};

const EMAIL = 'leonelisaacguerrero@gmail.com';

const NavBar = () => {
  const {t} = useTranslation('common');
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerMotion, setHeaderMotion] = useState({
    y: 0,
    opacity: 1,
    x: 0,
  });

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
        setHeaderMotion(prev => ({
          ...prev,
          y: -100,
        }));
      } else {
        // if scroll up show the navbar
        setShow(true);
        setHeaderMotion(prev => ({
          ...prev,
          y: 0,
        }));
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  return (
    <motion.header
      className={`w-full px-12 py-4 font-medium flex items-center justify-start fixed bg-white z-50 transition-all duration-500 ease-in-out`}
      initial={{y: -100, opacity: 0}}
      animate={headerMotion}
    >
      <nav className={`flex justify-between w-full`}>
        <div className='flex items-center justify-start space-x-8'>
          <Link
            href='https://github.com/LeoGCode'
            target='_blank'
          >
            LeoGCode
          </Link>
          <ul className='flex items-center justify-start space-x-8'>
            {links.map(({href, label}) => (
              <li key={`${href}${label}`}>
                <CustomLink
                  href={href}
                  title={t(`navbar.links.${label}`)}
                  className='text-black hover:text-gray-500 transition-colors duration-200 ease-in-out'
                />
              </li>
            ))}
          </ul>
        </div>
        <div className='flex items-center justify-start space-x-8'>
          <Link
            href='/dummy.pdf'
            target='_blank'
            className='flex items-center justify-center bg-dark text-light p-2.5 pl-4 pr-3 rounded-md hover:bg-light hover:text-dark transition-colors duration-200 ease-in-out cursor-pointer border-dark border-2 gap-2'
            download={true}
          >
            <p>{t('navbar.resume')}</p>
            <FileDownloadOutlined />
          </Link>
          <Link
            href={`mailto:${EMAIL} ?subject=${t(
              'navbar.contact.subject',
            )}&body=${t('navbar.contact.body')}')}`}
            className='text-black hover:text-gray-500 transition-colors duration-200 ease-in-out hover:border-dark border-2 border-transparent rounded-md p-2.5'
            target='_blank'
          >
            {t('navbar.contact.emailMe')}
          </Link>
        </div>
      </nav>
    </motion.header>
  );
};

export default NavBar;
