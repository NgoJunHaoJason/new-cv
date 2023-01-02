import { Component } from "solid-js";
import ProfilePictureSrc from "src/assets/images/profile_picture.png";
import GitHubCorner from "src/components/CurriculumVitae/Header/GitHubCorner";
import HeaderInformation from "src/components/CurriculumVitae/Header/HeaderInformation";
import ProfilePicture from "src/components/CurriculumVitae/Header/ProfilePicture";
import Anchor from "src/components/shared/Anchor";
import Center from "src/components/shared/Center";

const Header: Component = () => (
  <div data-testid={headerTestId}>
    <Anchor href="https://github.com/NgoJunHaoJason/NgoJunHaoJason.github.io">
      <GitHubCorner />
    </Anchor>

    <Center>
      <ProfilePicture alt="profile picture" src={ProfilePictureSrc} />
    </Center>

    <Center>
      <h1>Jason Ngo</h1>
    </Center>

    <Center>
      <Anchor href="https://manifesto.softwarecraftsmanship.org/">
        <h3>Aspiring Software Craftsman</h3>
      </Anchor>
    </Center>

    <br />
    <Center>
      <HeaderInformation />
    </Center>
  </div>
);

export default Header;

export const headerTestId = "header";
