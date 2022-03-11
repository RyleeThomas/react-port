import React from 'react'; 
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() { 

    return( 
        <section className='center'>
            <span><a className='icon' href='https://github.com/RyleeThomas'><FaGithub></FaGithub></a></span>
            <span><a className='icon' href='https://www.linkedin.com/in/rylee-thomas-27ba41150/'><FaLinkedin></FaLinkedin></a></span>
        </section>
    );
}

export default Footer;