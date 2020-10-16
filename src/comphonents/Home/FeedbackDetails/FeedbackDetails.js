import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import "./FeedbackDetails.css"
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    }
  }));

const FeedbackDetails = ({ review }) => {
  console.log(review)
    const classes = useStyles();
    return (
      <div className="col-md-4 feedmargin">
            <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
            </Avatar>
          }
         
          title={review.name}
           subheader={review.companyName}

        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
          {review.description}
          </Typography>
        </CardContent>
      </Card>
      </div>
    );
};

export default FeedbackDetails;