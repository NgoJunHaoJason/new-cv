import { VsProject } from 'solid-icons/vs'
import { type Component } from 'solid-js'
import Card from 'src/components/shared/Card'
import Center from 'src/components/shared/Center'
import Row from 'src/components/shared/Row'
import Section from 'src/components/shared/Section'

const Projects: Component = () => (
  <Section>
    <Row>
      <VsProject size={32} />
      <h1>Projects</h1>
    </Row>
    <br />

    <Center>
      <Row>
        <Card>Work-in-progress</Card>
      </Row>
    </Center>
  </Section>
)

export default Projects
