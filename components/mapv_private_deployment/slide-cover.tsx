"use client"

import { brand } from "./brand"

// 封面页
export function SlideCover() {
  return (
    <div className="relative w-full h-full bg-white overflow-hidden flex flex-row">
      {/* 左侧品牌色条 */}
      <div
        className="w-3 shrink-0"
        style={{ background: `linear-gradient(to bottom, ${brand.orange}, ${brand.cyan})` }}
      />

      {/* 主内容 */}
      <div className="flex-1 flex flex-col justify-between px-12 py-10">
        {/* 顶部：Logo + 品牌 */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <img src="/dtb-logo.png" alt="地图帮 Logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="text-base font-bold text-gray-900">地图帮</span>
            <span className="ml-2 text-xs text-gray-400 font-normal">私有化部署服务</span>
          </div>
        </div>

        {/* 中部：主标题区 */}
        <div className="flex-1 flex flex-col justify-center max-w-2xl">
          <div
            className="inline-flex self-start items-center px-3 py-1 rounded-md text-xs font-semibold mb-6"
            style={{ background: brand.orangeLight, color: brand.orange }}
          >
            私有化服务通用方案 · V1.2.0
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.15] mb-5">
            内网地图可视化
            <br />
            <span style={{ color: brand.orange }}>私有化部署</span>服务
          </h1>

          <p className="text-base text-gray-500 leading-relaxed mb-8 max-w-xl">
            一套可部署、可查询、可展示、可管理的内网地图决策系统。
            <br />
            让 Excel、CSV、数据库中的业务数据，真正转化为可持续使用的地图能力。
          </p>

          {/* 三组数据 */}
          <div className="flex items-start gap-8">
            {[
              { num: "5", label: "核心价值" },
              { num: "10+", label: "地图表达方式" },
              { num: "3", label: "服务版本可选" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col">
                <span
                  className="text-3xl font-extrabold leading-none mb-1"
                  style={{ color: brand.orange }}
                >
                  {item.num}
                </span>
                <span className="text-xs text-gray-400">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 底部 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-1 rounded-full" style={{ background: brand.orange }} />
            <span className="text-xs font-medium text-gray-400">01 / 12</span>
          </div>
          <span className="text-xs text-gray-300">dtbgis.com</span>
        </div>
      </div>

      {/* 右侧装饰 */}
      <div className="absolute top-0 right-0 w-1/3 h-full overflow-hidden pointer-events-none">
        <div
          className="absolute -top-10 -right-10 w-64 h-64 rounded-full opacity-20"
          style={{ background: brand.orange }}
        />
        <div
          className="absolute bottom-20 right-8 w-32 h-32 rounded-full opacity-15"
          style={{ background: brand.cyan }}
        />
        <div
          className="absolute top-1/2 right-16 w-48 h-48 rounded-full opacity-10"
          style={{ background: brand.orange }}
        />
      </div>
    </div>
  )
}
