import { useI18n } from '@solid-primitives/i18n'
import { AiOutlineLinkedin } from 'solid-icons/ai'
import { BsFilePdf } from 'solid-icons/bs'
import { HiOutlineMail } from 'solid-icons/hi'
import { VsGithubAlt } from 'solid-icons/vs'
import { type Component } from 'solid-js'
import Anchor from 'src/components/shared/Anchor'
import List from 'src/components/shared/List'
import Row from 'src/components/shared/Row'

const HeaderInformation: Component = () => {
  const [t] = useI18n()

  return (
    <List data-testid={headerInformationTestId}>
      <Anchor href="mailto:njhjason@protonmail.com">
        <Row>
          <HiOutlineMail /> &nbsp; njhjason@protonmail.com
        </Row>
      </Anchor>

      <Anchor href="https://github.com/NgoJunHaoJason">
        <Row>
          <VsGithubAlt /> &nbsp; {t('header.github')}
        </Row>
      </Anchor>

      <Anchor href="https://www.linkedin.com/in/ngo-jun-hao-jason">
        <Row>
          <AiOutlineLinkedin /> &nbsp; {t('header.linkedin')}
        </Row>
      </Anchor>

      <Anchor href="./documents/ngo_jun_hao_jason_curriculum_vitae.pdf">
        <Row>
          <BsFilePdf /> &nbsp; {t('header.pdf')}
        </Row>
      </Anchor>
    </List>
  )
}

export default HeaderInformation

export const headerInformationTestId = 'header-information'
