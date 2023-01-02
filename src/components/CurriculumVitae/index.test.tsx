import { render, screen } from "solid-testing-library";
import CurriculumVitae from "src/components/CurriculumVitae";
import { headerTestId } from "src/components/CurriculumVitae/Header";
import { describe, expect, it } from "vitest";

describe("CurriculumVitae", () => {
  it("renders Header", () => {
    render(() => <CurriculumVitae />);

    expect(screen.getByTestId(headerTestId)).toBeInTheDocument();
  });
});
