import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddCertificate from './AddCertificate';

export default function EducationForm() {
    const[Universty,setUniversty]=useState('');
    const[Degree,setDegree]=useState('');
    const[Specialization,setSpecialization]=useState('');
    const[Checkbox,setCheckbox]=useState('');
    const[From,setFrom]=useState('');
    const[To,setTo]=useState('');
    const[Degreetype,setDegreetype]=useState('');

  const navigate= useNavigate();
    const handleEducationForm=(e)=>{
        e.preventDefault();
       navigate('/descriptionform');
    }
    return(
     <div>
     <p className='heading'>Education</p>
       <p className="grey">Tell student more about the higher education that you have completed or are working on</p>
       <form onSubmit={handleEducationForm}>
       

            <label htmlFor="universty">Universty</label>
            <input type="text" name="universty" placeholder='E.g  Royal Universty' value={Universty} onChange={(e)=> setUniversty(e.target.value)} required/>   

            <label htmlFor="degree">Degree</label>
            <input type="text" name="degree" placeholder='E.g  Master Degree in English Languages'  value={Degree} onChange={(e)=> setDegree(e.target.value)} required/>  

            <label htmlFor="degreetype">Degree type</label>
            <select placeholder='Choose degree....' value={Degreetype} onChange={(e)=> setDegreetype(e.target.value)} required>
                <option value="Bachelors">Bachelors</option>
                <option value="B.SC">B.SC</option>
                <option value="M.SC">M.SC</option>
                <option value="Ph. D">Ph. D</option>
            </select>

            <label htmlFor="Specialization">Specialization</label>
            <input type="text" placeholder='E.g  Teaching English as Foreign Languages' name="Specialization" value={Specialization} onChange={(e)=> setSpecialization(e.target.value)} required/>  

           
          <div className="languagelevel">
            <div className="language">
            <label htmlFor="yearofstudy" >Years of study</label>
            <select placeholder='Choose language....' id='language' value={From} onChange={(e)=> setFrom(e.target.value)} required>
            <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2024">2024</option>
            </select>
            </div>
               <hr  id='from-to'/>
           <div className="level">
            <label htmlFor="To">To</label>
            <select placeholder='Choose level....' value={To} onChange={(e)=> setTo(e.target.value)} required>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
            </select>
            </div>
          </div>
             
             <div className="certificate">
              <h4> <i className='fas fa-copy'></i>  Get a "Diploma verified" badge</h4>
                <p className='grey'>Upload your Diploma to increase the credibility of your profile</p>
                <div className='photobtn'>
                <input type="file" accept="image/png, image/jpg" className="submitbtn"  /> 
            <span className='grey'>JPG or PNG format, Maximum size of 20MB</span>
           </div>
             </div>
             <AddCertificate/>
             {/* <p className='grey addcertificate'><i className='fas fa-plus-circle'></i> Add another education</p> */}
            
             <div className="checkbox">
             <input type="checkbox" id='checkbox' value={Checkbox} onChange={(e)=> setCheckbox(e.target.value)} required/> 
             <p>I don't have a higher education degree</p>
             </div>
            
             <button className="submitbtn"  id='backbtn' onClick={()=> navigate('/certificateform')}>Back</button>
           <button className="submitbtn"  >Next</button>
          </form>
     </div>
    );
}