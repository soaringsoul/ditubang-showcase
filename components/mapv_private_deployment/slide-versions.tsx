"use client"

import { brand } from "./brand"

const serviceItems = [
  { title: "文件上传上图", desc: "支持 CSV / Excel 上传，自动识别经纬度" },
  { title: "多图层地图表达", desc: "散点、热力、聚合、分级设色、缓冲区等 10+ 表达方式" },
  { title: "常用行业模板", desc: "预置门店分布、配送覆盖、商圈热力等业务模板" },
  { title: "离线地图底图", desc: "指定范围离线底图，内网环境独立运行" },
  { title: "行政边界专题", desc: "省、市、区县行政边界数据叠加" },
  { title: "HTML / PNG 成果导出", desc: "交互地图与高清图片导出，可用于报告与大屏" },
  { title: "用户登录与角色管理", desc: "账号认证、角色区分、项目访问与导出权限控制" },
  { title: "操作日志留痕", desc: "关键操作记录，满足内网管理审计要求" },
  { title: "数据库直连", desc: "可对接客户数据库，支持数据自动同步" },
  { title: "自定义专题模板", desc: "根据客户行业定制专属地图模板" },
  { title: "大屏展示专题", desc: "面向指挥中心、调度中心的大屏展示优化" },
  { title: "12 个月技术支持", desc: "远程技术支持、使用答疑、系统问题排查" },
]

// 核心服务内容页
export function SlideVersions() {
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
          <span className="text-xs text-gray-300">核心服务</span>
        </div>

        <h2 className="text-3xl font-extrabold text-gray-900 mb-5">
          核心<span style={{ color: brand.orange }}>服务内容</span>
        </h2>

        {/* 服务内容网格 */}
        <div className="flex-1 grid grid-cols-2 gap-3">
          {serviceItems.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 px-4 py-3 rounded-xl border"
              style={{ borderColor: brand.border }}
            >
              <span
                className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white mt-0.5"
                style={{ background: brand.orange }}
              >
                ✓
              </span>
              <div>
                <h4 className="text-xs font-bold text-gray-900 mb-0.5">{item.title}</h4>
                <p className="text-[11px] text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 页脚 */}
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-2">
            <div className="w-6 h-1 rounded-full" style={{ background: brand.orange }} />
            <span className="text-xs font-medium text-gray-400">09 / 12</span>
          </div>
          <span className="text-xs text-gray-300">dtbgis.com</span>
        </div>
      </div>
    </div>
  )
}
