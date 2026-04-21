import { Link, Route, Routes } from "react-router-dom";
import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import EmployeesPage from "./pages/EmployeesPage";
import SalaryInsightsPage from "./pages/SalaryInsightsPage";

export default function App() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Salary Management</Typography>
          <Button color="inherit" component={Link} to="/">Employees</Button>
          <Button color="inherit" component={Link} to="/insights">Insights</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 3 }}>
        <Routes>
          <Route path="/" element={<EmployeesPage />} />
          <Route path="/insights" element={<SalaryInsightsPage />} />
        </Routes>
      </Container>
    </Box>
  );
}
