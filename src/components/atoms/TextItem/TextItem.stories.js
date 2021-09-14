import React from 'react';
import TextItems from './TextItem';

export default{
    title:'TextItem'
}

const Template = (args) => <TextItems {...args}/>

export const Heading = Template.bind({});
export const Para= Template.bind({});
export const Normal= Template.bind({});


Heading.args={
    variant:"h2",
    name:"text item"
}
Normal.args={
    variant:"h3",
    name:"text item"
}
Para.args={
    variant:"h6",
    name:"text item"
}