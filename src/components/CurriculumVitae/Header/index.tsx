import { useI18n } from '@solid-primitives/i18n'
import { type Component } from 'solid-js'
import ProfilePictureSrc from 'src/assets/images/profile_picture.png'
import GitHubCorner from 'src/components/CurriculumVitae/Header/GitHubCorner'
import HeaderInformation from 'src/components/CurriculumVitae/Header/HeaderInformation'
import ProfilePicture from 'src/components/CurriculumVitae/Header/ProfilePicture'
import TranslateButton from 'src/components/CurriculumVitae/Header/TranslateButton'
import Anchor from 'src/components/shared/Anchor'
import Center from 'src/components/shared/Center'
import { SubTitle, Title } from 'src/components/shared/Typography'

const Header: Component = () => {
  const [t] = useI18n()

  return (
    <div data-testid={headerTestId}>
      <TranslateButton />

      <Anchor href="https://github.com/NgoJunHaoJason/NgoJunHaoJason.github.io">
        <GitHubCorner />
      </Anchor>

      <Center>
        <ProfilePicture
          data-testid={profilePictureTestId}
          alt="profile picture"
          src={ProfilePictureSrc}
        />
      </Center>

      <Center>
        <Title>{t('header.title')}</Title>
      </Center>

      <Center>
        <SubTitle>
          <Anchor href="https://manifesto.softwarecraftsmanship.org/">
            {t('header.subtitle')}
          </Anchor>
        </SubTitle>
      </Center>

      <br />
      <Center>
        <HeaderInformation />
      </Center>
    </div>
  )
}

export default Header

export const headerTestId = 'header'
export const profilePictureTestId = 'profile-picture'
