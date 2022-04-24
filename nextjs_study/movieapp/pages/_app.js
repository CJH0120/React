import '../styles/globals.css'
import { MovieStore } from './componetns/Context/MoiveStore'

import Layout from './componetns/Layout'

function MyApp({ Component, pageProps }) {
  return (
  <>

  <Layout>
 
  <Component {...pageProps} />
  </Layout>
  </>
  )
}

export default MyApp
