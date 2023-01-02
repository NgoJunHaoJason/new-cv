import { render, screen } from "solid-testing-library";
import Header from "src/components/CurriculumVitae/Header";
import { githubCornerTestId } from "src/components/CurriculumVitae/Header/GitHubCorner";
import { headerInformationTestId } from "src/components/CurriculumVitae/Header/HeaderInformation";
import { describe, expect, it } from "vitest";

describe("Header", () => {
  it("renders GitHubCorner and HeaderInformation", () => {
    render(() => <Header />);

    expect(screen.getByTestId(githubCornerTestId)).toBeInTheDocument();
    expect(screen.getByTestId(headerInformationTestId)).toBeInTheDocument();
  });
});
