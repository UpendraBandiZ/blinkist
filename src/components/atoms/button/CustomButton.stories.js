import CustomButton from "./CustomButton";

export default {
  title: "Custom Button",
  component: CustomButton,
};


const Template = (args) => <CustomButton {...args} />;

export const Primary = Template.bind({});
export const Secondary= Template.bind({});



Secondary.args={
    color:'secondary',
    name:'secondary',
    

    style:{color:'secondary'}
}

Primary.args = {
    color: "primary",
    name:"primary",
    style:{color:'secondary'},
    
};
