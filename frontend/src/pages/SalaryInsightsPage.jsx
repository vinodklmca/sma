import { Alert, Button, Card, CardContent, Grid, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { apiGet } from "../api/client";

export default function SalaryInsightsPage() {
  const [country, setCountry] = useState("India");
  const [jobTitle, setJobTitle] = useState("Software Engineer");
  const [countryMetrics, setCountryMetrics] = useState(null);
  const [jobMetrics, setJobMetrics] = useState(null);
  const [error, setError] = useState("");

  const loadCountryMetrics = async () => {
    try {
      const data = await apiGet(`/salary_insights/country/${encodeURIComponent(country)}`);
      setCountryMetrics(data);
      setError("");
    } catch (e) {
      setError(e.message);
    }
  };

  const loadJobMetrics = async () => {
    try {
      const data = await apiGet(`/salary_insights/country/${encodeURIComponent(country)}/job_title/${encodeURIComponent(jobTitle)}`);
      setJobMetrics(data);
      setError("");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <Stack spacing={2}>
      <Typography variant="h5">Salary Insights</Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <TextField label="Country" value={country} onChange={(e) => setCountry(e.target.value)} />
      <Button variant="contained" onClick={loadCountryMetrics}>Load Country Metrics</Button>
      <TextField label="Job Title" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
      <Button variant="outlined" onClick={loadJobMetrics}>Load Job Metrics</Button>

      <Grid container spacing={2}>
        {countryMetrics && ["employee_count", "min_salary", "max_salary", "avg_salary", "median_salary"].map((key) => (
          <Grid item xs={12} md={4} key={key}>
            <Card><CardContent><Typography>{key}: {countryMetrics[key]}</Typography></CardContent></Card>
          </Grid>
        ))}
        {jobMetrics && (
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography>{jobMetrics.job_title} in {jobMetrics.country}: avg {jobMetrics.avg_salary} ({jobMetrics.employee_count} employees)</Typography>
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
    </Stack>
  );
}
