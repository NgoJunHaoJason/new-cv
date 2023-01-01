import {
  Box,
  Center,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@hope-ui/solid";
import { AiOutlineLinkedin } from "solid-icons/ai";
import { BsFilePdf } from "solid-icons/bs";
import { HiOutlineMail } from "solid-icons/hi";
import { VsGithubAlt } from "solid-icons/vs";
import { Component } from "solid-js";

import ProfilePictureSrc from "src/assets/images/profile_picture.png";

const Header: Component = () => {
  return (
    <Box>
      <ProfilePicture />
      <Center>
        <Heading size="2xl">Jason Ngo</Heading>
      </Center>
      <Center>
        <Text>Aspiring Software Craftsman</Text>
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
        <ListIcon as={HiOutlineMail} />
        njhjason@protonmail.com
      </ListItem>

      <ListItem>
        <ListIcon as={VsGithubAlt} />
        GitHub profile
      </ListItem>

      <ListItem>
        <ListIcon as={AiOutlineLinkedin} />
        LinkedIn profile
      </ListItem>

      <ListItem>
        <ListIcon as={BsFilePdf} />
        PDF version
      </ListItem>
    </List>
  </Center>
);
