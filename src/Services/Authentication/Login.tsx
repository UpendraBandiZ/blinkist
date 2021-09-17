
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@material-ui/core";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const loggedIn = isAuthenticated;

  if (!loggedIn) {
    return (
      <Button
        onClick={() => loginWithRedirect()}
        // variant="outlined"
        // name="Login" title="Login" 
        style={{textTransform: 'capitalize',fontSize:'medium',fontFamily:'ceraPRO'}}
        // color="secondary"
      >Login</Button>
    );
  } else {
    return null;
  }
};

export default LoginButton;