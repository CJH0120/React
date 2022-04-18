import { useState } from 'react'
import styled from "styled-components";

// Style
const Header= styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    height:65px;
    border:1px solid #ddd;
    background-color:#fff;
  
   
`;
const HeaderWarp=styled.div`
    width: 50%;
    height:inherit; 
   display:flex;
    justify-content: space-between;
    align-items: center;
    justify-items: center;
    margin:0 auto;
    `;
const Logo = styled.img`
  width:130px;
  height:30px;
`;
const Button = styled.button`
  width:130px;
  height:30px;
  border:none;
  background:inherit;
`;
// Style end



const Navber = () =>{
const  [Modechange,SetModechange] =useState(false);


return(
<>

<Header>
   <HeaderWarp>
  <div>
  <Logo src='https://cdn.discordapp.com/attachments/594494873709707275/965568532106608661/-001_40.png'/>
  </div>
  <div>
  <Button>인기 영화</Button>
  <Button>인기 유튜브</Button>
  </div>
  <div>
  <Button>다크모드</Button>
  </div>
  </HeaderWarp> 
</Header>


 
</>
 

    
 
)
}
export default Navber