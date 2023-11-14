// src/LikeButton.js
import React, { useState } from 'react';

const LikeButton = () => {
  const [liked, setLiked ] = useState(false);
  const handleLikeClick =()=> {
    setLiked(!liked);
  }
  
  return (
    <div className='margin-edit'>
      <button className='btn btn-primary' onClick={handleLikeClick} style={{ backgroundColor: liked ? 'green' : 'blue' }}>
        {liked ? 'Unlike' : 'Like'}
      </button>
    </div>
  );
};

export default LikeButton;
