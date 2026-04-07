"use client"

import { FileSpreadsheet, MapPin, RefreshCw, Puzzle, Target, CheckCircle2, AlertCircle } from "lucide-react"

export function SlideProblem() {
  const painPoints = [
    { icon: MapPin, text: "查询网点信息，需要逐一手动搜索" },
    { icon: RefreshCw, text: "地址转坐标，需要频繁切换不同工具" },
    { icon: FileSpreadsheet, text: "制作地图前，需要先补字段、转格式、整理数据" },
    { icon: Puzzle, text: "覆盖分析、选址评估等业务判断，需要重新拼接流程" },
  ]

  const dataTypes = [
    "一份客户地址表",
    "一张门店明细表",
    "一批坐标点",
    "一份行政区划边界",
    "一组订单、样本点、服务点或候选点数据",
  ]

  return (
    <div className="relative w-full h-full bg-[var(--bg-primary)] overflow-hidden flex flex-col">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-bl from-[var(--banana-yellow-light)]/15 to-transparent blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-[var(--banana-yellow)]/10 to-transparent blur-3xl" />
      </div>

      {/* 头部 */}
      <div className="relative px-6 md:px-10 pt-5 pb-2">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1.5 h-8 rounded-full bg-gradient-to-b from-[var(--banana-yellow)] to-[var(--banana-yellow-dark)]" />
          <span className="text-sm font-medium text-[var(--text-tertiary)]">03 / 08</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[var(--text-primary)] to-[var(--banana-yellow-dark)] bg-clip-text text-transparent">
          地图帮桌面端，到底帮你省掉了哪些折腾
        </h2>
      </div>

      {/* 主内容 */}
      <div className="relative flex-1 px-6 md:px-10 py-4 flex flex-col justify-center overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* 左侧：问题描述 */}
          <div className="flex flex-col gap-4">
            {/* 引言 */}
            <div className="p-5 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-primary)]">
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle className="w-6 h-6 text-[var(--warning)]" />
                <h3 className="font-bold text-base text-[var(--text-primary)]">真正麻烦的不是某一个功能，而是过程太碎</h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-3">你手里可能有：</p>
              <div className="flex flex-wrap gap-2">
                {dataTypes.map((type, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 rounded-lg bg-[var(--bg-primary)] text-sm text-[var(--text-secondary)] border border-[var(--border-secondary)]"
                  >
                    {type}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-sm text-[var(--text-primary)] font-medium">
                这些数据最终都应该落到地图上，但真正做起来往往会卡在这些地方：
              </p>
            </div>

            {/* 痛点列表 */}
            <div className="space-y-2.5">
              {painPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl bg-red-50/80 border border-red-100 transition-all duration-[var(--transition-fast)] hover:bg-red-50"
                >
                  <div className="w-9 h-9 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
                    <point.icon className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-sm text-[var(--text-secondary)]">{point.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 右侧：解决方案 */}
          <div className="flex flex-col gap-4 h-full">
            {/* 解决方案概述 */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[var(--banana-yellow-pale)] to-[var(--bg-secondary)] border border-[var(--banana-yellow)]/30 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-6 h-6 text-[var(--success)]" />
                <h3 className="font-bold text-base text-[var(--text-primary)]">地图帮想解决的就是这类问题</h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                不是单点小工具，而是一套本地工作台，把下面这些事放进同一条链路：
              </p>
              <div className="grid grid-cols-2 gap-2 auto-rows-fr">
                {["查地理数据", "处理表格和位置数据", "做地图和图表", "做空间分析", "覆盖、分单、选址、可达性等业务判断"].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-secondary)] ${index === 4 ? 'col-span-2' : ''}`}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--banana-yellow)]" />
                    <span className="text-sm text-[var(--text-primary)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 核心价值 */}
            <div className="p-5 rounded-2xl bg-[var(--banana-yellow-pale)] border border-[var(--banana-yellow)]/30 border-l-4 border-l-[var(--banana-yellow)] flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-6 h-6 text-[var(--banana-yellow-dark)]" />
                <h3 className="font-bold text-base text-[var(--text-primary)]">说到底，它不是只想帮你“画一张图”</h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                它更想帮你完成的是：
              </p>
              <div className="space-y-2.5 mb-4">
                {["把散落在各处的数据汇聚到同一张地图上", "把“看不出规律”的表格变成可视化判断", "把重复的手工操作变成可复用的流程"].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--banana-yellow-dark)] mt-0.5 shrink-0" />
                    <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-auto pt-3 border-t border-[var(--banana-yellow)]/20">
                <p className="font-bold text-[var(--text-primary)] text-lg leading-snug">
                  从一堆零散数据，走到一个可以汇报、可以判断、可以继续复用的结果
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
