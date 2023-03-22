import {useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';


const EnrollmentCard = ( {title, date, time,  enrollment_id, location, handleDeleteEnrollment, howMany, handleEditAttendees, activity }) => {
  const formattedDate = dayjs(date).format('MMMM D, YYYY') 
  const formattedTime = dayjs(time, 'HH:mm').format('h:mm A')
  const [errors, setErrors] = useState([])
  const [numberOfAttendees, setNumberOfAttendees] = useState(howMany)
  const [editNumber, setEditNumber] = useState(false)
 
  function deleteActivityClick(){
    fetch(`/enrollments/${enrollment_id}`, {
      method: 'DELETE'
    }).then((r) =>{
     if(r.ok) {
      handleDeleteEnrollment(enrollment_id)
    } else {
      r.json().then((err) => setErrors(err.errors));
    }
    })  
}

function handleSave() {
  setErrors([])

  fetch(`/enrollments/${enrollment_id}`, {
    method: 'PATCH',
    headers: {
          "Content-Type": "application/json",
      }, 
      body: JSON.stringify({ enrollment_id: enrollment_id, number_of_attendees: numberOfAttendees })
    }) 
      .then((r) =>{
        if(r.ok) {
          handleEditAttendees(enrollment_id, numberOfAttendees)
          setEditNumber(false)
      } else {
         r.json().then((err) => setErrors(err.errors));
      }
    })
}


  return (
    <div style={{margin: '10%'}}>
    <Card sx={{ maxWidth: 400 }}>
      <CardContent>
        <Typography variant='h4'  gutterBottom>
          {title}
        </Typography>
        <Typography variant="body" component="div">
        {formattedDate}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          at {formattedTime}
        </Typography>
        <Typography variant="body1">
          {location}
        </Typography>
        <Typography variant="body1">
          How many people you are bringing: {howMany}
        </Typography>
        {editNumber && <><input
            autoFocus
            margin="dense"
            id="attendees"
            label="How many people?"
            type="number"
            min={1}
            // fullWidth
            value={numberOfAttendees}
            variant="standard"
            onChange={(e) => setNumberOfAttendees(e.target.value)}
          /><Button onClick={handleSave}>Save</Button></>}
      </CardContent>
      <CardActions>
      <Button onClick={() => setEditNumber(true)}size="small">Edit Attendees</Button>
        <Button onClick={deleteActivityClick}size="small">I can no longer attend</Button>
      </CardActions>
      {errors.map((err) => (
            <p key={err} style={{ color: "red" }}>{err}</p>
          ))}
    </Card>
    </div>
  )
}

export default EnrollmentCard
