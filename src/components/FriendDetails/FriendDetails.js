import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetails = () => {
  const { name, id, email, username } = useLoaderData();

  return (
    <div>
      <h3>Details of: {name}</h3>
      <h5>Email: {email}</h5>
    </div>
  );
};

export default FriendDetails;
