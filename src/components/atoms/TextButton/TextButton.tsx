import React from 'react';
import Button from '@material-ui/core/Button';


const TextButton:React.FC<{disabled:boolean;onClick:()=>void;
  
  name:string}> = (props) =>
{
  
    return (
      <div >
        <Button 
         disabled={props.disabled}
         color="primary"
         onClick={props.onClick} 
           
        >
             <b>{props.name} </b>
        </Button>
      </div>
    );
  };

export default TextButton;