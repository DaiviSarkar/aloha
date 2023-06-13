import React, { useEffect, useState } from 'react'
import SingleOption from './SingleOption';

function Catagories() {
   const [options, setOptions] = useState([]);

   useEffect(()=> {
    fetch('/v1/categories')
    .then(res => res.json())
    .then(data => setOptions(data))
   },[])
  
   console.log(options);
  
  
  
    return (
    <div className='cata-box-1'>
    <h2 className='cata-title-1'>Catagories</h2>
    <div className='grid grid-cols-1 grid-cat'>
    {options.map((option,i)=>(
    <SingleOption key={i} option={option}  />
    )
        )}
    </div>
    
    
    </div>
  )
}

export default Catagories;
