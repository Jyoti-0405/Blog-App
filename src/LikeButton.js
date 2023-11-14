// src/LikeButton.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { like } from './likeSlice';

const LikeButton = () => {
  const dispatch = useDispatch();
  const { count, liked } = useSelector((state) => state.like);

  return (
    <div>
      <button onClick={() => dispatch(like())} style={{ backgroundColor: liked ? 'green' : 'gray' }}>
        {liked ? 'Unlike' : 'Like'}
      </button>
      <p>Likes: {count}</p>
    </div>
  );
};

export default LikeButton;
