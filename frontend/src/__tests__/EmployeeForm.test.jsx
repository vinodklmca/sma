import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import EmployeeForm from "../components/EmployeeForm";

describe("EmployeeForm", () => {
  it("submits employee payload", () => {
    const onSubmit = vi.fn();
    render(<EmployeeForm onSubmit={onSubmit} />);

    fireEvent.change(screen.getByLabelText(/full_name/i), { target: { value: "Jane Doe" } });
    fireEvent.change(screen.getByLabelText(/job_title/i), { target: { value: "Engineer" } });
    fireEvent.change(screen.getByLabelText(/country/i), { target: { value: "USA" } });
    fireEvent.change(screen.getByLabelText(/salary/i), { target: { value: "12345" } });
    fireEvent.change(screen.getByLabelText(/department/i), { target: { value: "Engineering" } });
    fireEvent.change(screen.getByLabelText(/currency/i), { target: { value: "USD" } });
    fireEvent.change(screen.getByLabelText(/employment_type/i), { target: { value: "Full Time" } });
    fireEvent.change(screen.getByLabelText(/join_date/i), { target: { value: "2024-01-01" } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "jane@example.com" } });
    fireEvent.click(screen.getByText("Add Employee"));

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit.mock.calls[0][0].salary).toBe(12345);
  });
});
