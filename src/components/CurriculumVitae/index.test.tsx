import { render, screen } from "solid-testing-library";
import CurriculumVitae from "src/components/CurriculumVitae";
import { headerTestId } from "src/components/CurriculumVitae/Header";
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

describe("CurriculumVitae", () => {
  it("renders Header", () => {
    render(() => <CurriculumVitae />);

    expect(screen.getByTestId(headerTestId)).toBeInTheDocument();
  });
});
