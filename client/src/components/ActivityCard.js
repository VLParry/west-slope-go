import React from 'react'
import Grid from '@mui/material/Grid';

const ActivityCard = ({title, description, time, date}) => {
  return  <Grid item xs={4}>
  {title}{description}{time}{date}
  {/* <img src={image} style={{width:"100px",display:"block"}} /> */}
  
 </Grid>
}

export default ActivityCard
