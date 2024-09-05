import { useState} from 'react';
import {  useNavigate } from 'react-router-dom';
import './AboutForm.css';
import AddLanguage from './AddLanguage';

export default function AboutForm() {
    const[FirstName,setFirstName]=useState('');
    const[LastName,setLastName]=useState('');
    const[Email,setEmail]=useState('');
    const[Country,setCountry]=useState('');
    const[Language,setLanguage]=useState('');
    const[Level,setLevel]=useState('');
    const[Subject,setSubject]=useState('');
    const[Experience,setExperience]=useState('');
    const[Situation,setSituation]=useState('');
    const[PhoneNumber,setPhoneNumber]=useState('');
    const[Checkbox,setCheckbox]=useState('');
    
      const navigate=useNavigate();
      
     const handleAboutForm=(e)=>{
         e.preventDefault();
      


         fetch("http://localhost:5000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(
        {
        FirstName,
        Email,
        LastName,
      }
      ),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
      });
        navigate('/imageform');
     }
     
     
    return(
    <div >
     <p className='heading'> About</p>
        <form onSubmit={handleAboutForm}>
            <label htmlFor="firstname">First name</label>
            <input type="name" name="firstname" value={FirstName} onChange={(e)=> setFirstName(e.target.value)} required/>   

            <label htmlFor="lastname">Last name</label>
            <input type="name" name="lastname" value={LastName} onChange={(e)=> setLastName(e.target.value)} required/>  
            
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder='.........@gmail.com' value={Email} onChange={(e)=> setEmail(e.target.value)} required/>
        
            <label htmlFor="country">Country of origin</label>
            <select placeholder='Choose country....' value={Country} onChange={(e)=> setCountry(e.target.value)} required>
                <option value="Pakistan">Pakistan</option>
                <option value="China">China</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Srilanka">Srilanka</option>
            </select>

          <div className="languagelevel">
            <div className="language">
            <label htmlFor="language" >Language spoken</label>
            <select placeholder='Choose language....' id='language' value={Language} onChange={(e)=> setLanguage(e.target.value)} required>
                <option value="Urdu">Urdu</option>
                <option value="English">English</option>
                <option value="Arabic">Arabic</option>
                <option value="Persian">Persian</option>
                <option value="Chinese">Chinese</option>
            </select>
           <AddLanguage/>
            </div>

           <div className="level">
            <label htmlFor="level">Level</label>
            <select placeholder='Choose level....' value={Level} onChange={(e)=> setLevel(e.target.value)} required>
                <option value="Level 1">Level 1</option>
                <option value="Level 2">Level 2</option>
                <option value="Level 3">Level 3</option>
                <option value="Level 4">Level 4</option>
                <option value="Level 5">Level 5</option>
            </select>
            </div>
          </div>
            
          <label htmlFor="subject">Subject taught</label>
            <select placeholder='Choose subject....' value={Subject} onChange={(e)=> setSubject(e.target.value)} required>
                <option value="English">English</option>
                <option value="Maths">Maths</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Social science">Social science</option>
            </select>

            <label htmlFor="experience">Describe your teaching experience</label>
            <select placeholder='Descripe your experience....' value={Experience} onChange={(e)=> setExperience(e.target.value)} required>
                <option value="1-year">1-year</option>
                <option value="5-years">5-years</option>
                <option value="10-year">10-year</option>
                <option value="6-months">6-months</option>
                <option value="less than 5-months">less than 5-months</option>
            </select>

            <label htmlFor="situation">Describe your current situation</label>
            <select placeholder='Descripe your situation....' value={Situation} onChange={(e)=> setSituation(e.target.value)} required>
                <option value="employed">Employed</option>
                <option value="student">Student</option>
                <option value="unemployed">Unemployed</option>
                <option value="parttime Job">Part time Job</option>
                <option value="fulltime job">Full time Job</option>
            </select>

            <label htmlFor="phonenumber" id='phonenumber'>Phone number <p> (optional)</p></label>
            <input type="text" name="phonenumber" placeholder='+92' value={PhoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)} />
            <p id="smsnotification">Recieve SMS-notifications about new messages from students</p>  
              
            <label htmlFor="age" >Age</label>
            <div className="checkbox">
             <input type="checkbox" id='checkbox' value={Checkbox} onChange={(e)=> setCheckbox(e.target.value)} required/> 
             <p>I confirm I'm over 18</p>
             </div>

            <button className="submitbtn"  >Next</button>
            
        </form>
    </div>
    );
}