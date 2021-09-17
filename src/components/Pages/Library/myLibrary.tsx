import { Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import BookCard from "../../molecules/BookCard/BookCard";
import { Button } from "@material-ui/core";
import "./MyLibraryContent.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    divgrid: {

      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      
    },
  })
);

type bookreturn = {
  id: 5;
  title: "Exercised";
  author: "Daniel E. Lieberman";
  time: "13";
  category: "Science";
  image: "https://images.blinkist.com/images/books/60507e296cee070007c4dc7e/1_1/470.jpg";
  status: string;
};

const MyLibrary = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: any) => {
    setToggleState(index);
  };

  const classes = useStyles();
  const [status, setStatus] = useState("current");
  const [books, setBooks] = useState<bookreturn[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/books")
      .then((result) => result.json())
      .then((books) => setBooks(books));
  }, [books]);

  const handleLibrary = async (bookId: number) => {
    console.log("handle library book");
    console.log(bookId);
    var tempBook: bookreturn;
    await fetch("http://localhost:8000/books/" + bookId)
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        tempBook = data;
      });
    const arr = ["explore", "current", "finished", "current"];

    let i = arr.indexOf(tempBook!.status);
    tempBook!.status = arr[i + 1];
    console.log(tempBook!);
    await fetch("http://localhost:8000/books/" + bookId, {
      method: "PUT",
      body: JSON.stringify(tempBook!),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };

  return (
    <div>
      <Typography variant="h2">My Library</Typography>

     

      <div className="container">
        <div className="bloc-tabs">
          <Button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            
            onClick={() => {
              setStatus("current");
              toggleTab(1);
            }}
            
          >Currently Reading</Button>
          <Button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => {
              setStatus("finished");
              toggleTab(2);
            }}
           
          >Reading Finished</Button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <div >
              <Grid
                className={classes.divgrid}
                container
                item
                xs={12}
                spacing={1}
              >
                {books
                  .filter((filteredBook) => status === filteredBook.status)
                  .map((book) => (
                    <Grid key={book.id} item xs={3} md={4}>
                      <BookCard
                       
                        image={book.image}
                        name={
                          status === "current"
                            ? "Finished Reading"
                            : "Read Again"
                        }
                        title={book.title}
                        author={book.author}
                        time={book.time}
                        disabled={false}
                        id={book.id}
                        onClick={() => handleLibrary(book.id)}
                      ></BookCard>
                    </Grid>
                  ))}
              </Grid>
            </div>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <div>
              <Grid
                className={classes.divgrid}
                container
                item
                xs={12}
                spacing={1}
              >
                {books
                  .filter((filteredBook) => status === filteredBook.status)
                  .map((book) => (
                    <Grid key={book.id} item xs={3} md={4}>
                      <BookCard
                       
                        image={book.image}
                        name={
                          status === "current"
                            ? "Finished Reading"
                            : "Read Again"
                        }
                        title={book.title}
                        author={book.author}
                        time={book.time}
                        disabled={false}
                        id={book.id}
                        onClick={() => handleLibrary(book.id)}
                      ></BookCard>
                    </Grid>
                  ))}
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyLibrary;
