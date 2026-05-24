import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/layout/providers"
import { Navbar } from "@/components/layout/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "股市学堂 - 从零开始的股票投资学习平台",
  description: "系统性的股票市场教育平台，涵盖A股和美股，从零基础到实战交易。",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <footer className="border-t py-6 text-center text-sm text-muted-foreground">
              <div className="container mx-auto px-4">
                <p>股市学堂 - 投资有风险，入市需谨慎。本网站仅供教育学习目的，不构成任何投资建议。</p>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  )
}
