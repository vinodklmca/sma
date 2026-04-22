import React from "react";
import { Button, Stack, Table, TableBody, TableCell, TableHead, TableRow, TextField } from "@mui/material";
import { useState } from "react";

export default function EmployeeTable({ employees, onDelete, onUpdate }) {
  const [editingId, setEditingId] = useState(null);
  const [draft, setDraft] = useState({});

  const startEdit = (employee) => {
    setEditingId(employee.id);
    setDraft({
      full_name: employee.full_name,
      job_title: employee.job_title,
      country: employee.country,
      salary: employee.salary
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setDraft({});
  };

  const saveEdit = async (id) => {
    await onUpdate(id, { ...draft, salary: Number(draft.salary) });
    cancelEdit();
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Job Title</TableCell>
          <TableCell>Country</TableCell>
          <TableCell>Salary</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {employees.map((employee) => (
          <TableRow key={employee.id}>
            <TableCell>
              {editingId === employee.id ? (
                <TextField
                  size="small"
                  value={draft.full_name || ""}
                  onChange={(e) => setDraft((prev) => ({ ...prev, full_name: e.target.value }))}
                />
              ) : employee.full_name}
            </TableCell>
            <TableCell>
              {editingId === employee.id ? (
                <TextField
                  size="small"
                  value={draft.job_title || ""}
                  onChange={(e) => setDraft((prev) => ({ ...prev, job_title: e.target.value }))}
                />
              ) : employee.job_title}
            </TableCell>
            <TableCell>
              {editingId === employee.id ? (
                <TextField
                  size="small"
                  value={draft.country || ""}
                  onChange={(e) => setDraft((prev) => ({ ...prev, country: e.target.value }))}
                />
              ) : employee.country}
            </TableCell>
            <TableCell>
              {editingId === employee.id ? (
                <TextField
                  size="small"
                  type="number"
                  value={draft.salary || ""}
                  onChange={(e) => setDraft((prev) => ({ ...prev, salary: e.target.value }))}
                />
              ) : employee.salary}
            </TableCell>
            <TableCell>{employee.email}</TableCell>
            <TableCell>
              {editingId === employee.id ? (
                <Stack direction="row" spacing={1}>
                  <Button variant="contained" size="small" onClick={() => saveEdit(employee.id)}>Save</Button>
                  <Button size="small" onClick={cancelEdit}>Cancel</Button>
                </Stack>
              ) : (
                <Stack direction="row" spacing={1}>
                  <Button size="small" onClick={() => startEdit(employee)}>Edit</Button>
                  <Button color="error" size="small" onClick={() => onDelete(employee.id)}>Delete</Button>
                </Stack>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
