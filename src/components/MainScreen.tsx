import Image from 'next/image';
import profileImg from '../assets/developer-pic-1.webp';
import {useTranslation} from 'next-i18next';
import AnimatedText from './AnimatedText';

const MainScreen = () => {
  const {t} = useTranslation('common');

  return (
    <div className='w-full h-screen bg-cyan-600 pt-16 flex justify-center items-center'>
      <div className='w=1/2'>
        <Image
          src={profileImg}
          alt='LeoGCode profile picture'
          className='w-full h-auto'
        />
      </div>
      <div className='w-1/2 flex flex-col gap-4'>
        <AnimatedText text={t('home.title')} />
        <p className='text-base font-medium text-lg'>
          {t('home.description1')}
        </p>
      </div>
    </div>
  );
};

export default MainScreen;
