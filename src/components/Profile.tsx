import * as React from 'react';
import { Box, Button, Container, Paper, Typography, useTheme } from '@mui/material';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const steps = [
  {
    label: '大手企業向けスマートフォンサイト追加開発',
    description: `主に既存システムの保守・改修と新規機能追加を担当し、
        フロントエンドからバックエンドまで幅広く対応しています。
        要件定義から設計、実装、テストまで一貫して携わり、顧客ニーズを反映した開発を行いました。
        特にReactやJavaを用いたWebアプリ開発に強みを発揮し、ユーザーの利便性向上や業務効率化に貢献しています。`,
  },
  {
    label: 'レンタカーシステム',
    description:
      '主にフロントエンド開発を担当しました。JavaScript、React、MUIなどの技術を用い、ユーザーインターフェースの改善やレスポンシブデザイン対応を推進しました。また、バックエンドとのAPI連携やDB設計にも関与し、システム全体の品質向上に寄与しました。プロジェクトにおいてはチーム間の調整やレビュー活動にも積極的に取り組み、安定したリリースに貢献しました。',
  },
  {
    label: 'モール管理システム',
    description: `要件定義段階から参画し、設計・実装・テストまで幅広い工程を担当しました。特に、既存システムのリプレイスにおいて、パフォーマンス改善やUI刷新を行い、業務効率の大幅な向上を実現しました。Java、Spring Boot、Reactを中心とした開発環境にて、安定性と拡張性を重視したシステム構築を推進しました。`,
  },
      {
    label: '竹内建築の設計管理システム',
    description: `複数のIT企業向け案件に参画し、システム開発や運用保守を幅広く経験しました。JavaやJavaScriptを中心とした開発に携わり、要件定義、基本設計、詳細設計、実装、テストまで一貫して対応しました。また、大規模案件ではチームリーダー補佐としてメンバー指導や進捗管理も行い、品質と納期を両立させました。継続的な改善提案と成果物の安定稼働により、顧客から高い評価を得ました。`,
  },
    {
    label: 'オフィス管理システム',
    description: `主に社内向けシステムの機能追加や改善に従事し、社員の業務効率化を支援しました。フロントエンドではJavaScriptやjQueryを用いた画面実装を行い、バックエンドではJavaとSQLを活用した処理開発を担当しました。利用者の要望を踏まえた改善提案を積極的に行い、社内IT環境の安定稼働に寄与しました。
      `,
  },

    {
    label: '銀行向けスマホのポイント交換システム',
    description: `スマホショップ商品管理、ポイント交換の対応を効率化するためのシステムをゼロから開発しました。画面設計から実装までを一貫して担当し、Javascriptを用いて動的なUIを実現。レスポンシブデザインに対応し、スマートフォンからも快適に操作できるユーザー体験を提供しました。`,
  }
];

const images = [
  { label: '作品1', imgPath: 'https://rnb.scene7.com/is/image/roomandboard/parsons_699588_25e1?size=2400,2400&scl=1' },
  { label: '作品2', imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC6D_5EuGol3jAYqU2myTBrzVuZQZR9SyXp9D2ELR2E7DeEyGXo9ZKAJnOjeYtKM1UjKI&usqp=CAU' },
  { label: '作品3', imgPath: 'https://www.migefurniture.com/wp-content/uploads/2023/08/types-of-office-workstations-MeetCo.jpg' },
  { label: '作品4', imgPath: 'https://officegroup.co.za/wp-content/uploads/2023/09/The-Role-of-Office-Desks-in-Office-Design-Employee-Engagement.jpeg' },
  { label: '作品5', imgPath: 'https://www.top-office.cz/galerie/blog_cs/1605772408_cs_125489627_2909659779137106_6619141393785025122_o.jpg' },
  { label: '作品6', imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRADxyqybL8diKw1v8DTHOAaVXBq3xdJvWVrltlInEc0uvfBL9jB_AxMHxVrYmmZKdSrMo&usqp=CAU' },
];

export default function TextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  // 图片轮播
  const [imgStart, setImgStart] = React.useState(0);
  const [showCount, setShowCount] = React.useState(window.innerWidth < 430 ? 2 : 4);

  React.useEffect(() => {
    function handleResize() {
      setShowCount(window.innerWidth <= 450 ? 2 : 4);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setImgStart((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const currentImages = [];
  for (let i = 0; i < showCount; i++) {
    currentImages.push(images[(imgStart + i) % images.length]);
  }

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);
  const maxSteps = steps.length;

  return (
    <Container maxWidth="md" sx={{ px: { xs: 0.5, sm: 1 }, py: { xs: 1, sm: 2 } }}>
      {/* 项目标题 */}
      <Typography
        variant="h4"
        sx={{ textAlign: 'center', fontWeight: 700, color: "#000", fontSize: { xs: "1.3rem", sm: "2rem" }, my: 2 }}
      >
        プロジェクト
      </Typography>

      {/* 步骤卡片 */}
      <Box sx={{ maxWidth: 800,mx: 'auto', flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{ display: 'flex', alignItems: 'center', height: 50, pl: 2, backgroundColor: "#f4f8fd", }}
        >
          <Typography sx={{ fontWeight: 500, color: "#666", fontSize: { xs: "1rem", sm: "1.2rem" } , }}>
            {steps[activeStep].label}
          </Typography>
        </Paper>
        <Box sx={{ minHeight:250,maxHeight:500,p: { xs: 1, sm: 2 }, lineHeight: 2, color: "#666", fontSize: { xs: 14, sm: 16 }, backgroundColor: "#f4f8fd" }}>
          {steps[activeStep].description}
        </Box>
        <MobileStepper
          variant="text"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1} sx={{ color: "#2563eb", fontWeight: 600 }}>
              Next {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0} sx={{ color: "#2563eb", fontWeight: 600 }}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
          sx={{ background: "#f4f8fd", px: { xs: 1, sm: 2 }, py: 1, borderRadius: 0 }}
        />
      </Box>

      {/* 图片轮播 */}
      <Box sx={{ mt: 4, width: '100%', overflow: 'hidden', position: 'relative', bgcolor: "#f4f8fd", py: { xs: 2, sm: 3 } }}>
        <Button
          size="small"
          onClick={() => setImgStart((prev) => (prev - 1 + images.length) % images.length)}
          sx={{ position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)", zIndex: 2, bgcolor: "rgba(37,99,235,0.12)", '&:hover': { bgcolor: "rgba(37,99,235,0.25)" } }}
        >
          <KeyboardArrowLeft />
        </Button>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 1, sm: 2 } }}>
          {currentImages.map((img, idx) => (
            <Box key={idx} sx={{
              flex: '0 0 auto',
              width: { xs: '45%', sm: 160, md: 180 },
              height: { xs: '28vw', sm: 120, md: 150 },
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: 2,
              bgcolor: '#fff',
            }}>
              <img src={img.imgPath} alt={img.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
          ))}
        </Box>

        <Button
          size="small"
          onClick={() => setImgStart((prev) => (prev + 1) % images.length)}
          sx={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", zIndex: 2, bgcolor: "rgba(37,99,235,0.12)", '&:hover': { bgcolor: "rgba(37,99,235,0.25)" } }}
        >
          <KeyboardArrowRight />
        </Button>
      </Box>
    </Container>
  );
}
