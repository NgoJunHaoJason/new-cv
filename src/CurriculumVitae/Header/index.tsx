import { Component } from "solid-js";
import { styled } from "solid-styled-components";

const Header: Component = () => {
  return (
    <div>
      <br />
      <CenterContent>
        <ProfilePicture src="src/assets/profile_picture.png" />
      </CenterContent>
      <CenterContent>
        <h1>Jason Ngo</h1>
      </CenterContent>
      <CenterContent>
        <h2>Aspiring Software Craftsman</h2>
      </CenterContent>
    </div>
  );
};

export default Header;

const CenterContent = styled.div`
  display: flex;
  justify-content: center;
`;

const ProfilePicture = styled.img`
  border: 1px solid lightgray;
  border-radius: 4px;
  width: 80px;
`;
