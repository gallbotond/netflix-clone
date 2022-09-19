import React from "react";
import { useState } from "react";
import { Header } from "../components";
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

      <Header>
        <Header.Feature>
          <Header.FeatureCallout>Watch Joker Now</Header.FeatureCallout>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </Header.Text>
        </Header.Feature>
        <Header.PlayButton>Play</Header.PlayButton>
      </Header>
      <FooterContainer />
    </>
  ) : (
    <ProfilesContainer user={user} setProfile={setProfile} />
  );
}
