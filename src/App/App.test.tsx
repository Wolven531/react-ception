import React from "react";
import { render } from "@testing-library/react";
import { App } from "./App";

describe("App", () => {
  it("renders view", () => {
    const view = render(<App />);

    expect(view).toBeTruthy();
  });
});
