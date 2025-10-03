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
      <Card sx={{width: "100%", backgroundColor: "#ccc", }}>
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
                 <text >UI/UX重視のWeb開発エンジニア</text> <br />
                  <br />
                <text>J.FL ケイフレイ</text><br />
              
<br />
                <text>電話番号:</text>
                <text>12-3456-7890</text><br />
<br />
                <text>メールアドレス:</text>
                <text>info@mysite.co.jp</text><br />
<br />
                <text>住所:</text> 

                <text> 〒114-0034  
                東京都北区十条0-0-0</text> <br />
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
    <Box sx={{textAlign:"left",width: "100%"}} > 
                私はこれまで、JavaやReactを中心としたWebシステム開発に従事し、
                設計から実装・テストまで幅広く経験してまいりました。特にMUIを用いた使いやすいUI設計や、
                データベース設計・運用に強みがあります。常にユーザー目線を意識し、
                利便性の高いシステムを提供することを大切にしています。
                今後も新しい技術を積極的に取り入れ、より多くの方に価値を届けられるエンジニアとして貢献したいと考えています。
    </Box>
    </Container>
  )
}

export default Home




