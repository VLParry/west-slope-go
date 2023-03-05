import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";


//Can't get create activity to work.
//After creating activity I'd like it to take the user to their activities page 

const CreateActivity = ( { handleAddActivity} ) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [location, setLocation] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [errors, setErrors] = useState([])
  const navigate = useNavigate()

    const handleSubmitActivity= (e) => {
        e.preventDefault();
        const newActivity = {
          title,
          description,
          location,
          date,
          time
        }
        fetch("/activities", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newActivity)
        })
        .then((r) => {
          if (r.ok) {
            setErrors([])
            r.json().then((addedActivity) => {
              handleAddActivity(addedActivity)
            navigate('/activities')
            });
          }
          else{
            r.json().then((err) => setErrors(err.errors));
          }
        })
    }


  return (
    <div className='activity_form_container'>
      <form className='create_form' onSubmit={handleSubmitActivity} >
    <p>
<label>
   Activity Title:
  <input 
  type="text"
  style={{width: '500px'}}
  name="title"
  value={title}
  onChange={(e) => setTitle(e.target.value)}
  />
</label>
</p>
<p>
<label>
   Description:
  <input 
  type="text"
  style={{width: '500px'}}
  name="description"
value={description}
onChange={(e) => setDescription(e.target.value)}
  />
</label>
</p>
<p>
<label>
   Location/Address:
  <input 
  type="text"
  style={{width: '500px'}}
  name="location"
  value={location}
  onChange={(e) => setLocation(e.target.value)}
  />
</label>
</p>
<p>
<label>
   Date:
  <input 
  type="date"
  style={{width: '500px'}}
  name="date"
  value={date}
  onChange={(e) => setDate(e.target.value)}
  />
</label>
</p>
<p>
<label>
   Time:
  <input 
  type="time"
  style={{width: '500px'}}
  name="time"
  value={time}
  onChange={(e) => setTime(e.target.value)}
  />
</label>
</p>
<button className='btn' type='submit' >Create Activity</button>
{errors.map((err) => (
            <p key={err} style={{ color: "red" }}>{err}</p>
          ))}
</form>
    </div>
  )
}

export default CreateActivity
