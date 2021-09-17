import { useAuth0 } from '@auth0/auth0-react';
import { Button } from "@material-ui/core";
const LogoutButton = () => {
    const {logout,isAuthenticated}=useAuth0();
   

const loggedIn = isAuthenticated;

if (loggedIn) {
    return (
      <Button
        onClick={() => logout()}
        
        style={{textTransform: 'capitalize',fontSize:'medium',fontFamily:'ceraPRO'}}
      >Logout</Button>
    );
  } else {
    return null;
  }
   
}

export default LogoutButton;




