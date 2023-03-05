import React from 'react'
import EnrollmentCard from './EnrollmentCard'
import { useUserContext } from '../context/UserContext'


const UserActivities = (  ) => {
 const {user, userActivities, setUserActivities} = useUserContext()
 //destructuring user object out of useUserContext 
console.log({userActivities})

 const  handleDeleteEnrollment
 = (id) => {
  const updatedActivities = userActivities.filter((deletedActivity) => deletedActivity.id !== id)
    setUserActivities(updatedActivities)
 }

  
    return (
    <div>
    <h1>{user.name}'s Upcoming Activities</h1>

  
   {userActivities.map((activity) => 
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