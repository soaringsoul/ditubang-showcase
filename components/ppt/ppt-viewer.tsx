"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Grid3X3, Download, Presentation, FileDown } from "lucide-react"
import { SlideCover } from "./slide-cover"
import { SlideEntry } from "./slide-entry"
import { SlideProblem } from "./slide-problem"
import { SlideFeatures } from "./slide-features"
import { SlideScenarios } from "./slide-scenarios"
import { SlideCTA } from "./slide-cta"
import { SlideStart } from "./slide-start"

const slides = [
  { id: 1, title: "封面", component: SlideCover },
  { id: 2, title: "入口指引", component: SlideEntry },
  { id: 3, title: "痛点分析", component: SlideProblem },
  { id: 4, title: "六类任务", component: SlideFeatures },
  { id: 5, title: "工作场景", component: SlideScenarios },
  { id: 6, title: "适合谁用", component: SlideCTA },
  { id: 7, title: "开始使用", component: SlideStart },
]

export function PPTViewer() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showOverview, setShowOverview] = useState(false)


  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index)
      setShowOverview(false)
    }
  }, [])

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1)
    }
  }, [currentSlide])

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1)
    }
  }, [currentSlide])

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }, [])

  // 导出PDF功能 - 调用浏览器打印
  const exportToPDF = useCallback(() => {
    document.body.classList.add('printing')
    requestAnimationFrame(() => {
      window.print()
      document.body.classList.remove('printing')
    })
  }, [])

  // 键盘导航
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
        e.preventDefault()
        nextSlide()
      } else if (e.key === "ArrowLeft") {
        e.preventDefault()
        prevSlide()
      } else if (e.key === "Escape") {
        setShowOverview(false)
        if (document.fullscreenElement) {
          document.exitFullscreen()
          setIsFullscreen(false)
        }
      } else if (e.key === "g" || e.key === "G") {
        setShowOverview(prev => !prev)
      } else if (e.key === "f" || e.key === "F") {
        toggleFullscreen()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextSlide, prevSlide, toggleFullscreen])

  // 监听全屏变化
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange)
  }, [])

  const CurrentSlideComponent = slides[currentSlide].component

  return (
    <>
      {/* 打印视图 - 仅在打印时显示 */}
      <div className="print-container">
        {slides.map((slide) => {
          const SlideComponent = slide.component
          return (
            <div key={slide.id} className="print-slide">
              <SlideComponent />
            </div>
          )
        })}
      </div>

      {/* 正常视图 - 打印时隐藏 */}
      <div className={`relative w-full h-screen bg-[var(--black-10)] flex flex-col no-print ${isFullscreen ? 'p-0' : 'p-4 md:p-8'}`}>
      {/* 顶部工具栏 */}
      {!isFullscreen && (
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-primary)] shadow-sm">
              <Presentation className="w-4 h-4 text-[var(--banana-yellow-dark)]" />
              <span className="font-semibold text-[var(--text-primary)]">地图帮桌面端商务手册</span>
            </div>
            <div className="hidden md:flex items-center gap-1 px-3 py-2 rounded-xl bg-[var(--bg-secondary)] text-sm text-[var(--text-tertiary)]">
              <span>按</span>
              <kbd className="px-1.5 py-0.5 rounded bg-[var(--bg-primary)] border border-[var(--border-primary)] text-xs font-mono">←</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-[var(--bg-primary)] border border-[var(--border-primary)] text-xs font-mono">→</kbd>
              <span>翻页</span>
              <span className="mx-1">·</span>
              <kbd className="px-1.5 py-0.5 rounded bg-[var(--bg-primary)] border border-[var(--border-primary)] text-xs font-mono">G</kbd>
              <span>概览</span>
              <span className="mx-1">·</span>
              <kbd className="px-1.5 py-0.5 rounded bg-[var(--bg-primary)] border border-[var(--border-primary)] text-xs font-mono">F</kbd>
              <span>全屏</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={exportToPDF}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-[var(--banana-yellow)] to-[var(--banana-yellow-dark)] text-[var(--black)] font-medium hover:opacity-90 transition-all duration-[var(--transition-fast)] shadow-sm"
              title="导出PDF"
            >
              <FileDown className="w-4 h-4" />
              <span className="hidden sm:inline text-sm">导出 PDF</span>
            </button>
            <button
              onClick={() => setShowOverview(prev => !prev)}
              className={`p-2.5 rounded-xl border transition-all duration-[var(--transition-fast)] ${showOverview ? 'bg-[var(--black)] text-white border-[var(--black)]' : 'bg-[var(--bg-primary)] text-[var(--text-secondary)] border-[var(--border-primary)] hover:bg-[var(--bg-hover)]'}`}
              title="幻灯片概览"
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              onClick={toggleFullscreen}
              className="p-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-primary)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] transition-all duration-[var(--transition-fast)]"
              title="全屏演示"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* 幻灯片概览模式 */}
      {showOverview && (
        <div className="absolute inset-0 z-50 bg-[var(--black)]/90 backdrop-blur-sm flex items-center justify-center p-8">
          <div className="w-full max-w-6xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">幻灯片概览</h2>
              <button
                onClick={() => setShowOverview(false)}
                className="px-4 py-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all"
              >
                关闭
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(index)}
                  className={`relative aspect-video rounded-xl overflow-hidden border-2 transition-all duration-[var(--transition-base)] hover:scale-105 ${currentSlide === index ? 'border-[var(--banana-yellow)] ring-4 ring-[var(--banana-yellow)]/30' : 'border-white/20 hover:border-white/40'}`}
                >
                  <div className="absolute inset-0 bg-white transform scale-[0.5] origin-top-left w-[200%] h-[200%]">
                    <slide.component />
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                    <span className="text-sm font-medium text-white">{slide.id}. {slide.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 主幻灯片区域 */}
      <div className={`flex-1 flex items-center justify-center ${isFullscreen ? '' : 'mb-4'}`}>
        <div
          className={`relative bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-[var(--transition-slow)] ${isFullscreen ? 'w-full h-full rounded-none' : 'w-full max-w-6xl aspect-video'}`}
          style={{ boxShadow: isFullscreen ? 'none' : '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
        >
          <CurrentSlideComponent />

          {/* 幻灯片导航按钮 */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[var(--bg-primary)]/90 backdrop-blur-sm border border-[var(--border-primary)] shadow-lg transition-all duration-[var(--transition-fast)] ${currentSlide === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[var(--bg-hover)] hover:scale-110'}`}
          >
            <ChevronLeft className="w-5 h-5 text-[var(--text-primary)]" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[var(--bg-primary)]/90 backdrop-blur-sm border border-[var(--border-primary)] shadow-lg transition-all duration-[var(--transition-fast)] ${currentSlide === slides.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[var(--bg-hover)] hover:scale-110'}`}
          >
            <ChevronRight className="w-5 h-5 text-[var(--text-primary)]" />
          </button>

          {/* 全屏模式退出按钮 */}
          {isFullscreen && (
            <button
              onClick={toggleFullscreen}
              className="absolute top-4 right-4 p-2.5 rounded-xl bg-[var(--bg-primary)]/90 backdrop-blur-sm border border-[var(--border-primary)] shadow-lg hover:bg-[var(--bg-hover)] transition-all duration-[var(--transition-fast)]"
            >
              <Minimize2 className="w-4 h-4 text-[var(--text-primary)]" />
            </button>
          )}
        </div>
      </div>

      {/* 底部进度条和导航 */}
      {!isFullscreen && (
        <div className="flex items-center justify-center gap-4">
          {/* 进度点 */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-primary)] shadow-sm">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`relative group transition-all duration-[var(--transition-fast)] ${currentSlide === index ? 'w-8' : 'w-2'} h-2 rounded-full ${currentSlide === index ? 'bg-gradient-to-r from-[var(--banana-yellow)] to-[var(--banana-yellow-dark)]' : 'bg-[var(--border-primary)] hover:bg-[var(--border-hover)]'}`}
                title={slide.title}
              >
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-[var(--black)] text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {slide.title}
                </span>
              </button>
            ))}
          </div>
          <span className="text-sm text-[var(--text-tertiary)] font-medium">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
      )}
      </div>
    </>
  )
}
