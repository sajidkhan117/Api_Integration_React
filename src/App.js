// import './App.css';
// // import faker from  'faker';
// import { faker } from '@faker-js/faker';

// import axios from 'axios';
// import { useEffect, useState } from 'react';
// function App() {
//   const[data , setData] = useState('');

//   useEffect(()=> {
//    async function getData(){
//      const res = await axios.get("https://jsonplaceholder.typicode.com")
//     console.log(res)
//    }
//    getData()
//   })

//   // const Name = faker.name.findName();
//   //   const address  = faker.address.direction() // => "Northeast"

//   //   const shahid =  faker.vehicle.model() // => "Roadster"
//   //     const arham = faker.vehicle.model() // 'Explorer'

//   return (
//     <div className="App">
//     {/* <h4>{Name}</h4>
//     <h4>{address}</h4>

//     <h4>{shahid}</h4>
//     <h4>{arham}</h4> */}

//       <button onClick={setData}> show the data </button>
//     </div>
//   );
// }

// export default App;

import React from "react";
import AxiosData from "./AxiosData";

const App = () => {
  return (
    <div>
      <AxiosData />
    </div>
  );
};

export default App;
