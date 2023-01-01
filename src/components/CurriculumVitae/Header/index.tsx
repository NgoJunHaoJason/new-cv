import {
  Box,
  Center,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
} from "@hope-ui/solid";
import { AiOutlineLinkedin } from "solid-icons/ai";
import { BsFilePdf } from "solid-icons/bs";
import { HiOutlineMail } from "solid-icons/hi";
import { VsGithubAlt } from "solid-icons/vs";
import { Component } from "solid-js";

import ProfilePictureSrc from "src/assets/images/profile_picture.png";
import GitHubCorner from "src/components/CurriculumVitae/Header/GitHubCorner";
import CustomAnchor from "src/components/shared/CustomAnchor";

const Header: Component = () => {
  return (
    <Box>
      <GitHubCorner />
      <ProfilePicture />
      <Center>
        <Heading size="2xl">Jason Ngo</Heading>
      </Center>
      <Center>
        <CustomAnchor href="https://manifesto.softwarecraftsmanship.org/">
          Aspiring Software Craftsman
        </CustomAnchor>
      </Center>
      <br />
      <HeaderInformation />
    </Box>
  );
};

export default Header;

const ProfilePicture: Component = () => (
  <Center>
    <Image
      alt="profile picture"
      borderColor="lightgray"
      borderRadius="$sm"
      borderStyle="solid"
      borderWidth="thin"
      boxSize="$20"
      src={ProfilePictureSrc}
    />
  </Center>
);

const HeaderInformation: Component = () => (
  <Center>
    <List>
      <ListItem>
        <CustomAnchor href="mailto:njhjason@protonmail.com">
          <ListIcon as={HiOutlineMail} />
          njhjason@protonmail.com
        </CustomAnchor>
      </ListItem>

      <ListItem>
        <CustomAnchor href="https://github.com/NgoJunHaoJason">
          <ListIcon as={VsGithubAlt} />
          GitHub profile
        </CustomAnchor>
      </ListItem>

      <ListItem>
        <CustomAnchor href="https://www.linkedin.com/in/ngo-jun-hao-jason">
          <ListIcon as={AiOutlineLinkedin} />
          LinkedIn profile
        </CustomAnchor>
      </ListItem>

      <ListItem>
        <CustomAnchor href="./documents/ngo_jun_hao_jason_curriculum_vitae.pdf">
          <ListIcon as={BsFilePdf} />
          PDF version
        </CustomAnchor>
      </ListItem>
    </List>
  </Center>
);
