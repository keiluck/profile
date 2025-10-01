import React from "react";
import { Box, Typography, Paper } from "@mui/material";

interface EducationItem {
  school: string;
  period: string;
  degree: string;
}

interface Props {
  educations: EducationItem[];
}

const Education: React.FC<Props> = ({ educations }) => (
  <Box mb={4}>
    <Typography variant="h5" fontWeight="bold" mb={2}>学歴</Typography>
    {educations.map((edu, idx) => (
      <Paper key={idx} sx={{ p: 2, mb: 2 }}>
        <Typography variant="h6">{edu.school} ({edu.period})</Typography>
        <Typography variant="body2">{edu.degree}</Typography>
      </Paper>
    ))}
  </Box>
);

export default Education;
