import { render, screen } from "solid-testing-library";
import Header, {
  profilePictureTestId,
} from "src/components/CurriculumVitae/Header";
import { githubCornerTestId } from "src/components/CurriculumVitae/Header/GitHubCorner";
import { headerInformationTestId } from "src/components/CurriculumVitae/Header/HeaderInformation";
import { translateButtonTestId } from "src/components/CurriculumVitae/Header/TranslateButton";
import { describe, expect, it, vi } from "vitest";

vi.mock("@solid-primitives/i18n", async (importOriginal) => {
  const actual: any = await importOriginal();

  const mockT = vi.fn().mockReturnValue("translated-value");
  const mockLocale = vi.fn().mockReturnValue("current-locale");

  const mockUseI18n = vi.fn().mockReturnValue([mockT, { locale: mockLocale }]);
  return {
    ...actual,
    useI18n: mockUseI18n,
  };
});

describe("Header", () => {
  it("renders TranslateButton, GitHubCorner, ProfilePicture and HeaderInformation", () => {
    render(() => <Header />);

    expect(screen.getByTestId(translateButtonTestId)).toBeInTheDocument();
    expect(screen.getByTestId(githubCornerTestId)).toBeInTheDocument();
    expect(screen.getByTestId(profilePictureTestId)).toBeInTheDocument();
    expect(screen.getByTestId(headerInformationTestId)).toBeInTheDocument();
  });
});
