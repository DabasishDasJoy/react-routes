import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const FriendDetails = () => {
  const { name, id, email, username } = useLoaderData();
  const navigate = useNavigate();
  const handleFindAuthor = () => {
    navigate(`/friend/${6}`);
  };

  return (
    <div>
      <h3>Details of: {name}</h3>
      <h5>Email: {email}</h5>
      <button onClick={handleFindAuthor}>Go to author</button>
    </div>
  );
};

export default FriendDetails;
