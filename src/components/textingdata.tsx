import { useState ,useEffect} from "react"
import React from "react";
import Grid from '@material-ui/core/Grid';
import BookCard from '../components/molecules/BookCard/BookCard';
import { makeStyles,createStyles,Theme } from '@material-ui/core/styles';

type bookreturn={
    id: 5,
    title: "Exercised",
    author: "Daniel E. Lieberman",
    time: "13",
    category: "Science",
    image: "https://images.blinkist.com/images/books/60507e296cee070007c4dc7e/1_1/470.jpg",
    status: "explore"

  }

//    interface typedata {
//     id: number;
//     title: string;
//     author: string;
//     time: string;
//     category: string;
//     image: string;
//     status: string;
//   }

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    divgrid:{
            // width:"50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft:'20%',
            paddingRight:'20%'
            
    },
   
  }),
);



  
const Testing:React.FC=()=>{
  const classes = useStyles();
    const [books,setBooks]=useState<bookreturn[]>([]);
    const handleLibrary=()=>{
      console.log('handle library');

    }

   
   
    useEffect(()=>{
      fetch('http://localhost:8000/books')
      .then(res=>res.json())
      .then(books=>setBooks(books))
 
    },[]);


    return(
       
            <div >
      
      {/* {books.map(book=>(
        <p key={book.id}> {book.title}<p>{book.category}</p> </p>
        
      )

      )} */}
    
                        <Grid className={classes.divgrid} container item xs={12} spacing={1}>
                    { books.map(book =>(
                            <Grid key={book.id} item xs={3} md={4}>
                                
                                <BookCard key={2} image={book.image} name="Add to Library"
                            title={book.title} author={book.author}
                              time={book.time}
                        disabled={false}
                         onClick={handleLibrary}></BookCard>



                            </Grid>
                    ))}
                    </Grid>

                  


      
    </div>
         

           
    )
    
}

export default Testing;