import './Form.css';
import AboutForm from './Forms/AboutForm';
import { Routes, Route } from 'react-router-dom';
import ImageForm from './Forms/ImageForm';
import CertificateForm from './Forms/CertificateForm';
import EducationForm from './Forms/EducationForm';
import DescriptionForm from './Forms/DescriptionForm';
import VideoForm from './Forms/VideoForm';
import AvailibilyForm from './Forms/AvailibilyForm';
import PriceForm from './Forms/PriceForm';
import DiscountForm from './Forms/DiscountForm';

const Form=() => {
  return(
     <div className="form">
        <div className="formcover">
         <Routes>
     <Route path='/'  element={<AboutForm/>} exact />
     <Route path='/imageform'  element={<ImageForm/>} exact />
     <Route path='/certificateform'  element={<CertificateForm/>} exact />
     <Route path='/educationform'  element={<EducationForm/>} exact />
     <Route path='/descriptionform'  element={<DescriptionForm/>} exact />
     <Route path='/videoform'  element={<VideoForm/>} exact />
     <Route path='/availibilyform'  element={<AvailibilyForm/>} exact />
     <Route path='/priceform'  element={<PriceForm/>} exact />
     <Route path='/discountform'  element={<DiscountForm/>} exact />


     </Routes>
     </div>
     </div>
  );
}
export default Form;