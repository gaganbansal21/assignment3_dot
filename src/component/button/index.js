import React from 'react'

// const handleButton = ({type,data,key}) =>{
//     if(type === 'update'){

//     }
//     else if(type === 'update'){

//     }
//     else if(type === 'update'){
        
//     }
//     else{
//         return ;
//     }
// }


const ButtonS = ({type,onClick}) => {
  return (
    <div>
        <button onClick={onClick} type="submit" >{type}</button>
    </div>
  )
}

export default ButtonS;