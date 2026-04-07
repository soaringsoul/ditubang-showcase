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
      color: "from-[var(--black-80)] to-[var(--text-primary)]",
      bgColor: "bg-[var(--bg-secondary)]",
      borderColor: "border-[var(--border-primary)]",
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
      color: "from-[var(--black-60)] to-[var(--black-80)]",
      bgColor: "bg-[var(--bg-tertiary)]",
      borderColor: "border-[var(--border-primary)]",
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
          <span className="text-sm font-medium text-[var(--text-tertiary)]">02 / 08</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[var(--text-primary)] to-[var(--banana-yellow-dark)] bg-clip-text text-transparent">
          先找到入口：桌面端怎么下，在线平台怎么进
        </h2>
        <p className="mt-1 text-sm text-[var(--text-secondary)]">记不住地址也没关系，浏览器搜索「地图帮官网」即可找回所有入口</p>
      </div>

      {/* 主内容 */}
      <div className="relative flex-1 px-6 md:px-10 py-4 flex flex-col justify-between overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {entries.map((entry) => (
            <div
              key={entry.number}
              className={`group relative rounded-2xl border ${entry.borderColor} ${entry.bgColor} p-5 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 ${entry.highlight ? 'ring-2 ring-[var(--banana-yellow)]/50 shadow-[0_4px_12px_rgba(255,215,0,0.3)]' : ''}`}
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
              <a href={`https://${entry.url}`} target="_blank" rel="noopener noreferrer" className="inline-block px-2 py-1 rounded-md bg-[var(--bg-primary)] text-sm font-mono text-[var(--text-secondary)] mb-3 border border-[var(--border-secondary)] hover:text-[var(--banana-yellow-dark)] hover:border-[var(--banana-yellow)] transition-colors cursor-pointer">
                {entry.url}
              </a>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{entry.description}</p>
            </div>
          ))}
        </div>

        {/* 判断原则 */}
        <div className="p-5 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-primary)]">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="w-5 h-5 text-[var(--banana-yellow-dark)]" />
            <h3 className="font-bold text-base text-[var(--text-primary)]">不知道先用哪个，就按这个原则判断</h3>
          </div>
          <div className="space-y-3">
            {[
              { action: "要处理数据、出图、分析", result: "桌面端" },
              { action: "要在线查看、共享成果、团队协作", result: "在线平台" },
              { action: "最常见的使用方式", result: "先桌面端做好，再在线平台分享" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-sm">
                <span className="text-[var(--text-secondary)]">{item.action}</span>
                <ArrowRight className="w-4 h-4 text-[var(--banana-yellow-dark)] shrink-0" />
                <span className="font-semibold text-[var(--text-primary)]">{item.result}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 提示 */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-[var(--banana-yellow-pale)] to-transparent border-l-4 border-[var(--banana-yellow)]">
          <p className="text-sm text-[var(--text-secondary)]">
            <strong className="text-[var(--text-primary)]">找不到入口？</strong>
            在浏览器搜索「<strong>地图帮官网</strong>」，从官网首页可以找到桌面端下载页和在线平台的所有入口。
          </p>
        </div>
      </div>
    </div>
  )
}
