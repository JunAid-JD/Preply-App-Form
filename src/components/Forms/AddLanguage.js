import React, { useState } from "react";
function AddLanguage(){
   const [val,setVal]=useState([]);
   const handleAdd=()=>{
       const abc=[...val,[]]
       setVal(abc)
   }
   const handleChange=(onChangeValue,i)=>{
    const inputdata=[...val]
    inputdata[i]=onChangeValue.target.value;
    setVal(inputdata)
   }
   const handleDelete=(i)=>{
       const deletVal=[...val]
       deletVal.splice(i,1)
       setVal(deletVal)  
   }
   
return(
    <>
     <p onClick={()=>handleAdd()} className="grey">Add another language</p>

    {/* <button onClick={()=>handleAdd()}>Add</button> */}
        {val.map((data,i)=>{
            return(
               <div className="AddLanguageLevel">
                    {/* <input value={data} onChange={e=>handleChange(e,i)} /> */}
                    <select value={data} onChange={e=>handleChange(e,i)} required>
                    <option value="Urdu">Urdu</option>
                <option value="English">English</option>
                <option value="Arabic">Arabic</option>
                <option value="Persian">Persian</option>
                <option value="Chinese">Chinese</option>
            </select>

            <select placeholder='Choose level....' value={data} onChange={e=>handleChange(e,i)} required>
                <option value="Level 1">Level 1</option>
                <option value="Level 2">Level 2</option>
                <option value="Level 3">Level 3</option>
                <option value="Level 4">Level 4</option>
                <option value="Level 5">Level 5</option>
            </select>
            <i className='fas fa-trash' onClick={()=>handleDelete(i)}></i>

               </div>
            );
        })}
    </>
);
}
export default AddLanguage;