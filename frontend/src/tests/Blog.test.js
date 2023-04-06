import BlogItem from "../components/BlogItem";
import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

const sampleBlog = {
  id: 1,
  title: "A Sample Blog",
  author: "Example Author",
  likes: 0,
  url: "www.example.com",
  user: {
    username: "Example Name",
  },
};

describe("BlogItem", () => {
  test("renders title and author", () => {
    const { container } = render(
      <MemoryRouter>
        <table>
          <tbody>
            <BlogItem blog={sampleBlog} />
          </tbody>
        </table>
      </MemoryRouter>
    );
    const blogElement = container.querySelector(".blog");
    expect(blogElement).toHaveTextContent(sampleBlog.title);
    expect(blogElement).toHaveTextContent(sampleBlog.author);
  });
});
