import React from "react";
import { Link } from "react-router-dom";
import "./Friend.css";

const Friend = ({ friend: { id, name, username, email } }) => {
  return (
    <div className="friend">
      <h3>{name}</h3>
      <p>{email}</p>
      <Link to={`/friend/${id}`}>{username}</Link>
    </div>
  );
};

export default Friend;
