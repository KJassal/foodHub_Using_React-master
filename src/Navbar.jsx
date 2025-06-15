import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './confg/auth';
import { signOut } from 'firebase/auth';
import { useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { Context } from './Login';


export function Userdata (){
  const {submitedData} = useContext(Context)
}


function BasicExample() {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe(); // Cleanup listener
  }, []);

  const signUserOut = async () => {
    try {
      await signOut(auth);
      alert('Logged out successfully');
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  return (
    <Navbar expand="lg" className="bg-primary ">
      <Container className="nav-bar">
        <Navbar.Brand href="#home" className='brand'>Food_Hub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <ul className="nav-list">
              <li >
                <Link to="/" className='text-white'>Home</Link>
              </li>
              <li>
                <Link to="/help" className='text-white'>Help</Link>
              </li>
              <li>
                <Link to="/gallary" className='text-white'>Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className='text-white'>Contact</Link>
              </li>
              <li>
                <Link to="/cart" className='text-white'>your cart</Link>
              </li>
              <li>
                <Link to="/login" className='text-white' onClick={currentUser ? signUserOut : null}>
                  {currentUser ? 'Logout' : 'Login'}
                </Link>
              </li>
              {currentUser && (
                <p className="logoimg">
                  <img
                    src={currentUser.photoURL}
                    alt="Profile"
                    className="cardImg"
                  />
                </p>
              )}
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
