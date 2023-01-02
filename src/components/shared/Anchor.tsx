import { ParentComponent } from "solid-js";
import { styled } from "solid-styled-components";

const Anchor: ParentComponent<{
  testId?: string;
  href: string;
}> = ({ children, href, testId = "anchor" }) => (
  <StyledAnchor
    data-testid={testId}
    href={href}
    rel="noopener noreferrer"
    target="_blank"
  >
    {children}
  </StyledAnchor>
);

export default Anchor;

const StyledAnchor = styled.a`
  color: steelblue;
  text-decoration: none;

  &:hover {
    color: #0096FF;
  }

  @media (prefers-color-scheme: dark) {
    color: aqua;

    &:hover {
      color: darkturquoise;
    }
  }
`;
