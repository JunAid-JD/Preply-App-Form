import { useNavigate } from "react-router-dom";


export default function AvailibilyForm() {
    const navigate= useNavigate();
    const handleAvailibilyForm=(e)=>{
        e.preventDefault();
       navigate('/priceform');
    }
           return(
            <div>
     <p className='heading'> Availibily</p>
     <form onSubmit={handleAvailibilyForm}>
     <button className="submitbtn"  id='backbtn' onClick={()=> navigate('/videoform')}>Back</button>
           <button className="submitbtn"  >Next</button>
     </form>
            </div>
           );
}