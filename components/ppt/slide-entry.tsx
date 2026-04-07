"use client"

import { Globe, Download, Monitor, ArrowRight, Lightbulb } from "lucide-react"

export function SlideEntry() {
  const entries = [
    {
      number: "1",
      icon: Globe,
      title: "官网首页",
      url: "dtbgis.com",
      description: "适合先整体了解地图帮的产品体系和功能架构，是了解产品全貌的最佳起点。",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      number: "2",
      icon: Download,
      title: "桌面端下载页",
      url: "dtbgis.com/zh/page/dtb_download/",
      description: "如果需要处理数据、批量查询、制作地图或进行空间分析，建议直接从这里开始下载安装。",
      color: "from-[var(--banana-yellow)] to-[var(--banana-yellow-dark)]",
      bgColor: "bg-[var(--banana-yellow-pale)]",
      borderColor: "border-[var(--banana-yellow)]",
      highlight: true,
    },
    {
      number: "3",
      icon: Monitor,
      title: "在线平台",
      url: "dtbgis.cn",
      description: "适合在线浏览地图成果、下载数据集，以及与团队成员共享和协作。",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
  ]

  return (
    <div className="relative w-full h-full bg-[var(--bg-primary)] overflow-hidden flex flex-col">
      {/* 背景装饰 */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-gradient-to-bl from-[var(--banana-yellow)]/10 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gradient-to-tr from-[var(--black-10)] to-transparent blur-3xl" />

      {/* 头部 */}
      <div className="relative px-6 md:px-10 pt-5 pb-2">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1.5 h-8 rounded-full bg-gradient-to-b from-[var(--banana-yellow)] to-[var(--banana-yellow-dark)]" />
          <span className="text-sm font-medium text-[var(--text-tertiary)]">02 / 07</span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-[var(--text-primary)]">
          先找到入口：桌面端怎么下，在线平台怎么进
        </h2>
        <p className="mt-1 text-sm text-[var(--text-secondary)]">第一次接触地图帮，先记住这 3 个入口</p>
      </div>

      {/* 主内容 */}
      <div className="relative flex-1 px-6 md:px-10 py-2 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {entries.map((entry) => (
            <div
              key={entry.number}
              className={`group relative rounded-2xl border ${entry.borderColor} ${entry.bgColor} p-4 transition-all duration-[var(--transition-base)] hover:shadow-lg hover:-translate-y-1 ${entry.highlight ? 'ring-2 ring-[var(--banana-yellow)]/50' : ''}`}
            >
              {entry.highlight && (
                <div className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-gradient-to-r from-[var(--banana-yellow)] to-[var(--banana-yellow-dark)] text-xs font-semibold text-[var(--black)]">
                  推荐
                </div>
              )}
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${entry.color} flex items-center justify-center mb-3 shadow-md`}>
                <entry.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{entry.title}</h3>
              <code className="inline-block px-2 py-1 rounded-md bg-[var(--bg-primary)] text-sm font-mono text-[var(--text-secondary)] mb-3 border border-[var(--border-secondary)]">
                {entry.url}
              </code>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{entry.description}</p>
            </div>
          ))}
        </div>

        {/* 判断原则 */}
        <div className="mt-4 p-4 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-primary)]">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className="w-4 h-4 text-[var(--banana-yellow-dark)]" />
            <h3 className="font-bold text-sm text-[var(--text-primary)]">不知道先用哪个，就按这个原则判断</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { action: "要处理数据、出图、分析", result: "桌面端" },
              { action: "要在线查看、共享成果、团队协作", result: "在线平台" },
              { action: "最常见的使用方式", result: "先桌面端做好，再在线平台分享" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <span className="text-[var(--text-secondary)]">{item.action}</span>
                <ArrowRight className="w-4 h-4 text-[var(--banana-yellow-dark)] shrink-0" />
                <span className="font-semibold text-[var(--text-primary)]">{item.result}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 提示 */}
        <div className="mt-3 p-3 rounded-xl bg-gradient-to-r from-[var(--banana-yellow-pale)] to-transparent border-l-4 border-[var(--banana-yellow)]">
          <p className="text-xs text-[var(--text-secondary)]">
            <strong className="text-[var(--text-primary)]">温馨提示：</strong>
            建议先明确核心需求，再选择对应入口开始使用。
          </p>
        </div>
      </div>
    </div>
  )
}
