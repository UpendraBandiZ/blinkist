import React from "react";
import { Button } from "@material-ui/core";

const CustomButton = (props:any) => {
    const   {onClick, name, disabled,style} = props;
  
    return (
      <Button 
        style={style}
      // style={{textTransform: 'capitalize',fontSize:'larger',color:'black'}}
       onClick={onClick} disabled={disabled}>
        {name}
      </Button>
    );
  };
  
  
export default CustomButton;

// type buttonReturn={
//     onClick:()=>void

// }
// type buttonProps={
//     variant:string,
//     color:string,
//     onClick:()=>void,
//      size:string,
//      name:string

// }
// const CustomButton: React.FC<buttonReturn> = ({variant,color,onClick,size,name}:any) => {
//     return <Button
//      variant={variant} 
//      color={color} 
//      onClick={onClick}
//       size={size} >
//     {name} 
//     </Button>
// }