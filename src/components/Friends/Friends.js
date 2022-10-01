import React from "react";
import { useLoaderData } from "react-router-dom";
import Friend from "../Friend/Friend";

const Friends = () => {
  const friends = useLoaderData();
  console.log("🚀 ~ file: Friends.js ~ line 6 ~ Friends ~ friends", friends);

  return (
    <div>
      <h1>Friends</h1>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id}></Friend>
      ))}
    </div>
  );
};

export default Friends;
