import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";

interface Skill {
  name: string;
  level: number; // 0-100
}

interface Props {
  skills: Skill[];
}

const Skills: React.FC<Props> = ({ skills }) => (
  <Box mb={4}>
    <Typography variant="h5" fontWeight="bold" mb={2}>スキル</Typography>
    {skills.map((skill, idx) => (
      <Box key={idx} mb={1}>
        <Typography variant="body2">{skill.name}</Typography>
        <LinearProgress variant="determinate" value={skill.level} />
      </Box>
    ))}
  </Box>
);

export default Skills;
