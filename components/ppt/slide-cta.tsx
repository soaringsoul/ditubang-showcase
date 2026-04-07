"use client"

import { Download, Globe, Search, Monitor, Building2, Truck, GraduationCap, Heart, Users, CheckCircle, Star, ArrowRight, MapPin } from "lucide-react"

export function SlideCTA() {
  const teams = [
    { icon: Building2, text: "连锁零售、餐饮、便利店、药店等品牌团队" },
    { icon: Truck, text: "物流配送、区域运营、渠道管理团队" },
    { icon: Search, text: "城市研究、咨询、规划、选址团队" },
    { icon: Heart, text: "教育、医疗、养老、社区服务评估项目" },
    { icon: GraduationCap, text: "高校实验室、课题组与科研团队" },
    { icon: Users, text: "对数据敏感、需要尽量本地处理的企业或单位" },
  ]

  const entries = [
    {
      icon: Download,
      title: "先下载桌面端",
      url: "dtbgis.com/zh/page/dtb_download/",
      primary: true,
    },
    {
      icon: Monitor,
      title: "想直接在线体验",
      url: "dtbgis.cn",
    },
    {
      icon: Globe,
      title: "想先整体了解产品",
      url: "dtbgis.com",
    },
  ]

  return (
    <div className="relative w-full h-full bg-[var(--bg-primary)] overflow-hidden flex flex-col">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gradient-to-bl from-[var(--banana-yellow)]/15 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-emerald-100/30 to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-b from-[var(--black-10)]/30 to-transparent blur-3xl" />
      </div>

      {/* 头部 */}
      <div className="relative px-8 md:px-12 pt-6 pb-3">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1.5 h-8 rounded-full bg-gradient-to-b from-[var(--banana-yellow)] to-[var(--banana-yellow-dark)]" />
          <span className="text-sm font-medium text-[var(--text-tertiary)]">06 / 06</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
          适合谁先用？怎么开始
        </h2>
      </div>

      {/* 主内容 */}
      <div className="relative flex-1 px-8 md:px-12 py-3 overflow-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 左侧：适合谁 */}
          <div className="space-y-4">
            {/* 核心描述 */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[var(--banana-yellow-pale)] to-[var(--bg-secondary)] border border-[var(--banana-yellow)]/30">
              <h3 className="font-bold text-[var(--text-primary)] mb-3">
                如果您的工作经常涉及位置、区域、门店或地址数据，地图帮将是理想的工具选择
              </h3>
              <p className="text-sm text-[var(--text-tertiary)]">典型应用团队：</p>
            </div>

            {/* 团队列表 */}
            <div className="grid grid-cols-1 gap-2">
              {teams.map((team, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-secondary)] transition-all duration-[var(--transition-fast)] hover:border-[var(--banana-yellow)]/50"
                >
                  <div className="w-8 h-8 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-primary)] flex items-center justify-center shrink-0">
                    <team.icon className="w-4 h-4 text-[var(--text-secondary)]" />
                  </div>
                  <span className="text-sm text-[var(--text-secondary)]">{team.text}</span>
                </div>
              ))}
            </div>

            {/* 免费试用提示 */}
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-[var(--success)]" />
                <h4 className="font-bold text-[var(--text-primary)]">免费体验</h4>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                桌面端的所有功能，免费用户都可以先行体验。欢迎下载试用，体验完整工作流程。
              </p>
              <div className="mt-2 flex items-center gap-2">
                <Star className="w-4 h-4 text-[var(--banana-yellow-dark)]" />
                <span className="text-sm font-medium text-[var(--banana-yellow-dark)]">
                  数据魔方 17 个工具免费使用，不限数据行数
                </span>
              </div>
            </div>
          </div>

          {/* 右侧：怎么开始 */}
          <div className="space-y-4">
            {/* 入口卡片 */}
            <div className="p-5 rounded-2xl bg-[var(--black)] text-white">
              <h3 className="font-bold text-lg mb-4">第一次接触地图帮，建议这样开始</h3>
              <div className="space-y-3">
                {entries.map((entry, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-[var(--transition-fast)] ${entry.primary ? 'bg-gradient-to-r from-[var(--banana-yellow)] to-[var(--banana-yellow-dark)] text-[var(--black)]' : 'bg-white/10 hover:bg-white/15'}`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${entry.primary ? 'bg-[var(--black)]/20' : 'bg-white/10'}`}>
                      <entry.icon className={`w-5 h-5 ${entry.primary ? 'text-[var(--black)]' : 'text-white'}`} />
                    </div>
                    <div className="flex-1">
                      <p className={`font-semibold text-sm ${entry.primary ? 'text-[var(--black)]' : 'text-white'}`}>{entry.title}</p>
                      <code className={`text-xs ${entry.primary ? 'text-[var(--black)]/70' : 'text-white/60'}`}>{entry.url}</code>
                    </div>
                    <ArrowRight className={`w-4 h-4 ${entry.primary ? 'text-[var(--black)]' : 'text-white/50'}`} />
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-white/60 text-center">
                记不住链接也没关系，浏览器直接搜索：<strong className="text-white">地图帮官网</strong>
              </p>
            </div>

            {/* 一句话总结 */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-tertiary)] border border-[var(--border-primary)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--banana-yellow)] to-[var(--banana-yellow-dark)] flex items-center justify-center shadow-lg shadow-[var(--banana-yellow)]/30">
                  <MapPin className="w-5 h-5 text-[var(--black)]" />
                </div>
                <h3 className="font-bold text-[var(--text-primary)]">一句话总结</h3>
              </div>
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-secondary)]">
                  <p className="text-sm text-[var(--text-primary)]">
                    <strong className="text-[var(--banana-yellow-dark)]">地图帮桌面端</strong>，适合认真处理数据、认真做地图、认真做判断。
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-secondary)]">
                  <p className="text-sm text-[var(--text-primary)]">
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
