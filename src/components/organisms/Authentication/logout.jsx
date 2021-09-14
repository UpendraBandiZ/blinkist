import { useAuth0 } from '@auth0/auth0-react';
import React  from 'react';
import { Button } from "@material-ui/core";

const LogoutButton = () => {
    const {logout,isAuthenticated}=useAuth0();
   

const loggedIn = isAuthenticated;

if (loggedIn) {
    return (
      <Button
        onClick={() => logout()}
        
        style={{textTransform: 'capitalize',fontSize:'medium',paddingLeft:20}}
      >Logout</Button>
    );
  } else {
    return <div></div>;
  }
   
}

export default LogoutButton;




