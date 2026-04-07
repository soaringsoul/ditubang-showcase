"use client"

import { Search, Building2, Truck, GraduationCap, Heart, Users, Target } from "lucide-react"

export function SlideCTA() {
  const teams = [
    { icon: Building2, text: "连锁零售、餐饮、便利店、药店等品牌团队" },
    { icon: Truck, text: "物流配送、区域运营、渠道管理团队" },
    { icon: Search, text: "城市研究、咨询、规划、选址团队" },
    { icon: Heart, text: "教育、医疗、养老、社区服务评估项目" },
    { icon: GraduationCap, text: "高校实验室、课题组与科研团队" },
    { icon: Users, text: "对数据敏感、需要尽量本地处理的企业或单位" },
  ]

  const strengths = [
    "100+ 内置功能模块，覆盖查、处理、制图、分析全链路",
    "数据全程本地处理，不上传、不外泄",
    "数据魔方 17 个工具免费使用，不限数据行数",
    "桌面端所有功能免费用户均可先行体验",
  ]

  return (
    <div className="relative w-full h-full bg-[var(--bg-primary)] overflow-hidden flex flex-col">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gradient-to-bl from-[var(--banana-yellow)]/15 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-emerald-100/30 to-transparent blur-3xl" />
      </div>

      {/* 头部 */}
      <div className="relative px-6 md:px-10 pt-5 pb-2">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1.5 h-8 rounded-full bg-gradient-to-b from-[var(--banana-yellow)] to-[var(--banana-yellow-dark)]" />
          <span className="text-sm font-medium text-[var(--text-tertiary)]">06 / 08</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[var(--text-primary)] to-[var(--banana-yellow-dark)] bg-clip-text text-transparent">
          适合谁先用？
        </h2>
      </div>

      {/* 主内容 */}
      <div className="relative flex-1 px-6 md:px-10 py-4 flex flex-col justify-center overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 左侧：适合谁 */}
          <div className="space-y-4">
            {/* 核心描述 */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[var(--banana-yellow-pale)] to-[var(--bg-secondary)] border border-[var(--banana-yellow)]/30">
              <h3 className="font-bold text-base text-[var(--text-primary)] mb-2">
                如果您的工作经常涉及位置、区域、门店或地址数据，地图帮将是理想的工具选择
              </h3>
              <p className="text-sm text-[var(--text-tertiary)]">典型应用团队：</p>
            </div>

            {/* 团队列表 - 2列 */}
            <div className="grid grid-cols-2 gap-3">
              {teams.map((team, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-secondary)] transition-all duration-200 hover:border-[var(--banana-yellow)]/50 hover:-translate-y-0.5 hover:shadow-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-primary)] flex items-center justify-center shrink-0">
                    <team.icon className="w-4 h-4 text-[var(--text-secondary)]" />
                  </div>
                  <span className="text-sm text-[var(--text-secondary)]">{team.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 右侧：为什么选地图帮 */}
          <div className="flex flex-col gap-4">
            <div className="p-5 rounded-2xl bg-[var(--banana-yellow-pale)] border border-[var(--banana-yellow)]/30 border-l-4 border-l-[var(--banana-yellow)] flex-1">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-6 h-6 text-[var(--banana-yellow-dark)]" />
                <h3 className="font-bold text-base text-[var(--text-primary)]">为什么选地图帮？</h3>
              </div>
              <div className="space-y-3">
                {strengths.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-[var(--bg-primary)] border border-[var(--banana-yellow)]/20">
                    <div className="w-6 h-6 rounded-full bg-[var(--banana-yellow)]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-[var(--banana-yellow-dark)]">{index + 1}</span>
                    </div>
                    <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 核心理念 */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[var(--banana-yellow-pale)] to-[var(--bg-tertiary)] border border-[var(--border-primary)]">
              <p className="text-base text-[var(--text-primary)] leading-relaxed text-center font-medium">
                <strong className="text-[var(--banana-yellow-dark)]">地图帮</strong>，让地理数据从「散装素材」变成「可用成果」
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
