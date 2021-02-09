import { useState, useEffect }from 'react';
import './App.css';

// const fetchURL = "http://localhost:3001/destinations";

// function App(){
//   const [destinations, setDestinations] = useState([]);
//   useEffect(() => {
//     fetch(fetchURL)
//     .then(res => 
//       //console.log(res.json()))
//       res.json())
//    //.then(res => JSON.stringify(res))
//     .then(res => setDestinations(res))
//     //console.log(res))
//   },[])
//   //console.log(destinations.length)
//   console.log(Object.values(destinations))
//     return (
//       <>
//       TESTING
      
//       {destinations.length}



//         {Object.values(destinations).map((destination) => (
//           <li key={destination.id}>{destination.location} - {destination.id} * {destination.goal.name}</li>
//         ))}

//       </>
//     )
// }

const fetchGoalURL = "http://localhost:3001/goals";

function App(){
  const [goals, setGoals] = useState([]);
  useEffect(() => {
    fetch(fetchGoalURL)
    .then(res => 
      //console.log(res.json()))
      res.json())
   //.then(res => JSON.stringify(res))
    .then(res => setGoals(res))
    //console.log(res))
  },[])
  //console.log(destinations.length)
  //console.log(Object.values(goals))
    return (
      <>
      TESTING 🤟 
      
      {goals.length}


      <ol>
        {Object.values(goals).map((goal) => (
          <li key={goal.id}>{goal.name} - {goal.destinations.length} - {goal.user.name}
          {goal.destinations.map((destination) =>
          //console.log(destination.location)
          <ul key={destination.id}>{destination.location}</ul>
            )}
          </li>
        ))}
      </ol>
      </>
    )
}


export default App;
