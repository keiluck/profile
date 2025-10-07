import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Box, Container, Typography } from '@mui/material';

function Home() {
  return (
    <Container maxWidth="md" sx={{ px: { xs: 1, sm: 2 }, py: { xs: 2, sm: 4 } }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 3,
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh",
        }}
      >
        {/* 第一模块：个人卡片 */}
        <Typography  variant="h4" component="div" sx={{ flexGrow: 1, my: 2,textAlign: 'center' }}>
          自己紹介
        </Typography>
        <Card
          sx={{
            width: "100%",
            minHeight: { xs: 320, sm: 360 },
            height: { xs: "auto", sm: 360 }, // 新增，确保高度一致
            background: "linear-gradient(135deg, #e3f0ff 0%, #f4f8fd 100%)",
            boxShadow: 4,
            borderRadius: 3,
            overflow: "hidden",
            border: "1px solid #e0e7ef",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "stretch",
          }}
        >
          {/* 左侧图片 */}
          <CardMedia
            sx={{
              width: { xs: "100%", sm: "40%" },
              minHeight: { xs: 160, sm: "100%" },
              height: { xs: 160, sm: "100%" },
              maxHeight: { xs: 400, sm: "100%" },
              objectFit: "cover",
              borderRadius: { xs: "0", sm: "12px 0 0 12px" },
              boxShadow: { xs: 0, sm: 2 },
            }}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWNV0281AeqoqsvLqgMOIQ2pMKVG2kyUb6AQ&s"
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
              px: { xs: 2, sm: 3 },
              py: { xs: 2, sm: 3 },
              justifyContent: "space-between",
            }}
          >
            <CardContent sx={{ pb: 1 }}>
              <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: 18, fontWeight: "bold", color: "#2563eb" }}>
                <Box sx={{ fontWeight: "bold", fontSize: 26, mb: 1 }}>フロントエンドのエンジニア</Box>
                <Box sx={{ color: "#64748b", fontSize: 16, mb: 2 }}>J.FL ケイフレイ</Box>
                <Box sx={{ fontSize: 15, color: "#374151" }}>
                  <span style={{ fontWeight: 500 }}>電話番号:</span> 070-2869-7890<br />
                  <span style={{ fontWeight: 500 }}>Email:</span> keihappy365@outlook.com<br />
                  <span style={{ fontWeight: 500 }}>住所:</span> 114-0034 東京都北区十条5-10-3
                </Box>
              </Typography>
              <Typography variant="body2" sx={{ color: "#374151", fontSize: 15, mt: 2 }}>
                私はWeb開発において、フロントからバックエンドまで一貫して対応できるスキルを持っています。
                特にReactやJavaを活用したUI設計とDB設計に強みがあり、ユーザー目線を大切にした開発を心がけています。
              </Typography>
            </CardContent>
            <CardActions sx={{ mt: "auto", px: 1 }}>
              <Button size="small" sx={{ color: "#2563eb", fontWeight: 600 }}>Share</Button>
              <Button size="small" sx={{ color: "#2563eb", fontWeight: 600 }}>Learn More</Button>
            </CardActions>
          </Box>
        </Card>

        {/* 第二模块：介绍区块 */}
        <Box
          sx={{
            width: "100%",
            minHeight: { xs: 200, sm: 240 },
            backgroundColor: "#f4f8fd",
            textAlign: "left",
            lineHeight: 2,
            border: "1px solid #e0e7ef",
            p: { xs: 2, sm: 3 },
            borderRadius: 3,
            color: "#374151",
            fontSize: { xs: 14, sm: 16 },
            boxShadow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "100%" }}>
            これまで、JavaやReactを中心としたWebシステム開発に従事し、
            設計から実装・テストまで幅広く経験してまいりました。特にMUIを用いた使いやすいUI設計や、
            データベース設計・運用に強みがあります。常にユーザー目線を意識し、
            利便性の高いシステムを提供することを大切にしています。
            今後も新しい技術を積極的に取り入れ、より多くの方に価値を届けられるエンジニアとして貢献したいと考えています。
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default Home




