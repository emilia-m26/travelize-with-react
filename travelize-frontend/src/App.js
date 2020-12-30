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

const fetchURL = "http://localhost:3001";

function App(){
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch(fetchURL).then(
      res => setState(res.data)
    )
  })
    return (
      //console.log(state)
      <>
       {state.map(d => <div>{d}</div>)}
      </>
    )
}

export default App;
