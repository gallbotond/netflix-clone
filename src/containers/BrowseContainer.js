import React from "react";
import { useState } from "react";
import { Header } from "../components";
import FooterContainer from "./FooterContainer";
import ProfilesContainer from "./ProfilesContainer";
import * as ROUTES from "../constants/routes";

export function BrowseContainer() {
  const [profile, setProfile] = useState({});
  const [category, setCategory] = useState({});
  const [loading, setLoading] = useState(true);

  const user = {
    displayName: "Ken",
    photoUrl: "1",
  };

  return profile.displayName ? (
    <>
      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo
              to={ROUTES.HOME}
              src="/images/misc/logo.svg"
              alt="Netflix"
            />
            <Header.Link
              active={category === "series" ? "true" : "false"}
              onClick={() => setCategory("series")}
            >
              Series
            </Header.Link>
            <Header.Link
              active={category === "films" ? "true" : "false"}
              onClick={() => setCategory("films")}
            >
              Films
            </Header.Link>
          </Header.Group>
        </Header.Frame>
      </Header>
      <FooterContainer />
    </>
  ) : (
    <ProfilesContainer user={user} setProfile={setProfile} />
  );
}
