import React, { useState } from "react";
import ButtonS from "../button";
const uuid = require('uuid');


const TodoShow = ({ data , onChange}) => {
    const [editOn,setEditOn] = useState(false)
    // console.log(`Here is a test v1 uuid: ${uuid.v1()}`);
    // console.log(`Here is a test v4 uuid: ${uuid.v4()}`);

    // const handleUpdate = () => {
    //     console.log('uux')
    // }

    const handleEdit = () =>{
      setEditOn(!editOn)
    }

    const handleDelete = (key) =>{
      // console.log("key",key);
        data.splice(key, 1);
        // console.log("x : ",data);
        onChange(data);
    }

    const Update = "update";
    const Edit = "Edit";
    const Delete = "delete";
    // console.log("middle" ,data);
  return (
    <div>
      {data.length > 0 && data.map((el, key) => {
        return (
          <>
          <div>
          <p>{key}</p>
            <h1>{el.title}</h1>
            <p>{el.description}</p>
          </div>
          {editOn && <div class="form-popup" id="myForm">
            <form  class="form-container">
              <label>Input : </label>
              <input type="text" placeholder="input.." />

              <label>Description : </label>
              <input type="text" placeholder="desc.." />

              <button type="button" class="btn cancel" onClick={handleEdit}>Close</button>
            </form>
          </div>
      }
            <div>
                {/* <ButtonS type= {Update} onClick={handleUpdate} /> */}
                <ButtonS type= {Edit} onClick={handleEdit} />
                
                <ButtonS type= {Delete} onClick={()=>handleDelete(key)} />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default TodoShow;
