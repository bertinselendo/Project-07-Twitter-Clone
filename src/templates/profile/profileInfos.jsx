import React from "react";
import ProfilInfosIcons from "../icons/profilInfosIcons";
import UserServices from "../../models/userServices";

function ProfileInfos() {
  const userInfosData = UserServices.getUserInfosData();

  return (
    <>
      {userInfosData.map((profileInfo) => (
        <div className="profile-info">
          <span>
            <ProfilInfosIcons icon={profileInfo.nom} />
          </span>
          <span>
            {profileInfo.isLink ? (
              <a href={"//" + profileInfo.text} target="_blank">{profileInfo.text}</a>
            ) : (
              profileInfo.text
            )}
          </span>
        </div>
      ))}
    </>
  );
}

export default ProfileInfos;
