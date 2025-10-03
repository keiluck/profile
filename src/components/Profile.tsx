import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Container } from '@mui/material';

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
    label: '銀行向けスマホショップとポイント交換システム',
    description: `スマホショップ商品管理、ポイント交換の対応を効率化するためのシステムをゼロから開発しました。画面設計から実装までを一貫して担当し、Javascriptを用いて動的なUIを実現。レスポンシブデザインに対応し、スマートフォンからも快適に操作できるユーザー体験を提供しました。`,
  }
]




export default function TextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Container>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1, my: 2,textAlign: 'center' }}>
        プロジェクト
      </Typography>
      <Box sx={{ maxWidth: 600, flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            pl: 2,
            bgcolor: 'background.default',
        }}
      >
        <Typography>{steps[activeStep].label}</Typography>
      </Paper>
      <Box sx={{ height: 400, maxWidth: 600, width: '100%', p: 2 ,lineHeight:2.5,color:"#666",backgroundColor:"#f0f000",}}>
        {steps[activeStep].description}
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
    </Container>
  )}