import { AiOutlineHeart } from 'solid-icons/ai'
import { TbStairsUp } from 'solid-icons/tb'
import { type Component } from 'solid-js'
import Center from 'src/components/shared/Center'
import { LeftRightDivider } from 'src/components/shared/Divider'
import Row from 'src/components/shared/Row'
import Section from 'src/components/shared/Section'
import { Heading, SubHeading } from 'src/components/shared/Typography'

const Favorites: Component = () => (
  <Section>
    <Row>
      <AiOutlineHeart size={32} />
      <Heading>Favorites</Heading>
    </Row>
    <br />

    <Center>Work-in-progress</Center>
    <br />

    <Row>
      <TbStairsUp size={24} />
      <SubHeading>Practices</SubHeading>
    </Row>
    <Row>
      Code Review
      <LeftRightDivider />
      Refactoring
      <LeftRightDivider />
      Pair Programming
      <LeftRightDivider />
      Continuous Integration and Continuous Delivery
    </Row>
  </Section>
)

export default Favorites
