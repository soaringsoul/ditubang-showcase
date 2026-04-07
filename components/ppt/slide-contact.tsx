"use client"

import { Search, Globe, Download, Monitor, MessageCircle, Phone, Mail, MapPin } from "lucide-react"

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
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gradient-to-tr from-blue-100/20 to-transparent blur-3xl" />
      </div>

      {/* 头部 */}
      <div className="relative px-6 md:px-10 pt-5 pb-1">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-1.5 h-8 rounded-full bg-gradient-to-b from-[var(--banana-yellow)] to-[var(--banana-yellow-dark)]" />
          <span className="text-sm font-medium text-[var(--text-tertiary)]">08 / 08</span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-[var(--text-primary)]">
          联系我们 / 如何找到地图帮
        </h2>
      </div>

      {/* 主内容 */}
      <div className="relative flex-1 px-6 md:px-10 py-2 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
          {/* 左侧：四层入口 */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-1">
              四种方式找到地图帮
            </h3>
            <div className="space-y-2 flex-1">
              {entries.map((entry, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 p-2.5 rounded-xl border transition-all ${
                    entry.accent
                      ? "bg-gradient-to-r from-[var(--banana-yellow)]/10 to-[var(--banana-yellow)]/5 border-[var(--banana-yellow)]/40"
                      : "bg-[var(--bg-secondary)] border-[var(--border-primary)]"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
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
                      <a href={entry.url} target="_blank" rel="noopener noreferrer" className="font-bold text-sm text-[var(--text-primary)] mt-0.5 break-all hover:text-[var(--banana-yellow-dark)] transition-colors cursor-pointer block">
                        {entry.value}
                      </a>
                    ) : (
                      <p className="font-bold text-sm text-[var(--text-primary)] mt-0.5 break-all">
                        {entry.value}
                      </p>
                    )}
                    <p className="text-[11px] text-[var(--text-tertiary)] mt-0.5 leading-tight">{entry.hint}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* 底部兜底提示 */}
            <div className="mt-1 p-2 rounded-lg bg-[var(--black)] text-center">
              <p className="text-[11px] text-white/80">
                在手机上看 PDF、点不开链接？请直接在浏览器搜索：<strong className="text-white">地图帮官网</strong>
              </p>
            </div>
          </div>

          {/* 右侧：联系方式 + 入口关系说明 */}
          <div className="flex flex-col gap-3">
            {/* 联系方式 */}
            <div className="p-4 rounded-2xl bg-[var(--black)] text-white flex-1">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-[var(--banana-yellow)]" />
                <h3 className="font-bold text-sm">产品经理直接对接</h3>
              </div>
              <p className="text-xs text-white/60 mb-3 leading-relaxed">
                有合作意向、定制需求或任何疑问，欢迎直接联系。通常 24 小时内回复。
              </p>
              <div className="space-y-2.5">
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/10">
                  <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/50">微信（推荐，最快响应）</p>
                    <p className="text-sm font-bold text-white">soaringsoul</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/10">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/50">电话</p>
                    <p className="text-sm font-bold text-white">18683956529</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/10">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/50">邮箱</p>
                    <p className="text-sm font-bold text-white">951683309@qq.com</p>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-[10px] text-white/40 text-center">
                备注「商务手册」优先响应 · 服务时间 周一至周日 9:00-18:00
              </p>
            </div>

            {/* 入口关系说明 */}
            <div className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-primary)]">
              <h4 className="text-xs font-bold text-[var(--text-primary)] mb-2">三个入口的关系</h4>
              <div className="flex items-center gap-2 text-[11px] text-[var(--text-secondary)]">
                <a href="https://dtbgis.com" target="_blank" rel="noopener noreferrer" className="px-2 py-1 rounded bg-[var(--bg-primary)] border border-[var(--border-secondary)] font-medium text-[var(--text-primary)] hover:text-[var(--banana-yellow-dark)] hover:border-[var(--banana-yellow)] transition-colors cursor-pointer">dtbgis.com</a>
                <span>→ 官网总入口，从这里可以找到下载页和在线平台</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[var(--text-secondary)] mt-1.5">
                <a href="https://dtbgis.com/zh/page/dtb_download/" target="_blank" rel="noopener noreferrer" className="px-2 py-1 rounded bg-[var(--bg-primary)] border border-[var(--border-secondary)] font-medium text-[var(--text-primary)] hover:text-[var(--banana-yellow-dark)] hover:border-[var(--banana-yellow)] transition-colors cursor-pointer">下载页</a>
                <span>→ 安装桌面端，本地处理数据和制图</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[var(--text-secondary)] mt-1.5">
                <a href="https://dtbgis.cn" target="_blank" rel="noopener noreferrer" className="px-2 py-1 rounded bg-[var(--bg-primary)] border border-[var(--border-secondary)] font-medium text-[var(--text-primary)] hover:text-[var(--banana-yellow-dark)] hover:border-[var(--banana-yellow)] transition-colors cursor-pointer">dtbgis.cn</a>
                <span>→ 在线平台，浏览器直接用，管理和分享成果</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
