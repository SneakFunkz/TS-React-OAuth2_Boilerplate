import React from "react";
import { useParams } from "react-router";

export default function UserProfile() {
  const { userID } = useParams();

  return <div>{userID}</div>;
}
