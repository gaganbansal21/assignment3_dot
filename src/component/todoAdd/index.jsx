import React from "react";
import { useState } from "react";



const TodoAdd = ({sendDataToParnt}) => {

    const [data,setData]=useState({title:"",description:"",id :`${Math.random()*99909}`});

    const handlesubmit = (e) => {
        e.preventDefault();
        if (data.title.trim() === "" || data.description.trim() === "") {
            // You can handle the validation error here (e.g., show an error message)
            alert("Title and description are required");
            return;
          }
        sendDataToParnt(data);
      };


  return (
    <div>
      <div className="todo_class_banner">
        <form>
          <label>Add Title</label>
          <input  value={data.title} onChange={(e)=>setData({...data,title:e.target.value})} type="text" required placeholder="Title..." />

          <label>Description</label>
          <input  value={data.description}  onChange={(e)=>setData({...data,description:e.target.value})} type="text" required placeholder="Description..." />
          <button type="submit" onClick={handlesubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoAdd;
