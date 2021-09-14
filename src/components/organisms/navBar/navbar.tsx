
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import CustomButton from '../../atoms/button/CustomButton';
import IconButtonComponent from '../../atoms/IconButton/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import {  Route ,Switch,BrowserRouter as Router, Link,NavLink} from "react-router-dom";
import ExploreByCategory from '../Explore/explore';
import Header from '../header/header';
import logo from "../../../assets/images/Blinkist_logo2.png";
import MyLibrary from '../Library/myLibrary';

import LoginButton from '../Authentication/login';
import LogoutButton from '../Authentication/logout';
import { useAuth0 } from '@auth0/auth0-react';


function NavBar() {

  const {loginWithRedirect,isAuthenticated,logout}=useAuth0();

    const handleClick=()=>{
        console.log("clicked");
       }
  return (
    <Router>
    <div >
      <Navbar className='navbar-nav mx-auto '

     
       bg="myRed"
      // className="justify-content-center"
       collapseOnSelect
      // sticky="top" 
      fixed="top" 
      expand="sm"
     // expand="lg"
      //variant="dark"
      >
        {/* <Navbar.Brand>
          <img src={logo} width="40px" height="40px"/>
          Logo
        </Navbar.Brand> */}
        <Navbar.Toggle/>
        <Navbar.Collapse>

      

{/* <IconButtonComponent icon={<SearchIcon fontSize="large" />} /> */}
    
     <Nav.Link as={Link} to={"/"}>
     <img className="navitem" src={logo} alt="logo"  width="180" height="90" ></img>
     </Nav.Link>
     {/* <SearchIcon fontSize="large"/> */}
        <Nav className="ml-auto">
       
        {/* <img src={logo} width="40px" height="40px"/> */}
           <NavDropdown
           
            title="Explore"
            style={{textTransform: 'capitalize',fontSize:"large",color:'black'}}
             className="navbar-nav mx-auto navitem" >
           <div className="grid-container">
  <div className="grid-item item1">
    <NavDropdown.Item href="/explore/category">
    
    <CustomButton
        onClick={handleClick}
        name={'Entertainment'}
        disabled={false}
         >
        
      </CustomButton>
    </NavDropdown.Item>

     
  </div>
  
  <div className="grid-item item2">
  <NavDropdown.Item href="/explore/category">
    
    <CustomButton
        onClick={handleClick}
        name={'Science'}
        disabled={false}
         >
        
      </CustomButton>
    </NavDropdown.Item>
      </div>
  <div className="grid-item item3">
  <NavDropdown.Item href="/explore/category">
    
    <CustomButton
        onClick={handleClick}
        name={'Robotics'}
        disabled={false}
         >
        
      </CustomButton>
    </NavDropdown.Item>
   </div>
      <div className="grid-item item4">
      <NavDropdown.Item href="/explore/category">
    
    <CustomButton
        onClick={handleClick}
        name={'Puzzles'}
        disabled={false}
         >
        
      </CustomButton>
    </NavDropdown.Item>
       </div>
       <div className="grid-item item5">
       <NavDropdown.Item href="/explore/category">
    
    <CustomButton
        onClick={handleClick}
        name={'Comics'}
        disabled={false}
         >
        
      </CustomButton>
    </NavDropdown.Item>
     
  </div>
  
  <div className="grid-item item6">
  <NavDropdown.Item href="/explore/category">
    
    <CustomButton
        onClick={handleClick}
        name={'Fictional'}
        disabled={false}
         >
        
      </CustomButton>
    </NavDropdown.Item>
      </div>
  <div className="grid-item item7">
  <NavDropdown.Item href="/explore/category">
    
    <CustomButton
        onClick={handleClick}
        name={'For Kids'}
        disabled={false}
         >
        
      </CustomButton>
    </NavDropdown.Item>
   </div>
      <div className="grid-item item8">
      <NavDropdown.Item href="/explore/category">
    
    <CustomButton
        onClick={handleClick}
        name={'aeronatics'}
        disabled={false}
         >
        
      </CustomButton>
    </NavDropdown.Item>
       </div>
       <div className="grid-item item9">
 <NavDropdown.Item href="/explore/category">
    
    <CustomButton
        onClick={handleClick}
        name={'stories'}
        disabled={false}
         >
        
      </CustomButton>
    </NavDropdown.Item>
       </div>
       </div>

          </NavDropdown>


           <div className="navitem"> 
           <Nav.Link >
              <Link 
              to={{
                pathname: "/library",
                state: {title: "This is a passed prop",name:'upendra'},
                
                }}
                style={{ color: 'inherit', textDecoration: 'inherit'}}
          
          >
         MyLibrary
      </Link>
      </Nav.Link>
           
      </div>



        
          <NavDropdown 
           
            title="Account"
            style={{textTransform: 'capitalize',fontSize:"large",color:'black'}}
             className="navbar-nav mx-auto navitem" >
          
  
            <NavDropdown.Item >
                HighLights
            </NavDropdown.Item>

           <NavDropdown.Item >
            Invite Friends
            </NavDropdown.Item>
     
 
            <NavDropdown.Item >
                  Wish List
             </NavDropdown.Item>
   
     
               <NavDropdown.Item >
                   Settings
                 </NavDropdown.Item>

                  
                   <NavDropdown.Item >
                   <LoginButton />
                        <LogoutButton/>
   
                 </NavDropdown.Item>
     
          </NavDropdown>















        


          {/* 
        
          <Nav.Link href="/contact">Contact</Nav.Link> */}
          
          
         
          
          
        </Nav>

          </Navbar.Collapse>
        
         
      </Navbar>
     
    


      <div>
       
          <Switch>
         
          <Route path='/explore/category'>
            <div style={{height:130}}>
              </div>
            <ExploreByCategory/>
            </Route>

          <Route path='/library'>
            <div style={{height:130}}>
              </div>
            <MyLibrary/>
            </Route>
          
          </Switch>

        </div>
   






    </div>

    </Router>







  );
}

export default NavBar;


// <NavDropdown.Item href="product/tea">Tea</NavDropdown.Item>
// <NavDropdown.Item href="product/coffe">coffee</NavDropdown.Item>
// <NavDropdown.Item href="product/choclate">choclate</NavDropdown.Item>
// <NavDropdown.Divider/>
// <NavDropdown.Item href="product/milk">Milk</NavDropdown.Item>


{/* <Nav.Link to="/cart">Cart</Nav.Link> */}