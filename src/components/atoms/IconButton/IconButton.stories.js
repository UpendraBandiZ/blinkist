import SearchIcon from "@material-ui/icons/Search";
import IconButton from "./IconButton";
import { HomeOutlined } from "@material-ui/icons";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
export default {
  title: "IconButton",
  component: IconButton,
};


const Template = (args) => <IconButton {...args}/>

export const Search = Template.bind({});
export const AccountCircle= Template.bind({});
export const Home= Template.bind({});


Search.args={
    icon:<SearchIcon/>,
  
}
Home.args={
    icon:<HomeOutlined/>
}
AccountCircle.args={
    icon:<AccountCircleIcon/>
}