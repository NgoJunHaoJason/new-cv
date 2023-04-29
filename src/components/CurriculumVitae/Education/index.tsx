import { HiOutlineAcademicCap } from 'solid-icons/hi'
import { type Component } from 'solid-js'
import Center from 'src/components/shared/Center'
import Row from 'src/components/shared/Row'
import Section from 'src/components/shared/Section'

const Education: Component = () => (
  <Section>
    <Row>
      <HiOutlineAcademicCap size={32} />
      <h1>Education</h1>
    </Row>
    <br />

    <Center>Work-in-progress</Center>
  </Section>
)

export default Education
