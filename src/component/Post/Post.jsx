import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './Post.css'
const Post = ({handleBookmark,handleAddMin, post}) => {
  const {name, picture, photo, date,time, title } =post;
  return (
    <div className='post'>
      <img  src={picture} alt="" />
      <div className="author-container">
        <div className="author">
          <img src={photo} alt="" />
          
        </div>
        <div className="author-title">
            <h3>{name}</h3>
            <p>{date}</p>
          </div>
        <p className='read-time'>{time} min to read</p>
        <button onClick={() => {handleBookmark(post)}}className='bookmar-icon'><FontAwesomeIcon icon={faBookmark}/> </button>
      </div>
      <h1>{title}</h1>
      <span className='hasetag'>#begginer</span>
        <span className='hasetag'>#programmer</span>
        <div>
          <button onClick={()=>{handleAddMin(time)} } >Mark as read</button>
        </div>

    </div>
  );
};

export default Post;