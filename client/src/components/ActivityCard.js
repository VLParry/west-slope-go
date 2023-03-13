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
// import { grid } from '@mui/system';

import { useUserContext } from '../context/UserContext';
import { useNavigate } from "react-router-dom";





const ActivityCard = ({title, description, time, date,location, activityId, handleDeleteActivity, handleEditActivity, addEnrollment}) => {
  const {user, setUser} = useUserContext()
  const [isEditing, setIsEditing] = useState(false)
  const [activityTitle, setActivityTitle] = useState(title)
  const [activityDescription, setActivityDescription] = useState(description)
  const [activityTime, setActivityTime] = useState(time)
  const [activityDate, setActivityDate] = useState(date)
  const [activityLocation, setActivityLocation] = useState(location)
  const [errors, setErrors] = useState([])
  const navigate = useNavigate([])

 const formattedDate = dayjs(date).format('MMMM D, YYYY') 
 const formattedTime = dayjs(time, 'HH:mm').format('h:mm A')

//Was told I cannot have this for project requirments but am keeping it for stretch goals of having a more complicated activities model

//   function deleteActivityClick(){
//     fetch(`/activities/${activityId}`, {
//       method: 'DELETE'
//     })
//     handleDeleteActivity(activityId)
// }

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
    .then((r) => {
      if (r.ok) {
        r.json().then((addedEnrollment) => {
          addEnrollment(addedEnrollment)
          setUser({...user, activities: [...user.activities, addedEnrollment]})
        navigate('/myActivities')
        });
      }
      else{
        r.json().then((err) => setErrors(err.errors));
      }
    })
  }

function editActivity(e) {
  e.preventDefault()
  const newActivity = {
    title: activityTitle,
    description: activityDescription,
    location: activityLocation,
    date: activityDate,
    time: activityTime,
    id: activityId
  }
  fetch(`/activities/${activityId}`,
  {method: 'PATCH',
  headers: {
    "Content-Type": "application/json",
}, body: JSON.stringify(newActivity)}
  )
  .then((r) => {
    if (r.ok) {
      setErrors([])
       r.json().then((newActivity) => {
        handleEditActivity(newActivity)
        setIsEditing(false)
      });
    }
    else{
      r.json().then((err) => setErrors(err.errors));
    }
  })
}


  return (
    <div style={ {margin: '5%'}}>
    <Card sx={{ maxWidth: 400 }} variant='elevation'>
    {!isEditing && <>
      <CardContent style={{ background: 'linear-gradient(to bottom, #f39b6d, #ffffbd )' }}>
        
        <Typography variant='h4'  gutterBottom>
          {title}
        </Typography>
        <Typography variant="body" component="div">
         {formattedDate} at {formattedTime}
        </Typography><br />
        <Typography sx={{ mb: 1.5 }} >
          {description}
        </Typography>
        <Typography variant="body1">
          Location: {location}
          </Typography>

        </CardContent>
      <CardActions>

        <Button onClick={enrollInActivityClick} size="large" variant='outlined' fullWidth={true}>Count me in!</Button>
        {/* <Button onClick={deleteActivityClick} size="small" color="warning">Delete Activity</Button> */}
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
          {errors.map((err) => (
            <p key={err} style={{ color: "red" }}>{err}</p>
          ))}
    </Card>
    </div>
  )
}


export default ActivityCard
