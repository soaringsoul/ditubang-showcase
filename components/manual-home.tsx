import Link from "next/link"
import { ArrowRight, BookOpenText } from "lucide-react"
import { manualEntries } from "./manual-registry"

export function ManualHome() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 md:px-8 md:py-10">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-white shadow-[0_25px_60px_-15px_rgba(15,23,42,0.16)] border border-gray-100">
        <div className="h-2 w-full bg-gradient-to-r from-[#F79119] to-[#49CFF6]" />

        <div className="px-8 py-8 md:px-10 md:py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-white">
                <img src="/dtb-logo.png" alt="地图帮 Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900">地图帮</div>
                <div className="text-sm text-gray-400">产品手册中心</div>
              </div>
            </div>

            <div className="inline-flex self-start items-center rounded-full px-4 py-2 text-sm font-medium text-gray-500 bg-gray-50 border border-gray-200">
              当前已接入 {manualEntries.length} 套手册
            </div>
          </div>

          <div className="mt-10 max-w-3xl">
            <div className="inline-flex items-center rounded-md px-3 py-1 text-xs font-semibold text-[#F79119] bg-[#FFF4E6]">
              统一入口
            </div>
            <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
              地图帮产品手册中心
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-500 leading-relaxed max-w-2xl">
              统一查看现有产品指南与私有化服务方案，从首页进入对应手册。
              <br />
              后续新增内容也可以继续在这里扩展。
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {manualEntries.map((manual) => (
              <Link
                key={manual.id}
                href={manual.href}
                className="group rounded-3xl border p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_45px_-18px_rgba(15,23,42,0.18)]"
                style={{ borderColor: manual.accentSoft, background: manual.accentLight }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div
                      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
                      style={{ background: manual.accentSoft, color: manual.accentColor }}
                    >
                      {manual.badge}
                    </div>
                    <h2 className="mt-4 text-2xl font-bold text-gray-900">{manual.title}</h2>
                    <p className="mt-1 text-sm text-gray-400">{manual.subtitle}</p>
                  </div>
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl"
                    style={{ background: manual.accentSoft, color: manual.accentColor }}
                  >
                    <BookOpenText className="h-5 w-5" />
                  </div>
                </div>

                <p className="mt-5 text-sm text-gray-600 leading-relaxed min-h-[48px]">
                  {manual.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {manual.highlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full px-3 py-1 text-xs font-medium border"
                      style={{ borderColor: manual.accentSoft, color: manual.accentColor, background: "white" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-400">{manual.meta}</span>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: manual.accentColor }}>
                    进入手册
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
