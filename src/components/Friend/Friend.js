import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Friend.css";

const Friend = ({ friend: { id, name, username, email } }) => {
  const navigate = useNavigate();
  const handleShowDetails = () => {
    navigate(`/friend/${id}`);
  };
  return (
    <div className="friend">
      <h3>{name}</h3>
      <p>{email}</p>
      <Link to={`/friend/${id}`}>{username}</Link>
      <button onClick={handleShowDetails}>Show details</button>
    </div>
  );
};

export default Friend;
