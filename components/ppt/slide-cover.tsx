"use client"

import { MapPin, Database, BarChart3, Layers } from "lucide-react"

// PPT 封面页组件
export function SlideCover() {
  return (
    <div className="relative w-full h-full bg-[var(--bg-primary)] overflow-hidden flex flex-col">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-[var(--banana-yellow)]/20 to-transparent blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-[var(--banana-yellow-light)]/15 to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-b from-[var(--black-10)]/50 to-transparent blur-3xl" />
      </div>

      {/* 网格背景 */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--black) 1px, transparent 1px), linear-gradient(90deg, var(--black) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* 主内容区 */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-8 md:px-16">
        {/* Logo 标识 */}
        <div className="mb-5 flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--banana-yellow)] to-[var(--banana-yellow-dark)] flex items-center justify-center shadow-lg shadow-[var(--banana-yellow)]/30">
            <MapPin className="w-6 h-6 text-[var(--black)]" />
          </div>
          <span className="text-lg font-semibold text-[var(--text-secondary)]">地图帮</span>
        </div>

        {/* 主标题 */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-center text-[var(--text-primary)] mb-4 tracking-tight">
          <span className="inline-block bg-gradient-to-r from-[#ca8a04] via-[#f97316] to-[#ec4899] bg-clip-text text-transparent bg-[length:200%] animate-gradient">
            地图帮桌面端
          </span>
        </h1>

        {/* 副标题 */}
        <p className="text-base md:text-lg lg:text-xl text-[var(--text-secondary)] text-center max-w-3xl mb-8 leading-relaxed font-medium">
          把地理数据查询、处理、制图与分析，
          <br className="hidden md:block" />
          串成一条真正能落地的工作链路
        </p>

        {/* 特性标签 */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          {[
            { icon: Database, text: "本地处理更安心" },
            { icon: Layers, text: "表格到地图更直接" },
            { icon: BarChart3, text: "从数据到判断更顺" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-primary)] transition-all duration-[var(--transition-base)] hover:border-[var(--banana-yellow)] hover:bg-[var(--banana-yellow-pale)]"
            >
              <item.icon className="w-4 h-4 text-[var(--banana-yellow-dark)]" />
              <span className="text-sm font-medium text-[var(--text-primary)]">{item.text}</span>
            </div>
          ))}
        </div>

        {/* 用途说明 */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-[var(--text-tertiary)]">
          <span className="px-3 py-1.5 rounded-lg bg-[var(--bg-tertiary)]">产品介绍</span>
          <span className="text-[var(--border-primary)]">·</span>
          <span className="px-3 py-1.5 rounded-lg bg-[var(--bg-tertiary)]">功能概览</span>
          <span className="text-[var(--border-primary)]">·</span>
          <span className="px-3 py-1.5 rounded-lg bg-[var(--bg-tertiary)]">应用场景</span>
          <span className="text-[var(--border-primary)]">·</span>
          <span className="px-3 py-1.5 rounded-lg bg-[var(--bg-tertiary)]">快速上手</span>
        </div>
      </div>

      {/* 底部页码 */}
      <div className="relative py-6 flex items-center justify-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-1 rounded-full bg-[var(--banana-yellow)]" />
          <span className="text-xs font-medium text-[var(--text-tertiary)]">01 / 07</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  )
}
