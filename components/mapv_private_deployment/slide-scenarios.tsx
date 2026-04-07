"use client"

import { brand } from "./brand"

const scenarios = [
  {
    icon: "🏛️",
    title: "政务一张图",
    desc: "服务设施、网格管理、应急资源分布",
  },
  {
    icon: "🏪",
    title: "网点管理",
    desc: "门店、营业厅、服务点、仓库分布展示",
  },
  {
    icon: "🚚",
    title: "配送与覆盖分析",
    desc: "站点覆盖、服务半径、区域盲区查看",
  },
  {
    icon: "📈",
    title: "区域经营分析",
    desc: "按区县、街道或片区对比业务指标",
  },
  {
    icon: "🔬",
    title: "科研样本分布",
    desc: "采样点、实验站点、研究区域对比",
  },
  {
    icon: "📦",
    title: "物流网络展示",
    desc: "仓储节点、运输站点、网络布局展示",
  },
]

const templates = [
  "门店分布总览",
  "配送区域覆盖",
  "商圈热力分析",
  "区域业绩对比",
  "网点密度分析",
  "全域作战图",
]

// 适用场景页
export function SlideScenarios() {
  return (
    <div className="relative w-full h-full bg-white overflow-hidden flex flex-col">
      <div className="h-1.5 w-full" style={{ background: `linear-gradient(to right, ${brand.orange}, ${brand.cyan})` }} />

      <div className="flex-1 flex flex-col px-12 py-8">
        {/* 页头 */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg overflow-hidden">
              <img src="/dtb-logo.png" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-sm font-semibold text-gray-400">地图帮 · 私有化部署</span>
          </div>
          <span className="text-xs text-gray-300">适用场景</span>
        </div>

        <h2 className="text-3xl font-extrabold text-gray-900 mb-5">
          典型<span style={{ color: brand.orange }}>适用场景</span>
        </h2>

        {/* 场景卡片 */}
        <div className="flex-1 grid grid-cols-3 gap-4 mb-5">
          {scenarios.map((s, i) => (
            <div
              key={i}
              className="flex flex-col px-5 py-4 rounded-xl border"
              style={{ borderColor: brand.border }}
            >
              <span className="text-2xl mb-2">{s.icon}</span>
              <h3 className="text-sm font-bold text-gray-900 mb-1">{s.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* 模板列表 */}
        <div
          className="rounded-xl px-6 py-4"
          style={{ background: brand.bgGray }}
        >
          <h3 className="text-sm font-bold text-gray-800 mb-2">可预置业务模板</h3>
          <div className="flex flex-wrap gap-2">
            {templates.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-md text-xs font-medium border"
                style={{ borderColor: brand.border, color: brand.text }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* 页脚 */}
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-2">
            <div className="w-6 h-1 rounded-full" style={{ background: brand.orange }} />
            <span className="text-xs font-medium text-gray-400">08 / 12</span>
          </div>
          <span className="text-xs text-gray-300">dtbgis.com</span>
        </div>
      </div>
    </div>
  )
}
