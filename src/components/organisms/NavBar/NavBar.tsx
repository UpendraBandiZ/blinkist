
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {  Route ,Switch,BrowserRouter as Router, Link,NavLink} from "react-router-dom";
import ExploreByCategory from '../../Pages/Explore/Explore';
import logo from "../../../assets/images/Blinkist_logo2.png";
import MyLibrary from '../../Pages/Library/myLibrary';
import LoginButton from '../../../Services/Authentication/login';
import LogoutButton from '../../../Services/Authentication/logout';
import { useAuth0 } from '@auth0/auth0-react';
import AddBook from '../AddBook/AddBook'

function NavBar() {


  const {loginWithRedirect,isAuthenticated,logout}=useAuth0();

    const handleClick=()=>{
        console.log("clicked");
       }
  return (
    <Router>
    <div>
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
    
        Entertainment
    </NavDropdown.Item>

     
  </div>
  
  <div className="grid-item item2">
  <NavDropdown.Item href="/explore/category">
    
     Science
    </NavDropdown.Item>
      </div>
  <div className="grid-item item3">
  <NavDropdown.Item href="/explore/category">
   Robotics
    </NavDropdown.Item>
   </div>
      <div className="grid-item item4">
      <NavDropdown.Item href="/explore/category">
    
         Education
    </NavDropdown.Item>
       </div>
       <div className="grid-item item5">
       <NavDropdown.Item href="/explore/category">
    
               Relationships
    </NavDropdown.Item>
     
  </div>
  
  <div className="grid-item item6">
  <NavDropdown.Item href="/explore/category">
    
     Astronomy
    </NavDropdown.Item>
      </div>
  <div className="grid-item item7">
  <NavDropdown.Item href="/explore/category">
    
      Sports
    </NavDropdown.Item>
   </div>
      <div className="grid-item item8">
      <NavDropdown.Item href="/explore/category">
    
        Numerology
    </NavDropdown.Item>
       </div>
       <div className="grid-item item9">
 <NavDropdown.Item href="/explore/category">
    
      Psychology
    </NavDropdown.Item>
       </div>
       </div>

          </NavDropdown>


         { isAuthenticated ? <div className="navitem"> 
           <Nav.Link>
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
           
      </div>:<Nav.Item className="navitem"></Nav.Item>}



        {isAuthenticated ? <Nav.Item>
        <AddBook/>
        </Nav.Item>:<Nav.Item className="navitem"></Nav.Item>}
        

        
          <NavDropdown 
           
            title="Account"
            style={{textTransform: 'capitalize',fontSize:"large",color:'black',alignSelf:'right',paddingLeft:'30px'}}
             className="navbar-nav mx-auto navitem " > 
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
            <Route path='/'>
            <div style={{height:130}}>
              </div>
            <ExploreByCategory/>
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