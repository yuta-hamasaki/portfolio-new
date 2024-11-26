import Zen from '@/public/Zen.jpg';
import myportfolio from '@/public/myportfolio.png'
import howtofit from '@/public/Screenshot 2024-11-26 at 15.36.41.png'
import event from '@/public/Screenshot 2024-11-26 at 15.46.43.png'

export const Portfolio_Data = [
    {id:"howtofit", category: "personal", title: "HowToFit.", description: "This is fitness website made with Node.js(Express), React, Typescript, TailwindCSS.", link: "https://yutahamasaki.vercel.app", imageSrc: howtofit, imageAlt: "zen-eats", stacks: ["Node.js(Express)","React", "Typescript"] },
    {id:"event", category: "team", title: "event app", description: "This is fitness website made with Node.js(Express), React, Typescript, TailwindCSS.", link: "https://yutahamasaki.vercel.app", imageSrc: event, imageAlt: "zen-eats", stacks: ["Node.js(Express)","React", "Typescript"] },
    {id:"zen", category: "personal", title: "Zen eats", description: "This is a website to find vegetarian food restaurants in Japan. I made it with Node.js(Express), Ejs, and MongoDB", link: "https://github.com/yuta-hamasaki/ve-go", imageSrc: Zen, imageAlt: "zen-eats", stacks: ["Node.js (Express)", "Ejs", "MongoDB"] },    
    {id:"portfolio", category: "personal", title: "My Portfolio", description: "This is my portfolio-site made with Next.js, Typescript, TailwindCSS and Email.js", link: "https://yutahamasaki.vercel.app", imageSrc: myportfolio, imageAlt: "zen-eats", stacks: ["Next.js", "Typescript", "TailwindCSS"] },
]

export const showCaseData = [
  {id:"zen", category: "team", title: "Zen eats", description: "This is a website to find vegetarian food restaurants in Japan. I made it with Node.js(Express), Ejs, and MongoDB", link: "", imageSrc: Zen, imageAlt: "zen-eats", stacks: ["Node.js (Express)", "Ejs", "MongoDB"], gitLink: "https://github.com/yuta-hamasaki/ve-go", videoLink: "https://www.youtube.com/embed/VojNti4rNhE" },
  {id:"portfolio", category: "personal", title: "My Portfolio", description: "This is my portfolio-site made with Next.js, Typescript, TailwindCSS and Email.js", link: "https://yutahamasaki.com", imageSrc: myportfolio, imageAlt: "zen-eats", stacks: ["Next.js", "Typescript", "TailwindCSS"], gitLink: "https://github.com/yuta-hamasaki/portfolio-new.git", videoLink: "https://www.youtube.com/embed/VojNti4rNhE" },
  {id:"howtofit", category: "personal", title: "howtofit", description: "This is fitness website made with Node.js(Express), React, Typescript, TailwindCSS. I made this for school project", link: "https://yutahamasaki.com", imageSrc: myportfolio, imageAlt: "zen-eats", stacks: ["Node.js(Express)","React", "Typescript", "TailwindCSS"], gitLink: "https://github.com/yuta-hamasaki/portfolio-new.git", videoLink: "https://www.youtube.com/embed/VojNti4rNhE" }

]