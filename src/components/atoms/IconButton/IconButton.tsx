import React from "react";
import { Button } from "@material-ui/core";

const IconButtonComponent = (props:any) => {
    const { icon, onClick ,name }= props;
    return(
        <Button 
        
        style={{textTransform: 'capitalize',fontSize:'larger'}}
        onClick={onClick}
        endIcon={icon}
  
        >
           {name}
        </Button>
    );
};

export default IconButtonComponent;