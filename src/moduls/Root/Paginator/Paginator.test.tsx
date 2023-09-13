import { describe, test } from "@jest/globals";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Paginator from "./Paginator";
import { FetchSwApiPageInfo } from "../../../servises/Fetch/FetchSwapiData";

describe("CharacterComponent.test", () => {
  test("checking field in the component", async () => {
    const data = await FetchSwApiPageInfo("people", 1);

    render(<Paginator data={data} category={"planets"} />);
    await waitFor(async () => {
      const totalPages = await screen.findAllByText("Next");
      expect(totalPages.length).toBeGreaterThan(0);
    });
    await waitFor(async () => {
      const btn = await screen.findAllByRole("button");
      expect(btn.length).toBeGreaterThan(0);
    });
  });
});
