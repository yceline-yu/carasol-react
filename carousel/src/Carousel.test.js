import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

it("works when you click on the right arrow", function() {
  const { container } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="Photo by Richard Pasquarella on Unsplash"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="Photo by Pratik Patel on Unsplash"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".fa-chevron-circle-right");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="Photo by Richard Pasquarella on Unsplash"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="Photo by Pratik Patel on Unsplash"]')
  ).toBeInTheDocument();
});

it("works when you click on the left arrow", function() {
  const { container } = render(<Carousel />);

  const rightArrow = container.querySelector(".fa-chevron-circle-right");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="Photo by Richard Pasquarella on Unsplash"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="Photo by Pratik Patel on Unsplash"]')
  ).toBeInTheDocument();

  // move backwards in the carousel
  const leftArrow = container.querySelector(".fa-chevron-circle-left");
  fireEvent.click(leftArrow);

  // expect the first image to show, but not the second or third;
  expect(
    container.querySelector('img[alt="Photo by Richard Pasquarella on Unsplash"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="Photo by Pratik Patel on Unsplash"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="Photo by Josh Post on Unsplash"]')
  ).not.toBeInTheDocument();
});

it("hides left arrow when you are on 1st image", function() {
  const { container } = render(<Carousel />);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('.fa-chevron-circle-left')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('.fa-chevron-circle-right')
  ).toBeInTheDocument();
});

it("hides right arrow when you are on last image", function() {
  const { container } = render(<Carousel />);

  // move forward in the carousel to last image
  const rightArrow = container.querySelector(".fa-chevron-circle-right");
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('.fa-chevron-circle-left')
  ).toBeInTheDocument();
  expect(
    container.querySelector('.fa-chevron-circle-right')
  ).not.toBeInTheDocument();
});


it("should render without crashing", function () {
  render(<Carousel cardData={[{src: "./image1.jpg", caption: "TestCaption"}]} title="TestTitle"/>)
});

it("should match snapshot", function () {
  const { container } = render(<Carousel cardData={[{src: "./image1.jpg", caption: "TestCaption"}]} title="TestTitle"/>)

  expect(container).toMatchSnapshot();
})
