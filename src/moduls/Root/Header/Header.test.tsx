import { describe, test } from "@jest/globals";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("CharacterComponent.test", () => {
  test("checking field in the component", async () => {
    render(<Header />);
    await waitFor(async () => {
      const nameSwapiBase = screen.getByText("SwapiBase");
      const nameCharacters = screen.getByText("Characters");
      expect(nameSwapiBase).toBeInTheDocument();
      expect(nameCharacters).toBeInTheDocument();
    });
  });
});
