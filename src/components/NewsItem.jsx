import React from 'react';

function NewsItem({item}) {
  return (
    <div className='article'>
       <div className="article-image">
            <img className='rounded-t-lg' src={item.image} alt={item.title} />
            </div>
            <div className="article-title">
                    <h6>{item.title}</h6>
                </div>
                <p className="article-description">
                    {item.description}
                </p>
                <span className='f-back'>
                <i className="fas fa-light fa-circle-arrow-right fa-lg"></i>
                </span>
    </div>
  )
}

export default NewsItem
