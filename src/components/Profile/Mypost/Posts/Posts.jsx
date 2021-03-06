import React from "react";
import classes from "./Posts.module.css";

const Posts = () => {
  return (
    <div className={classes.item}>
      <img src='https://www.pngjoy.com/pngm/65/1425972_lions-logo-westminster-high-school-lions-transparent-png.png'/>
      Post 1
      <div>
       <span>like</span> 
      </div>
      
    </div>
  );
};

export default Posts;
