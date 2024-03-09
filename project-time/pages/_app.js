import CustomHead from '../components/CustomHead';
import '../styles/globals.css';

function MyApp({Component, pageProps}) {
  return (
    <>
      <CustomHead pageTitle='My Project' description='This is the home page' keywords='home, page' />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
