import React from 'react'
import Button from './TextButton'


export default {
    title: 'TextButton'
  }

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary= Template.bind({});
export const Black= Template.bind({});



Black.args = {
    color: "black",
    name:"click me"
}
Secondary.args={
    color:'secondary',
    name:'secondary'
}

Primary.args = {
    color: "primary",
    name:"primary"
};




























