import React, { useEffect, useState } from 'react'
import ActivityCard from './ActivityCard'


//I want user to be able to click a button to 'enroll' in that activity then navigate to their page of activities. 
//User can only edit/delete activities created by them.

const Activities = ( { activities, setActivities } ) => {
  const [enrollments, setEnrollments] = useState('')

  useEffect(() => {
    fetch("/activities")
      .then((r) => r.json())
      .then(setActivities);
  }, []);



  const handleEditActivity = (updatedActivity) => {
    const updatedActivities = activities.map((activity) =>
    activity.id === updatedActivity.id ? updatedActivity : activity
    );
    setActivities(updatedActivities)
    
  }
//STRETCH GOAL
  // const handleDeleteActivity = (id) => {
  //   const updatedActivities = activities.filter((deletedActivity) => deletedActivity.id !== id)
  //   setActivities(updatedActivities)
  // }

  const addEnrollment = (newEnrollment) => {
      setEnrollments(...enrollments, newEnrollment)
    
  }




  return (
    <div>
    
        {activities?.map(activity => {
            return <ActivityCard key={activity.id}
            title={activity.title}
            description={activity.description}
            location={activity.location}
            date={activity.date}
            time={activity.time}
            activityId={activity.id}
            // handleDeleteActivity={handleDeleteActivity}
            handleEditActivity={handleEditActivity}
            addEnrollment={addEnrollment}
            setEnrollments={setEnrollments}
            />
        })}
      

  

    </div>
  )
}

export default Activities
