import { styled } from 'solid-styled-components'

const Card = styled.div`
  border-color: lightgray;
  border-radius: 6px;
  border-style: solid;
  border-width: 1px;
  box-shadow: 0px 1px 1px 0px lightgray;
  display: inline-block;
  padding: 4px 16px;

  @media (prefers-color-scheme: dark) {
    background-color: dimgray;
    border-color: dimgray;
    box-shadow: 0px 1px 1px 0px dimgray;
  }
`

export default Card
