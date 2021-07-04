// Styles
import '../styles.scss';
// Framer Motion
import {AnimatePresence} from 'framer-motion';

const MyApp = ({ Component, pageProps }) => {

  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} />
    </AnimatePresence>
  ) 
  
}

export default MyApp;
