import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Container, Background, Logo, ButtonLink } from "../header/styles/header";

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};


Header.FeatureCallout = function HeaderFeatureCallout({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};


Header.PlayButton = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

