import { describe, test } from "@jest/globals";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import VehicleComponent from "./VehicleComponent";

const queryClient = new QueryClient();

describe("CharacterComponent.test", () => {
  test("checking field in the component", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <VehicleComponent
          vehicle={"http https://swapi.py4e.com/api/vehicles/4/"}
        />
      </QueryClientProvider>
    );
    await waitFor(async () => {
      const name = await screen.findAllByText("Sand Crawler");
      expect(name.length).toBeGreaterThan(0);
    });
    await waitFor(async () => {
      const img = await screen.findAllByRole("img");
      expect(img.length).toBeGreaterThan(0);
    });
  });
});
