"use client"

import { FileSpreadsheet, MapPin, RefreshCw, Puzzle, Target, CheckCircle2, AlertCircle } from "lucide-react"

export function SlideProblem() {
  const painPoints = [
    { icon: MapPin, text: "查询网点信息，需要逐一手动搜索" },
    { icon: RefreshCw, text: "地址转坐标，需要频繁切换不同工具" },
    { icon: FileSpreadsheet, text: "制作地图前，需要先补充字段、转换格式、整理数据" },
    { icon: Puzzle, text: "做覆盖分析、选址评估、可达性判断，需要重新拼接流程" },
    { icon: RefreshCw, text: "完成一次任务后，下次仍需重复相同步骤" },
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
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-bl from-red-100/50 to-transparent blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-[var(--banana-yellow)]/10 to-transparent blur-3xl" />
      </div>

      {/* 头部 */}
      <div className="relative px-8 md:px-12 pt-8 pb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1.5 h-8 rounded-full bg-gradient-to-b from-[var(--banana-yellow)] to-[var(--banana-yellow-dark)]" />
          <span className="text-sm font-medium text-[var(--text-tertiary)]">03 / 06</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
          地图帮桌面端，到底帮你省掉了哪些折腾
        </h2>
      </div>

      {/* 主内容 */}
      <div className="relative flex-1 px-8 md:px-12 py-4 overflow-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 左侧：问题描述 */}
          <div className="space-y-4">
            {/* 引言 */}
            <div className="p-5 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-primary)]">
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle className="w-5 h-5 text-[var(--warning)]" />
                <h3 className="font-bold text-[var(--text-primary)]">真正麻烦的不是某一个功能，而是过程太碎</h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-4">你手里可能有：</p>
              <div className="flex flex-wrap gap-2">
                {dataTypes.map((type, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 rounded-lg bg-[var(--bg-primary)] text-sm text-[var(--text-secondary)] border border-[var(--border-secondary)]"
                  >
                    {type}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-[var(--text-primary)] font-medium">
                这些数据明明最后都应该落到地图上。但真正做起来，往往会卡在这些地方：
              </p>
            </div>

            {/* 痛点列表 */}
            <div className="space-y-2">
              {painPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl bg-red-50/80 border border-red-100 transition-all duration-[var(--transition-fast)] hover:bg-red-50"
                >
                  <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
                    <point.icon className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-sm text-[var(--text-secondary)]">{point.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 右侧：解决方案 */}
          <div className="space-y-4">
            {/* 解决方案概述 */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[var(--banana-yellow-pale)] to-[var(--bg-secondary)] border border-[var(--banana-yellow)]/30">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--success)]" />
                <h3 className="font-bold text-[var(--text-primary)]">地图帮想解决的就是这类问题</h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                它不是一个单点小工具。它更像一套本地工作台，把下面这些事尽量放进同一条链路里：
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {["查地理数据", "处理表格和位置数据", "做地图和图表", "做空间分析", "覆盖、分单、选址、可达性等业务判断"].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-secondary)]"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--banana-yellow)]" />
                    <span className="text-sm text-[var(--text-primary)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 核心价值 */}
            <div className="p-6 rounded-2xl bg-[var(--black)] text-white">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-[var(--banana-yellow)]" />
                <h3 className="font-bold text-lg">说到底，它不是只想帮你"画一张图"</h3>
              </div>
              <p className="text-sm text-white/70 leading-relaxed mb-4">
                它更想帮你完成的是：
              </p>
              <div className="p-4 rounded-xl bg-white/10 border border-white/20">
                <p className="font-semibold text-[var(--banana-yellow)] text-center">
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
