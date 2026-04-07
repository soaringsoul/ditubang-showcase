"use client"

import { Store, FileText, TrendingUp, ArrowRight, Package, CheckCircle } from "lucide-react"

export function SlideScenarios() {
  const scenarios = [
    {
      icon: Store,
      number: "一",
      title: "从零数据到一张门店分布图",
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      have: "你现在只有一个城市名，或者只知道自己想看某一类门店、竞品或设施分布。",
      process: "先查目标数据，再整理结果，接着直接送进地图制作模块，快速做成一张可查看、可演示、可继续扩展的分布图。",
      results: [
        "一张能直接看的门店分布图",
        "一份整理好的门店明细表",
        "一套后续还能继续做竞品分析、选址分析或区域判断的底表",
      ],
    },
    {
      icon: FileText,
      number: "二",
      title: "从一张地址表到坐标、地图和分析结果",
      color: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      have: "你拿到的是一张普通 Excel，里面是客户地址、门店地址、样本点地址或者项目点地址。",
      process: "先把地址批量转成经纬度、标准地址和行政区划字段，再继续进入地图制作、区域归属、聚类、覆盖或其他分析流程。",
      results: [
        "一张补全坐标后的结构化地址表",
        "一份可直接出图的空间数据",
        "一套能继续进入业务分析和汇报表达的统一底表",
      ],
    },
    {
      icon: TrendingUp,
      number: "三",
      title: "从运营数据直接走到业务判断",
      color: "from-[var(--banana-yellow)] to-[var(--banana-yellow-dark)]",
      bgGradient: "from-[var(--banana-yellow-pale)] to-amber-50",
      have: "你已经有订单、网点、区域、候选点、服务对象或运营范围等数据，但还缺一个更直观、更稳定的判断方式。",
      process: "把数据送进覆盖、分单、到达圈、选址、商圈分析等业务流程里，让结果直接靠近你真正关心的问题。",
      results: [
        "覆盖不足区域",
        "候选点对比结果",
        "划区与分单结果",
        "更适合汇报和决策的地图与表格成果",
      ],
      highlight: true,
    },
  ]

  return (
    <div className="relative w-full h-full bg-[var(--bg-primary)] overflow-hidden flex flex-col">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 w-96 h-96 rounded-full bg-gradient-to-b from-[var(--banana-yellow)]/10 to-transparent blur-3xl" />
      </div>

      {/* 头部 */}
      <div className="relative px-6 md:px-10 pt-4 pb-1">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1.5 h-8 rounded-full bg-gradient-to-b from-[var(--banana-yellow)] to-[var(--banana-yellow-dark)]" />
          <span className="text-sm font-medium text-[var(--text-tertiary)]">05 / 08</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[var(--text-primary)] to-[var(--banana-yellow-dark)] bg-clip-text text-transparent">
          三种最常见的工作场景
        </h2>
      </div>

      {/* 主内容 */}
      <div className="relative flex-1 px-6 md:px-10 py-3 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full">
          {scenarios.map((scenario) => (
            <div
              key={scenario.number}
              className={`relative rounded-2xl bg-gradient-to-br ${scenario.bgGradient} border border-[var(--border-secondary)] overflow-hidden transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 flex flex-col ${scenario.highlight ? 'ring-2 ring-[var(--banana-yellow)]/50 shadow-[0_4px_12px_rgba(255,215,0,0.3)]' : ''}`}
            >
              {/* 头部标识 */}
              <div className={`px-4 py-3 bg-gradient-to-r ${scenario.color}`}>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <scenario.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-xs text-white/70 font-medium">场景{scenario.number}</span>
                    <h3 className="font-bold text-white text-sm leading-tight">{scenario.title}</h3>
                  </div>
                </div>
              </div>

              {/* 内容区 */}
              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                {/* 你手里有什么 */}
                <div>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Package className="w-3.5 h-3.5 text-[var(--text-tertiary)]" />
                    <span className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wide">你手里有什么</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{scenario.have}</p>
                </div>

                {/* 地图帮怎么做 */}
                <div>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--banana-yellow-dark)]" />
                    <span className="text-xs font-semibold text-[var(--banana-yellow-dark)] uppercase tracking-wide">地图帮怎么做</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{scenario.process}</p>
                </div>

                {/* 你最后拿到什么 */}
                <div>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[var(--success)]" />
                    <span className="text-xs font-semibold text-[var(--success)] uppercase tracking-wide">你最后拿到什么</span>
                  </div>
                  <div className="space-y-1.5">
                    {scenario.results.map((result, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--success)] mt-1.5 shrink-0" />
                        <span className="text-sm text-[var(--text-primary)]">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
