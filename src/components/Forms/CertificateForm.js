import './CertificateForm.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddCertificate from './AddCertificate';

export default function CertificateForm() {
    const[Certificate,setCertificate]=useState('');
    const[Description,setDescription]=useState('');
    const[Issuedby,setIssuedby]=useState('');
    const[Checkbox,setCheckbox]=useState('');
    const[From,setFrom]=useState('');
    const[To,setTo]=useState('');
    const[Subject,setSubject]=useState('');

    const navigate=useNavigate();
  
    const handleCertificateForm=(e)=>{
        e.preventDefault();
       navigate('/educationform');
    }
    return(
     <div>
     <p className='heading'>Teaching Certification</p>
       <p className="grey">Do you have teaching certificates? If so, describe them to enhance your profile credibility and get more student</p>
       <form onSubmit={handleCertificateForm}>
       <label htmlFor="subject">Subject </label>
            <select placeholder='Choose subject....' value={Subject} onChange={(e)=> setSubject(e.target.value)} required>
                <option value="English">English</option>
                <option value="Maths">Maths</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Social science">Social science</option>
            </select>

            <label htmlFor="certificate">Certificate</label>
            <input type="text" name="certificate" value={Certificate} onChange={(e)=> setCertificate(e.target.value)} required/>   

            <label htmlFor="description">Description</label>
            <input type="text" name="description" value={Description} onChange={(e)=> setDescription(e.target.value)} required/>  
            
            <label htmlFor="issuedby">Issued by</label>
            <input type="text" name="issuedby" value={Issuedby} onChange={(e)=> setIssuedby(e.target.value)} required/>  

           
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
              <h4> <i className='fas fa-copy'></i>  Get a "Certificate verified" badge</h4>
                <p className='grey'>Upload your certificate to increase the credibility of your profile</p>
                <div className='photobtn'>
                <input type="file" accept="image/png, image/jpg" className="submitbtn"  /> 
            <span className='grey'>JPG or PNG format, Maximum size of 20MB</span>
           </div>
             </div>
                  <AddCertificate/>
             {/* <p className='grey addcertificate'><i className='fas fa-plus-circle'></i> Add another certifcate</p> */}
            
             <div className="checkbox">
             <input type="checkbox" id='checkbox' value={Checkbox} onChange={(e)=> setCheckbox(e.target.value)} required/> 
             <p>I don't have any teaching certifcate yet</p>
             </div>
            
             <button className="submitbtn"  id='backbtn' onClick={()=> navigate('/imageform')}>Back</button>
           <button className="submitbtn"  >Next</button>
          </form>
     </div>
    );
}