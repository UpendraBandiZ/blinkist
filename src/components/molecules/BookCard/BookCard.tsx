import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import TextItems from '../../atoms/TextItem/TextItem';
import TextButton from '../../atoms/TextButton/TextButton';
import TimeIcon from '@material-ui/icons/AccessTime';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

const BookCard = (props:any) => {

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
          <TextItems gutterBottom variant="h5" component="h2" name={props.title} />
          <TextItems variant="body2" color="textSecondary" component="p" name={props.author} />
          <ListItem >
            <ListItemIcon className={classes.icon}><TimeIcon/></ListItemIcon>
            <ListItemText>{props.time} minute </ListItemText>
          </ListItem>
        </CardContent>
      </CardActionArea>
    
      <CardActions>
        <TextButton name={props.name} color="primary"
         onClick={props.onClick} 
         disabled={props.disabled}> </TextButton>
      </CardActions> 
    </Card>
  );
}

export default BookCard;



