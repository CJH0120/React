import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import React, { useMemo } from "react";


const HeaderNav = styled.nav`
    border:1px solid #ddd;
    height:60px;
    background-color:#fff;
    width:100%;
    display:flex;
  
`;
const Headerdiv = styled.div`
    width:100%;
    max-width:975px;
    display:flex;
    height:inherit;
    margin:0 auto;
    align-items: center;
    justify-content: space-between;
`;

const HeaderLink = styled.a`
    font-size:20px;
   
    cursor: pointer;
    font-weight:bolder;
    border-bottom: 1px solid #fff ;
    margin: 20px;

    
`;
const NextJs = styled.a`
    font-size:15px;
   
    font-weight:bolder;
   
   
    
`;
const HeaderLogo = styled.img`
  

`;

export default function NavBar(){
        const router =useRouter();
   







    return(
        <HeaderNav>
        <Headerdiv>
        <div>
        <Link href="/">
            <HeaderLogo src="https://cdn.discordapp.com/attachments/594494873709707275/965807046828097576/unknown.png"/>
        </Link>
        </div>

        <div className="chooseheader">
        <Link href="/Movies">
        <HeaderLink className={router.pathname==="/Movies" ?"change":""}>
        Movies
        </HeaderLink>
        </Link>
       <Link href="/Youtube">
        <HeaderLink className={router.pathname==="/Youtube" ?"change":""} >
        Youtube
        </HeaderLink>
        </Link>
        </div>
        

        <div>
        <NextJs>
        Next.Js
        </NextJs>
            
        </div>
        </Headerdiv>
       </HeaderNav>
    )
    }