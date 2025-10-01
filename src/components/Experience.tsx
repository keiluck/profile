import React from "react";
import { Box, Typography, Paper } from "@mui/material";

interface Job {
  company: string;
  period: string;
  role: string;
  description: string;
}

interface Props {
  jobs: Job[];
}

const Experience: React.FC<Props> = ({ jobs }) => (
  <Box mb={4}>
    <Typography variant="h5" fontWeight="bold" mb={2}>職務経験</Typography>
    {jobs.map((job, idx) => (
      <Paper key={idx} sx={{ p: 2, mb: 2 }} elevation={2}>
        <Typography variant="h6">{job.company} ({job.period})</Typography>
        <Typography variant="subtitle1" fontStyle="italic">{job.role}</Typography>
        <Typography variant="body2">{job.description}</Typography>
      </Paper>
    ))}
  </Box>
);

export default Experience;







