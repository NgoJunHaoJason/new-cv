import type { Component } from 'solid-js'
import Education from 'src/components/CurriculumVitae/Education'
import Experience from 'src/components/CurriculumVitae/Experience'
import Favorites from 'src/components/CurriculumVitae/Favorites'
import Header from 'src/components/CurriculumVitae/Header'
import Projects from 'src/components/CurriculumVitae/Projects'
import { TopBottomDivider } from 'src/components/shared/Divider'

const CurriculumVitae: Component = () => {
  return (
    <>
      <br />
      <Header />

      <br />
      <TopBottomDivider />
      <Experience />

      <br />
      <TopBottomDivider />
      <Education />

      <br />
      <TopBottomDivider />
      <Favorites />

      <br />
      <TopBottomDivider />
      <Projects />
    </>
  )
}

export default CurriculumVitae
