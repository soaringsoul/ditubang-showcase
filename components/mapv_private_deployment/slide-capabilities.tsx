"use client"

import { brand } from "./brand"

const mapTypes = [
  { name: "散点图", desc: "点位分布展示" },
  { name: "热力图", desc: "热度密度分布" },
  { name: "点聚合", desc: "大规模点位" },
  { name: "分类着色", desc: "类别区分" },
  { name: "缓冲区", desc: "服务半径覆盖" },
  { name: "分级设色", desc: "区域统计分层" },
  { name: "气泡图", desc: "区域差异对比" },
  { name: "区域标注", desc: "名称数值标注" },
  { name: "行政边界", desc: "省市区县叠加" },
  { name: "自定义边界", desc: "客户自有区域" },
]

const capabilities = [
  {
    title: "数据接入",
    items: ["Excel / CSV 上传", "自动识别经纬度字段", "表格与地图双预览", "条件筛选", "点、线、面三类空间对象", "数据库直连（按版本）"],
  },
  {
    title: "成果输出",
    items: ["导出 HTML 交互地图", "导出高清 PNG 图片", "多文件打包下载", "可用于报告、大屏、内部系统"],
  },
  {
    title: "权限管理",
    items: ["用户登录认证", "角色区分管理", "项目访问控制", "导出权限控制", "操作日志留痕"],
  },
]

// 系统能力页
export function SlideCapabilities() {
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
          <span className="text-xs text-gray-300">系统能力</span>
        </div>

        <h2 className="text-3xl font-extrabold text-gray-900 mb-5">
          系统<span style={{ color: brand.orange }}>能力说明</span>
        </h2>

        {/* 两栏布局 */}
        <div className="flex-1 flex gap-6">
          {/* 左侧：地图表达 */}
          <div className="flex-1 flex flex-col">
            <h3 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-4 rounded-full" style={{ background: brand.orange }} />
              地图表达能力（10 种）
            </h3>
            <div className="flex-1 grid grid-cols-2 gap-2">
              {mapTypes.map((m, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg border text-xs"
                  style={{ borderColor: brand.border }}
                >
                  <span className="font-bold text-gray-800">{m.name}</span>
                  <span className="text-gray-400">{m.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 右侧：其他能力 */}
          <div className="w-[280px] shrink-0 flex flex-col gap-4">
            {capabilities.map((cap, i) => (
              <div key={i} className="flex flex-col">
                <h3 className="text-sm font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <span className="w-1 h-4 rounded-full" style={{ background: i === 0 ? brand.cyan : brand.orange }} />
                  {cap.title}
                </h3>
                <div className="flex flex-col gap-1">
                  {cap.items.map((item, j) => (
                    <div key={j} className="flex items-center gap-2 text-xs text-gray-600">
                      <span className="w-1 h-1 rounded-full" style={{ background: brand.orange }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 页脚 */}
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-2">
            <div className="w-6 h-1 rounded-full" style={{ background: brand.orange }} />
            <span className="text-xs font-medium text-gray-400">05 / 12</span>
          </div>
          <span className="text-xs text-gray-300">dtbgis.com</span>
        </div>
      </div>
    </div>
  )
}
