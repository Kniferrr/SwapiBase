import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import FilmPage from "./FilmPage";

const queryClient = new QueryClient();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    filmId: "1",
  }),
}));

describe("FilmPage.test", () => {
  test("checking field in the component", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <FilmPage />
      </QueryClientProvider>
    );
    await waitFor(async () => {
      const img = screen.getAllByRole("img");
      expect(img.length).toBeGreaterThan(0);
    });
  });
});
