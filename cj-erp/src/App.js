
import './App.css';
import { useState } from 'react';

function App() {

 const  [data,setData] = useState([{
  id: 1,
  name: "John",
  gender: "Male",
  address: "123 Main St",
  relation_name: "Jane",
  relation_gender: "Female",
  items: [
    { name: "Item1", rate: 10, value: 100, quantity: 2 },
    { name: "Item2", rate: 15, value: 200, quantity: 3 },
    { name: "Item3", rate: 20, value: 150, quantity: 1 },
    { name: "Item4", rate: 25, value: 250, quantity: 2 },
    { name: "Item5", rate: 30, value: 120, quantity: 1 }
  ]
},
{
  id: 2,
  name: "Alice",
  gender: "Female",
  address: "456 Elm St",
  relation_name: "Bob",
  relation_gender: "Male",
  items: [
    { name: "Item6", rate: 18, value: 160, quantity: 2 },
    { name: "Item7", rate: 22, value: 220, quantity: 3 },
    { name: "Item8", rate: 27, value: 180, quantity: 1 },
    { name: "Item9", rate: 33, value: 270, quantity: 2 },
    { name: "Item10", rate: 38, value: 140, quantity: 1 }
  ]
},
{
  id: 3,
  name: "Emily",
  gender: "Female",
  address: "789 Oak St",
  relation_name: "David",
  relation_gender: "Male",
  items: [
    { name: "Item11", rate: 12, value: 130, quantity: 2 },
    { name: "Item12", rate: 17, value: 180, quantity: 3 },
    { name: "Item13", rate: 21, value: 110, quantity: 1 },
    { name: "Item14", rate: 28, value: 210, quantity: 2 },
    { name: "Item15", rate: 34, value: 170, quantity: 1 }
  ]
},
{
  id: 4,
  name: "Michael",
  gender: "Male",
  address: "101 Pine St",
  relation_name: "Sarah",
  relation_gender: "Female",
  items: [
    { name: "Item16", rate: 16, value: 140, quantity: 2 },
    { name: "Item17", rate: 19, value: 190, quantity: 3 },
    { name: "Item18", rate: 23, value: 160, quantity: 1 },
    { name: "Item19", rate: 29, value: 220, quantity: 2 },
    { name: "Item20", rate: 36, value: 130, quantity: 1 }
  ]
},
{
  id: 5,
  name: "Sophia",
  gender: "Female",
  address: "202 Maple St",
  relation_name: "James",
  relation_gender: "Male",
  items: [
    { name: "Item21", rate: 14, value: 150, quantity: 2 },
    { name: "Item22", rate: 20, value: 200, quantity: 3 },
    { name: "Item23", rate: 24, value: 120, quantity: 1 },
    { name: "Item24", rate: 31, value: 230, quantity: 2 },
    { name: "Item25", rate: 37, value: 180, quantity: 1 }
  ]
}]);

  return (
    <div className="App">
<nav className='navbar'>

 {/* <img className='logo' src="https://miro.medium.com/v2/resize:fit:1200/1*stkti7KhdkPOEu2WQ4x3gQ.png"/> */}
 <img className='logo' src="https://cdn-icons-png.flaticon.com/512/5129/5129557.png"/>
 <h1 style={{fontSize:"2.5rem"}} >CHAUHAN JEWELLERS ERP Solution</h1>
</nav>
    </div>
  );
}

export default App;
