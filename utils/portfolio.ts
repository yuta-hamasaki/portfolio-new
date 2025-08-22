import vancastrologo from '@/public/vancastro-logo.png'
import myportfolio from '@/public/myportfolio.png'
import howtofit from '@/public/Screenshot 2024-11-26 at 15.36.41.png'


export const Portfolio_Data = [
    {id:"aiwordquiz", 
    category: "personal", 
    title: "Ai Word Quiz", 
    description: "Next.js, Typescript, TailwindCSS, Microcms, Stripe, Supabase, OpenAIAPIを使用した単語学習アプリです。実際に2人のユーザーに使用してもらい、フィードバックを元に改善を重ねております。ランディングページは運用しやすいようにMicroCMSを導入しました", link: "https://aiwordquiz.com/landing", 
    imageSrc: howtofit, 
    imageAlt: "zen-eats", 
    stacks: ["Next.js", "Typescript", "TailwindCSS", "Microcms", "Stripe", "Supabase", "OpenAIAPI"] }, 
    // vancastro
    {id:"vancastro", 
      category: "team", 
      title: "VanCastro", 
      description: "学校の最終課題で実際にカナダの企業様の問題を解決しました。Next.js, Typescript,Nodejs, Postgressなどを使用して、企業様の要望に応じたWebアプリケーションを開発しました。", 
      link: "https://www.yutahamasaki.com/projects/vancastro", 
      imageSrc: vancastrologo, 
      imageAlt: "vancastro", 
      stacks: ["Next.js", "Node.js", "Typescript", "TailwindCSS", "QuickbookAPI", "schadcn"] },
]

export const showCaseData = [
  {id:"portfolio", category: "personal", title: "My Portfolio", description: "This is my portfolio-site made with Next.js, Typescript, TailwindCSS and Email.js", link: "https://yutahamasaki.com", imageSrc: myportfolio, imageAlt: "zen-eats", stacks: ["Next.js", "Typescript", "TailwindCSS"], gitLink: "https://github.com/yuta-hamasaki/portfolio-new.git", videoLink: "https://www.youtube.com/embed/VojNti4rNhE" },
  {id:"aiwordquiz", category: "personal", title: "AI Word Quiz", description: "Next.js, Typescript, TailwindCSS, Microcms, Stripe, Supabase, OpenAIAPIを使用した単語学習アプリです。実際に2人のユーザーに使用してもらい、フィードバックを元に改善を重ねております。ランディングページは運用しやすいようにMicroCMSを導入しました", link: "https://aiwordquiz", imageSrc: myportfolio, imageAlt: "zen-eats",     stacks: ["Next.js", "Typescript", "TailwindCSS", "Microcms", "Stripe", "Supabase", "OpenAIAPI"], gitLink: "https://github.com/yuta-hamasaki/ai-quiz-app", videoLink: "https://www.youtube.com/embed/VojNti4rNhE" },
//vancastro
    {id:"vancastro", category: "team", title: "Vancastro Driving School", description: "ファイナルプロジェクトで、私はプロジェクトマネージャー兼フルスタックエンジニアとして参加しました。プロジェクト内容は、カナダの自動車学校向けの生徒入会およびレッスン予約システムの開発です。外部の会計システムとの連携も実装し、技術選定からクライアントとのミーティングまで、すべての工程を経験しました。使用技術は、フロントエンドに Next.js、バックエンドに Node.js（Express）、データベースに PostgreSQL を採用しました。", link: "https://www.yutahamasaki.com/projects/vancastro", imageSrc: vancastrologo, imageAlt: "vancastro",     stacks: ["Next.js", "Node.js(Express)", "Typescript", "TailwindCSS", "Quickbook api", "schadcn-ui"], gitLink: "https://github.com/yuta-hamasaki/ai-quiz-app", videoLink: "https://www.youtube.com/embed/VojNti4rNhE" },
]