"use client"

import { brand } from "./brand"

const values = [
  {
    title: "数据不出网",
    desc: "系统部署在客户内网环境中，支持离线底图、离线行政边界和本地静态资源运行，适合内部数据安全要求较高的使用场景。",
    icon: "🔐",
  },
  {
    title: "上手门槛低",
    desc: "业务人员上传 Excel / CSV 后，即可快速生成专题地图，并可结合预置模板完成常见业务场景出图，无需复杂 GIS 操作。",
    icon: "🚀",
  },
  {
    title: "不只是做一张图",
    desc: "交付的是可持续使用的系统能力，而不是一次性地图成果。后续新数据进入后，客户仍可基于既有模板和项目继续复用。",
    icon: "♻️",
  },
  {
    title: "表达能力更完整",
    desc: "支持散点、热力、聚合、分级设色、缓冲区、区域标注、边界叠加等常见地图表达方式，覆盖多数业务展示和汇报需求。",
    icon: "🗺️",
  },
  {
    title: "兼顾管理与协作",
    desc: "可提供账号登录、角色区分、项目访问控制、导出权限控制和操作留痕能力，适合内网环境下的日常管理要求。",
    icon: "👥",
  },
]

// 方案价值页
export function SlideValue() {
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
          <span className="text-xs text-gray-300">方案价值</span>
        </div>

        {/* 标题 */}
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
          方案<span style={{ color: brand.orange }}>价值</span>
        </h2>

        {/* 价值卡片 */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          {values.map((v, i) => (
            <div
              key={i}
              className={`flex flex-col px-5 py-4 rounded-xl border ${i === values.length - 1 ? "col-span-2" : ""}`}
              style={{ borderColor: brand.border }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl">{v.icon}</span>
                <h3 className="text-base font-bold text-gray-900">{v.title}</h3>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* 页脚 */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-1 rounded-full" style={{ background: brand.orange }} />
            <span className="text-xs font-medium text-gray-400">04 / 12</span>
          </div>
          <span className="text-xs text-gray-300">dtbgis.com</span>
        </div>
      </div>
    </div>
  )
}
