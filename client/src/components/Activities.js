import React, { useEffect } from 'react'
import ActivityCard from './ActivityCard'
import Grid from '@mui/material/Grid';


//I want user to be able to click a button to 'enroll' in that activity then navigate to their page of activities. 
//User can only edit/delete activities created by them.

const Activities = ( {user, activities, setActivities} ) => {
  

  useEffect(() => {
    fetch("/activities")
      .then((r) => r.json())
      .then(setActivities);
  }, []);



  // const handleEditActivity = () => {
    
  // }

  // const handleDeleteActivity = () => {
    
  // }

  // const addEnrollment 

  //const deleteEnrollment 


  return (
    <div>
     <Grid container spacing={2} 
      style={{
        color: 'darkgreen', 
        fontFamily: 'Helvetica-Bold', 
        fontSize: "25px",
        }}>
        {activities?.map(activity => {
            return <ActivityCard key={activity.id}
            title={activity.title}
            description={activity.description}
            location={activity.location}
            date={activity.date}
            time={activity.time}
            />
        })}
      </Grid>

  

    </div>
  )
}

export default Activities
