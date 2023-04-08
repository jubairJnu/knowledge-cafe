import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import './Blog.css'

const Blog = () => {
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])
  return (
    <div className="blog-container">

    <div>
     {
      posts.map(post => <Post
      post = {post}
      ></Post>)
     }
    </div>
    <div className="bookmark">
      <h5>this is bookmark</h5>
    </div>
    </div>
  );
};

export default Blog;