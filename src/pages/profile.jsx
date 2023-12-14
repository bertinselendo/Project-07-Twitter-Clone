import React from "react";
import { useParams } from "react-router-dom";
import ProfileHeader from "../components/profile/profileHeader";
import ProfileInfos from "../components/profile/profileInfos";
import UsersServices from "../models/usersServices";
import ProfileContent from "../components/profile/profileContent";
import Profile404 from "../components/profile/profile404";

function Profile() {
  const { userName } = useParams("userName");

  const users = UsersServices;
  const user = users.getUserByUserName(userName);

  console.log(user);

  return user ? (
    <>
      <ProfileHeader user={user} />
      <ProfileContent user={user} />
    </>
  ) : (
    <Profile404 userName={userName} />
  );
}

export default Profile;
