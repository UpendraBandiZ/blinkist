import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

// import { COLORS } from "../appConstants";

const defaultTheme = createTheme();

const baseTheme = createTheme({
  // pallete:{
  //   primary:COLORS.ALPHA_PRIMARY_700
  // },
  typography: {
    fontFamily: "CeraPRO, sans-serif",
    //color: "black",
     
    subtitle1: {
      fontWeight: "bold",
    },
  },
});

const responsiveFontTheme = responsiveFontSizes(baseTheme);

export default responsiveFontTheme;
