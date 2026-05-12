import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Activity,
  Brain,
  HeartPulse,
  Shield,
  Upload,
  Home,
  Menu,
  Footprints,
  Zap,
  Lock,
  CreditCard,
  BarChart3,
  Award,
  Wallet,
} from "lucide-react";

const navSections = [
  {
    title: "Product",
    items: [
      { path: "/", label: "Home", icon: Home },
      { path: "/demo", label: "Demo Version", icon: Zap, badge: "DEMO" },
      { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    ],
  },
  {
    title: "AI & Biomechanics",
    items: [
      { path: "/gait-analysis", label: "Gait Analysis", icon: Footprints },
      { path: "/risk-report", label: "AI Risk Report", icon: Brain },
      { path: "/recommendations", label: "AI Recommendations", icon: Activity },
      { path: "/rehabilitation", label: "Rehabilitation", icon: HeartPulse },
      { path: "/upload", label: "Upload Data", icon: Upload },
    ],
  },
  {
    title: "Solana Layer",
    items: [
      { path: "/solana-proofs", label: "Solana Proofs", icon: Shield },
      { path: "/privacy", label: "Privacy Architecture", icon: Lock },
      { path: "/payments", label: "Payments & Access", icon: CreditCard },
      { path: "/analytics", label: "Analytics", icon: BarChart3 },
    ],
  },
  {
    title: "Hackathon",
    items: [
      { path: "/hackathon-fit", label: "Hackathon Fit", icon: Award },
    ],
  },
];

export default function Layout() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-sidebar border-r border-sidebar-border flex flex-col transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-6 border-b border-sidebar-border">
          <Link to="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
            <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center">
              <Activity className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="text-base font-bold tracking-tight text-foreground">CourtStep AI</h1>
              <p className="text-[10px] text-muted-foreground font-medium tracking-widest uppercase">Smart Insole Analytics</p>
            </div>
          </Link>
        </div>

        <nav className="flex-1 p-3 space-y-5 overflow-y-auto">
          {navSections.map((section) => (
            <div key={section.title}>
              <p className="px-3 mb-1.5 text-[10px] text-muted-foreground/60 font-bold uppercase tracking-wider">
                {section.title}
              </p>
              <div className="space-y-0.5">
                {section.items.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      <item.icon className={`w-4 h-4 ${isActive ? "text-primary" : ""}`} />
                      <span className="flex-1">{item.label}</span>
                      {item.badge && (
                        <span className="text-[9px] font-bold bg-accent text-accent-foreground px-1.5 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-sidebar-border space-y-2">
          <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-xs font-semibold transition-colors">
            <Wallet className="w-3.5 h-3.5" />
            Connect Wallet
          </button>
          <div className="px-3 py-2 rounded-lg bg-muted/30">
            <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Solana Devnet</p>
            <p className="text-xs text-foreground font-medium mt-0.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Connected
            </p>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        {/* Mobile header */}
        <div className="lg:hidden sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border px-4 py-3 flex items-center gap-3">
          <button onClick={() => setMobileOpen(true)} className="text-foreground">
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold">CourtStep AI</span>
          </div>
        </div>

        <div className="p-4 md:p-8 max-w-[1440px] mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}