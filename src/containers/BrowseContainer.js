import React from "react";
import { useState } from "react";
import FooterContainer from "./FooterContainer";
import ProfilesContainer from "./ProfilesContainer";

export function BrowseContainer() {
  const [profile, setProfile] = useState({});

  const user = {
    displayName: "Ken",
    photoUrl: "1",
  };

  return profile.displayName ? (
    <>
      <p>BrowseContainer</p>
      <FooterContainer />
    </>
  ) : (
    <ProfilesContainer user={user} setProfile={setProfile} />
  );
}
