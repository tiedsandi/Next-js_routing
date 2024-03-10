import CustomHead from '../components/custom-head';
import Layout from '../components/layout/layout';
import '../styles/globals.css';

function MyApp({Component, pageProps}) {
  return (
    <>
      <CustomHead pageTitle='My Project' description='This is the home page' keywords='home, page' />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
