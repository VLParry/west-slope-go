import React from 'react'
import EnrollmentCard from './EnrollmentCard'
import { useUserContext } from '../context/UserContext'
import { useResolvedPath } from 'react-router-dom'


const UserActivities = (  ) => {
 const {user, setUser} = useUserContext()
 //destructuring user object out of useUserContext 


 //array inside object inside array
 //map over the first array activities then map over the enrollments inside the activities object to find which enrollment we are editing. we first return theupdated enrollments for the activity and then we return the updated activity with the edited enrollments added. then we set the user with the new activities
 const handleEditAttendees = (id, numberOfAttendees) => {
    const updatedAttendees = user.activities.map((activity) => {
    const updatedEnrollments = activity.enrollments.map(enrollment => enrollment.id === id ? {...enrollment, number_of_attendees: numberOfAttendees}: enrollment)
    return {...activity,  enrollments: updatedEnrollments}
    })
    setUser({...user, activities: updatedAttendees})
 }

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
    enrollment_id={activity.enrollments.find((enrollment) => enrollment.user_id === user.id).id}
    activity_id={activity.id}
    title={activity.title}
    date={activity.date}
    time={activity.time}
    location={activity.location}
    howMany=
    {activity.enrollments.find((enrollment) => enrollment.user_id === user.id).number_of_attendees}
    activity={activity}
    handleDeleteEnrollment={handleDeleteEnrollment}
    handleEditAttendees={handleEditAttendees} />)}
    </div>
  )
}

export default UserActivities