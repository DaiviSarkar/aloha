import React from 'react';
import profilePic from '../Image/Ellipse 10.png';

function Nameplate() {
  return (
    <div className='cata-box-2'>
         <h2 className='cata-title-2'>Travel Guide</h2>
         <div className="namePlate">
            <h3 className='name'>
            Hadwin Malone
            </h3>
            <p className='since'>
            Guide since 2012
            </p>
            <button className='contact'>Contact</button>

         </div>
         <div>
            <img className='p-pic absolute mt-32 mx-96 ' src={profilePic} alt="Profile Pic"></img>
         </div>
         </div>
  )
}

export default Nameplate
