import './globals.css'


export const metadata = {
  title: "Yuta Hamasaki's Portfolio",
  description: "This is Yuta Hamasaki's  Portfolio site",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
