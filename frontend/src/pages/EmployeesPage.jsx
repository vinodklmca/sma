import React from "react";
import { Alert, Box, Button, CircularProgress, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { apiGet, apiRequest } from "../api/client";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeTable from "../components/EmployeeTable";

export default function EmployeesPage() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);

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
    try {
      await apiRequest("/employees", "POST", { employee });
      await loadEmployees();
      setShowForm(false);
    } catch (e) {
      setError(e.message);
    }
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
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
        <Typography variant="h5">Employees</Typography>
        {!showForm ? (
          <Button variant="text" onClick={() => setShowForm(true)}>Add</Button>
        ) : (
          <Button variant="text" onClick={() => setShowForm(false)}>Close</Button>
        )}
      </Stack>
      {error && <Alert severity="error">{error}</Alert>}
      {showForm && (
        <Box sx={{ mb: 2 }}>
          <EmployeeForm onSubmit={handleCreate} />
        </Box>
      )}
      <EmployeeTable employees={employees} onDelete={handleDelete} onUpdate={handleUpdate} />
    </>
  );
}
