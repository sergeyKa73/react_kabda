import React from "react";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src="https://pbs.twimg.com/profile_banners/3363830489/1436257648/1500x500" />
      </div>
      <div>ava + description</div>
      <div>My posts</div>
      <div>New posts</div>
      <div className={classes.posts}>
        <div className={classes.item}>Post 1</div>
        <div className={classes.item}>Post 2</div>
      </div>
    </div>
  );
};

export default Profile;
