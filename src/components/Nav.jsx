import React from 'react';

function Nav() {
  return (
    <div className='Top-Bar'>
    
     <nav className="flex">
     <h1 className='brand'><em>Aloha</em></h1>
  {[
    ['Home', '/home'],
    ['Surfing', '/surfing'],
    ['Hula', '/hula'],
    ['Vulcano', '/vulcano'],
  ].map(([title, url],index) => (
    <a key={index} href={url} className="nav-item rounded-lg ms-0 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
  ))}
  
</nav>
      <button className="book btn ">Book a trip</button>
      
      
    

    </div>
  )
}

export default Nav;
