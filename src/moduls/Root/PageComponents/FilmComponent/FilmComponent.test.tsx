import { describe, test } from "@jest/globals";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import FilmComponent from "./FilmComponent";

const queryClient = new QueryClient();

describe("CharacterComponent.test", () => {
  test("checking field in the component", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <FilmComponent film={"https://swapi.py4e.com/api/films/1/"} />
      </QueryClientProvider>
    );
    await waitFor(async () => {
      const title = await screen.getByText("A New Hope");
      const img = await screen.findAllByRole("img");
      expect(title).toBeInTheDocument();
      expect(img.length).toBeGreaterThan(0);
    });
  });
});
