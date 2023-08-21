import React from "react";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import {render, screen } from '@testing-library/react'

import ModifiedInput from "./ModifiedInput";

describe("Running Test for Input", () => {
  test("Check placeholder in Input", () => {
    render(<ModifiedInput placeholder="Large" size="large" />)
    expect(screen.getByPlaceholderText('Large')).toHaveAttribute('placeholder', 'Large');
  });

});