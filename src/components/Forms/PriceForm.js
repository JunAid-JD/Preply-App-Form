import { useNavigate } from "react-router-dom";


export default function PriceForm() {
    const navigate= useNavigate();
    const handlePriceForm=(e)=>{
        e.preventDefault();
       navigate('/discountform');
    }
    return(
     <div>
<p className='heading'> Pricing</p>
<form onSubmit={handlePriceForm}>
     <button className="submitbtn"  id='backbtn' onClick={()=> navigate('/availibilyform')}>Back</button>
           <button className="submitbtn"  >Next</button>
     </form>
     </div>
    );
}