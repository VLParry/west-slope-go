import * as React from 'react';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { blue } from '@mui/material/colors';
// import { DeleteOutlined } from '@mui/icons-material'
import dayjs from 'dayjs';
import { grid } from '@mui/system';
// import <localized-format> from 'dayjs/plugin/<localized-format>';




const ActivityCard = ({title, description, time, date,location, activityId, handleDeleteActivity}) => {

  dayjs().format() 


  function deleteActivityClick(){
    fetch(`/activities/${activityId}`, {
      method: 'DELETE'
    })
    handleDeleteActivity(activityId)
}

// function 


  return (
    <div style={ {margin: '10%'}}>
    <Card sx={{ maxWidth: 400 }} variant='elevation'>
      <CardContent>
        <Typography variant='h3'  gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="div">
         {date}{time}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="green">
          {description}
        </Typography>
        <Typography variant="body1">
          {location}
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" variant='outlined' fullWidth='true'>Count me in!</Button>
        <Button onClick={deleteActivityClick} size="small" color="warning">Delete Activity</Button>
        <Button size="small" color="secondary">Edit Activity</Button>
      </CardActions>
    </Card>
    </div>
//       <React.Fragment>
//         <CardContent>
//           <Typography sx={{ fontSize: 20, color: blue }} color="text.secondary" gutterBottom>
//           {date}{time}
//           </Typography>
//           <Typography variant="h7" component="div">
// {title}            
//           </Typography>
//           <Typography sx={{ mb: 1.5 }} color="text.secondary">
//             {location}
//           </Typography>
//           <Typography variant="body2">
//            {description}
//           </Typography>
//         </CardContent>
//         <CardActions>
//           <Button size="small">I'm In!</Button>
//         </CardActions>
//       </React.Fragment>
//     );
    

  // <Box sx={{ minWidth: 275 }}>
  //     <Card variant="outlined">{card}</Card>
  //   </Box>
  )
}
//   ( <Grid item xs={4}>
//     <ul>
//   <h3>{title}</h3>
//   <>{description}</>
//   <>{location}</>
//   <>{time}</>
//   <>{date}</>
//   </ul>
//   {/* <img src={image} style={{width:"100px",display:"block"}} /> */}
  
//  </Grid>
// )}

export default ActivityCard
