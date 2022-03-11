import React from 'react'; 
import { FaFileUpload } from "react-icons/fa";

function Resume() { 

    return( 
        <section className='center'>
            <div className='container'>
                <div className='card'>
                    <h3> Strategy </h3>
                    <p>Discovery and Research</p>
                    <p>User Experience</p>
                    <p>Brand Strategy</p>
                    <p>Content Strategy</p>
                </div>
                <div className='card'>
                    <h3> Branding and Design </h3>
                    <p>Brand Development</p>
                    <p>Logo Design</p>
                    <p>Brand Style Guides</p>
                    <p>Typography</p>
                </div>
                <div className='card'>
                    <h3> Digital Development </h3>
                    <p>UI/UX</p>
                    <p>Web Applications</p>
                    <p>Animation</p>
                    <p>Photography</p>
                </div>
            </div>
            <div>
                <p> Download my Resume <a href={`/assets/files/resume.pdf`}><FaFileUpload></FaFileUpload></a></p>
            </div>
        </section>
    );
}

export default Resume;