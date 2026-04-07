"use client"

import { Search, Map, Table2, Navigation, BarChart2, Briefcase, Star } from "lucide-react"

export function SlideFeatures() {
  const features = [
    {
      icon: Search,
      number: "1",
      title: "查地理数据",
      stage: "还没有完整的数据",
      items: ["批量查门店、设施、网点和区域数据", "做地址解析与逆地址解析", "查路线、距离、时间", "获取行政区划或区域边界数据"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: Map,
      number: "2",
      title: "把表格直接变成地图",
      stage: "已有数据，需要可视化表达",
      items: ["门店分布图", "科研点位图", "离线地图", "多图层叠加展示", "图表与地图组合表达"],
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
    },
    {
      icon: Table2,
      number: "3",
      title: "处理普通 Excel / CSV",
      stage: "需要先把表格整理规范",
      items: ["合并多张表", "清洗脏数据", "做透视、统计和图表", "处理批量表格任务"],
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-50",
      badge: "数据魔方 17 个工具免费使用",
    },
    {
      icon: Navigation,
      number: "4",
      title: "处理位置数据",
      stage: "已有坐标、边界、矢量或路网数据",
      items: ["坐标转换", "格式转换", "表格与空间数据关联", "数据合并与整理", "为后续分析做标准化准备"],
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50",
    },
    {
      icon: BarChart2,
      number: "5",
      title: "做空间分析",
      stage: "不只看图，还需要深入分析判断",
      items: ["缓冲区分析", "空间连接", "点面关系判断", "近邻与聚类分析", "路网处理与 OD 分析"],
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
    },
    {
      icon: Briefcase,
      number: "6",
      title: "直接进入业务应用",
      stage: "需要直接输出业务成果",
      items: ["分单与划区", "覆盖分析", "到达圈 / 等时圈", "选址与商圈分析", "生活圈与公共服务评估"],
      color: "from-[var(--banana-yellow)] to-[var(--banana-yellow-dark)]",
      bgColor: "bg-[var(--banana-yellow-pale)]",
      highlight: true,
    },
  ]

  return (
    <div className="relative w-full h-full bg-[var(--bg-primary)] overflow-hidden flex flex-col">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-bl from-[var(--banana-yellow)]/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gradient-to-tr from-purple-100/30 to-transparent blur-3xl" />
      </div>

      {/* 头部 */}
      <div className="relative px-8 md:px-12 pt-6 pb-3">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1.5 h-8 rounded-full bg-gradient-to-b from-[var(--banana-yellow)] to-[var(--banana-yellow-dark)]" />
          <span className="text-sm font-medium text-[var(--text-tertiary)]">04 / 06</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
          你可以用地图帮完成的 6 类任务
        </h2>
      </div>

      {/* 主内容 */}
      <div className="relative flex-1 px-8 md:px-12 py-3 overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div
              key={feature.number}
              className={`group relative rounded-2xl ${feature.bgColor} border border-[var(--border-secondary)] p-4 transition-all duration-[var(--transition-base)] hover:shadow-lg hover:-translate-y-0.5 ${feature.highlight ? 'ring-2 ring-[var(--banana-yellow)]/50' : ''}`}
            >
              {feature.badge && (
                <div className="absolute -top-2 left-4 px-2 py-0.5 rounded-full bg-[var(--success)] text-xs font-semibold text-white flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  {feature.badge}
                </div>
              )}
              <div className="flex items-start gap-3 mb-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-md shrink-0`}>
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--text-primary)] text-base">{feature.number}. {feature.title}</h3>
                  <p className="text-xs text-[var(--text-tertiary)] mt-0.5">适合"{feature.stage}"的阶段</p>
                </div>
              </div>
              <div className="space-y-1.5">
                {feature.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-[var(--text-tertiary)]" />
                    <span className="text-sm text-[var(--text-secondary)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
