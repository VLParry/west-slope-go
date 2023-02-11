import React, { useEffect, useState } from 'react'
import ActivityCard from './ActivityCard'
import Grid from '@mui/material/Grid';
import CreateActivity from './CreateActivity';
import { useLocation } from 'react-router-dom';



const Activities = ( {user} ) => {
  const [activities, setActivities] = useState([]);
const location = useLocation()

  useEffect(() => {
    fetch("/activities")
      .then((r) => r.json())
      .then(setActivities);
  }, []);

  const handleAddActivity = (newActivity) => {
    setActivities([...activities, newActivity])

  }

  // const handleEditActivity = () => {
    
  // }

  // const handleDeleteActivity = () => {
    
  // }


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

    {location.pathname !== '/activities' && <CreateActivity 
      handleAddActivity={handleAddActivity}
    />}

    </div>
  )
}

export default Activities
