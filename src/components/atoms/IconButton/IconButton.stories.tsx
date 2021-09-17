// import SearchIcon from "@material-ui/icons/Search";
// import IconButtonComponent from "./IconButton";
import { HomeOutlined } from "@material-ui/icons";
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// export default {
//   title: "IconButtonComponent",
//   component: IconButtonComponent,
// };


// export const Search=()=>  <IconButtonComponent
// name="Library"
// icon={<SearchIcon/>}
// >

// </IconButtonComponent>



import SearchIcon from "@material-ui/icons/Search";
import IconButtonComponent from "./IconButton";

export default {
  title: "IconButton",
  component: IconButtonComponent,
};

export const SearchIconComponent = () => (
  <IconButtonComponent
    name="search"
    icon={<SearchIcon  />}
  ></IconButtonComponent>
);
export const HomeIconComponent = () => (
  <IconButtonComponent
    name="home"
    icon={<HomeOutlined />}
  ></IconButtonComponent>
);
// export const Home =()=>(<IconButtonComponent name="homeiocon" icon={<HomeOutlined/>}  > </IconButtonComponent>);
