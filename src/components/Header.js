import { Link,useLocation} from "react-router-dom";
import "./Header.css";

export default function Header(props) {
  // (useLocation().pathname === ('/'))?console.log('aboutform'):console.log('sorry');


  return (
    <div>
      <div className="formheader">
    
  { (useLocation().pathname === ('/'))?<span className="numbers" >1</span>:
        <i className="fas fa-circle-check"  id="checked"></i>
        }
        <p>
          <Link to="/">About</Link>
        </p>
        <i className="fas fa-chevron-right"></i>

        {/* { (useLocation().pathname === (('/')&&('/imageform')))?<span className="numbers" >2</span>:
        <i className="fas fa-circle-check"  id="checked"></i>
        } */}
        <span className="numbers" >2</span>
          <p>
          <Link to="/imageform">Photo</Link>
        </p>
        <i className="fas fa-chevron-right"></i>

        
        {/* { (useLocation().pathname === (('/imageform')&&('/certificateform')))?<span className="numbers" >3</span>:
        <i className="fas fa-circle-check"  id="checked"></i>
        } */}
        <span className="numbers" >3</span>
        <p>
          <Link to="/certificateform">Certification</Link>
        </p>
        <i className="fas fa-chevron-right"></i>

        
        {/* { (useLocation().pathname === (('/certificateform')&&('/educationform')))?<span className="numbers" >4</span>:
        <i className="fas fa-circle-check"  id="checked"></i>
        } */}
        <span className="numbers" >4</span>
        <p>
          <Link to="/educationform">Education</Link>
        </p>
        <i className="fas fa-chevron-right"></i>

        
        {/* { (useLocation().pathname === (('/educationform')&&('/descriptionform')))?<span className="numbers" >5</span>:
        <i className="fas fa-circle-check"  id="checked"></i>
        } */}
        <span className="numbers" >5</span>
        <p>
          <Link to="/descriptionform">Description</Link>
        </p>
        <i className="fas fa-chevron-right"></i>

     
        {/* { (useLocation().pathname === (('/descriptionform')&&('/videoform')))?<span className="numbers" >6</span>:
        <i className="fas fa-circle-check"  id="checked"></i>
        } */}
        <span className="numbers" >6</span>
        <p>
          <Link to="/videoform">Video</Link>
        </p>
        {/* <i className="fas fa-chevron-right"></i> */}

        
        {/* <span className="numbers" >7</span>
        <p>
          <Link to="/availibilyform">Avaliability</Link>
        </p>
        <i className="fas fa-chevron-right"></i>

        <span className="numbers" >8</span>
        <p>
          <Link to="/priceform">Pricing</Link>
        </p>
        <i className="fas fa-chevron-right"></i>
        
       
        <span className="numbers" >9</span>
        <p>
          <Link to="/discountform">Discount</Link>
        </p> */}
      </div>
    </div>
  );
}
