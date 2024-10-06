import "./feedpage.css";

import { useState } from "react";
import Post from "../components/post";

function Feedpage() {
  const [feed, setFeed] = useState([
    {
      id: 1,
      user: "John Doe",
      profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
      postDate: "2024-09-16T08:00:00Z",
      content: "Just went for a morning run, feeling great!",
      likes: 120,
      comments: [
        { user: "Jane Smith", text: "Great job!" },
        { user: "Mike Johnson", text: "Keep it up!" },
      ],
    },
    {
      id: 2,
      user: "Alice Brown",
      profilePicture: "https://randomuser.me/api/portraits/women/2.jpg",
      postDate: "2024-09-15T18:30:00Z",
      content: "Had an amazing dinner at the new Italian place in town.",
      likes: 85,
      comments: [
        { user: "Emily Davis", text: "The food is fantastic there!" },
        { user: "Chris Lee", text: "I need to try it soon!" },
      ],
    },
    {
      id: 3,
      user: "David Green",
      profilePicture: "https://randomuser.me/api/portraits/men/3.jpg",
      postDate: "2024-09-14T14:45:00Z",
      content: "Exploring the mountains this weekend. Nature is beautiful!",
      likes: 150,
      comments: [
        { user: "Laura White", text: "Wow, looks amazing!" },
        { user: "Robert Brown", text: "Enjoy your trip!" },
      ],
    },
    {
      id: 4,
      user: "Emma Wilson",
      profilePicture: "https://randomuser.me/api/portraits/women/4.jpg",
      postDate: "2024-09-13T10:20:00Z",
      content: "Starting a new book today. Can't wait to dive in!",
      likes: 60,
      comments: [
        { user: "Sophia Taylor", text: "Which book is it?" },
        { user: "James Miller", text: "Happy reading!" },
      ],
    },
    {
      id: 5,
      user: "Michael Brown",
      profilePicture: "https://randomuser.me/api/portraits/men/5.jpg",
      postDate: "2024-09-12T09:15:00Z",
      content: "Working on a new project. Feeling productive!",
      likes: 200,
      comments: [
        { user: "Olivia Smith", text: "Good luck!" },
        { user: "Noah Martin", text: "You got this!" },
      ],
    },
    {
      id: 6,
      user: "Sarah Johnson",
      profilePicture: "https://randomuser.me/api/portraits/women/6.jpg",
      postDate: "2024-09-11T17:05:00Z",
      content: "Had a fantastic workout session today!",
      likes: 95,
      comments: [
        { user: "Ava Anderson", text: "You’re on fire!" },
        { user: "Mason Davis", text: "Keep pushing!" },
      ],
    },
    {
      id: 7,
      user: "Daniel Williams",
      profilePicture: "https://randomuser.me/api/portraits/men/7.jpg",
      postDate: "2024-09-10T22:30:00Z",
      content: "Caught a beautiful sunset by the beach.",
      likes: 180,
      comments: [
        { user: "Liam Martinez", text: "Stunning view!" },
        { user: "Ella Garcia", text: "Wish I was there!" },
      ],
    },
    {
      id: 8,
      user: "Olivia Moore",
      profilePicture: "https://randomuser.me/api/portraits/women/8.jpg",
      postDate: "2024-09-09T07:55:00Z",
      content: "Baking cookies for the first time, wish me luck!",
      likes: 70,
      comments: [
        { user: "Isabella Thomas", text: "I can smell them already!" },
        { user: "Ethan Lee", text: "Save some for me!" },
      ],
    },
    {
      id: 9,
      user: "James Hall",
      profilePicture: "https://randomuser.me/api/portraits/men/9.jpg",
      postDate: "2024-09-08T13:15:00Z",
      content: "Learning a new programming language. Exciting!",
      likes: 130,
      comments: [
        { user: "Lucas Walker", text: "Which one?" },
        { user: "Mia Young", text: "Good luck!" },
      ],
    },
    {
      id: 10,
      user: "Sophia King",
      profilePicture: "https://randomuser.me/api/portraits/women/10.jpg",
      postDate: "2024-09-07T15:40:00Z",
      content: "Trying my hand at painting. It’s therapeutic!",
      likes: 90,
      comments: [
        { user: "Benjamin Wright", text: "Can't wait to see it!" },
        { user: "Charlotte Hill", text: "Art is always a good idea!" },
      ],
    },
    {
      id: 11,
      user: "Henry Scott",
      profilePicture: "https://randomuser.me/api/portraits/men/11.jpg",
      postDate: "2024-09-06T16:00:00Z",
      content: "Enjoying a peaceful evening with a cup of tea.",
      likes: 60,
      comments: [
        { user: "Victoria Lewis", text: "Sounds relaxing!" },
        { user: "Oliver Harris", text: "Perfect evening!" },
      ],
    },
    {
      id: 12,
      user: "Amelia Robinson",
      profilePicture: "https://randomuser.me/api/portraits/women/12.jpg",
      postDate: "2024-09-05T20:10:00Z",
      content: "Had a blast at the concert last night!",
      likes: 110,
      comments: [
        { user: "Alexander Clark", text: "Who performed?" },
        { user: "Lily Rodriguez", text: "So jealous!" },
      ],
    },
    {
      id: 13,
      user: "Samuel Young",
      profilePicture: "https://randomuser.me/api/portraits/men/13.jpg",
      postDate: "2024-09-04T11:30:00Z",
      content: "Visited the new art gallery. So much inspiration!",
      likes: 140,
      comments: [
        { user: "Elijah Martinez", text: "I need to check it out!" },
        { user: "Zoe Turner", text: "Art galleries are the best!" },
      ],
    },
    {
      id: 14,
      user: "Emily Carter",
      profilePicture: "https://randomuser.me/api/portraits/women/14.jpg",
      postDate: "2024-09-03T09:50:00Z",
      content: "Exploring new recipes this week. Any suggestions?",
      likes: 75,
      comments: [
        { user: "Sophie Adams", text: "Try a Thai dish!" },
        { user: "Jack Nguyen", text: "How about lasagna?" },
      ],
    },
    {
      id: 15,
      user: "Thomas Evans",
      profilePicture: "https://randomuser.me/api/portraits/men/15.jpg",
      postDate: "2024-09-02T18:25:00Z",
      content: "Watching a classic movie marathon tonight.",
      likes: 100,
      comments: [
        { user: "Chloe Perez", text: "Sounds like fun!" },
        { user: "Daniel Morgan", text: "What's on your list?" },
      ],
    },
    {
      id: 16,
      user: "Lily Stewart",
      profilePicture: "https://randomuser.me/api/portraits/women/16.jpg",
      postDate: "2024-09-01T07:45:00Z",
      content: "Starting a new workout routine. Let’s do this!",
      likes: 110,
      comments: [
        { user: "Nathan Bell", text: "You've got this!" },
        { user: "Madison Green", text: "Go, Lily!" },
      ],
    },
    {
      id: 17,
      user: "William Nelson",
      profilePicture: "https://randomuser.me/api/portraits/men/17.jpg",
      postDate: "2024-08-31T12:10:00Z",
      content: "Enjoying a quiet day at the park.",
      likes: 55,
      comments: [
        { user: "Scarlett Flores", text: "Lovely!" },
        { user: "Aiden Brooks", text: "Wish I could join!" },
      ],
    },
    {
      id: 18,
      user: "Mia Baker",
      profilePicture: "https://randomuser.me/api/portraits/women/18.jpg",
      postDate: "2024-08-30T19:00:00Z",
      content: "Learning to play the guitar. Challenging but fun!",
      likes: 95,
      comments: [
        { user: "Luna Hernandez", text: "You go, girl!" },
        { user: "Leo Robinson", text: "Let's jam sometime!" },
      ],
    },
    {
      id: 19,
      user: "Jackson Perez",
      profilePicture: "https://randomuser.me/api/portraits/men/19.jpg",
      postDate: "2024-08-29T10:30:00Z",
      content: "Weekend hiking trip planned. Can’t wait!",
      likes: 130,
      comments: [
        { user: "Aurora Evans", text: "Sounds exciting!" },
        { user: "Gabriel Lewis", text: "Stay safe!" },
      ],
    },
    {
      id: 20,
      user: "Grace Collins",
      profilePicture: "https://randomuser.me/api/portraits/women/20.jpg",
      postDate: "2024-08-28T15:50:00Z",
      content: "Decorating my home office. Suggestions welcome!",
      likes: 105,
      comments: [
        { user: "Hazel Scott", text: "Plants always add a nice touch!" },
        { user: "Carter Lee", text: "How about some motivational posters?" },
      ],
    },
  ]);

  

  return (
    <>
        
      <div className="container">
      <Post />
        {/* Input section for a new post */}
        

        {/* Displaying the feed */}
        <div className="post">
          {feed.map((post) => {
            return (
              <div className="post-feed" key={post.id}>
                {/* User and Post Content */}
                <div className="post-container">
                  <div className="user">
                    <img
                      src={post.profilePicture}
                      alt="Profile-pic"
                      className="profile"
                    />
                    <p id="user">{post.user}</p>
                  </div>
                  <p>{post.content}</p>
                </div>

                {/* Reaction buttons */}
                <div className="button-for-reaction">
                  <button>Like</button>
                  <button>Comment</button>
                  <button>Share</button>
                </div>

                {/* Displaying comments */}
                <div className="comment">
                  {post.comments.map((comment, index) => (
                    <div key={index}>
                      <p>
                        <strong>{comment.user}</strong>: {comment.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Feedpage;
