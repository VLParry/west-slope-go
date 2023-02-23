import React from 'react'
import ActivityCard from './ActivityCard'
import { useUserContext } from '../context/UserContext'


const UserActivities = (  ) => {
  const {user} = useUserContext()
  
    return (
    <div>
    <h1>{user.name}'s Upcoming Activities</h1>

   {user.activities.map((activity) => <ActivityCard activity={activity}/>)}
    </div>
  )
}

export default UserActivities