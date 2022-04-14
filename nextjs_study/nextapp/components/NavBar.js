import {Button, Navbar,Container,Nav} from 'react-bootstrap'
import Link from "next/link";
const Navber = () =>{

const onclik= (e)=>{
  e.preventdefault();
}
return(
    
   

   


<>
  <Navbar bg="dark" variant="dark">
    <Container  className='continer'>
    <Link href="/" onClick={onclik}>Movie List</Link>
    <Nav className="me-auto">
      <Link href="/" onClick={onclik}>Today 박스오피스</Link>
      <Link href="/Movie/Movie_week">Features</Link>
     
    </Nav>
    <Navbar.Brand href="">Next.js</Navbar.Brand>
    </Container>
  </Navbar>


 
</>
 

    
 
)
}
export default Navber