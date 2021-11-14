import React from 'react'
import img1 from "./image (1).png";
import img2 from "./image (2).png";
import img3 from "./image (3).png";
import img4 from "./image (4).png";
import img5 from "./image (5).jpg";
import img6 from "./image (6).jpg";


const DeveloperPage = () => {
    return (   
          
            <div>
                <h1 id="h1">Developer's Page</h1>
                <div>      
                    <img src={img4} className="image4" alt=""/> 
                    <div className="developer2">
                        <h1>Josiah Autor</h1>
                    </div>
                    <img src={img6} className="image6" alt=""/> 
                    <div className="developer1">
                        <h1>Jether DeLeon</h1>
                        <h5>Full Stack Developer </h5> 
                       
                    </div>
                    <img src={img3} className="image3" alt=""/> 
                    <div className="developer3">
                        <h1>Jan Nico Louise Gabo</h1>
                        <h5>Frontend Developer </h5> 
                    </div>
                    <img src={img2} className="image2" alt=""/> 
                    <div className="developer4">
                        <h1>Vernon Tamba</h1>
                        <h5>Frontend Developer </h5> 
                    </div>
                    <img src={img1} className="image1" alt=""/>
                    <div className="developer5">
                        <h1>Jared Ibanez</h1>
                        <h5>Frontend Developer </h5> 
                    </div>
                    <img src={img5} className="image5" alt=""/>
                    <div className="developer6">
                        <h1>Jervey Pesigan</h1>
                        <h5>Frontend Developer </h5> 
                    </div>
                    {/* <div className="line1">
                        <span class="line"></span>
                    </div> */}
                </div>
                
            </div>
        
    );
};

export default DeveloperPage