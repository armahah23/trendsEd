import "./post.css";

function Post({user, profilePicture, postDate, content, likes, comments}) {

    

  return (
    <>
      <div className="container">
        <div className="profile">
          <img src={profilePicture} alt="profile-pic" />
          <div className="profile-card">
          <h3>{user}</h3>
          <p>time</p>
          </div>
        </div>
        <div className="post">
          <p>Post Description</p>
          <img
            src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
            alt="post"
          />
          
        </div>
        <div className="details">
          <p>likes</p>
        </div>
        <div className="button">
          <button>Like</button>
          <button>Comment</button>
          <button>Share</button>
        </div>
        <div className="comment-container">
          <p>This is new Comment</p>
        </div>
      </div>
    </>
  );
}

export default Post;
