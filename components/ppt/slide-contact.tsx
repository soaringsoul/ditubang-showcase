"use client"

import { Search, Globe, Download, Monitor, MessageCircle, Mail, MapPin } from "lucide-react"

export function SlideContact() {
  const entries = [
    {
      icon: Search,
      layer: "搜索找回",
      label: "浏览器搜索",
      value: "地图帮官网",
      hint: "记不住地址时，搜这四个字就够了",
      accent: true,
    },
    {
      icon: Globe,
      layer: "官网总入口",
      label: "官网",
      value: "dtbgis.com",
      url: "https://dtbgis.com",
      hint: "产品介绍、下载入口、服务说明",
    },
    {
      icon: Download,
      layer: "安装入口",
      label: "桌面端下载",
      value: "dtbgis.com/zh/page/dtb_download/",
      url: "https://dtbgis.com/zh/page/dtb_download/",
      hint: "数据处理、制图、分析 → 下载桌面端",
    },
    {
      icon: Monitor,
      layer: "在线入口",
      label: "在线平台",
      value: "dtbgis.cn",
      url: "https://dtbgis.cn",
      hint: "在线查看、共享链接、团队协作",
    },
  ]

  return (
    <div className="relative w-full h-full bg-[var(--bg-primary)] overflow-hidden flex flex-col">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-gradient-to-bl from-[var(--banana-yellow)]/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gradient-to-tr from-[var(--banana-yellow-light)]/12 to-transparent blur-3xl" />
      </div>

      {/* 头部 */}
      <div className="relative px-6 md:px-10 pt-5 pb-1">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-1.5 h-8 rounded-full bg-gradient-to-b from-[var(--banana-yellow)] to-[var(--banana-yellow-dark)]" />
          <span className="text-sm font-medium text-[var(--text-tertiary)]">08 / 08</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[var(--text-primary)] to-[var(--banana-yellow-dark)] bg-clip-text text-transparent">
          联系我们 / 如何找到地图帮
        </h2>
      </div>
  
      {/* 主内容 */}
      <div className="relative flex-1 px-6 md:px-10 py-3 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 h-full">
          {/* 左侧：四层入口 */}
          <div className="flex flex-col gap-3 h-full">
            <h3 className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-1">
              四种方式找到地图帮
            </h3>
            <div className="grid grid-cols-1 gap-2.5 auto-rows-fr flex-1">
              {entries.map((entry, index) => (
                <div
                  key={index}
                  className={`h-full flex items-start gap-3 p-3 rounded-2xl border transition-all ${
                    entry.accent
                      ? "bg-gradient-to-r from-[var(--banana-yellow)]/10 to-[var(--banana-yellow)]/5 border-[var(--banana-yellow)]/40"
                      : "bg-[var(--bg-secondary)] border-[var(--border-primary)]"
                  }`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                    entry.accent
                      ? "bg-[var(--banana-yellow)] text-[var(--black)]"
                      : "bg-[var(--bg-primary)] border border-[var(--border-secondary)] text-[var(--text-secondary)]"
                  }`}>
                    <entry.icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="text-[10px] font-medium text-[var(--text-tertiary)] uppercase">{entry.layer}</span>
                    </div>
                    {entry.url ? (
                      <a href={entry.url} target="_blank" rel="noopener noreferrer" className="font-bold text-[15px] text-[var(--text-primary)] mt-0.5 break-all hover:text-[var(--banana-yellow-dark)] transition-colors cursor-pointer block leading-tight">
                        {entry.value}
                      </a>
                    ) : (
                      <p className="font-bold text-[15px] text-[var(--text-primary)] mt-0.5 break-all leading-tight">
                        {entry.value}
                      </p>
                    )}
                    <p className="text-[11px] text-[var(--text-tertiary)] mt-0.5 leading-tight">{entry.hint}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* 底部兜底提示 */}
            <div className="mt-auto p-2.5 rounded-xl bg-gradient-to-r from-[var(--banana-yellow)]/20 to-[var(--banana-yellow)]/10 border border-[var(--banana-yellow)]/30 text-center">
              <p className="text-[11px] text-[var(--text-secondary)]">
                在手机上看 PDF、点不开链接？请直接在浏览器搜索：<strong className="text-[var(--text-primary)]">地图帮官网</strong>
              </p>
            </div>
          </div>

          {/* 右侧：联系方式 + 入口关系说明 */}
          <div className="flex flex-col h-full">
            {/* 联系方式 */}
            <div className="p-4 rounded-2xl bg-[var(--banana-yellow-pale)] border border-[var(--banana-yellow)]/30 border-l-4 border-l-[var(--banana-yellow)] flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-[var(--banana-yellow-dark)]" />
                <h3 className="font-bold text-sm text-[var(--text-primary)]">产品经理直接对接</h3>
              </div>
              <p className="text-xs text-[var(--text-secondary)] mb-3 leading-relaxed">
                有合作意向、定制需求或任何疑问，欢迎直接联系。通常 24 小时内回复。
              </p>
              <div className="space-y-2.5">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--banana-yellow)]/20">
                  <div className="w-8 h-8 rounded-lg bg-[var(--banana-yellow)]/15 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-[var(--banana-yellow-dark)]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[var(--text-tertiary)]">微信（推荐，最快响应）</p>
                    <p className="text-sm font-bold text-[var(--text-primary)]">soaringsoul</p>
                  </div>
                </div>
 
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--banana-yellow)]/20">
                  <div className="w-8 h-8 rounded-lg bg-[var(--banana-yellow-light)]/20 flex items-center justify-center">
                    <Search className="w-4 h-4 text-[var(--banana-yellow-dark)]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[var(--text-tertiary)]">小红书（搜索「地图帮」后私信）</p>
                    <p className="text-sm font-bold text-[var(--text-primary)]">地图帮</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--banana-yellow)]/20">
                  <div className="w-8 h-8 rounded-lg bg-[var(--banana-yellow)]/10 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-[var(--banana-yellow-dark)]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[var(--text-tertiary)]">邮箱</p>
                    <p className="text-sm font-bold text-[var(--text-primary)]">951683309@qq.com</p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-[10px] text-[var(--text-tertiary)] text-center">
                备注「商务手册」优先响应 · 服务时间 周一至周日 9:00-18:00
              </p>
              {/* 入口关系说明 */}
              <div className="mt-4 pt-4 border-t border-[var(--banana-yellow)]/20">
                <h4 className="text-xs font-bold text-[var(--text-primary)] mb-2.5">三个入口的关系</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[11px] text-[var(--text-secondary)]">
                    <a href="https://dtbgis.com" target="_blank" rel="noopener noreferrer" className="px-2 py-1 rounded bg-[var(--bg-primary)] border border-[var(--border-secondary)] font-medium text-[var(--text-primary)] hover:text-[var(--banana-yellow-dark)] hover:border-[var(--banana-yellow)] transition-colors cursor-pointer">dtbgis.com</a>
                    <span>→ 官网总入口，从这里可以找到下载页和在线平台</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-[var(--text-secondary)]">
                    <a href="https://dtbgis.com/zh/page/dtb_download/" target="_blank" rel="noopener noreferrer" className="px-2 py-1 rounded bg-[var(--bg-primary)] border border-[var(--border-secondary)] font-medium text-[var(--text-primary)] hover:text-[var(--banana-yellow-dark)] hover:border-[var(--banana-yellow)] transition-colors cursor-pointer">下载页</a>
                    <span>→ 安装桌面端，本地处理数据和制图</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-[var(--text-secondary)]">
                    <a href="https://dtbgis.cn" target="_blank" rel="noopener noreferrer" className="px-2 py-1 rounded bg-[var(--bg-primary)] border border-[var(--border-secondary)] font-medium text-[var(--text-primary)] hover:text-[var(--banana-yellow-dark)] hover:border-[var(--banana-yellow)] transition-colors cursor-pointer">dtbgis.cn</a>
                    <span>→ 在线平台，浏览器直接用，管理和分享成果</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
