import React, { useEffect, useState } from "react";
function Github() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://api.github.com/users/Riteshawadhiya9")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {" "}
      <div className="bg-gray-700 text-white p-6 rounded-2xl shadow-lg flex items-center space-x-6">
        {" "}
        {/* Profile Image */}{" "}
        <img
          src={data.avatar_url}
          alt="GitHub Profile"
          className="w-32 h-32 rounded-full border-4 border-white shadow-md"
        />{" "}
        {/* Followers Info */}{" "}
        <div className="text-center">
          {" "}
          <h1 className="text-3xl font-semibold mb-2">GitHub Profile</h1>{" "}
          <p className="text-xl">
            {" "}
            Followers: <span className="font-bold">{data.followers}</span>{" "}
          </p>{" "}
          <p className="text-sm text-gray-300 mt-2">@{data.login}</p>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
export default Github;
