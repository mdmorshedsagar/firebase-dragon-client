import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/Providers';

const Navigationbar = () => {
    const {user,createLogout} = useContext(AuthContext);
  const handleLogout =()=>{
    createLogout()
    .then(() => {
      console.log('sign out succesfully')
    }).catch((error) => {
      console.log(error)
    });
  }
    return (
        <Container>
              <Navbar bg="light" expand="lg">
      <Container>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="" />
        <Navbar.Collapse id="basic-navbar-nav" className="d-flex align-items-center bg-white">
          <Nav className="mx-auto">
         <Link to='/category/0'>
            <Nav.Link href='#home'>home</Nav.Link>
         </Link>
          <Nav.Link href="#about">About </Nav.Link>
          <Nav.Link href="#career">Career</Nav.Link>
            
          </Nav>
          <div>
            { user &&
              <span>
               <FaUserCircle className="fs-2 me-1"></FaUserCircle>
             </span>
             }

            { user ? 
              <button onClick={handleLogout} className="btn btn-dark fs-5 px-4">Logout</button> :
              <Link to='/login'>
              <button className="btn btn-dark fs-5 px-4">login</button>
              </Link>
              }
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Container>
    );
};

export default Navigationbar;