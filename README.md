# :mountain_snow: West Slope Go! :mountain_snow:
This app allows people who reside on Colorado's Western Slope to create accounts and post activities/events they'd like others to participate in. Users can also sign up for activities and keep track of their upcoming events.
I came up with this idea mainly to have parents set up playdates for their kids but ultimately decided it could be used more widely for all sorts of events. 

Installation  | 
------------- | 
1. Fork and clone this repo to your local machine
2. Ensure you have Rails, React, Node.js and npm installed   
2. Run 'bundle install' in the project directory to ensure the required Ruby gems are installed 
3. Run 'npm install --prefix client'  
4. Run Rails server on port 3000: 'rails s -p 3000
5. Run 'npm start --prefix client'
6. Open your web browser and navigate to http://localhost:4000 to view the React application
7. To access the Rails API, use the base URL http://localhost:3000


Technology used  | 
------------- | 
1. Ruby on Rails 
2. React.js
3. CSS
4. HTML


Stretch goals |
------------- |
1. Ideally I would like to explore the more complicated side of model relationships, thus allowing me to have a user_id on my Activity table. As of now, anyone can edit an activity and I am aware this is not ideal. To meet project requirements I have done full CRUD on enrollments. Only the logged in user can create an enrollment for themselves, view a list of just their activities through enrollments, update the number of people joining the activity or delete their enrollment in an activity. <br>
2. I would like a user to be able to sort the activities list or search a specific activity.<br>
3. I want to improve my styling.<br>
4. I am deployed on Render but having issues with the DB, so I would like to get that working as well. 


