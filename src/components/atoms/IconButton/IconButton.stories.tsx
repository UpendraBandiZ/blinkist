import SearchIcon from "@material-ui/icons/Search";
import IconButtonComponent from "./IconButton";
import { HomeOutlined } from "@material-ui/icons";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
export default {
  title: "IconButtonComponent",
  component: IconButtonComponent,
};


export const Search=()=> <IconButtonComponent icon={<SearchIcon/>}/>
export const Home=()=> <IconButtonComponent icon={<HomeOutlined/>}/>


// export const Secondary=()=> <IconButtonComponent name="Secondary" disabled={true}/>

// const Template = (args) => <IconButton {...args}/>

// export const Search = Template.bind({});
// export const AccountCircle= Template.bind({});
// export const Home= Template.bind({});


// Search.args={
//     icon:<SearchIcon/>,
  
// }
// Home.args={
//     icon:<HomeOutlined/>
// }
// AccountCircle.args={
//     icon:<AccountCircleIcon/>
// }