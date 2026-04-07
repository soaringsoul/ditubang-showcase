"use client"

import { brand } from "./brand"

const openSourceItems = [
  "默认使用 OSM（OpenStreetMap）开源地图数据",
  "支持私有化部署",
  "适合内网 / 专网环境",
  "不依赖公网在线地图服务",
  "可满足多数业务展示与专题出图需求",
]

const commercialItems = [
  "当前支持高德离线地图数据的加载与部署",
  "地图帮可提供一键下载工具或技术指导",
  "可协助客户完成离线地图数据准备和服务配置",
  "商业地图的版权、授权边界和合规风险，需由客户自行评估与确认",
]

// 离线地图方案与数据来源说明页
export function SlideOfflineMap() {
  return (
    <div className="relative w-full h-full bg-white overflow-hidden flex flex-col">
      <div className="h-1.5 w-full" style={{ background: `linear-gradient(to right, ${brand.orange}, ${brand.cyan})` }} />

      <div className="flex-1 flex flex-col px-12 py-8">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg overflow-hidden">
              <img src="/dtb-logo.png" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-sm font-semibold text-gray-400">地图帮 · 私有化部署</span>
          </div>
          <span className="text-xs text-gray-300">离线地图方案</span>
        </div>

        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
          离线地图方案与<span style={{ color: brand.orange }}>数据来源说明</span>
        </h2>
        <p className="text-sm text-gray-500 mb-6 max-w-3xl leading-relaxed">
          内网地图系统要真正落地，离线地图底图是基础能力之一。地图帮支持
          <span className="font-semibold text-gray-700"> 开源地图方案 </span>
          与
          <span className="font-semibold text-gray-700"> 商业地图方案 </span>
          两种模式。
        </p>

        <div className="flex-1 flex gap-6">
          <div className="flex-1 rounded-2xl border px-6 py-5" style={{ borderColor: brand.border, background: brand.bgGray }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: brand.cyanLight }}>
                🌍
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900">开源地图方案（默认）</h3>
                <p className="text-xs text-gray-400">适合多数内网部署与专题制图场景</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {openSourceItems.map((item, index) => (
                <div key={index} className="flex items-start gap-2 text-sm text-gray-700 leading-relaxed">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: brand.cyan }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 rounded-2xl border px-6 py-5" style={{ borderColor: brand.orange, background: brand.orangePale }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: brand.orangeLight }}>
                🗺️
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900">商业地图方案（可选）</h3>
                <p className="text-xs text-gray-400">适合对地图样式与商业底图有明确要求的项目</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {commercialItems.map((item, index) => (
                <div key={index} className="flex items-start gap-2 text-sm text-gray-700 leading-relaxed">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: brand.orange }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-xl px-6 py-4 border-l-4" style={{ background: brand.orangePale, borderLeftColor: brand.orange }}>
          <p className="text-sm font-semibold text-gray-800 leading-relaxed">
            地图帮可以提供高德离线地图的一键下载工具和部署指导，但商业地图的使用合规与版权责任需由客户自行确认。
          </p>
        </div>

        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-2">
            <div className="w-6 h-1 rounded-full" style={{ background: brand.orange }} />
            <span className="text-xs font-medium text-gray-400">07 / 12</span>
          </div>
          <span className="text-xs text-gray-300">dtbgis.com</span>
        </div>
      </div>
    </div>
  )
}
