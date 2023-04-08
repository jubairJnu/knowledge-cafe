import React from 'react';
import './Post.css'
const Post = (props) => {
  const { name, picture, photo, time, title } = props.post
  return (
    <div className='post'>
      <img src={picture} alt="" />
      <div className="author-container">
        <div className="author">
          <img src={photo} alt="" />
          
        </div>
        <div className="author-title">
            <h3>{name}</h3>
            <p>{time}</p>
          </div>
        <p className='read-time'>5 min to read</p>
      </div>
      <h1>{title}</h1>
      <span className='hasetag'>#begginer</span>
        <span className='hasetag'>#programmer</span>
        <p className='mark'>Mark as read</p>

    </div>
  );
};

export default Post;