"use client"

import { Download, Globe, Monitor, ArrowRight, MapPin, CheckCircle, Star } from "lucide-react"

export function SlideStart() {
  const entries = [
    {
      icon: Download,
      title: "下载桌面端 → 本地处理数据、制图、分析",
      url: "dtbgis.com/zh/page/dtb_download/",
      primary: true,
    },
    {
      icon: Monitor,
      title: "进入在线平台 → 在线查看、共享、协作",
      url: "dtbgis.cn",
    },
    {
      icon: Globe,
      title: "访问官网 → 整体了解产品与服务",
      url: "dtbgis.com",
    },
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
          <span className="text-sm font-medium text-[var(--text-tertiary)]">07 / 08</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[var(--text-primary)] to-[var(--banana-yellow-dark)] bg-clip-text text-transparent">
          怎么开始？记住这四个地址
        </h2>
      </div>

      {/* 主内容 */}
      <div className="relative flex-1 px-6 md:px-10 py-4 flex flex-col justify-center overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 左侧：入口卡片 */}
          <div>
            <div className="p-6 rounded-2xl bg-[var(--banana-yellow-pale)] border border-[var(--banana-yellow)]/30 border-l-4 border-l-[var(--banana-yellow)] h-full flex flex-col">
              <h3 className="font-bold text-lg mb-5 text-[var(--text-primary)]">第一次接触地图帮，建议这样开始</h3>
              <div className="space-y-3 flex-1">
                {entries.map((entry, index) => (
                  <a
                    key={index}
                    href={`https://${entry.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-200 no-underline ${entry.primary ? 'bg-gradient-to-r from-[var(--banana-yellow)] to-[var(--banana-yellow-dark)] shadow-[0_4px_12px_rgba(255,215,0,0.3)]' : 'bg-[var(--bg-primary)] border border-[var(--banana-yellow)]/20 hover:border-[var(--banana-yellow)]/40'}`}
                  >
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${entry.primary ? 'bg-[var(--black)]/15' : 'bg-[var(--banana-yellow)]/10'}`}>
                      <entry.icon className={`w-5 h-5 ${entry.primary ? 'text-[var(--black)]' : 'text-[var(--banana-yellow-dark)]'}`} />
                    </div>
                    <div className="flex-1">
                      <p className={`font-semibold text-sm ${entry.primary ? 'text-[var(--black)]' : 'text-[var(--text-primary)]'}`}>{entry.title}</p>
                      <code className={`text-sm ${entry.primary ? 'text-[var(--black)]/70' : 'text-[var(--text-tertiary)]'}`}>{entry.url}</code>
                    </div>
                    <ArrowRight className={`w-5 h-5 ${entry.primary ? 'text-[var(--black)]/70' : 'text-[var(--text-tertiary)]'}`} />
                  </a>
                ))}
              </div>
              <p className="mt-5 text-sm text-[var(--text-tertiary)] text-center">
                记不住链接也没关系，浏览器直接搜索：<strong className="text-[var(--text-primary)]">地图帮官网</strong>
              </p>
            </div>
          </div>

          {/* 右侧：总结与免费体验 */}
          <div className="flex flex-col gap-5">
            {/* 免费体验提示 */}
            <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-6 h-6 text-[var(--success)]" />
                <h4 className="font-bold text-base text-[var(--text-primary)]">免费体验</h4>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                桌面端所有功能，免费用户都可以先行体验。欢迎下载试用，体验完整工作流程。
              </p>
              <div className="mt-3 flex items-center gap-2">
                <Star className="w-5 h-5 text-[var(--banana-yellow-dark)]" />
                <span className="text-sm font-medium text-[var(--banana-yellow-dark)]">
                  数据魔方 17 个工具免费使用，不限数据行数
                </span>
              </div>
            </div>

            {/* 一句话总结 */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-tertiary)] border border-[var(--border-primary)] flex-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--banana-yellow)] to-[var(--banana-yellow-dark)] flex items-center justify-center shadow-lg shadow-[var(--banana-yellow)]/30">
                  <MapPin className="w-6 h-6 text-[var(--black)]" />
                </div>
                <h3 className="font-bold text-base text-[var(--text-primary)]">一句话总结</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-secondary)]">
                  <p className="text-base text-[var(--text-primary)] leading-relaxed">
                    <strong className="text-[var(--banana-yellow-dark)]">地图帮桌面端</strong>，适合认真处理数据、认真做地图、认真做判断。
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-secondary)]">
                  <p className="text-base text-[var(--text-primary)] leading-relaxed">
                    <strong className="text-[var(--banana-yellow-dark)]">地图帮在线平台</strong>，适合在线查看成果、共享链接和团队协作。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
