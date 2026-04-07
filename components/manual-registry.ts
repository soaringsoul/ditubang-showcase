export type ManualEntry = {
  id: string
  href: string
  badge: string
  title: string
  subtitle: string
  description: string
  meta: string
  highlights: string[]
  accentColor: string
  accentSoft: string
  accentLight: string
}

export const manualEntries: ManualEntry[] = [
  {
    id: "desktop-guide",
    href: "/desktop-guide",
    badge: "产品指南",
    title: "地图帮桌面端商务手册",
    subtitle: "对外快速手册指南",
    description: "围绕桌面端产品能力、典型任务与工作场景的对外介绍材料。",
    meta: "8 页 · 产品介绍",
    highlights: ["入口指引", "六类任务", "工作场景"],
    accentColor: "#F79119",
    accentSoft: "#FFF4E6",
    accentLight: "#FFF9F0",
  },
  {
    id: "mapv-private",
    href: "/mapv-private",
    badge: "私有化服务",
    title: "私有化服务通用方案",
    subtitle: "内网地图可视化方案",
    description: "面向内网环境的地图可视化私有化服务说明，包含能力、权限、离线地图、报价与流程。",
    meta: "12 页 · 通用方案",
    highlights: ["用户权限管理", "离线地图方案", "报价说明"],
    accentColor: "#49CFF6",
    accentSoft: "#E8F9FF",
    accentLight: "#F4FCFF",
  },
]
