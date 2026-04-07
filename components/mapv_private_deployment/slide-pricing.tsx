"use client"

import { brand } from "./brand"

const pricingItems = [
  { item: "私有化部署服务费", included: true, desc: "系统部署、基础配置和内网环境交付" },
  { item: "初始化实施服务", included: true, desc: "环境确认、基础调试、样例专题制作" },
  { item: "基础数据接入", included: true, desc: "标准格式 Excel / CSV 文件导入" },
  { item: "离线底图与边界数据", included: true, desc: "根据约定区域准备离线地图与行政边界数据" },
  { item: "培训与文档", included: true, desc: "使用培训和交付文档" },
  { item: "技术支持", included: true, desc: "按服务版本提供远程支持" },
  { item: "数据库直连 / 系统集成", included: false, desc: "接入客户数据库、门户或业务系统" },
  { item: "定制开发", included: false, desc: "新增专题模块、特定业务功能" },
]

const tiers = [
  { ver: "标准版", scene: "单部门、快速试点", content: "基础系统 + 离线底图 + 模板 + 培训 + 6个月支持", price: "9999元起" },
  { ver: "专业版", scene: "多部门共享、持续使用", content: "标准版 + 权限管理 + 数据库直连 + 大屏专题 + 12个月支持", price: "9999元起", highlight: true },
  { ver: "企业版", scene: "平台化建设、系统集成", content: "专业版 + 单点登录 / 系统集成 / 定制开发 + 24个月支持", price: "9999元起" },
]

// 报价说明页
export function SlidePricing() {
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
          <span className="text-xs text-gray-300">报价说明</span>
        </div>

        <h2 className="text-3xl font-extrabold text-gray-900 mb-5">
          报价<span style={{ color: brand.orange }}>说明</span>
        </h2>

        {/* 两栏 */}
        <div className="flex-1 flex gap-6">
          {/* 左侧：报价构成 */}
          <div className="flex-1 flex flex-col">
            <h3 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-4 rounded-full" style={{ background: brand.orange }} />
              报价构成
            </h3>
            <div className="flex-1 flex flex-col gap-1.5">
              {pricingItems.map((p, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-4 py-2 rounded-lg text-xs"
                  style={{ background: i % 2 === 0 ? brand.bgGray : "white" }}
                >
                  <span
                    className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                    style={{ background: p.included ? brand.orange : brand.textMuted }}
                  >
                    {p.included ? "✓" : "选"}
                  </span>
                  <span className="font-bold text-gray-800 w-[140px] shrink-0">{p.item}</span>
                  <span className="text-gray-500">{p.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 右侧：参考报价 */}
          <div className="w-[300px] shrink-0 flex flex-col gap-3">
            <h3 className="text-sm font-bold text-gray-800 mb-1 flex items-center gap-2">
              <span className="w-1 h-4 rounded-full" style={{ background: brand.cyan }} />
              参考报价
            </h3>
            {tiers.map((t, i) => (
              <div
                key={i}
                className="flex flex-col px-5 py-4 rounded-xl border"
                style={{
                  borderColor: t.highlight ? brand.orange : brand.border,
                  background: t.highlight ? brand.orangePale : "white",
                }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-bold text-gray-900">{t.ver}</span>
                  <span
                    className="text-sm font-extrabold"
                    style={{ color: brand.orange }}
                  >
                    {t.price}
                  </span>
                </div>
                <span className="text-[10px] text-gray-400 mb-2">{t.scene}</span>
                <span className="text-[11px] text-gray-600 leading-relaxed">{t.content}</span>
              </div>
            ))}

            <div
              className="mt-auto px-4 py-3 rounded-lg text-[10px] text-gray-700 leading-relaxed border-l-4"
              style={{ background: brand.orangePale, borderLeftColor: brand.orange }}
            >
              温馨提示：以上报价仅作前期沟通参考，具体报价待沟通并明确具体需求后确认。
            </div>
          </div>
        </div>

        {/* 页脚 */}
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-2">
            <div className="w-6 h-1 rounded-full" style={{ background: brand.orange }} />
            <span className="text-xs font-medium text-gray-400">10 / 12</span>
          </div>
          <span className="text-xs text-gray-300">dtbgis.com</span>
        </div>
      </div>
    </div>
  )
}
