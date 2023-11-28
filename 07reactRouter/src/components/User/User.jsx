import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
  return (
    <div className="p-4 text-3xl text-white bg-gray-600">user: {userid}</div>
  );
};
export default User;
