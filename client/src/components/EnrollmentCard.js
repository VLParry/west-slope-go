import {useState} from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';


// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

const EnrollmentCard = ( {title, date, time,  enrollment_id, location, handleDeleteEnrollment }) => {
  const formattedDate = dayjs(date).format('MMMM D, YYYY') 
  const formattedTime = dayjs(time, 'HH:mm').format('h:mm A')
  const [errors, setErrors] = useState([])


console.log(enrollment_id)
    
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
      </CardContent>
      <CardActions>
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
