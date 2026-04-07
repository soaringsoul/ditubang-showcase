"use client"

import { brand } from "./brand"

const painPoints = [
  { icon: "📊", text: "数据在表里，但空间分布看不出来" },
  { icon: "🌐", text: "处于内网环境，不能直接使用公网在线地图服务" },
  { icon: "🔒", text: "涉及内部业务数据，不能把数据上传到外部平台处理" },
  { icon: "🧑‍💻", text: "做专题地图往往依赖 GIS 专业人员或外部供应商" },
  { icon: "📸", text: "每次做图都像一次性工作，成果难沉淀、难复用" },
  { icon: "🎨", text: "不同部门各自出图，样式和口径不统一" },
  { icon: "📋", text: "最终成果多为截图，难以持续更新与共享" },
]

// 客户痛点页
export function SlidePainPoints() {
  return (
    <div className="relative w-full h-full bg-white overflow-hidden flex flex-col">
      <div className="h-1.5 w-full" style={{ background: `linear-gradient(to right, ${brand.orange}, ${brand.cyan})` }} />

      <div className="flex-1 flex flex-col px-12 py-8">
        {/* 页头 */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg overflow-hidden">
              <img src="/dtb-logo.png" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-sm font-semibold text-gray-400">地图帮 · 私有化部署</span>
          </div>
          <span className="text-xs text-gray-300">需求与痛点</span>
        </div>

        {/* 标题 */}
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
          客户常见<span style={{ color: brand.orange }}>需求与痛点</span>
        </h2>
        <p className="text-sm text-gray-500 mb-6 max-w-2xl">
          很多单位手里已经有大量业务数据，能做统计、能做报表，却很难在地图上直观看出空间分布关系。尤其是在内网环境下，问题会更突出。
        </p>

        {/* 痛点网格 */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          {painPoints.map((p, i) => (
            <div
              key={i}
              className="flex items-start gap-3 px-5 py-4 rounded-xl border"
              style={{ borderColor: brand.border }}
            >
              <span className="text-2xl shrink-0 mt-0.5">{p.icon}</span>
              <p className="text-sm text-gray-700 leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        {/* 底部解决方案引导 */}
        <div
          className="mt-5 rounded-xl px-6 py-4 border-l-4"
          style={{ background: brand.cyanLight, borderLeftColor: brand.cyan }}
        >
          <p className="text-sm font-semibold text-gray-800">
            地图帮提供的不是一次性做图服务，而是一套适合内网环境、可部署、可使用、可维护的地图可视化方案。
          </p>
        </div>

        {/* 页脚 */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-1 rounded-full" style={{ background: brand.orange }} />
            <span className="text-xs font-medium text-gray-400">03 / 12</span>
          </div>
          <span className="text-xs text-gray-300">dtbgis.com</span>
        </div>
      </div>
    </div>
  )
}
