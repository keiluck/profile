import React from "react";
import { Card, CardContent } from "@mui/material";
import { Button } from "@mui/material";
//import { Linkedin, Twitter, Facebook, Instagram } from "@mui/material/Icons";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header Section */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">履歴書サイト</h1>
        <nav className="space-x-4">
          <a href="#career" className="hover:underline">職歴</a>
          <a href="#education" className="hover:underline">学歴</a>
          <a href="#clients" className="hover:underline">クライアント</a>
          <a href="#skills" className="hover:underline">技能</a>
          <a href="#contact" className="hover:underline">お問い合わせ</a>
        </nav>
      </header>

      {/* Profile Section */}
      <section className="bg-indigo-900 text-white py-12">
        <div className="max-w-5xl mx-auto flex items-center gap-8">
          <img
            src="https://via.placeholder.com/180"
            alt="プロフィール"
            className="rounded-md shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold mb-2">掲 富麗</h2>
            <p className="text-lg">職種：フロントエンドエンジニア</p>
            <p className="mt-2">所在地：東京都新宿区</p>
            <p className="mt-1">メール：sample@example.com</p>
            <p className="mt-1">電話番号：080-1234-5678</p>

            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a href="#"><LinkedInIcon /></a>
              <a href="#"><LinkedInIcon /></a>
              <a href="#"><LinkedInIcon /></a>
              <a href="#"><LinkedInIcon /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 text-center max-w-3xl mx-auto">
        <p className="text-lg">
          こんにちは、掲 富麗です。<br />
          フロントエンド開発を中心に、UI/UX改善やWebアプリケーション開発に携わってきました。
          技術力を活かしながら、より多くのユーザーに使いやすいサービスを提供できるよう取り組んでいます。
        </p>
      </section>

      {/* Career Section */}
      <section id="career" className="py-12 bg-gray-100">
        <h3 className="text-2xl font-bold text-center mb-8">職歴</h3>
        <div className="max-w-4xl mx-auto space-y-6">
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold">2019-2023 株式会社AAA</h4>
              <p>フロントエンドエンジニアとしてWebアプリ開発に従事。React/Next.jsを用いた開発、UI改善を担当。</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold">2015-2019 株式会社BBB</h4>
              <p>業務システムの設計・開発を担当。JavaやSQLを用いたバックエンドとの連携を経験。</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-12">
        <h3 className="text-2xl font-bold text-center mb-8">学歴</h3>
        <div className="max-w-4xl mx-auto space-y-6">
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold">2011-2015 東京工業大学</h4>
              <p>情報工学部にてプログラミング、ソフトウェア工学を専攻。</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-12 bg-gray-100 text-center">
        <h3 className="text-2xl font-bold mb-8">クライアント</h3>
        <div className="flex justify-center space-x-8">
          <span className="text-gray-500">T-Plus</span>
          <span className="text-gray-500">S-Net</span>
          <span className="text-gray-500">OGEN</span>
          <span className="text-gray-500">MAPLUS</span>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12">
        <h3 className="text-2xl font-bold text-center mb-8">技能</h3>
        <div className="max-w-4xl mx-auto grid grid-cols-2 gap-6">
          <Card><CardContent className="p-6">Microsoft Excel - 上級</CardContent></Card>
          <Card><CardContent className="p-6">Microsoft Word - 上級</CardContent></Card>
          <Card><CardContent className="p-6">PowerPoint - 上級</CardContent></Card>
          <Card><CardContent className="p-6">Adobe - 上級</CardContent></Card>
          <Card><CardContent className="p-6">日本語 - 母語</CardContent></Card>
          <Card><CardContent className="p-6">英語 - 中級</CardContent></Card>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-indigo-900 text-white text-center py-6">
        <p>© 2025 掲 富麗 - 履歴書サイト</p>
      </footer>
    </div>
  );
}
