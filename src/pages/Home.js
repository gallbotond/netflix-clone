import React from "react";
import JumbotronContainer from "../containers/JumbotronContainer";
import FooterContainer from "../containers/FooterContainer";
import FAQsContainer from "../containers/FAQsContainer";
import HeaderContainer from "../containers/HeaderContainer";
import OptForm from "../components/opt-form";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <OptForm>
          <OptForm.Input placeholder="Email Address" />
          <OptForm.Button>Try it now</OptForm.Button>
          <OptForm.Break />
          <OptForm.Text>
            Ready to watch? Enter your email to create or restart your
            membership.
          </OptForm.Text>
        </OptForm>
      </HeaderContainer>
      <JumbotronContainer />
      <FAQsContainer />
      <FooterContainer />
    </>
  );
}
