import type { Component } from 'solid-js'
import Education from 'src/components/CurriculumVitae/Education'
import Experience from 'src/components/CurriculumVitae/Experience'
import Header from 'src/components/CurriculumVitae/Header'
import Projects from 'src/components/CurriculumVitae/Projects'
import Divider from 'src/components/shared/Divider'

const CurriculumVitae: Component = () => {
  return (
    <>
      <br />
      <Header />

      <br />
      <Divider />
      <Experience />

      <br />
      <Divider />
      <Education />

      <br />
      <Divider />
      <Projects />
    </>
  )
}

export default CurriculumVitae
