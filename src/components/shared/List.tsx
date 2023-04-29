import { type Component, For, type JSX } from 'solid-js'
import { styled } from 'solid-styled-components'

interface ListProps {
  children: JSX.ArrayElement
}

const List: Component<ListProps> = ({ children }) => (
  <StyledList>
    <For each={children}>{(child) => <ListItem>{child}</ListItem>}</For>
  </StyledList>
)

export default List

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const ListItem = styled.li`
  margin-bottom: 4px;
`
