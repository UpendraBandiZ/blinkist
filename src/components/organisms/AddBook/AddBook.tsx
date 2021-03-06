import React, { useState ,useEffect} from "react";
import {
  makeStyles,
  Grid,
  Card,
  CardContent,
  CardHeader,
  TextField as InputField,
  Modal,
  Backdrop,
  Fade,
   Button,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import IconButtonComponent from "../../atoms/IconButton/IconButton";
type bookreturn = {
    id: 5;
    title: "Exercised";
    author: "Daniel E. Lieberman";
    time: "13";
    category: "Science";
    image: "https://images.blinkist.com/images/books/60507e296cee070007c4dc7e/1_1/470.jpg";
    status: string;
  };

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "1rem",
  },
  btn: {
    textAlign: "center",
  },
  submitButton: {
    backgroundColor: "#22c870",
    color: "#fff",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
   
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    
    borderRadius: "1rem",
    boxShadow: theme.shadows[3],
    padding: theme.spacing(1),
  },
  card: {
    border: "none",
    boxShadow: "none",
    width: "500px",
  },
}));

const AddBook = () => {
  const styles = useStyles();

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
  const arr = ["explore", "current"];

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



  const [open, setOpen] = React.useState(false);
  
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [time, setTime] = useState('');
    const [category, setCategory] = useState('');
     const image="https://images.blinkist.com/images/books/6007f93c6cee070007a81d3f/1_1/250.jpg"
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
   
    setOpen(false);
    
   
  };

   

    
    const handleSubmitClick = () => {
        

        const tempBook = {
            title, author, category, time, status: "explore", image
        };
        if (tempBook.author === "" || tempBook.title === "" || tempBook.category === "") {
            return alert("Please fill all the fields ");
        }
        fetch('http://localhost:8000/books/', {
            method: 'POST',
            body: JSON.stringify(tempBook),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        setOpen(false);
       
        window.location.reload();
  };

  return (


    <div>
      <IconButtonComponent
                name="Addbook"
                onClick={handleOpen}
                icon={<AddIcon/>}
                
                >

                </IconButtonComponent>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={styles.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={styles.paper}>
            
            <Grid>
              <Card className={styles.card}>
                <CardHeader title="Add Book"></CardHeader>
                <CardContent>
                  <form>
                    <InputField
                      className={styles.root}
                      required={true}
                      type="text"
                      id="title"
                      size="small"
                      fullWidth
                      placeholder="Enter Book Name"
                      variant="outlined"
                      label="Book Name"
                      onChange={event => setTitle(event.target.value)}
                    />
                    <br />
                    <InputField
                      className={styles.root}
                      type="text"
                      id="author"
                      placeholder="Enter Author Name"
                      required={true}
                      size="small"
                      fullWidth
                      variant="outlined"
                      label="Book Author"
                   
                      onChange={event => setAuthor(event.target.value)}
                    />
                    <br />
                    <InputField
                      className={styles.root}
                      type="text"
                      required={true}
                      id="category"
                      placeholder="Enter Book Category"
                      size="small"
                      fullWidth
                      variant="outlined"
                      label="Book Category"
                      onChange={event => setCategory(event.target.value)}
                    />
                    <br />
                   
                    <InputField
                      className={styles.root}
                      type="text"
                      id="readTime"
                      placeholder="Enter Read Time"
                      required={true}
                      variant="outlined"
                      size="small"
                      fullWidth
                      label="Read Time"
                      onChange={event => setTime(event.target.value)}
                    />
                   
                    
                    <br />
                    <div className={styles.btn}>
                      <Button
                        type="submit"
                        className={styles.submitButton}
                        onClick={handleSubmitClick}
                        variant="contained"
                       
                      >Add Book</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddBook;
