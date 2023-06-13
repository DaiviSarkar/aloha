import React, { useState , useEffect} from 'react';
import NewsGrid from './NewsGrid';


function Adver() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/v1/highlights')
    .then(res => res.json())
    .then(data => setItems(data))
   },[])

  return (
    <div>
    <h2 className='Adv-head'>Highlights</h2>
    <div className='news'>
    <NewsGrid items={items} />
    </div>
    </div>
  )
}

export default Adver;
