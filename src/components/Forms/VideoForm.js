import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './VideoForm.css';


export default function VideoForm() {
          const[VideoLink,setVideoLink]=useState();

          const navigate= useNavigate();
    const handleVideoForm=(e)=>{
        e.preventDefault();
       navigate('/availibilyform');
    }
    return(
        <div>
     <p className='heading'>Video introduction</p>
     <form onSubmit={handleVideoForm} id='videoform'>

     <div className="row">
            <div className="col1">
                <p className="photoheading">Record your video</p>
                <p className='grey'>Now introduce yourself to students. You can watch and re-record your intro before you submit it.</p>
            
            <div className="video">
            <img src="images/Tech.jpg" alt="video" />
           <button className="submitbtn"  id='videobtn'><i className='fas fa-video'></i> Start recording</button>
            </div>

            <label htmlFor="name">Or paste a link to your video</label>
            <p className="grey">Learn how to upload videos to <small>youtube</small> and <small>vimeo</small>"</p>
            <input
              type="link"
              name="videolink"
              placeholder="www.youtube.com/watch/?v.JHKLJB"
              value={VideoLink}
              onChange={(e) => setVideoLink(e.target.value)}
              required
              id='videolink'
            />


             <div className="certificate">
              <h4> <i className='fas fa-image'></i>  Make your video more apealing</h4>
                <p className='grey'>Upload a custom image to use as a video thumbnail. <br/>Don't worry if you dont have one, we'll use the preview above.</p>
                <div className='photobtn'>
                <input type="file" accept="image/png, image/jpg" className="submitbtn"  /> 
            <span className='grey'>JPG or PNG format, Maximum size of 20MB</span>
           </div>
             </div>

           <button className="submitbtn"  id='backbtn' onClick={()=> navigate('/descriptionform')}>Back</button>
           <button className="submitbtn"  >Next</button>

            </div>
            <div className="col2">
            <p className="photoheading">Tips for a great video</p>
                 
                <div className="tips">
                    <h4>Technical</h4>
                <p className='grey'><i className='fas fa-check-circle'></i> Keep your video between 30 secs to 2 mins long</p>
                <p className='grey'><i className='fas fa-check-circle'></i> Record in a horizontal mode</p>
                <p className='grey'><i className='fas fa-check-circle'></i> Position the camera at eye level</p>
                <p className='grey'><i className='fas fa-check-circle'></i> Use neutral lighting and background</p>
                <p className='grey'><i className='fas fa-check-circle'></i> Your face and eyes are fully visible</p>
                <p className='grey'><i className='fas fa-check-circle'></i> Avoid logos, links or contact information</p>
                <p className='grey'><i className='fas fa-check-circle'></i> No slideshow or presentation </p>
                

                <h4>Content</h4>
                <p className='grey'><i className='fas fa-check-circle'></i> Greet your students warmly</p>
                <p className='grey'><i className='fas fa-check-circle'></i> Highlight any teaching certification</p>
                <p className='grey'><i className='fas fa-check-circle'></i> Present your tutoring experience</p>
                <p className='grey'><i className='fas fa-check-circle'></i> Invite students to book a trial lesson</p>


                <h4>Examples</h4>
                <p className='grey'><i className='fas fa-video'></i>  Example 1</p>
                </div>
            </div>
        </div>
        </form>
        </div>
    );
}