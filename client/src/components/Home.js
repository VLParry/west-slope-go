import React, { useEffect, useState } from "react";
import Activities from "./Activities";


const Home = () => {
    const [activities, setActivities] = useState([]);

 useEffect(() => {
  fetch("/activities")
    .then((r) => r.json())
    .then(setActivities);
}, []);

  return (
    <div>
        {activities.map((activity) => (
            <li>
            {activity.title}
            </li>
           )) }
        
            
    </div>
  )
}

export default Home
