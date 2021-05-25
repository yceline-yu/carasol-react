import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

it("renders without crashing", function(){
  render(<Card caption="test Caption" src="./image1.jpg" currNum="1" totalNum="1"/>)
});

it("matches snapshot", function () {
  const { container } = render(<Card caption="test Caption" src="./image1.jpg" currNum="1" totalNum="1"/>);

  expect(container).toMatchSnapshot();
})