import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const {id} = useParams();
  return (
    <div>
      <h1 className="bg-amber-600 text-2xl">User Params : {id} </h1>
    </div>
  );
}
