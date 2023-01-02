import { AiOutlineLinkedin } from "solid-icons/ai";
import { BsFilePdf } from "solid-icons/bs";
import { HiOutlineMail } from "solid-icons/hi";
import { VsGithubAlt } from "solid-icons/vs";
import { Component } from "solid-js";
import { styled } from "solid-styled-components";
import Anchor from "src/components/shared/Anchor";

const HeaderInformation: Component = () => (
  <List data-testid={headerInformationTestId}>
    <ListItem>
      <Anchor href="mailto:njhjason@protonmail.com">
        <HiOutlineMail /> njhjason@protonmail.com
      </Anchor>
    </ListItem>

    <ListItem>
      <Anchor href="https://github.com/NgoJunHaoJason">
        <VsGithubAlt /> GitHub profile
      </Anchor>
    </ListItem>

    <ListItem>
      <Anchor href="https://www.linkedin.com/in/ngo-jun-hao-jason">
        <AiOutlineLinkedin /> LinkedIn profile
      </Anchor>
    </ListItem>

    <ListItem>
      <Anchor href="./documents/ngo_jun_hao_jason_curriculum_vitae.pdf">
        <BsFilePdf /> PDF version
      </Anchor>
    </ListItem>
  </List>
);

export default HeaderInformation;

export const headerInformationTestId = "header-information";

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 4px;
`;
