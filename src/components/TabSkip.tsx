import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container >
      <Typography variant="h4" component="div" sx={{ flexGrow: 1, my: 2,textAlign: 'center' }}>
        履歴書
      </Typography>
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 500 }}
    >
     
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="2025 年５ 月～現在" {...a11yProps(0)} sx={{ lineHeight:3 }} />
        <Tab label="2023 年4 月～2025 年 ４ 月" {...a11yProps(1)} sx={{ lineHeight:3 }} />
        <Tab label="2022 年 3 月～2023 年 3 月" {...a11yProps(2)} sx={{ lineHeight:3 }} />
        <Tab label="2020 年 3 月～2022 年 2 月" {...a11yProps(3)} sx={{ lineHeight:3 }} />
        <Tab label="2015 年 2 月～2020 年 1 月" {...a11yProps(4)} sx={{ lineHeight:3 }} />
        <Tab label="2009 年 6 月～2014 年 12 月 " {...a11yProps(5)} sx={{ lineHeight:3 }} />
        {/* <Tab label="Item Seven" {...a11yProps(6)} /> */}
      </Tabs>
      <TabPanel value={value} index={0}>
        <Box sx={{ height: '60vh', maxWidth: 600, width: '100%', p: 2, overflowY: 'auto', 
        overflowX: 'hidden', }}>
        <b>日発（株式会社）  </b><br />
        <p> IT 企業に向けの案件を従事</p>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, my: 2 ,fontSize: 14,}}>
        現在、日発株式会社向けのIT案件に従事しております。
        主に既存システムの保守・改修と新規機能追加を担当し、
        フロントエンドからバックエンドまで幅広く対応しています。
        要件定義から設計、実装、テストまで一貫して携わり、顧客ニーズを反映した開発を行いました。
        特にReactやJavaを用いたWebアプリ開発に強みを発揮し、ユーザーの利便性向上や業務効率化に貢献しています。
      </Typography>
        </Box>

      
      </TabPanel>
      <TabPanel value={value} index={1}>
       <Box sx={{ height: 500, maxWidth: 600, width: '100%', p: 2, overflowY: 'auto', 
        overflowX: 'hidden', }}>
        <b>マヤ（株式会社）  </b><br />
        <p> IT 企業に向けの案件を従事</p>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, my: 2 ,fontSize: 14,}}>
        マヤ株式会社では、IT企業向けのシステム開発案件に携わり、主にフロントエンド開発を担当しました。JavaScript、React、MUIなどの技術を用い、ユーザーインターフェースの改善やレスポンシブデザイン対応を推進しました。また、バックエンドとのAPI連携やDB設計にも関与し、システム全体の品質向上に寄与しました。プロジェクトにおいてはチーム間の調整やレビュー活動にも積極的に取り組み、安定したリリースに貢献しました。
      </Typography>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box sx={{ height: 500, maxWidth: 600, width: '100%', p: 2, overflowY: 'auto', 
        overflowX: 'hidden', }}>
        <b>華通科技（上海）有限公司  </b><br />
        <p> IT 企業に向けの案件を従事</p>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, my: 2 ,fontSize: 14,}}>
        華通科技（上海）有限公司では、IT企業向けの業務システム開発案件に従事しました。要件定義段階から参画し、設計・実装・テストまで幅広い工程を担当しました。特に、既存システムのリプレイスにおいて、パフォーマンス改善やUI刷新を行い、業務効率の大幅な向上を実現しました。Java、Spring Boot、Reactを中心とした開発環境にて、安定性と拡張性を重視したシステム構築を推進しました。
      </Typography>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={3}>
         <Box sx={{ height: 500, maxWidth: 600, width: '100%', p: 2, overflowY: 'auto', 
        overflowX: 'hidden', }}>
        <b>中粮不動産（上海）有限公司 情報部   </b>
        <br />
        <p> 不動産の企業の情報部に向けの案件を従事</p>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, my: 2 ,fontSize: 14,}}>
        中粮不動産（上海）有限公司の情報部にて、不動産関連業務システムの開発および運用保守を担当しました。主に社内向けシステムの機能追加や改善に従事し、社員の業務効率化を支援しました。フロントエンドではJavaScriptやjQueryを用いた画面実装を行い、バックエンドではJavaとSQLを活用した処理開発を担当しました。利用者の要望を踏まえた改善提案を積極的に行い、社内IT環境の安定稼働に寄与しました。
      </Typography>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Box sx={{ height: 500, maxWidth: 600, width: '100%', p: 2, overflowY: 'auto',
        overflowX: 'hidden', }}>
        <b>易佰情報技術有限公司  </b>
        <br />
        <p> IT 企業に向けの案件を従事 </p>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, my: 2 ,fontSize: 14,}}>
        易佰情報技術有限公司では、複数のIT企業向け案件に参画し、システム開発や運用保守を幅広く経験しました。JavaやJavaScriptを中心とした開発に携わり、要件定義、基本設計、詳細設計、実装、テストまで一貫して対応しました。また、大規模案件ではチームリーダー補佐としてメンバー指導や進捗管理も行い、品質と納期を両立させました。継続的な改善提案と成果物の安定稼働により、顧客から高い評価を得ました。
      </Typography>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Box sx={{ height: 500, maxWidth: 600, width: '100%', p: 2, overflowY:"auto",
        overflowX: 'hidden', }}>
        <b>アイダ設計上海有限公司  </b>
        <br />
        <p> 日本建築設計の会社に向けのWEB デザインを従事 </p>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, my: 2 ,fontSize: 14,}}>
        アイダ設計上海有限公司にて、日本建築設計会社向けのWebデザイン業務に従事しました。建築プロジェクトに関連するWebサイトのデザイン・制作を担当し、HTML、CSS、JavaScriptを駆使してユーザーフレンドリーなサイトを構築しました。設計チームと密に連携し、建築物の特徴を的確に伝えるデザインを追求しました。また、SEO対策や表示速度の改善にも取り組み、利用者満足度の向上に貢献しました。この経験を通じて、UI/UX設計に対する理解を深めました。
        </Typography>
        </Box>
      </TabPanel>
      {/* <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel> */}
    </Box>
    </Container>
  );
}

