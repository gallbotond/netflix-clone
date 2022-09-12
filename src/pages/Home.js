import React from "react";
import JumbotronContainer from "../containers/JumbotronContainer";
import FooterContainer from "../containers/FooterContainer";
import FAQsContainer from "../containers/FAQsContainer";

export default function Home() {
  return (
    <>
      <JumbotronContainer />
      <FAQsContainer />
      <FooterContainer />
    </>
  );
}
