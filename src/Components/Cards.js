import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = {
    card: {
      minWidth: 275,
      width:'50%',
      marginTop:'2%'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      marginBottom: 16,
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  };
  
  function SimpleCard(props) {
    const { classes } = props;
    const bull = <span className={classes.bullet}>•</span>;
  
    return (
      <Card className={classes.card}>
      <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <CardContent>
        <div >
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
        <Fragment>   
             <Typography className={classes.title} color="textSecondary">
           {props.cur}
          </Typography>
          <Typography variant="headline" component="h2">
          {props.val}
          </Typography>
         

          </Fragment>
             </div>
             <div>
             {props.cur+'-'+props.fullname}
             </div>
             <div>
             <Typography variant="headline" component="h2">
             1 USD={props.curval} {props.cur}
            </Typography>
             </div>
             </div>
        </CardContent>
        <div style={{borderColor:'#000',borderWidth:2,  borderLeftWidth: 5,
        borderLeftColor: '#000',marginRight:'7%'}} onClick={()=>{props.removeItem(props.index)}}>
      <a>  (-)</a>  
        </div>
        </div>
      </Card>
    );
  }
  
  export default withStyles(styles)(SimpleCard);