import "./DescriptionForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DescriptionForm() {
  const[Headline,setHeadline]=useState('');
    const[DescripeInterest,setDescripeInterest]=useState('');
    const[DescripeExperience,setDescripeExperience]=useState('');
    const[DescripeLesson,setDescripeLesson]=useState('');

    const navigate= useNavigate();

  const handleDescriptionForm = (e) => {
    e.preventDefault();
    navigate('/videoform');
  };
  return (
    <div>
      <p className="heading">Profile description</p>
      <p className="grey">
        Update or create a new profile headline and description. It will appear
        on your Tutor card on the 'Find Tutors page
      </p>
      <form onSubmit={handleDescriptionForm}>
        <label htmlFor="description">
          Description for English-speaking students
        </label>
        <div className="description">
          <span className="descriptionimg">
            <img src="images/orsrc57212.jpg" alt="" />
          </span>
          <span className="descriptiondetail">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="headline"
              placeholder="Write your headline in English"
              value={Headline}
              onChange={(e) => setHeadline(e.target.value)}
              required
            />
            <p className="grey">Good example:"Certified tutor with 5 years of experience"</p>
          </span>
        </div>

        <label htmlFor="descripeinterests">Introduce yourself and share briefly about your interests</label>
            <textarea name="descripeinterests" rows="7" placeholder='Hello! My name is ... and i m from'  value={DescripeInterest} onChange={(e)=> setDescripeInterest(e.target.value)} required/>  


            <label htmlFor="descripeexperience">Descripe your teaching experience,certification and methodology</label>
            <textarea name="descripeexperience" rows="7" placeholder='I have 5 years of experience. I m TEFL Certified and my classes are ...'  value={DescripeExperience} onChange={(e)=> setDescripeExperience(e.target.value)} required/>  


            <label htmlFor="descripelessson">Motivate students to book a trial lesson with you</label>
            <textarea name="descripelessson" rows="7" placeholder='Book a trial lesson with me so we can discuss your goals  and how i can help you reach them ... '  value={DescripeLesson} onChange={(e)=> setDescripeLesson(e.target.value)} required/>  
             <p className="grey characters" >400 Characters minimum. Characters currently</p>   

               <button className="submitbtn"  id='backbtn' onClick={()=> navigate('/educationform')}>Back</button>
           <button className="submitbtn"  >Next</button>     
      </form>
    </div>
  );
}
