import Link from "next/link";

import { useRouter } from "next/router";
export default function NavBar(){
    const router =useRouter();
    console.log(router)
    return<nav>
        <Link href="/">
        <a className={router.pathname==="/" ?"change":""}>
                Home</a>
        </Link>
        <Link href="/about">
        <a className={router.pathname==="/about" ?"change":""}>
        about </a>
        </Link>


        <style jsx>{`
  
        nav{
           
            text-align: center;
            width:300px;
            margin : 0 auto;
            border:1px solid black;
        }
        a{
            margin: 20px ;
            text-decoration: none;
            color: black;   
            font-size:20px;
            font-weight:bold;
        }
        .change{
            color:red;
        }
        `}</style>
    </nav>
}