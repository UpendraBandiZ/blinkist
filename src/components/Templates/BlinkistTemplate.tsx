import React from "react";
import {
  makeStyles,
  Box,
  Container,
  
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  box: {
    paddingBottom:130,
  },
  
}));

const BlinkistTemplate:React.FC<{header:JSX.Element,mainContent:JSX.Element}> = (props) => {
  const styles = useStyles();
 
  return (
    <>
      <Container maxWidth="md" >
        <Box className={styles.box}>{props.header}</Box>
       
        <br />
        {props.mainContent}
      </Container>
    </>
  );
};

export default BlinkistTemplate;
