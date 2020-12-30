import { useState, useEffect }from 'react';
import './App.css';

// function App() {
//   const [goal, setGoal] = React.useState({
//       name: 3,
//       email: "emi@tester.com"
//   });
//   return (
//     <div className="App">
//      {goal.name}
//      <button onClick={() => setGoal({...goal, name: goal.name +1})}>Update Name</button>
//      <br></br>
//      {goal.email}
//     </div>
//   );
// }

const fetchURL = "http://localhost:3001/destinations";

function App(){
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    fetch(fetchURL)
    .then(res => 
      //console.log(res.json()))
      res.json())
   //.then(res => JSON.stringify(res))
    .then(res => setDestinations(res))
    //console.log(res))
  },[])
  //console.log(destinations.length)
  console.log(Object.keys(destinations))
    return (
      <>
      TESTING
      
      {destinations.length}

        {Object.values(destinations).map((destination) => (
          <li>{destination.location} - {destination.id}</li>
        ))}
      </>
    )
}

export default App;
