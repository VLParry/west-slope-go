import React, { useEffect } from 'react'
import EnrollmentCard from './EnrollmentCard'
import { useUserContext } from '../context/UserContext'

//need to go back and change any userActivites to user.activity
const UserActivities = (  ) => {
 const {user, setUser} = useUserContext()
 //destructuring user object out of useUserContext 

// useEffect(() => {
//   console.log({userActivities})
// }, [userActivities])
 

 const  handleDeleteEnrollment
 = (id) => {
  // const updatedActivities = userActivities.filter((deletedActivity) => deletedActivity.id !== id)
  const updatedActivities = user.activities.filter((activity) => activity.enrollments.find((enrollment) => enrollment.id === id) === undefined);
    setUser({...user, activities: updatedActivities})
 }
//copying the user object and then only overriding the activities key
  
    return (
    <div>
    <h1>{user.name}'s Upcoming Activities</h1>

  
   {user.activities.map((activity) => 
   <EnrollmentCard 
   key={activity.id} 
  //  {...activity} 
    enrollment_id={activity.enrollments.filter((enrollment) => enrollment.user_id === user.id)[0].id}
    title={activity.title}
    date={activity.date}
    time={activity.time}
    location={activity.location}

   handleDeleteEnrollment={handleDeleteEnrollment} />)}
    </div>
  )
}

export default UserActivities