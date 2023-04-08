import React from 'react';

const Post = (props) => {
  const {name}=props.post
  return (
    <div>
      post is comming : {name}
    </div>
  );
};

export default Post;