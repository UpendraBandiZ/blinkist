import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import TextButton from '../../atoms/TextButton/TextButton';
import TimeIcon from '@material-ui/icons/AccessTime';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Typography } from '@material-ui/core';
type bookCard = {
  id: number;
  title: string;
  author: string;
  time: string;
  // image: "https://images.blinkist.com/images/books/60507e296cee070007c4dc7e/1_1/470.jpg";
  image:string;
  name:string,
  disabled:boolean,
  onClick:()=>void,


};
const BookCard  =(props:bookCard) => {

  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      boxShadow: "none",
      paddingRight: "0px"
    },
    icon: {
      paddingRight: "0px",
      minWidth: 5
    }
  });
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={props.image}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">{props.title}</Typography>

          <Typography variant="body2" color="textSecondary" component="p"> {props.author} </Typography>
          <ListItem >
            <ListItemIcon className={classes.icon}><TimeIcon/></ListItemIcon>
            <ListItemText>{props.time} minute </ListItemText>
          </ListItem>
        </CardContent>
      </CardActionArea>
    
      <CardActions>
        <TextButton name={props.name} 
         onClick={props.onClick} 
         disabled={props.disabled}> </TextButton>
      </CardActions> 
    </Card>
  );
}

export default BookCard;



