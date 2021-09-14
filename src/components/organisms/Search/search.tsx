import 'bootstrap/dist/css/bootstrap.css'
import { Typography } from "@material-ui/core";
import React, { useState ,useEffect} from "react";
import { useLocation} from "react-router-dom";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BookCard from "../../molecules/BookCard/BookCard";
import logo from "../../../assets/images/Blinkist_logo2.png";
import CustomButton from "../../atoms/button/CustomButton";




const useStyles = makeStyles((theme:Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor:'azure',
      paddingLeft:'10%',
    
    
    alignSelf:'center'
      
  
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    divgrid:{
      // width:"50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingLeft:'20%',
      paddingRight:'20%'
      
},
 custombutton:{
       color:'red',
       fontSize:'larger'
 }
  }),
);


type bookreturn={
  id: 5,
  title: "Exercised",
  author: "Daniel E. Lieberman",
  time: "13",
  category: "Science",
  image: "https://images.blinkist.com/images/books/60507e296cee070007c4dc7e/1_1/470.jpg",
  status: string

}







const Search=()=>{


    const classes = useStyles();
  //  const [status,setStatus]=useState('current');
    const [books,setBooks]=useState<bookreturn[]>([]);

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











    return(
    
      <section className="py-4 container">

          <div className="row justify-content-center">
               

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
    
                        <Grid className={classes.divgrid} container item xs={12} spacing={1}>
                    { dataSearch.filter(filteredBook=>'explore'===filteredBook.status).map(book =>(

                            
                            <Grid key={book.id} item xs={3} md={4}>
                                
                                <BookCard key={2} image={book.image} 
                                name="Add to Library"
                            title={book.title} author={book.author}
                              time={book.time}
                        disabled={false}
                        id={book.id}
                           onClick={()=>handleLibrary(book.id)}
                          
                          ></BookCard>
                          
                            </Grid>
                    ))}
                    </Grid>

    </div>
    </div>
    </section>
    
    )


}
export default Search;