import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import './Blog.css'

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [marked, setMarked] = useState([]);
  const[readTime, setReadTime] = useState(0)

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])


  // eventhandler
  const handleBookmark = (bookMark) => {
    const previous = [...marked];
    if (!previous.includes(bookMark)) {
      const newMarked = [...marked, bookMark];
      setMarked(newMarked);
      console.log(newMarked);
    } else {
      alert("Already Added")
    }
  }

  const handleAddMin = (time) => {
    console.log(time, "hello");
    const newTime = readTime + time;
    setReadTime(newTime);
}


  return (
    <div className="blog-container">

      <div>
        {
          posts.map(post => <Post
            key={post.id}
            post={post}
            handleBookmark={handleBookmark}
            handleAddMin={handleAddMin}
          ></Post>)
        }
      </div>
      <div className="bookmark">
        {/* <Bookmark></Bookmark> */}

        <div className='bookmark-container'>
          <div className="spent-time">
            <h3>Spent Time On Read: {readTime}  min</h3>
          </div>
          <div className="bookmark-blog">
            <h3>Bookmarked Blogs : {marked.length} </h3>


            {
              marked.map(title => {
             
                return <ul><li className=' fs-4 px-4 '>{title.title}</li></ul>
              })
            }

          </div>
        </div>

      </div>
    </div>
  );
};

export default Blog;