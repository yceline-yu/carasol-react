import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

it("renders without crashing", function () {
  render(<Card caption="test Caption" src="./image1.jpg" currNum="1" totalNum="1" />)
});

it("matches snapshot", function () {
  const { container } = render(<Card caption="test Caption" src="./image1.jpg" currNum="1" totalNum="1" />);

  expect(container).toMatchSnapshot();
});

it("Renders correct Card HTML", function () {
  const { container } = render(<Card caption="test Caption" src="./image1.jpg" currNum="1" totalNum="1" />);

  expect(
    container.querySelector('.Card')
  ).toContainHTML('<h4 class="Card-title">test Caption</h4>');
  expect(
    container.querySelector('.Card')
  ).toContainHTML('src="./image1.jpg"');
  expect(
    container.querySelector('.Card-small')
  ).toHaveTextContent('Image 1 of 1.')

});