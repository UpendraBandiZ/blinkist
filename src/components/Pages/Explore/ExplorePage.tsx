import React from "react";
import Explore from "../Explore/Explore";
import NavBar from "../../organisms/NavBar/NavBar"
import BlinkistTemplate from "../../Templates/BlinkistTemplate";
import { ThemeProvider } from "@material-ui/styles";
import baseTheme  from '../../../theme'

const ExplorePage = () => {
  return (
    <ThemeProvider 
    theme={baseTheme}
    >
      <BlinkistTemplate
        header={<NavBar/>}
       
        mainContent={<Explore />}
      />
    </ThemeProvider>
  );
};

export default ExplorePage;
