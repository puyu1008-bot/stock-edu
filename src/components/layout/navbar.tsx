"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useSession, signOut } from "next-auth/react"
import { BookOpen, BarChart3, BookMarked, User, LogOut, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/tracks/a-shares", label: "A股学习", icon: BarChart3 },
  { href: "/tracks/us-stocks", label: "美股学习", icon: BarChart3 },
  { href: "/glossary", label: "词汇表", icon: BookOpen },
]

export function Navbar() {
  const pathname = usePathname()
  const { data: session } = useSession()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg sm:text-xl shrink-0">
            <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            <span className="hidden sm:inline">股市学堂</span>
            <span className="sm:hidden">学堂</span>
          </Link>
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname.startsWith(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-1 sm:gap-2">
          {session?.user ? (
            <>
              <Link href="/dashboard" className="hidden sm:block">
                <Button variant="ghost" size="sm" className="gap-2">
                  <BookMarked className="h-4 w-4" />
                  <span>我的进度</span>
                </Button>
              </Link>
              <Link href="/dashboard" className="sm:hidden">
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <BookMarked className="h-5 w-5" />
                </Button>
              </Link>
              <div className="hidden sm:flex items-center gap-2 pl-2 border-l">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium max-w-[120px] truncate">
                  {session.user.name || session.user.email}
                </span>
              </div>
              <Button variant="ghost" size="sm" onClick={() => signOut()} className="hidden sm:inline-flex">
                <LogOut className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => signOut()} className="sm:hidden h-10 w-10">
                <LogOut className="h-5 w-5" />
              </Button>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login">
                <Button variant="ghost" size="sm">登录</Button>
              </Link>
              <Link href="/register">
                <Button size="sm">注册</Button>
              </Link>
            </div>
          )}

          {/* Hamburger */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-10 w-10"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "关闭菜单" : "打开菜单"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="flex flex-col p-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "nav-mobile-link flex items-center gap-3 px-4 py-3 rounded-md text-base font-medium",
                  pathname.startsWith(item.href)
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-accent"
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            ))}
            {session?.user && (
              <Link
                href="/dashboard"
                onClick={() => setMobileOpen(false)}
                className="nav-mobile-link flex items-center gap-3 px-4 py-3 rounded-md text-base font-medium text-muted-foreground hover:bg-accent"
              >
                <BookMarked className="h-5 w-5" />
                我的进度
              </Link>
            )}
            {session?.user && (
              <button
                onClick={() => { setMobileOpen(false); signOut() }}
                className="nav-mobile-link flex items-center gap-3 px-4 py-3 rounded-md text-base font-medium text-muted-foreground hover:bg-accent w-full text-left"
              >
                <LogOut className="h-5 w-5" />
                退出登录
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
