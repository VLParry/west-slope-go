import React, { useEffect, useState } from 'react'
import ActivityCard from './ActivityCard'
import Grid from '@mui/material/Grid';



const Activities = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch("/activities")
      .then((r) => r.json())
      .then(setActivities);
  }, []);


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
            date={activity.date}
            time={activity.time}
            />
        })}
      </Grid>
    </div>
  )
}

export default Activities
