import {useState} from 'react';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'
import { useUserContext } from '../context/UserContext';
import { useNavigate } from "react-router-dom";
dayjs.extend(utc)
// import { blue } from '@mui/material/colors';
// import { DeleteOutlined } from '@mui/icons-material'
// import { grid } from '@mui/system';





const ActivityCard = ({title, description, time, date,location, activityId, handleDeleteActivity, handleEditActivity, addEnrollment}) => {
  const {user, setUser} = useUserContext()
  const [isEditing, setIsEditing] = useState(false)
  const [activityTitle, setActivityTitle] = useState(title)
  const [activityDescription, setActivityDescription] = useState(description)
  const [activityTime, setActivityTime] = useState(time)
  const [activityDate, setActivityDate] = useState(date)
  const [activityLocation, setActivityLocation] = useState(location)
  const [numberOfAttendees, setNumberOfAttendees] = useState(1)
  const [errors, setErrors] = useState([])
  const navigate = useNavigate([])
  const formattedDate = dayjs(date).format('MMMM D, YYYY') 
  const formattedTime = dayjs(time).utc().format('h:mm A')
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

//Was told I cannot have this for project requirments but am keeping it for stretch goals of having a more complicated activities model

//   function deleteActivityClick(){
//     fetch(`/activities/${activityId}`, {
//       method: 'DELETE'
//     })
//     handleDeleteActivity(activityId)
// }

//below I am sending a POST request to create an enrollment and I am passing activity_id, user_id, and number_of_attendees parameters in the request body.
  function enrollInActivityClick(e) {
    e.preventDefault();
    const data = {
      activity_id: activityId,
      user_id: user.id,
      number_of_attendees: numberOfAttendees,
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
          //the above code updates the activities property of the user object to include a new enrollment, and then passes the updated user object to a function (setUser()) that presumably updates the state of the application to reflect the changes.
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
        <Button variant="outlined" onClick={handleClickOpen}>
        Count me in!
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>How many people will join?</DialogTitle>
        <form onSubmit={enrollInActivityClick}>
        <DialogContent>
          <DialogContentText>
            {/* Please tell us how many people will be in attendence! */}
          </DialogContentText>
          <input
            autoFocus
            margin="dense"
            id="attendees"
            label="How many people?"
            type="number"
            min={1}
            value={numberOfAttendees}
            variant="standard"
            onChange={(e) => setNumberOfAttendees(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type='submit'>Done!</Button>
        </DialogActions>
        {errors?.map((err) => (
            <p key={err} style={{ color: "red" }}>{err}</p>
          ))}
      </form>
      </Dialog>
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
