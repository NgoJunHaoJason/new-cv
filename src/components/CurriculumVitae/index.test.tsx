import { screen } from 'solid-testing-library'
import CurriculumVitae from 'src/components/CurriculumVitae'
import { headerTestId } from 'src/components/CurriculumVitae/Header'
import { renderWithProviders } from 'src/testing/TestRenderer'
import { describe, expect, it } from 'vitest'

describe('CurriculumVitae', () => {
  it.skip('renders Header', () => {
    renderWithProviders(<CurriculumVitae />)

    expect(screen.getByTestId(headerTestId)).toBeInTheDocument()
  })
})
