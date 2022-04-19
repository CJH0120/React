import Layout from "../components/Layout";
import NavBar from "components/NavBar";
import CJH from "./about";

export default function App ({Component,pageProps}){

    return(
        <>
        <Layout>
        
            <Component {...pageProps}/>
        </Layout>


       
            </>
    )
}