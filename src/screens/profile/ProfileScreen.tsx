import React from "react";
import {
 
  useGetUserProfileQuery,
} from "../../app/commonApiCall";
import { useSelector } from "react-redux";
import { selectAuthToken } from "../authentication/authSlice";

const ProfileScreen: React.FC = () => {
  const { data, isLoading, isError } = useGetUserProfileQuery({});
  const token = useSelector(selectAuthToken);
  console.log("Token:", token);
  console.log("Profile Data:", data);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Failed to load profile</div>;

  return (
    <>
      <div>Profile Screen</div>
      <div>User Data:</div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

export default ProfileScreen;
