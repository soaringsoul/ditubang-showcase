"use client"

import { brand } from "./brand"

const customers = [
  { type: "政府单位", scene: "网格化管理、应急资源分布、民政服务设施一张图" },
  { type: "国有企业", scene: "资产分布可视化、营业网点管理、供应链地图" },
  { type: "科研院所", scene: "实验站点分布、样本采集地图、区域对比分析" },
  { type: "连锁企业", scene: "门店全域作战图、配送覆盖分析、商圈热力分析" },
  { type: "物流运输", scene: "站点分布、覆盖半径、仓储网络可视化" },
]

// 方案概述页
export function SlideOverview() {
  return (
    <div className="relative w-full h-full bg-white overflow-hidden flex flex-col">
      {/* 顶部品牌条 */}
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
          <span className="text-xs text-gray-300">方案概述</span>
        </div>

        {/* 标题 */}
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
          方案<span style={{ color: brand.orange }}>概述</span>
        </h2>
        <p className="text-sm text-gray-500 mb-6 max-w-2xl">
          面向企事业单位、政府机构和科研院所，提供可部署在客户内网环境中的地图可视化私有化部署服务
        </p>

        {/* 一句话说明 */}
        <div
          className="rounded-xl px-6 py-4 mb-6 border-l-4"
          style={{ background: brand.orangePale, borderLeftColor: brand.orange }}
        >
          <p className="text-base font-semibold text-gray-800">
            把分散在 Excel、CSV、数据库里的业务数据，快速变成可在内网中持续使用的专题地图。
          </p>
        </div>

        {/* 适合客户 */}
        <h3 className="text-lg font-bold text-gray-800 mb-3">适合哪些客户</h3>
        <div className="flex-1 grid grid-cols-1 gap-2.5">
          {customers.map((c, i) => (
            <div
              key={i}
              className="flex items-start gap-4 px-5 py-3 rounded-xl border"
              style={{ borderColor: brand.border, background: i % 2 === 0 ? brand.bgGray : brand.bg }}
            >
              <span
                className="shrink-0 px-3 py-1 rounded-md text-xs font-bold text-white"
                style={{ background: brand.orange }}
              >
                {c.type}
              </span>
              <span className="text-sm text-gray-600 leading-relaxed">{c.scene}</span>
            </div>
          ))}
        </div>

        {/* 页脚 */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-1 rounded-full" style={{ background: brand.orange }} />
            <span className="text-xs font-medium text-gray-400">02 / 12</span>
          </div>
          <span className="text-xs text-gray-300">dtbgis.com</span>
        </div>
      </div>
    </div>
  )
}
