import React from 'react'
import BookCard from './BookCard'
import logo from "../../../assets/images/Blinkist_logo2.png";

export default {
    title: 'BookCard',
    component:BookCard

  }
  export const Primary = () =>  
  <BookCard 
 
   image={"https://images.blinkist.com/images/books/60507e296cee070007c4dc7e/1_1/470.jpg"} 
  name={"click me"}
title={"title1"} author={"author1"}
time={"12"}
disabled={false}
id={10}
onClick={()=>{}}

></BookCard>