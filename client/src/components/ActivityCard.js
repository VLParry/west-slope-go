import React from 'react'
import Grid from '@mui/material/Grid';

const ActivityCard = ({title, description, time, date,location}) => {
function deleteActivityClick(){

}
  return ( <Grid item xs={4}>
    <ul>
  <h3>{title}</h3>
  <>{description}</>
  <>{location}</>
  <>{time}</>
  <>{date}</>
  </ul>
  {/* <img src={image} style={{width:"100px",display:"block"}} /> */}
  
 </Grid>
)}

export default ActivityCard
