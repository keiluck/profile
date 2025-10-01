import React, { useRef } from "react";
import { Container } from "@mui/material";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import TabSkip from "./components/TabSkip"


function App() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const jobs = [
    { company: "日発株式会社", period: "2025/5～現在", role: "IT案件従事", description: "Web開発・フロント実装" },
    { company: "マヤ株式会社", period: "2023/4～2025/4", role: "IT案件従事", description: "システム開発・バックエンド担当" },
  ];

  const educations = [
    { school: "東京大学", period: "2010/4～2014/3", degree: "学士（情報工学）" },
  ];

  const projects = [
    { name: "モールポイントシステム", period: "2024/1～2024/12", description: "スターバックス向けのポイントシステム開発", tech: ["React", "MUI", "TypeScript", "MySQL"] },
  ];

  const skills = [
    { name: "Java", level: 90 },
    { name: "React", level: 95 },
    { name: "TypeScript", level: 85 },
    { name: "MySQL", level: 80 },
  ];

  return (
    <Container maxWidth="md" ref={resumeRef} sx={{ p: 4, bgcolor: "background.paper", boxShadow: 3, borderRadius: 2 }}>
     
      <Header name="山田 太郎" email="taro@example.com" phone="090-1234-5678" address="東京都新宿区" />
       <TabSkip />
      <Experience jobs={jobs} />

      <Education educations={educations} />
      <Projects projects={projects} />
      <Skills skills={skills} />

    </Container>
  );
}

export default App;
