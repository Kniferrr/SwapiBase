import { describe, test } from "@jest/globals";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import PlanetComponent from "./PlanetComponent";

const queryClient = new QueryClient();

describe("CharacterComponent.test", () => {
  test("checking field in the component", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <PlanetComponent planet={"https://swapi.py4e.com/api/planets/1/"} />
      </QueryClientProvider>
    );
    await waitFor(async () => {
      const name = await screen.getByText("Tatooine");
      const img = await screen.findAllByRole("img");
      expect(name).toBeInTheDocument();
      expect(img.length).toBeGreaterThan(0);
    });
  });
});
