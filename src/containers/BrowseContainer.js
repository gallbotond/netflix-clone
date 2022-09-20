import React, { useContext } from "react";
import { useState } from "react";
import { Header } from "../components";
import FooterContainer from "./FooterContainer";
import ProfilesContainer from "./ProfilesContainer";
import * as ROUTES from "../constants/routes";
import { FirebaseContext } from "../context/firebase";

export function BrowseContainer() {
  const [profile, setProfile] = useState({});
  const [category, setCategory] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const { firebase } = useContext(FirebaseContext);

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
          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Picture src={user.photoUrl} />
            <Header.Dropdown>
              <Header.Group>
                <Header.Picture src={user.photoUrl} />
                <Header.Link>{user.displayName}</Header.Link>
              </Header.Group>
              <Header.Group>
                <Header.Link onClick={() => firebase.auth().signOut()}>
                  Sign Out
                </Header.Link>
              </Header.Group>
            </Header.Dropdown>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCallout>Watch Joker Now</Header.FeatureCallout>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </Header.Text>

          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>
      <FooterContainer />
    </>
  ) : (
    <ProfilesContainer user={user} setProfile={setProfile} />
  );
}
