import { screen } from 'solid-testing-library'
import Header, {
  profilePictureTestId
} from 'src/components/CurriculumVitae/Header'
import { githubCornerTestId } from 'src/components/CurriculumVitae/Header/GitHubCorner'
import { headerInformationTestId } from 'src/components/CurriculumVitae/Header/HeaderInformation'
import { translateButtonTestId } from 'src/components/CurriculumVitae/Header/TranslateButton'
import { renderWithProviders } from 'src/testing/TestRenderer'
import { describe, expect, it } from 'vitest'

describe('Header', () => {
  it.skip('renders TranslateButton, GitHubCorner, ProfilePicture and HeaderInformation', () => {
    renderWithProviders(<Header />)

    expect(screen.getByTestId(translateButtonTestId)).toBeInTheDocument()
    expect(screen.getByTestId(githubCornerTestId)).toBeInTheDocument()
    expect(screen.getByTestId(profilePictureTestId)).toBeInTheDocument()
    expect(screen.getByTestId(headerInformationTestId)).toBeInTheDocument()
  })
})
