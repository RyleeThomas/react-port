import React from 'react';

function About() {
    return (
        <section>
            <div className='container'>
                <div className='center'>
                    <img className='headshot' src='/assets/imgs/About.jpg' alt='Headshot'></img>
                    <h2 id='about'>Hey There!</h2>
                    <p>Most days you can find me with a cup of coffee in one hand and a pencil in the other. I enjoy creating brand strategy 
                    and websites for startup companies. In my free time I am reading a book or creating new assets for a video game.</p>
                </div>
            </div>
        </section>
    );
}

export default About;