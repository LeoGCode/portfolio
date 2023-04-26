import MainLayout from '@/components/MainLayout';
import MainScreen from '@/components/MainScreen';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

export default function Home() {
  return (
    <MainLayout>
      <MainScreen />
      <div className='w-full h-screen bg-emerald-400'></div>
    </MainLayout>
  );
}

export const getStaticProps = async ({locale}: {locale: string}) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
