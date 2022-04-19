import Navbar from "components/NavBar"
export default function Layout({children}){

    return(
        <>
        <Navbar/>
        <div>{children}</div>
        
        </>
    )
}