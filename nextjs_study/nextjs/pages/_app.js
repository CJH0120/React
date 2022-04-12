import NavBar from "../components/NavBar";
import CJH from "./about";

export default function App ({Component,pageProps}){

    return(
        <>
        <div>
            <NavBar/>
            <Component {...pageProps}/>
        </div>
            </>
    )
}