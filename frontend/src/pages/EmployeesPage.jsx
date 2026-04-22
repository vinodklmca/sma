import React from "react";
import { Alert, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { apiGet, apiRequest } from "../api/client";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeTable from "../components/EmployeeTable";

export default function EmployeesPage() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadEmployees = async () => {
    try {
      setLoading(true);
      const data = await apiGet("/employees?page=1&per_page=50");
      setEmployees(data.data);
      setError("");
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const handleCreate = async (employee) => {
    await apiRequest("/employees", "POST", { employee });
    await loadEmployees();
  };

  const handleDelete = async (id) => {
    await apiRequest(`/employees/${id}`, "DELETE");
    await loadEmployees();
  };

  const handleUpdate = async (id, employee) => {
    await apiRequest(`/employees/${id}`, "PATCH", { employee });
    await loadEmployees();
  };

  if (loading) return <CircularProgress />;

  return (
    <>
      <Typography variant="h5" sx={{ mb: 2 }}>Employees</Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <EmployeeForm onSubmit={handleCreate} />
      <EmployeeTable employees={employees} onDelete={handleDelete} onUpdate={handleUpdate} />
    </>
  );
}
