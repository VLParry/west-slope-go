import React, { useEffect, useState } from "react";
import Activities from "./Activities";


const Home = () => {
    const [activities, setActivities] = useState([]);

 useEffect(() => {
  fetch("/activities")
    .then((r) => r.json())
    .then(setActivities);
}, []);
console.log(activities)
  return (
    <div>
        <ul>
        {activities?.map((activity) => (
            <li>
            {activity.title}
            </li>
           )) }
        </ul>
            
    </div>
  )
}

export default Home
