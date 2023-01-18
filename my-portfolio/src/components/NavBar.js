import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.svg'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <NavLink to='/'>
              <img className="logo" src={logo} alt='logo'></img>
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
              <NavLink 
                to="/"
                className={isActive =>
                  "nav-link" + (!isActive ? " unselected" : "")
                }
                >
                  Home
              </NavLink>


              <NavLink 
                to="/bio"
                className={isActive =>
                  "nav-link" + (!isActive ? " unselected" : "")
                }
              >
                Bio
              </NavLink>


              <NavLink 
                to="/projects"
                className={isActive =>
                  "nav-link" + (!isActive ? " unselected" : "")
                }
                >
                  Projects
              </NavLink>


              <NavLink 
                 to="/contact"
                 className={isActive =>
                  "nav-link" + (!isActive ? " unselected" : "")
                }
                 >
                   Contact
              </NavLink>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>    
      )
}

export default NavBar