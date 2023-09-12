import { describe, test } from "@jest/globals";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import MainPage from "./MainPage";

describe("CharacterComponent.test", () => {
  test("checking field in the component", async () => {
    render(<MainPage />);
    await waitFor(async () => {
      const name = screen.getByText("SwapiBase");
      const img = await screen.findAllByRole("img");
      expect(name).toBeInTheDocument();
      expect(img.length).toBeGreaterThan(0);
    });
  });
});
