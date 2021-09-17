import React, { ReactElement } from "react";
import { IconButton} from "@material-ui/core";

const IconButtonComponent:React.FC<{icon?:JSX.Element, onClick?:()=>void ,name?:string}>= (props) => {
    
    // const { icon, onClick ,name }= props;
    return(
        <IconButton 
        
        style={{textTransform: 'capitalize',fontSize:'larger',fontFamily:'ceraPRO'}}
        onClick={props.onClick}
       
        >
           {props.name}{props.icon}
        </IconButton>
    );
};




export default IconButtonComponent;




