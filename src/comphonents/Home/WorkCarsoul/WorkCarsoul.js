import React from 'react';
import { Paper } from '@material-ui/core'
import "./WorkCarsoul.css"

const WorkCarsoul = ({ img }) => {


  return (
      <Paper className="paper-carsoul col-md-6">
        <img className="coursel-img" src={img.img} alt="" />
      </Paper>
  );
};

export default WorkCarsoul;