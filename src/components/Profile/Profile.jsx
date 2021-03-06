  import React from "react";
import MyPosts from "./Mypost/MyPosts";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src="https://pbs.twimg.com/profile_banners/3363830489/1436257648/1500x500" />
      </div>
      <div>ava + description</div>
      <MyPosts/>
    </div>
  );
};

export default Profile;
