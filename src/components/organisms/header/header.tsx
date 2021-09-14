import { Box } from "@material-ui/core";
import React from "react";
import CustomButton from "../../atoms/button/CustomButton";

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./header.css";
import IconButtonComponent from "../../atoms/IconButton/IconButton";
import SearchIcon from '@material-ui/icons/Search';
const Header = () => {
    const handleClick=()=>{
     console.log("clicked");
    }
  
    return (
      <div className="container">
        
         
           <div >
          
           </div>
           <IconButtonComponent icon={<SearchIcon fontSize="large" />} />
          

         <IconButtonComponent className="iconbutton"
         onClick={handleClick}
         name={"Explore"} 
         icon={<ExpandMoreIcon/>}
      >
      </IconButtonComponent>

      <CustomButton
        onClick={handleClick}
        name={'My Library'}
        disabled={false}
        
      
      >
        
      </CustomButton>
      <CustomButton
      onClick={handleClick}
      name={'Account'}
      disabled={false}
      />
    
   
            
      

       
     
      </div>
    );
  };
  
  
export default Header;