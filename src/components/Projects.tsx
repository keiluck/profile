import React from "react";
import { Box, Typography, Paper } from "@mui/material";

interface Project {
  name: string;
  period: string;
  description: string;
  tech: string[];
}

interface Props {
  projects: Project[];
}

const Projects: React.FC<Props> = ({ projects }) => (
  <Box mb={4}>
    <Typography variant="h5" fontWeight="bold" mb={2}>プロジェクト</Typography>
    {projects.map((project, idx) => (
      <Paper key={idx} sx={{ p: 2, mb: 2 }}>
        <Typography variant="h6">{project.name} ({project.period})</Typography>
        <Typography variant="body2">{project.description}</Typography>
        <Typography variant="body2">使用技術: {project.tech.join(", ")}</Typography>
      </Paper>
    ))}
  </Box>
);

export default Projects;
