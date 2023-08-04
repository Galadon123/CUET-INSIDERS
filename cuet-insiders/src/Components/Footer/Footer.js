import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone ,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className="bg">
            <div className="footer">
                <div>
                   <h1 className='text-2xl font-bold mb-4 underline'>About Us</h1>
                   <p>Common Platform for Academic ,Higher Studey and Job opportunity</p><br />
                   <p><FontAwesomeIcon icon={faPhone} /> Phone : +8801333443434</p><br />
                   <p><FontAwesomeIcon icon={faPhone} /> Tele : +333443434</p><br />
                    <p><FontAwesomeIcon icon={faEnvelope} /> E-mail :cuet-insiders@gmail.com</p>
                </div>
                <div>
                    <h3 className='text-2xl font-bold mb-4 underline'>Our Services</h3>
                     <p >One to One mentorship</p><br />
                     <p>Live Seminar</p><br />
                     <p>Job news</p><br />
                     <p>Academic instruction</p>
                    
                </div>
                
            </div>
           <p className='text-center'>&copy; Copyright 2023 | CUET-INSIDERS</p>
        </div>
    );
};

export default Footer;