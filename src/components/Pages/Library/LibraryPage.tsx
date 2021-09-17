import React from "react";
import NavBar from "../../organisms/NavBar/NavBar"
import BlinkistTemplate from "../../Templates/BlinkistTemplate";
import { ThemeProvider } from "@material-ui/styles";
import baseTheme  from '../../../theme'
import MyLibrary from "./myLibrary";
const LibraryPage = () => {
  return (
    <ThemeProvider 
    theme={baseTheme}
    >
      <BlinkistTemplate
        header={<NavBar/>}
        
        mainContent={<MyLibrary />}
      />
    </ThemeProvider>
  );
};

export default LibraryPage;
