import { useNavigate } from "react-router-dom";
import AddCertificate from "./AddCertificate";
import AddLanguage from "./AddLanguage";


export default function DiscountForm() {
    const navigate= useNavigate();
    const handleDiscountForm=(e)=>{
        e.preventDefault();
       navigate('/');
    }
    return(
     <div>
<p className='heading'> Discount</p>
        <AddCertificate/>
<form onSubmit={handleDiscountForm}>
     <button className="submitbtn"  id='backbtn' onClick={()=> navigate('/priceform')}>Back</button>
           <button className="submitbtn"  >Next</button>
     </form>
     </div>
    );
}