import DataStore from '../Store/DataStore'
import '../styles/globals.css'
import Layout from './Layout'

function MyApp({ Component, pageProps }) {
  return(

    <>
    
 <DataStore>
<Layout>

<Component {...pageProps} />
</Layout>
</DataStore>
</>
    
   
  )
}

export default MyApp
