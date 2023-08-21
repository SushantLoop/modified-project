import React from "react";
import '@testing-library/jest-dom'
import {render, screen } from '@testing-library/react'

import ModifiedButton from "./ModifiedButton";

describe("Running Test for Button", () => {
  test("Check Button Disabled", () => {
    render(<ModifiedButton text="Button Test" disabled={true} primary={true} />)
    expect(screen.getByRole('button', {name:"Button Test"})).toBeDisabled();
  });
});