import { Typography } from "@material-ui/core";
import React, { useState ,useEffect} from "react";
import Header from "../header/header";
import NavBar from '../navBar/navbar';
import { useLocation} from "react-router-dom";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BookCard from "../../molecules/BookCard/BookCard";
import logo from "../../../assets/images/Blinkist_logo2.png";
import CustomButton from "../../atoms/button/CustomButton";

const useStyles = makeStyles((theme: Theme) =>
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




const MyLibrary = (props:any) => {
    // const   {onClick, name, disabled} = props;
    const classes = useStyles();
    const [status,setStatus]=useState('current');
    const [books,setBooks]=useState<bookreturn[]>([]);



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
    // function handleStatusCurrent(){
    //  setStatus('current');

    //  };
    //  function handleStatusFinish(){
    //    setStatus('finished');
    //    console.log('status set to finished')
    //  };

    let location:any=useLocation();
    return (
     <div>
         
         <Typography variant="h2">
          My Library 
          
          {/* {location.state.title}
           Name {location.state.name} */}
        </Typography>


        <div className={classes.root}>
      <Grid container spacing={1} 
      direction="row" alignItems="center"
       justifyContent= "center" 
       >
        <Grid item xs={3}>
          {/* <Paper className={classes.paper}>Currently Reading</Paper> */}
          {/* Currently Reading */}
         
          <CustomButton className={classes.custombutton}
        //onClick={()=>handleStatusFinish}
        onClick={()=>setStatus('current')}
        name={' Currently Reading'}
        style={{ color: 'black', textDecoration: 'inherit',fontSize:'larger'}}
        
        disabled={false}
         >
        
      </CustomButton>

        </Grid>
        <Grid item xs={3}>
          
        <CustomButton
          // onClick={()=>handleStatusCurrent}
          onClick={()=>setStatus('finished')}
        name={' Finished Reading'}
        style={{ color: 'black', textDecoration: 'inherit',fontSize:'larger'}}
        disabled={false}
         >
        
      </CustomButton>
        </Grid>
        
       
      </Grid>
    </div>
    {/* <BookCard key={2} image={logo} name="Read Again" 
    title="Book1" author="author1"
    time={12}
    disabled={false}
    set={true} onClick={handleLibrary}></BookCard> */}

<div >
      
{/* const filtered=selectedGenre && selectedGenre._id? allMovies.filter(m=>m.genre._id===selectedGenre._id):allMovies; */}
    
                        <Grid className={classes.divgrid} container item xs={12} spacing={1}>
                    { books.filter(filteredBook=>status===filteredBook.status).map(book =>(

                            
                            <Grid key={book.id} item xs={3} md={4}>
                                
                                <BookCard key={2} image={book.image} 
                                name={status=='current' ? 'Finished' : 'Read Again'}
                            title={book.title} author={book.author}
                              time={book.time}
                        disabled={false}
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
  
  
export default MyLibrary;
