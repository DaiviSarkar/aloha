import React, { useState } from 'react'

function SingleOption({option}) {
    const [titles,setTitle] = useState([]);
    const [show, setShow] = useState(false);

function handleClick(){
    const activity = option.activities;
    console.log(activity);
    setTitle(activity);
    if(show == true){
    setShow(false);
  }else{
  setShow(true);
  }
}


  return (
    <div className="cat-op">
    <p className='op-name'>{option.name}
    <button onClick={handleClick}><i className="fas fa-sharp fa-solid fa-arrow-right"></i></button></p>
    {show && 
        (titles.map((title)=>(
            <div className='title-box'>{title.title}</div>) ) ) 
            
          }
</div>
  )
}

export default SingleOption;
