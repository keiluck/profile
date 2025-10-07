import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const frontendSkills = [
  { name: "Javascript", value: 4, controlled: true },
  { name: "React", value: 4 },
  { name: "TypeScript", value: 4, readOnly: true },
  { name: "Vue", value: 4, disabled: true },
  { name: "Angular", value: 3 },
  { name: "HTML/CSS", value: 4 },
];

const backendSkills = [
  { name: "Java", value: 4, controlled: true },
  { name: "Spring-boot", value: 2 },
  { name: "Mysql", value: 4, readOnly: true },
  { name: "Figma", value: 4, disabled: true },
  { name: "AWS", value: null },
  { name: "PostgreSQL", value: null },
];

const allSkills = [
  ...frontendSkills.map(skill => ({ ...skill, group: '前端技术' })),
  ...backendSkills.map(skill => ({ ...skill, group: '后端与工具' })),
];

export default function BasicRating() {
  const [value, setValue] = React.useState<number | null>(4);

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        borderRadius: 4,
        background: "#f4f8fd", // 纯色背景
        maxWidth: 900,
        margin: "32px auto",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          mb: 4,
          fontWeight: 700,
          color: "#2563eb",
          letterSpacing: 2,
        }}
      >
        技术能力评分
      </Typography>
      <Grid container spacing={3} justifyContent="center"  columns={{ xs: 2, sm: 4, md: 4 }}>
        {allSkills.map((skill) => (
          <Paper key={skill.name}>
            <Box
              sx={{
                background: "#fff",
                borderRadius: 2,
                p: 2,
                boxShadow: "0 2px 8px rgba(37,99,235,0.06)",
                textAlign: "center",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  mb: 1,
                  color: "#2563eb",
                  fontWeight: 600,
                  fontSize: "1rem",
                  letterSpacing: 1,
                }}
              >
                {skill.name}
              </Typography>
              <Rating
                name={skill.name}
                value={skill.controlled ? value : skill.value}
                onChange={skill.controlled ? (e, v) => setValue(v) : undefined}
                readOnly={!!skill.readOnly}
                disabled={!!skill.disabled}
                sx={{ color: "#2563eb" }}
              />
              <Typography
                variant="caption"
                sx={{ color: "#64748b", mt: 1, display: "block" }}
              >
                {skill.group}
              </Typography>
            </Box>
          </Paper>
          // <Container item xs={6} md={3} key={skill.name} display="flex" justifyContent="center">
           
         
        ))}
      </Grid>
      {/* QA对话框 */}
      <Box
        sx={{
          mt: 5,
          p: 3,
          background: "#e3eafc", // 纯色背景
          borderRadius: 3,
          boxShadow: "0 2px 8px rgba(37,99,235,0.08)",
          textAlign: "center",
        }}
      >
        <Typography variant="h6" sx={{ mb: 2, color: "#2563eb", fontWeight: 600 }}>
          QA 对话框
        </Typography>
        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
          Q: 你最擅长哪项技术？
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A: 我最擅长 React 和 TypeScript，熟悉前后端开发与云服务部署。
        </Typography>
      </Box>
    </Paper>
  );
}
