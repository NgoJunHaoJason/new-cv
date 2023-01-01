import { Box, useColorModeValue } from "@hope-ui/solid";
import { ParentComponent } from "solid-js";

const CustomAnchor: ParentComponent<{
  testId?: string;
  href: string;
}> = ({ children, href, testId = "custom-anchor" }) => {
  const color = useColorModeValue("steelblue", "aqua");
  return (
    <Box
      data-testid={testId}
      class="custom-anchor"
      color={color()}
      css={{
        ":hover": {
          color: "darkturquoise",
        },
      }}
    >
      <a href={href} rel="noopener noreferrer" target="_blank">
        {children}
      </a>
    </Box>
  );
};

export default CustomAnchor;
