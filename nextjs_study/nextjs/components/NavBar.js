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
             background-color:tomato;
         }
        a{
            text-decoration:none;
        }
        .change{
            color:white
        }
        `}</style>
    </nav>
}