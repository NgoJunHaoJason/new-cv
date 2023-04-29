import { VsProject } from 'solid-icons/vs'
import { type Component } from 'solid-js'
import Card from 'src/components/shared/Card'
import Center from 'src/components/shared/Center'
import Row from 'src/components/shared/Row'
import Section from 'src/components/shared/Section'
import { Heading } from 'src/components/shared/Typography'

const Projects: Component = () => (
  <Section>
    <Row>
      <VsProject size={32} />
      <Heading>Projects</Heading>
    </Row>
    <br />

    <Center>
      <Row>
        <Card>
          <p>Work-in-progress</p>
        </Card>
      </Row>
    </Center>
  </Section>
)

export default Projects
