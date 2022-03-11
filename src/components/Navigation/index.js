import React from 'react'; 

function Navigation(props) {

    const {
        currentPage, 
        setCurrentPage
    } = props;

    return( 
        <nav>
            <ul>
                <li id='home'>Rylee Thomas</li>
                <li id='About'>
                    {currentPage === 'About' ? 
                    <span id='About' className='active' onClick={(e) => {setCurrentPage(e.target.id)}} >About</span> :
                    <span id='About' onClick={(e) => {setCurrentPage(e.target.id)}} >About</span>
                    }
                </li>
                <li id='Projects'>
                    {currentPage === 'Projects' ? 
                        <span id='Projects' className='active' onClick={(e) => {setCurrentPage(e.target.id)}} >Projects</span> :
                        <span id='Projects' onClick={(e) => {setCurrentPage(e.target.id)}} >Projects</span>
                    }
                </li>
                <li id='Contact'>
                    {currentPage === 'Contact' ? 
                        <span id='Contact' className='active' onClick={(e) => {setCurrentPage(e.target.id)}} >Contact</span> :
                        <span id='Contact' onClick={(e) => {setCurrentPage(e.target.id)}} >Contact</span>
                    }
                </li>
                <li id='Resume'>
                    {currentPage === 'Resume' ? 
                        <span id='Resume' className='active' onClick={(e) => {setCurrentPage(e.target.id)}} >Resume</span> :
                        <span id='Resume' onClick={(e) => {setCurrentPage(e.target.id)}} >Resume</span>
                    }
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;