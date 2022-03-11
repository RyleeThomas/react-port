import React from 'react'; 
import Navigation from '../Navigation'; 

function Header(props) { 
    const {
        page, 
        currentPage, 
        setCurrentPage
    } = props;

    return( 
        <>
        <Navigation page={page} currentPage={currentPage} setCurrentPage={setCurrentPage}></Navigation>
        </>
    );
}

export default Header; 