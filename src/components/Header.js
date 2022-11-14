
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect} from "react";

export const Header = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const onActiveLink = (value)=>{
    setActiveLink(value);
  }

  useEffect(()=>{
    const onScroll= ()=>{
      if(window.scrollY>50){
        setScrolled(true);
      }else{
        setScrolled(false);
      }
    }


    window.addEventListener('scroll', onScroll);
    return()=> window.removeEventListener('scroll', onScroll);
  },[]);


  return (
    <Navbar expand="lg" className = {scrolled ? "scrolled navbar" :"navbar"}>
      <Container>
        <Navbar.Brand href="#home" className='logo'>Me</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink==='home'? "active nav-link": "nav-link"} onClick={()=>{onActiveLink('home')}}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink==='skills'? "active nav-link": "nav-link"} onClick={()=>{onActiveLink('skills')}}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink==='projects'? "active nav-link": "nav-link"} onClick={()=>{onActiveLink('projects')}}>Projects</Nav.Link>
            <Nav.Link href="#link"><Button className='navbar-btn'  onClick={()=>{console.log('connect')}}><span>Get Start</span></Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
