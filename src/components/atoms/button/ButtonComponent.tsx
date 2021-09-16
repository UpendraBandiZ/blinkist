import React from "react";
import Button from "@material-ui/core/Button";

const ButtonComponent =
  // : React.FC<{
  //   name: string;
  //   color?: string;
  //   variant?: string;
  //   disabled?: boolean;
  //   size?: string;
  //   className?: string;
  //   onClick?: any;*/
  // }>
  (props: any) => {
    //const { size, onClick, title, variant, buttonState, color } = props;

    return (
      <Button {...props}>
        <b>{props.name} </b>
      </Button>
    );
  };

export default ButtonComponent;
