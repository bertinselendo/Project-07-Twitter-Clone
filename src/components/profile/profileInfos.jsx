import React from "react";
import ProfilInfosIcons from "../../templates/icons/profilInfosIcons";

function ProfileInfos({infosData}) {
  const userInfosData = infosData;

  return (
    <>
      {userInfosData.map((profileInfo, index) => (
        <div key={index} className="profile-info">
          <span>
            <ProfilInfosIcons icon={profileInfo.nom} />
          </span>
          <span>
            {profileInfo.isLink ? (
              <a href={"//" + profileInfo.text} target="_blank">
                {profileInfo.text}
              </a>
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
