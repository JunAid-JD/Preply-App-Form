import { render } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import './ImageForm.css';
export default function  ImageForm() {



    const navigate=useNavigate();
  
     const handleImageForm=(e)=>{
         e.preventDefault();
        navigate('/certificateform');
     }
     let uploadimg= "";
     const handleImage =()=>{
         const reader= new FileReader();
         reader.addEventListener("load",()=>{
              uploadimg = reader.result;
              document.querySelector(".photo").style.backgroundImage=`url(${uploadimg})`;
         });
         render.readAsDataURL(this.files[0]);
     }
    return (
        <div>
     <p className='heading'>Profile photo</p>
     <form id='imageform' onSubmit={handleImageForm}>
        <div className="row">
            <div className="col1">
                <p className="photoheading">Make a great first impression</p>
                <p className='grey'>Tutors who look friendly and professional get the most students.</p>
            <div className='photobtn' id='photobtn'>
            <input type="file" accept="image/png, image/jpg" className="submitbtn" onChange={handleImage} /> 
            <span className='grey'>JPG or PNG format Maximum 5 MB</span>
           </div>
           <div className="photo" >
            <p className="grey">Drag and drop your photo here</p>
           </div>
           <button className="submitbtn"  id='backbtn' onClick={()=> navigate('/')}>Back</button>
           <button className="submitbtn"  >Next</button>

            </div>
            <div className="col2">
            <p className="photoheading">Tips for an amazing photo</p>
                 <div className="tipsphoto">
                     <img src="images/person1.jpg" alt="person1" />
                     <img src="images/person2.jpg" alt="person2" />
                     <img src="images/person3.jpg" alt="person3" />
                </div>
                <div className="tips">
                <p className='grey'><i className='fas fa-check-circle'></i> Smile and look at the camera</p>
                <p className='grey'><i className='fas fa-check-circle'></i> Frame your head and shoulders</p>
                <p className='grey'><i className='fas fa-check-circle'></i> Your photo is upright and centered</p>
                <p className='grey'><i className='fas fa-check-circle'></i> Use neutral lighting and background</p>
                <p className='grey'><i className='fas fa-check-circle'></i> Your face and eyes are fully visible</p>
                <p className='grey'><i className='fas fa-check-circle'></i> Avoid logos or contact information</p>
                <p className='grey'><i className='fas fa-check-circle'></i> You are the only person in photo</p>
                
                </div>
            </div>
        </div>
        </form>
        </div>
    );
}