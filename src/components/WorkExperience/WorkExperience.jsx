import React from 'react';
import './WorkExperience.css';
import { useNavigate } from 'react-router-dom';

function WorkExperience() {
  const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    }

    return (
        <section className="Work-experience">
        
         <article className='Work-experience-article'>
            <h2>Carta de experiencia laboral</h2>
            <figure>
                <img src="../../../images/experiencia.jpg" alt="" />
            </figure>
         </article>
        </section>
    )
}

export default WorkExperience;