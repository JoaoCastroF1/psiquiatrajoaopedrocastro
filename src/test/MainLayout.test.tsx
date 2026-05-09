import { describe, it, expect } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { render } from "@testing-library/react";
import MainLayout from "@/layouts/MainLayout";

describe("MainLayout", () => {
  it("renders Navbar, the Outlet content and Footer for nested routes", () => {
    const { getByText, container } = render(
      <MemoryRouter initialEntries={["/teste"]}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/teste" element={<div>OUTLET CONTENT</div>} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    expect(getByText("OUTLET CONTENT")).toBeInTheDocument();
    expect(container.querySelector("nav")).not.toBeNull();
    expect(container.querySelector("footer")).not.toBeNull();
  });
});
