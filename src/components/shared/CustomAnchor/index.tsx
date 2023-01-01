import { ParentComponent } from "solid-js";
import "./index.css";

const CustomAnchor: ParentComponent<{
  testId?: string;
  href: string;
}> = ({ children, href, testId = "link" }) => {
  return (
    <a
      data-testid={testId}
      class="Link"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
  );
};

export default CustomAnchor;
