import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import EmployeeTable from "../components/EmployeeTable";

describe("EmployeeTable", () => {
  it("renders rows and handles delete", () => {
    const onDelete = vi.fn();
    render(
      <EmployeeTable
        employees={[{ id: 1, full_name: "Jane Doe", job_title: "Engineer", country: "USA", salary: 100000, email: "jane@example.com" }]}
        onDelete={onDelete}
      />
    );
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Delete"));
    expect(onDelete).toHaveBeenCalledWith(1);
  });
});
