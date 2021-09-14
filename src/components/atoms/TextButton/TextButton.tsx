import React from 'react';
import Button from '@material-ui/core/Button';


const TextButton = (props:any) =>
{
  
    return (
      <div >
        <Button {...props}>
             <b>{props.name} </b>
        </Button>
      </div>
    );
  };

export default TextButton;