import React from 'react';
import { FaChevronRight } from "react-icons/fa";

function Projects(props) {
    const proTopic = [
        {
            name: 'Treddit',
            summary: 'This is an awesome app that helps connect people to hiking trails that are right for them. This app allows users to create accounts, add trails, and create comments for other trails.',
            img: '/assets/imgs/Treddit.jpg',
            link: 'https://treaddit.herokuapp.com/'
        },
        {
            name: 'Global Agenda',
            summary: 'As a busy student, I want a do-it-all agenda. One that allows to add and keep my tasks organized, gives me a weather update to better plan my day, and gives me daily global news to keep me up-to-date on current events.',
            img: '/assets/imgs/GlobalAgenda.jpg',
            link: 'https://erinnaschneider.github.io/global-agenda/ '
        },
        { 
            name: 'Team Profile Generator',
            summary: 'This is a command-line applicatio that accepts user input when prompted. When teammembers information is input, than an HTML file is generated that displays the roster using boostrap.',
            img: '/assets/imgs/TeamGen.jpg',
            link: 'https://github.com/RyleeThomas/TeamProfileGenerator'
        }
    ]

    return( 
        <div className='container'>
            {proTopic.map((topic) => (
                <div className='card' key={topic.name}>
                    <h3>{topic.name}</h3>
                    <img src={topic.img} alt=' Project Example'></img>
                    <p>{topic.summary}</p>
                    <a href={topic.link}>See Project <FaChevronRight></FaChevronRight></a>
                </div>
            ))}
        </div>
    )
}

export default Projects;