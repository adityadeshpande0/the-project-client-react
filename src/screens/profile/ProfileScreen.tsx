import React from "react";
import { useGetUserProfileQuery } from "../../app/commonApiCall";

const ProfileScreen: React.FC = () => {
  const { data } = useGetUserProfileQuery({});
  console.log(data);
  return (
    <>
      <div>Profile Screen</div>
      <div>User Data: {JSON.stringify(data)}</div>
    </>
  );
};

export default ProfileScreen;
