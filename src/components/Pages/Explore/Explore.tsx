import { Typography } from "@material-ui/core";
import React from "react";
import NavBar from '../../organisms/NavBar/NavBar';
import { useState ,useEffect} from "react"
import Grid from '@material-ui/core/Grid';
import BookCard from "../../molecules/BookCard/BookCard";
import { makeStyles,createStyles,Theme } from '@material-ui/core/styles';
import { useAuth0 } from '@auth0/auth0-react';

type bookreturn={
    id: 5,
    title: "Exercised",
    author: "Daniel E. Lieberman",
    time: "13",
    category: "Science",
    image: "https://images.blinkist.com/images/books/60507e296cee070007c4dc7e/1_1/470.jpg",
    status: string

  }

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

const ExploreByCategory = (props:any) => {
    // const   {onClick, name, disabled} = props;
    const classes = useStyles();
    const [books,setBooks]=useState<bookreturn[]>([]);
    const {loginWithRedirect,isAuthenticated,logout}=useAuth0();

 
   
   
    useEffect(()=>{
      fetch('http://localhost:8000/books')
      .then(res=>res.json())
      .then(books=>setBooks(books))
 
    },[books]);



    const handleLibrary=async (bookId:number)=>{
      console.log('handle library book');
      console.log(bookId);
      var tempBook:bookreturn;
      await fetch('http://localhost:8000/books/' + bookId)
        .then(res => {
          return res.json();
        })
        .then(data => {
          tempBook = data;
        });
      const arr = ["explore", "current", "finished", "current"];

      let i = arr.indexOf(tempBook!.status);
      tempBook!.status = arr[i + 1];
      console.log(tempBook!);
      await fetch('http://localhost:8000/books/' + bookId, {
        method: 'PUT',
        body: JSON.stringify(tempBook!),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
     
    };


    const [filter,setFilter]=useState(''); 

    const searchText =(event:any)=>{
      setFilter(event.target.value)
    }
    // console.warn(filter);
      let dataSearch=books.filter(item=>
        {
          return Object.keys(item).some(key=>
            item.title.toString().toLowerCase().includes(filter.toString().toLowerCase())
            )
        }
        )










  
    return (
     <div>
         
         <Typography variant="h2">
           Explore By Category
        </Typography>
        {/* <Testing/> */}


        <div className="col-12 mb-5">
           <div className="mb-3 col-4 mx-auto">
              <label className="form-label h4">Search</label>
              <input type="text"
              className="form-control"
              value={filter}
              onChange={searchText.bind(this)}
              />

            </div>

           </div>


        <div >
      
      {/* const filtered=selectedGenre && selectedGenre._id? allMovies.filter(m=>m.genre._id===selectedGenre._id):allMovies; */}

      {/* .filter(filterBook=>'explore'===filterBook.status) */}
          
                              <Grid className={classes.divgrid} container item xs={12} spacing={1}>
                          { dataSearch.map(book =>(
      
                                  
                                  <Grid key={book.id} item xs={3} md={4}>
                                      
                                      <BookCard key={2} image={book.image} 
                                      name={book.status=="explore" && isAuthenticated ?'Add to Library':''}
                                  title={book.title} author={book.author}
                                    time={book.time}
                                    disabled={book.status !== "explore" && isAuthenticated  ? true : false}
                              id={book.id}
                                 onClick={()=>handleLibrary(book.id)}
                                // onClick={()=>{
                                //   if(book.status==='current')
                                //   {
                                //            book.status='finished';
                                //   }
                                //   else if(book.status=='finished')
                                //   {
                                //     book.status='current';
                                //   }
                                // }}
                                ></BookCard>
                                
                                
      
      
      
                                  </Grid>
                          ))}
                          </Grid>
      
          </div>
         





  

     </div>
    );
  };
  
  
export default ExploreByCategory;