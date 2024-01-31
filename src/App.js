
import "./App.css";
import { useState, useEffect } from "react";

export default function App() {
  const [value, setValue] = useState(0);
  const [data, setData] = useState([]);
  const [htop, setHtop] = useState(0);
  const [hleft, setHleft] = useState(0);

  const handleClear = () =>{ 
    setValue(0);
    setData([]);
  }

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
        <label> Dots Count : </label>
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
        <button onClick={handleClear}>Clear</button>
      </div>

      <div id="mybox" className="box-container">
        {data.map((item, index) => (
          <div
            className="dot"
            style={{
              position: "absolute",
              top: `${item.y}px`,
              left: `${item.x}px`,
              backgroundColor: `${item.z === 1 ? "red" : "blue"}`,
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              transitionDelay: "0.2s",
            }}
            key={index}
          />
        ))}
      </div>




    </div>
  );
}
