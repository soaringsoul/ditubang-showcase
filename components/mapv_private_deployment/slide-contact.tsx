"use client"

import { brand } from "./brand"

const confirmItems = [
  { title: "数据来源", desc: "文件上传、数据库直连，还是业务系统接口对接" },
  { title: "数据规模", desc: "数据量级、专题数量、是否需要持续更新" },
  { title: "离线范围", desc: "需要全国、省级还是城市级离线地图" },
  { title: "成果要求", desc: "大屏展示、汇报图片、交互地图或内部嵌入" },
  { title: "服务方式", desc: "现场部署、现场培训或更严格的支持响应" },
]

// 联系我们页
export function SlideContact() {
  return (
    <div className="relative w-full h-full bg-white overflow-hidden flex flex-row">
      {/* 左侧品牌色条 */}
      <div
        className="w-3 shrink-0"
        style={{ background: `linear-gradient(to bottom, ${brand.orange}, ${brand.cyan})` }}
      />

      <div className="flex-1 flex flex-col px-12 py-8">
        {/* 页头 */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg overflow-hidden">
              <img src="/dtb-logo.png" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-sm font-semibold text-gray-400">地图帮 · 私有化部署</span>
          </div>
          <span className="text-xs text-gray-300">联系我们</span>
        </div>

        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
          开始<span style={{ color: brand.orange }}>合作</span>
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          如您有内网地图可视化需求，欢迎联系我们进一步沟通
        </p>

        {/* 两栏 */}
        <div className="flex-1 flex gap-8">
          {/* 左侧：联系方式 */}
          <div className="flex-1 flex flex-col gap-4">
            <div
              className="rounded-xl px-6 py-5 border-l-4"
              style={{ background: brand.orangePale, borderLeftColor: brand.orange }}
            >
              <h3 className="text-base font-bold text-gray-900 mb-3">联系方式</h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-lg">💬</span>
                  <div>
                    <p className="text-xs text-gray-400">微信（推荐，最快响应）</p>
                    <p className="text-sm font-bold text-gray-800">soaringsoul</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">☎</span>
                  <div>
                    <p className="text-xs text-gray-400">手机号</p>
                    <p className="text-sm font-bold text-gray-800">18683956529</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">🌐</span>
                  <div>
                    <p className="text-xs text-gray-400">官网</p>
                    <p className="text-sm font-bold text-gray-800">dtbgis.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-auto text-[10px] text-gray-300 leading-relaxed">
              本方案用于客户沟通、商务报价和 PDF 输出参考，不作为研发实施说明。
              <br />
              最终费用以双方确认的报价单、需求清单或合同约定为准。
            </div>
          </div>

          {/* 右侧：报价前确认 */}
          <div className="w-[320px] shrink-0 flex flex-col">
            <h3 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-4 rounded-full" style={{ background: brand.cyan }} />
              正式报价前建议确认
            </h3>
            <div className="flex flex-col gap-2">
              {confirmItems.map((c, i) => (
                <div
                  key={i}
                  className="px-4 py-3 rounded-xl border"
                  style={{ borderColor: brand.border }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                      style={{ background: brand.orange }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-xs font-bold text-gray-800">{c.title}</span>
                  </div>
                  <p className="text-[11px] text-gray-500 pl-7">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 页脚 */}
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-2">
            <div className="w-6 h-1 rounded-full" style={{ background: brand.orange }} />
            <span className="text-xs font-medium text-gray-400">12 / 12</span>
          </div>
          <span className="text-xs text-gray-300">文档版本 V1.2.0 · 2026年4月</span>
        </div>
      </div>
    </div>
  )
}
