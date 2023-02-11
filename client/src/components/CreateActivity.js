import React, { useState } from 'react'

const CreateActivity = ( {handleAddActivity} ) => {
    const [newActivity, setNewActivity] = useState({
       title: "",
       description: "",
       location: "",
       date: "",
       time: "", 
    })

    const handleActivityChange = (e) => {
        const { name, value } = e.target
        setNewActivity((previousData) => ({
          ...previousData,
          [name] : value,
        }));

    }

    const handleSubmitActivity= (e) => {
        e.PreventDefault();
        fetch("/activities", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newActivity)
        })
        console.log(newActivity)
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
  value={newActivity.title}
  onChange={handleActivityChange}
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
value={newActivity.description}
onChange={handleActivityChange}
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
  value={newActivity.location}
  onChange={handleActivityChange}
  />
</label>
</p>
<p>
<label>
   Date:
  <input 
  type="text"
  style={{width: '500px'}}
  name="date"
  value={newActivity.date}
  onChange={handleActivityChange}
  />
</label>
</p>
<p>
<label>
   Time:
  <input 
  type="text"
  style={{width: '500px'}}
  name="time"
  value={newActivity.time}
  onChange={handleActivityChange}
  />
</label>
</p>
<button className='btn' >Create Activity</button>
</form>
    </div>
  )
}

export default CreateActivity
