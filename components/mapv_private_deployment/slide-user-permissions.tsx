"use client"

import { brand } from "./brand"

const roles = [
  {
    icon: "🛠️",
    title: "管理员",
    desc: "负责系统配置、用户管理、项目管理和权限控制",
  },
  {
    icon: "👤",
    title: "普通用户",
    desc: "负责日常地图查看、数据使用和专题地图制作",
  },
]

const permissions = [
  "账号登录认证：支持账号登录，便于统一管理内部使用人员",
  "用户角色区分：按管理员和普通用户两类角色进行权限划分",
  "项目访问控制：管理员可控制项目的查看、编辑和管理范围",
  "导出权限控制：可根据管理要求控制地图成果导出权限",
]

const values = [
  "需要多人共同使用同一套地图系统",
  "需要区分“谁负责管理、谁负责使用”",
  "需要避免无序编辑、随意导出和误操作",
  "需要兼顾业务使用效率与基础管理要求",
]

export function SlideUserPermissions() {
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
          <span className="text-xs text-gray-300">用户权限管理</span>
        </div>

        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
          用户管理与<span style={{ color: brand.orange }}>权限控制说明</span>
        </h2>
        <p className="text-sm text-gray-500 mb-5 max-w-3xl leading-relaxed">
          为满足内网环境下的日常使用与管理要求，系统支持基础的用户管理与权限控制能力。整体上仅区分两类用户：
          <span className="font-semibold text-gray-700">管理员</span>
          和
          <span className="font-semibold text-gray-700">普通用户</span>
          ，规则清晰，便于组织内部快速落地使用。
        </p>

        <div className="flex gap-6 mb-5">
          <div className="w-[280px] shrink-0 flex flex-col gap-3">
            {roles.map((role, index) => (
              <div
                key={index}
                className="rounded-2xl border px-5 py-4"
                style={{
                  borderColor: index === 0 ? brand.orange : brand.border,
                  background: index === 0 ? brand.orangePale : brand.bgGray,
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{role.icon}</span>
                  <h3 className="text-base font-bold text-gray-900">{role.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{role.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex-1 rounded-2xl border px-6 py-5" style={{ borderColor: brand.border }}>
            <h3 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-4 rounded-full" style={{ background: brand.orange }} />
              权限控制能力
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {permissions.map((item, index) => (
                <div key={index} className="flex items-start gap-3 rounded-xl border px-4 py-3" style={{ borderColor: brand.borderLight, background: brand.bgGray }}>
                  <span className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0" style={{ background: brand.orange }}>
                    {index + 1}
                  </span>
                  <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl border px-6 py-4 mb-5" style={{ borderColor: brand.border, background: brand.cyanLight }}>
          <h3 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
            <span className="w-1 h-4 rounded-full" style={{ background: brand.cyan }} />
            适用价值
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {values.map((item, index) => (
              <div key={index} className="flex items-start gap-2 text-sm text-gray-700 leading-relaxed">
                <span className="mt-1 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: brand.cyan }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto rounded-xl px-6 py-4 border-l-4" style={{ background: brand.orangePale, borderLeftColor: brand.orange }}>
          <p className="text-sm font-semibold text-gray-800 leading-relaxed">
            地图帮支持管理员与普通用户两类角色管理，帮助客户在内网环境下更安全、更规范地使用地图系统。
          </p>
        </div>

        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-2">
            <div className="w-6 h-1 rounded-full" style={{ background: brand.orange }} />
            <span className="text-xs font-medium text-gray-400">06 / 12</span>
          </div>
          <span className="text-xs text-gray-300">dtbgis.com</span>
        </div>
      </div>
    </div>
  )
}
