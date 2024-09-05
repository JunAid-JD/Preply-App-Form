import React, { useState } from "react";
function AddCertificate(){
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
     <p onClick={()=>handleAdd()} className="grey">Add another Certificate <i className='fas fa-plus-circle'></i></p>

    {/* <button onClick={()=>handleAdd()}>Add</button> */}
        {val.map((data,i)=>{
            return(
               <div className="AddCertficate">
                    {/* <input value={data} onChange={e=>handleChange(e,i)} /> */}
                    <div className="certificate"  onChange={e=>handleChange(e,i)}>
              <h4> <i className='fas fa-copy'></i>  Get a "Certificate verified" badge</h4>
                <p className='grey'>Upload your certificate to increase the credibility of your profile</p>
                <div className='photobtn'>
                <input type="file" accept="image/png, image/jpg" className="submitbtn"  /> 
            <span className='grey'>JPG or PNG format, Maximum size of 20MB</span>
           </div>
        </div>
            <i className='fas fa-trash' onClick={()=>handleDelete(i)}></i>
               </div>
            );
        })}
    </>
);
}
export default AddCertificate;