import { useI18n } from "@solid-primitives/i18n";
import { AiOutlineLinkedin } from "solid-icons/ai";
import { BsFilePdf } from "solid-icons/bs";
import { HiOutlineMail } from "solid-icons/hi";
import { VsGithubAlt } from "solid-icons/vs";
import { Component } from "solid-js";
import { styled } from "solid-styled-components";
import Anchor from "src/components/shared/Anchor";

const HeaderInformation: Component = () => {
  const [t] = useI18n();

  return (
    <List data-testid={headerInformationTestId}>
      <ListItem>
        <Anchor href="mailto:njhjason@protonmail.com">
          <ListItemContent>
            <HiOutlineMail /> njhjason@protonmail.com
          </ListItemContent>
        </Anchor>
      </ListItem>

      <ListItem>
        <Anchor href="https://github.com/NgoJunHaoJason">
          <ListItemContent>
            <VsGithubAlt /> {t("header.github")}
          </ListItemContent>
        </Anchor>
      </ListItem>

      <ListItem>
        <Anchor href="https://www.linkedin.com/in/ngo-jun-hao-jason">
          <ListItemContent>
            <AiOutlineLinkedin /> {t("header.linkedin")}
          </ListItemContent>
        </Anchor>
      </ListItem>

      <ListItem>
        <Anchor href="./documents/ngo_jun_hao_jason_curriculum_vitae.pdf">
          <ListItemContent>
            <BsFilePdf /> {t("header.pdf")}
          </ListItemContent>
        </Anchor>
      </ListItem>
    </List>
  );
};

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

const ListItemContent = styled.div`
  line-height: 20px;
`;
