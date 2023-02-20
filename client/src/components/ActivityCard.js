import {useState} from 'react';
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
import { useUserContext } from '../context/UserContext';




const ActivityCard = ({title, description, time, date,location, activityId, handleDeleteActivity, handleEditActivity}) => {
  const {user} = useUserContext()
  const [isEditing, setIsEditing] = useState(false)
  const [activityTitle, setActivityTitle] = useState(title)
  const [activityDescription, setActivityDescription] = useState(description)
  const [activityTime, setActivityTime] = useState(time)
  const [activityDate, setActivityDate] = useState(date)
  const [activityLocation, setActivityLocation] = useState(location)

  dayjs().format() 


  function deleteActivityClick(){
    fetch(`/activities/${activityId}`, {
      method: 'DELETE'
    })
    handleDeleteActivity(activityId)
}

  function enrollInActivityClick(e) {
    e.preventDefault();
    const data = {
      activity_id: activityId,
      user_id: user.id,
    }
    fetch("/enrollments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)

    })
  }

function editActivity(e) {
  e.preventDefault()
  const newActivity = {
    title: activityTitle,
    description: activityDescription,
    location: activityDescription,
    date: activityDate,
    time: activityTime,
    id: activityId
  }
  fetch('/activities',
  {method: 'PATCH',
  headers: {
    "Content-Type": "application/json",
}, body: JSON.stringify(newActivity)}

  ).then(() => {
    handleEditActivity(newActivity); 
    setIsEditing(false)})
   
}


  return (
    <div style={ {margin: '10%'}}>
    <Card sx={{ maxWidth: 400 }} variant='elevation'>
    {!isEditing && <>
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

        <Button onClick={enrollInActivityClick} size="large" variant='outlined' fullWidth={true}>Count me in!</Button>
        <Button onClick={deleteActivityClick} size="small" color="warning">Delete Activity</Button>
        <Button onClick={() => setIsEditing(true)}size="small" color="secondary">Edit Activity</Button>
      </CardActions>
      </>}
      {isEditing && <><CardContent><form>
        <label>  
          <input 
           type="text"
          value={activityTitle} 
          onChange={(e)=> setActivityTitle(e.target.value)} />
          </label>
          <label>  
          <input 
           type="text"
          value={activityDescription} 
          onChange={(e)=> setActivityDescription(e.target.value)} />
          </label>
           <label>  
          <input 
           type="time"
          value={activityTime} 
          onChange={(e)=> setActivityTime(e.target.value)} />
          </label>
          <label>  
          <input 
           type="date"
          value={activityDate} 
          onChange={(e)=> setActivityDate(e.target.value)} />
          </label>
          <label>  
          <input 
           type="text"
          value={activityLocation} 
          onChange={(e)=> setActivityLocation(e.target.value)} />
          </label>
          
          
          </form></CardContent><CardActions><Button onClick={editActivity}>save changes</Button></CardActions></>}
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
