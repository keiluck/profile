# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).







<!-- import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function BasicRating() {
  const [value, setValue] = React.useState<number | null>(4);

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 10, sm: 20, md: 30 }}>
      <Grid size={12} sx={{ mb: 2, mt: 2 ,textAlign:"center"}}>
        <Typography variant="h6">技術</Typography>
      </Grid>
      <Grid size={6}>
        {/* <Box sx={{ height: '100%', boxSizing: 'border-box' }}>Column 2</Box> */}
        <Box sx={{  height: '100%', boxSizing: 'border-box', p: 2 }}>
          <Typography component="legend">Javascript</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
                <Typography component="legend">React</Typography>
                <Rating
                  name="simple-uncontrolled"
                  onChange={(event, newValue) => {
                    console.log(newValue);
                  }}
                  defaultValue={4}
                />
                <Typography component="legend">TypeScript</Typography>
                <Rating name="read-only" value={4} readOnly />
                <Typography component="legend">Vue</Typography>
                <Rating name="disabled" value={4} disabled />
                <Typography component="legend">Angular</Typography>
                <Rating name="no-value" value={3} />
          </Box>
        </Grid>
        <Grid size={6}>
        <Box sx={{  height: '100%', boxSizing: 'border-box', p: 2 }}>
          <Typography component="legend">Java</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
                <Typography component="legend">Spring-boot</Typography>
                <Rating
                  name="simple-uncontrolled"
                  onChange={(event, newValue) => {
                    console.log(newValue);
                  }}
                  defaultValue={2}
                />
                <Typography component="legend">Mysql</Typography>
                <Rating name="read-only" value={value} readOnly />
                <Typography component="legend">Figma</Typography>
                <Rating name="disabled" value={value} disabled />
                <Typography component="legend">AWS</Typography>
                <Rating name="no-value" value={null} />
          </Box>
        </Grid>

</Grid>
  );
}











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
    label: '銀行向けスマホのポイント交換システム',
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
      <Box sx={{ maxWidth: "800", flexGrow: 1,backgroundColor:"#fff",boxShadow:3,borderRadius:2,overflow:"hidden" }}>
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
      <Box sx={{ maxHeight: 600, maxWidth: 800, width: '100%', p: 2 ,lineHeight:2.5,color:"#666",backgroundColor:"#f5f5f5",}}>
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








  import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Box, Container, Typography } from '@mui/material';

function Home() {
  return (
    <Container>
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center", // 横向和纵向居中
        minHeight: "70vh",   // 占满整个视口高度
        px: 2,
        mx: "auto",
       // backgroundColor: "#ccc333",
      }}
    >
       {/* <Typography variant="h4" component="div" sx={{ position: "absolute", top: 90, left: "50%", transform: "translateX(-50%)", }}>
       ようこそ　私の履歴書へ
      </Typography> */}
      <Card sx={{width: "100%", backgroundColor: "#f5f5f5", boxShadow: 3, borderRadius: 2, overflow: "hidden" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            '@media (max-width:430px)': {
              flexDirection: "column"
            },
            '@media (min-width:431px)': {
              flexDirection: "row"
            },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* 左侧图片 */}
          <CardMedia
            sx={{
            width: { xs: "100%", sm: "40%" },
            minHeight: 200,
            height: { xs: 200, sm: "100%" },
            flexShrink: 0,
            objectFit: "cover",
            '@media (max-width:430px)': {
            width: "100%",
            height: 200
            },
            '@media (min-width:431px)': {
            width: "40%",
            height: 500
            }
        }}
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
          />

          {/* 右侧文字 */}
          <Box
            sx={{
              flex: 1,
              minWidth: 250,
              display: "flex",
              flexDirection: "column",
              width: "100%",
              '@media (max-width:430px)': {
                minWidth: "100%",
                mt: 2
              },
              '@media (min-width:431px)': {
                minWidth: 250,
                ml: 2
              }
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{fontSize: 16,fontWeight: "bold"}}>
                 <Box sx={{fontWeight: "bold",fontSize: 24}}>フロントエンドのエンジニア</Box> <br />
                  <br />
                <text>J.FL  ケイフレイ</text><br />
              
<br />
                <text>電話番号:</text>
                <text>070-2869-7890</text><br />
<br />
                <text>Email:</text>
                <text>keihappy365@outlook.com</text><br />
<br />
                <text>住所:</text> 

                <text> 114-0034  
                東京都北区十条5-10-3</text> <br />
                <br />
                
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" ,fontSize: 14}}>
                私はWeb開発において、フロントからバックエンドまで一貫して対応できるスキルを持っています。
                特にReactやJavaを活用したUI設計とDB設計に強みがあり、ユーザー目線を大切にした開発を心がけています。

              </Typography>
            </CardContent>
            <CardActions sx={{ mt: "auto" }}>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Box>
        </Box>
      </Card>

     
    </Box>
    <Box sx={{backgroundColor:"#f5f5f5",textAlign:"left",width: "100%",mt:2,lineHeight: 2,border: "1px solid #ccc", p: 2,borderRadius: 2}} > 
                これまで、JavaやReactを中心としたWebシステム開発に従事し、
                設計から実装・テストまで幅広く経験してまいりました。特にMUIを用いた使いやすいUI設計や、
                データベース設計・運用に強みがあります。常にユーザー目線を意識し、
                利便性の高いシステムを提供することを大切にしています。
                今後も新しい技術を積極的に取り入れ、より多くの方に価値を届けられるエンジニアとして貢献したいと考えています。
    </Box>
    </Container>
  )
}

export default Home





 -->
