import { describe, test } from "@jest/globals";
import { render, screen, waitFor } from "@testing-library/react";
import CharacterComponent from "./CharacterComponent";
import "@testing-library/jest-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

describe("CharacterComponent.test", () => {
  test("checking field in the component", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <CharacterComponent
          character={"https://swapi.py4e.com/api/people/1/"}
        />
      </QueryClientProvider>
    );
    await waitFor(async () => {
      const name = screen.getByText("Luke Skywalker");
      const img = await screen.findAllByRole("img");
      expect(name).toBeInTheDocument();
      expect(img.length).toBeGreaterThan(0);
    });
  });
});
