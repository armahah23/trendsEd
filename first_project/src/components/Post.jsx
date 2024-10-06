import { useState } from 'react';
// import '../pages/feedpage.css';
import './post.css';
import add_img from "../assets/add_img.png";
import location from "../assets/location.png";
import profile from "../assets/profile.png";

function Post() {

    const [newPost, setNewPost] = useState("Hi there!");

  const handlepost = () => {};

  return <>
    <div className="post-feed">
          <div className="icons">
            <img src={profile} alt="location" className="profile" />
            <img src={add_img} alt="add-img" className="icon" />
            <img src={location} alt="location" className="icon" />
          </div>
          <input
            type="text"
            placeholder="What's on your mind?"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          />
          <button
            onClick={() => {
              handlepost;
            }}
          >
            Post
          </button>
        </div>
  </>;
}

export default Post;
