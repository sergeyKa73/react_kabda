import React from "react";
import classes from "./MyPosts.module.css";
import Posts from "./Posts/Posts";

const MyPosts = () => {
  return (      
      <div>
        My posts
        <div>
         <textarea></textarea>
         <button>Add post</button>

        </div>
        <div className={classes.posts}>
          <Posts/>
          <Posts/>

        </div>
        </div>
  );
};

export default MyPosts;
