"use client"

import { brand } from "./brand"

const steps = [
  { num: "01", title: "需求沟通", desc: "了解客户业务场景与数据现状" },
  { num: "02", title: "范围确认", desc: "明确交付内容与技术边界" },
  { num: "03", title: "商务报价", desc: "根据需求出具正式报价" },
  { num: "04", title: "环境准备", desc: "客户准备服务器与网络环境" },
  { num: "05", title: "部署实施", desc: "系统部署、配置、数据接入" },
  { num: "06", title: "验收培训", desc: "功能验收与使用培训" },
  { num: "07", title: "正式交付", desc: "交付文档与系统上线" },
  { num: "08", title: "技术支持", desc: "按约定周期提供远程支持" },
]

const timeline = [
  { ver: "标准版", days: "5 个工作日", desc: "文件上传、模板出图、离线底图的标准交付" },
  { ver: "专业版", days: "8 个工作日", desc: "含数据库直连、多角色、专题模板配置的项目" },
  { ver: "企业版", days: "15-20 个工作日", desc: "平台化接入、较多定制能力或跨部门协同项目" },
]

const deliverables = [
  "地图可视化系统",
  "离线地图数据",
  "离线行政边界",
  "初始化模板与示例",
  "部署文档",
  "使用手册",
  "培训服务",
  "技术支持服务",
]

// 合作流程页
export function SlideProcess() {
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
          <span className="text-xs text-gray-300">合作流程</span>
        </div>

        <h2 className="text-3xl font-extrabold text-gray-900 mb-5">
          合作<span style={{ color: brand.orange }}>流程</span>
        </h2>

        {/* 流程步骤 */}
        <div className="flex items-start gap-1 mb-5">
          {steps.map((s, i) => (
            <div key={i} className="flex-1 flex flex-col items-center text-center">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white mb-1.5"
                style={{ background: i < 3 ? brand.orange : i < 6 ? brand.cyan : brand.textMuted }}
              >
                {s.num}
              </div>
              <span className="text-[11px] font-bold text-gray-800 mb-0.5">{s.title}</span>
              <span className="text-[9px] text-gray-400 leading-tight">{s.desc}</span>
              {i < steps.length - 1 && (
                <div className="absolute" />
              )}
            </div>
          ))}
        </div>

        {/* 两栏：交付周期 + 交付物 */}
        <div className="flex-1 flex gap-6">
          {/* 左侧：交付周期 */}
          <div className="flex-1 flex flex-col">
            <h3 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-4 rounded-full" style={{ background: brand.orange }} />
              交付周期参考
            </h3>
            <div className="flex flex-col gap-2">
              {timeline.map((t, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 px-4 py-3 rounded-xl border"
                  style={{ borderColor: brand.border }}
                >
                  <span className="text-sm font-bold text-gray-800 w-14 shrink-0">{t.ver}</span>
                  <span
                    className="text-sm font-extrabold shrink-0 w-24"
                    style={{ color: brand.orange }}
                  >
                    {t.days}
                  </span>
                  <span className="text-xs text-gray-500">{t.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 右侧：交付物清单 */}
          <div className="w-[240px] shrink-0 flex flex-col">
            <h3 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-4 rounded-full" style={{ background: brand.cyan }} />
              交付物清单
            </h3>
            <div className="flex flex-col gap-1.5">
              {deliverables.map((d, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs"
                  style={{ background: brand.bgGray }}
                >
                  <span className="font-bold" style={{ color: brand.orange }}>✓</span>
                  <span className="text-gray-700 font-medium">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 页脚 */}
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-2">
            <div className="w-6 h-1 rounded-full" style={{ background: brand.orange }} />
            <span className="text-xs font-medium text-gray-400">11 / 12</span>
          </div>
          <span className="text-xs text-gray-300">dtbgis.com</span>
        </div>
      </div>
    </div>
  )
}
