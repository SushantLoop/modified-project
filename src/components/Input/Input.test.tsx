import React from "react";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import {render, screen } from '@testing-library/react'

import Input from "./Input";

describe("Running Test for Input", () => {
  test("Check placeholder in Input", () => {
    render(<Input placeholder="Large" size="large" />)
    expect(screen.getByPlaceholderText('Large')).toHaveAttribute('placeholder', 'Large');
  });

});