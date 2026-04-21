import React from "react";
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

export default function EmployeeTable({ employees, onDelete }) {
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
            <TableCell>{employee.full_name}</TableCell>
            <TableCell>{employee.job_title}</TableCell>
            <TableCell>{employee.country}</TableCell>
            <TableCell>{employee.salary}</TableCell>
            <TableCell>{employee.email}</TableCell>
            <TableCell>
              <Button color="error" onClick={() => onDelete(employee.id)}>Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
