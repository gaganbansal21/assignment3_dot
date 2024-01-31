// import logo from './logo.svg';
// import './App.css';
// import TodoAdd from './component/todoAdd';
// import TodoShow from './component/todoShow';
// import { useState } from 'react';




// function App() {


//   // const[setData,setShowData] = useState([]);
//   // // console.log("H", setData);
//   // // console.log("data",setShowData);

//   // const handleDeleteFunction = (value) =>{
//   //   setShowData([...value]);
//   //   // console.log("value",value);
//   // } 

//   return (

//     <div className="App">
//         {/* <TodoAdd sendDataToParnt = {(e) => {setShowData([...setData,e])}} /> */}
//         {/* <TodoAdd handleData= { (e) => (setShowData(...setData,{e.target.title,e.target.decription}))}  /> */}
//         {/* <TodoShow data = {setData} onChange={handleDeleteFunction} /> */}



//     </div>  
//   );
// }

// export default App;
import "./App.css";
import { useState, useEffect } from "react";

export default function App() {
  const [value, setValue] = useState(1);
  const [data, setData] = useState([{ x: 0, y: 0, z: 1 }]);
  const [htop, setHtop] = useState(0);
  const [hleft, setHleft] = useState(0);


  const handleBubbles = () => {
    const dataArr = [];

    // make an array of size of value
    for (let i = 1; i <= value; i++) {
      let z = 1; // red
      let x = Math.random() * 400;
      let y = Math.random() * 400;

      if ((x - 200) * (x - 200) + (y - 200) * (y - 200) <= 200 * 200) {
        z = 0;
      }
      dataArr.push({ x, y, z });
    }

    // update the state with the new data array
    setData(dataArr);
  };

  useEffect(() => {
    const handlewidth = () => {
      let elem = document.getElementById('mybox');
      if (elem) {
        setHtop(elem.getBoundingClientRect().top);
        setHleft(elem.getBoundingClientRect().left);
      }
    };

    handlewidth();
  }, []);

  return (
    <div className="App">

<div className="container">
        <label> Hi </label>
        <input
          id="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="number"
          placeholder="Enter a number"
          min={1}
          max={10000}
        />
        <button onClick={handleBubbles}>Submit</button>
      </div>

      <div id="mybox" className="box-container">
        {data.map((item, index) => (
          <div
            className="dot"
            style={{
              position: "absolute",
              top: `${  item.y}px`,
              left: `${ item.x}px`,
              backgroundColor: `${item.z === 1 ? "red" : "blue"}`,
              width: '4px',
              height: '4px',
              borderRadius: '50%',
            }}
            key={index}
          />
        ))}
      </div>

      


    </div>
  );
}
