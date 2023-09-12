import { describe, test } from "@jest/globals";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import StarshipComponent from "./StarshipComponent";

const queryClient = new QueryClient();

describe("CharacterComponent.test", () => {
  test("checking field in the component", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <StarshipComponent
          starship={"https://swapi.py4e.com/api/starships/2/"}
        />
      </QueryClientProvider>
    );
    await waitFor(async () => {
      const name = await screen.findAllByText("CR90 corvette");
      const img = await screen.findAllByRole("img");
      expect(name.length).toBeGreaterThan(0);
      expect(img.length).toBeGreaterThan(0);
    });
  });
});
