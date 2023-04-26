import Head from 'next/head';
import NavBar from './NavBar';
import Footer from './Footer';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({children}: MainLayoutProps) => {
  return (
    <>
      <Head>
        <title>LeoGCode</title>
        <meta
          name='description'
          content='Full Stack and Mobile Developer'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <div>
        <NavBar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
