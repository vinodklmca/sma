import React from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";

const initialState = {
  full_name: "",
  job_title: "",
  country: "",
  salary: "",
  department: "",
  currency: "",
  employment_type: "",
  join_date: "",
  email: ""
};

export default function EmployeeForm({ onSubmit }) {
  const [form, setForm] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ ...form, salary: Number(form.salary) });
    setForm(initialState);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2 }}>
      <Stack spacing={1}>
        {Object.keys(initialState).map((field) => (
          <TextField
            key={field}
            label={field}
            value={form[field]}
            onChange={(e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))}
            required
          />
        ))}
        <Button type="submit" variant="contained">Add Employee</Button>
      </Stack>
    </Box>
  );
}
