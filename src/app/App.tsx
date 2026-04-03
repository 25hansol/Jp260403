import { useState } from "react";

export default function App() {
  const [activeSection, setActiveSection] = useState("about");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-medium">Portfolio</div>
          <div className="flex gap-8">
            {["about", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-colors ${
                  activeSection === section
                    ? "text-emerald"
                    : "text-gray-600 hover:text-emerald"
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section id="about" className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="inline-block px-4 py-1 bg-emerald-light rounded-full mb-6">
              <span className="text-emerald-dark">
                Frontend Developer
              </span>
            </div>
            <h1 className="mb-4">山田 太郎</h1>
            <p className="text-gray-600 max-w-2xl">
              ユーザー体験を重視したWebアプリケーション開発を得意としています。
              React、TypeScript、Tailwind
              CSSを使用したモダンなフロントエンド開発に情熱を持っています。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Education */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-10 h-10 bg-emerald-light rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-emerald"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="mb-3">学歴</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-900">東京大学</p>
                  <p className="text-sm text-gray-600">
                    情報工学部
                  </p>
                  <p className="text-sm text-gray-500">
                    2020 - 2024
                  </p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-10 h-10 bg-emerald-light rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-emerald"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="mb-3">経歴</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-900">
                    株式会社テック
                  </p>
                  <p className="text-sm text-gray-600">
                    フロントエンド開発
                  </p>
                  <p className="text-sm text-gray-500">
                    2024 - 現在
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-10 h-10 bg-emerald-light rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-emerald"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="mb-3">資格</h3>
              <div className="space-y-2">
                <p className="text-sm text-gray-900">
                  基本情報技術者
                </p>
                <p className="text-sm text-gray-900">
                  TOEIC 900点
                </p>
                <p className="text-sm text-gray-900">AWS認定</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-12">
            <h3 className="mb-6">スキル</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "TypeScript",
                "Next.js",
                "Tailwind CSS",
                "JavaScript",
                "HTML/CSS",
                "Git",
                "Figma",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:border-emerald transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-12">プロジェクト</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-emerald-light to-emerald/20 flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-emerald"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="mb-2">ECサイト開発</h3>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-emerald-light rounded-full text-sm text-emerald-dark">
                    React
                  </span>
                </div>
                <div className="space-y-2 mb-4">
                  <div>
                    <p className="text-sm text-gray-600">
                      課題:
                    </p>
                    <p className="text-sm">
                      ユーザーフレンドリーなショッピング体験の提供
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">
                      役割:
                    </p>
                    <p className="text-sm">
                      フロントエンド開発、UI/UX設計
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">
                      結果:
                    </p>
                    <p className="text-sm">
                      ページ読み込み速度40%改善、コンバージョン率25%向上
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="mb-2">ダッシュボードアプリ</h3>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 rounded-full text-sm text-blue-700">
                    TypeScript
                  </span>
                </div>
                <div className="space-y-2 mb-4">
                  <div>
                    <p className="text-sm text-gray-600">
                      課題:
                    </p>
                    <p className="text-sm">
                      データの可視化と分析ツールの構築
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">
                      役割:
                    </p>
                    <p className="text-sm">
                      フルスタック開発、データ可視化実装
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">
                      結果:
                    </p>
                    <p className="text-sm">
                      業務効率30%向上、リアルタイムデータ更新実装
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="mb-2">モバイルWebアプリ</h3>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-purple-100 rounded-full text-sm text-purple-700">
                    Next.js
                  </span>
                </div>
                <div className="space-y-2 mb-4">
                  <div>
                    <p className="text-sm text-gray-600">
                      課題:
                    </p>
                    <p className="text-sm">
                      レスポンシブでパフォーマンスの高いアプリ開発
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">
                      役割:
                    </p>
                    <p className="text-sm">
                      フロントエンド設計、PWA実装
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">
                      結果:
                    </p>
                    <p className="text-sm">
                      Lighthouse
                      スコア95点以上、オフライン対応実装
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="mb-2">SNSプラットフォーム</h3>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-orange-100 rounded-full text-sm text-orange-700">
                    React
                  </span>
                </div>
                <div className="space-y-2 mb-4">
                  <div>
                    <p className="text-sm text-gray-600">
                      課題:
                    </p>
                    <p className="text-sm">
                      ユーザー間のコミュニケーション促進
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">
                      役割:
                    </p>
                    <p className="text-sm">
                      フロントエンド開発、リアルタイム機能実装
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">
                      結果:
                    </p>
                    <p className="text-sm">
                      月間アクティブユーザー1万人突破、エンゲージメント50%向上
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-4">お問い合わせ</h2>
          <p className="text-gray-600 mb-12">
            プロジェクトのご相談やご質問がございましたら、お気軽にご連絡ください。
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:example@email.com"
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-emerald-light transition-colors group"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald group-hover:text-white transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="text-sm text-gray-600 group-hover:text-emerald-dark">
                Email
              </p>
              <p className="text-sm">example@email.com</p>
            </a>

            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-emerald-light transition-colors group"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald group-hover:text-white transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-sm text-gray-600 group-hover:text-emerald-dark">
                GitHub
              </p>
              <p className="text-sm">@username</p>
            </a>

            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-emerald-light transition-colors group"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald group-hover:text-white transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <p className="text-sm text-gray-600 group-hover:text-emerald-dark">
                LinkedIn
              </p>
              <p className="text-sm">@username</p>
            </a>
          </div>

          <a
            href="mailto:example@email.com"
            className="inline-block px-8 py-3 bg-emerald text-white rounded-lg hover:bg-emerald-dark transition-colors"
          >
            メールを送る
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-500">
          © 2026 山田 太郎. All rights reserved.
        </div>
      </footer>
    </div>
  );
}