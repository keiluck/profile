import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
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
        技術分野
      </Typography>
      <Grid container spacing={3} justifyContent="center" alignItems="flex-start" columns={{ xs: 4, sm: 8, md: 12 }}>
        {allSkills.map((skill) => (
           <Grid size={{ xs: 2, sm: 4, md: 4 }} key={skill.name}>
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
          </Grid>
          // <Container item xs={6} md={3} key={skill.name} display="flex" justifyContent="center">
           
         
        ))}
      </Grid>
      {/* QA对话框 */}
      <Box
        sx={{
          mt: 5,
          p: 2,
          background: "#e3eafc", 
          borderRadius: 3,
          boxShadow: "0 2px 8px rgba(37,99,235,0.08)",
          textAlign: "left",
        }}
      >
        <Typography variant="h6" sx={{ mb: 2, color: "#2563eb", fontWeight: 600,textAlign: "center" }}>
          QA お問い合わせ
        </Typography>
        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
          Q: 最新フルスタック技術？
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A: フロントエンド（ユーザーが操作する画面）とバックエンド（サーバーやデータベース処理）を統合的に開発できる最新の技術群を指します。
        </Typography>
      </Box>
    </Paper>
  );
}
