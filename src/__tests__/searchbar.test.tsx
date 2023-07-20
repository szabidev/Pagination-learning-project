import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import SearchBar from "@/app/components/searchbar";
import React from "react";

describe("SearchBar component", () => {
  const event = { preventDefault: () => {} };

  const props = {
    onSearch: jest.fn(),
  };

  const searchTermMock = "cat";
  const setSearchTermMock = jest.fn();
  const useSearchTermMock: any = () => [searchTermMock, setSearchTermMock];

  beforeEach(() => {
    jest.spyOn(React, "useState").mockImplementationOnce(useSearchTermMock);
    jest.spyOn(event, "preventDefault");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders SearchBar, with cat as searchterm", () => {
    render(<SearchBar {...props} />);

    expect(screen.getByRole("textbox", { name: /searchbar/i })).toBeVisible();
    expect(screen.getByRole("textbox", { name: /searchbar/i })).toHaveValue(
      "cat"
    );
    screen.logTestingPlaygroundURL();
  });

  it("tests input string change", async () => {
    render(<SearchBar {...props} />);

    const input = screen.getByRole("textbox", { name: /searchbar/i });
    const submitBtn = screen.getByRole("button", { name: /magnifying glass/i });
    fireEvent.change(input, { target: { value: "dog" } });
    fireEvent.click(submitBtn);
    await waitFor(() => {
      expect(input).toHaveValue("dog");
    });
  });
});

// 100% but input does not change FIX IT
