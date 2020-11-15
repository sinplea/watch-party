/* eslint-disable no-undef */
import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { tick } from "svelte";
import TopBar from "../src/components/TopBar/TopBar.svelte";
import YouTubeList from "../src/lib/MockResponses/YoutubeList";
import "@testing-library/jest-dom/extend-expect";

describe("TopBar Aggregate Component", () => {
  describe("TopBarSearch", () => {
    beforeEach(() => {
      // TopBarSearch uses setTimeout(). This let's us mock those timers.
      jest.useFakeTimers();

      // Some workaround documented by Jest to resolve matchMedia issue
      // https://jestjs.io/docs/en/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
      Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: jest.fn().mockImplementation((query) => ({
          matches: false,
          media: query,
          onchange: null,
          addListener: jest.fn(), // deprecated
          removeListener: jest.fn(), // deprecated
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
          dispatchEvent: jest.fn(),
        })),
      });

      // Mock GAPI methods
      window.gapi = {};
      window.gapi.client = {};
      window.gapi.client.youtube = {};
      window.gapi.client.youtube.search = {};
      window.gapi.client.youtube.search.list = () =>
        Promise.resolve({ result: YouTubeList });
    });

    it("should open a preview pane after a user types some number of characters", async () => {
      const { getByPlaceholderText } = render(TopBar);
      const input = getByPlaceholderText("Search for a youtube video");

      expect(screen.queryByTestId("search-preview")).toBeNull();

      await userEvent.type(input, "figure drawing");

      expect(screen.getByTestId("search-preview")).toBeInTheDocument();
    });

    it("should render a loading element when searching for videos", async () => {
      const { getByPlaceholderText } = render(TopBar);
      const input = getByPlaceholderText("Search for a youtube video");

      expect(screen.queryByTestId("search-preview")).toBeNull();

      await userEvent.type(input, "figure drawing");

      expect(screen.getByTestId("search-preview")).toBeInTheDocument();
      expect(screen.getByTestId("search-preview-loading")).toBeInTheDocument();
    });

    it("should render some results in the preview pane after loading", async () => {
      const { getByPlaceholderText } = render(TopBar);
      const input = getByPlaceholderText("Search for a youtube video");

      expect(screen.queryByTestId("search-preview")).toBeNull();

      await userEvent.type(input, "figure drawing");

      jest.runAllTimers();

      // Need to propagate state changes across svelte components
      await tick();

      expect(setTimeout).toBeCalledTimes(1);
      expect(screen.getByTestId("search-preview")).toBeInTheDocument();
      expect(screen.getByTestId("search-preview-content")).toBeInTheDocument();
    });
  });
});
