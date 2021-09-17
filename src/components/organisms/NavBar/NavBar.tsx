
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {  Route ,Switch,BrowserRouter as Router, Link,NavLink} from "react-router-dom";
import ExploreByCategory from '../../Pages/Explore/Explore';
import logo from "../../../assets/images/Blinkist_logo2.png";
import MyLibrary from '../../Pages/Library/myLibrary';
import LoginButton from '../../../Services/Authentication/Login';
import LogoutButton from '../../../Services/Authentication/Logout';
import { useAuth0 } from '@auth0/auth0-react';
import AddBook from '../AddBook/AddBook'
import { useState } from 'react';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { Collapse } from '@material-ui/core';
import ExploreMenu from './ExploreMenu';
import IconButtonComponent from '../../atoms/IconButton/IconButton';
import { LibraryBooks } from "@material-ui/icons";
function NavBar() {
  const {isAuthenticated}=useAuth0();
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    
  return (
    // <Router>
    <div>
      <Navbar className='navbar-nav mx-auto '
       bg="myRed"   
       collapseOnSelect
       fixed="top" 
       expand="sm"
      >
      <Navbar.Toggle/>
      <Navbar.Collapse>
    
     <Nav.Link as={Link} to={"/"}>
      <img className="navitem" src={logo} alt="logo"  width="180" height="90" ></img>
     </Nav.Link>

      <Nav className="ml-auto">
             <Nav.Link > 
                <IconButtonComponent
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                  // className="expandButton"
                  name="Explore"
                  icon={expanded?<ExpandLessIcon/>:<ExpandMoreIcon/>}
                >
                  <ExpandMoreIcon />
                </IconButtonComponent>
              </Nav.Link>


           

       {isAuthenticated?  <Nav.Link>
              <Link to="/library" style={{textDecoration:'none'}}>
                <IconButtonComponent
                name="Library"
                icon={<LibraryBooks/>}
                >

                </IconButtonComponent>

                </Link>
                </Nav.Link> :<Nav.Link className="navitem"></Nav.Link>}

     
            

        {isAuthenticated ? <Nav.Item style={{paddingTop:'9px'}}>
        <AddBook/>
        </Nav.Item>:<Nav.Item className="navitem"></Nav.Item>}
        

        
          <NavDropdown 
            title="Account"
            style={{textTransform: 'capitalize',fontSize:"larger",color:'black',paddingTop:'12px',fontFamily:'ceraPRO'}}     
            > 
            <NavDropdown.Item > HighLights</NavDropdown.Item>
           <NavDropdown.Item >  Invite Friends</NavDropdown.Item>
            <NavDropdown.Item >Wish List</NavDropdown.Item>
            <NavDropdown.Item >  Settings  </NavDropdown.Item>
            <NavDropdown.Item >
              <LoginButton />
               <LogoutButton/>
              </NavDropdown.Item>
            </NavDropdown>



       
        </Nav>

          </Navbar.Collapse>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <ExploreMenu />
          </Collapse>
         
      </Navbar>


      <div>
          

      </div>

    </div>

  );
}

export default NavBar;


