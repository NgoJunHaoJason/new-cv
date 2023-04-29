import { HiOutlineAcademicCap } from 'solid-icons/hi'
import { type Component } from 'solid-js'
import Center from 'src/components/shared/Center'
import Row from 'src/components/shared/Row'
import Section from 'src/components/shared/Section'
import { Heading } from 'src/components/shared/Typography'

const Education: Component = () => (
  <Section>
    <Row>
      <HiOutlineAcademicCap size={32} />
      <Heading>Education</Heading>
    </Row>
    <br />

    <Center>Work-in-progress</Center>
  </Section>
)

export default Education
