# 地图帮桌面端商务手册

> 基于 Next.js 16.2.0 构建的现代化商务演示系统，专为地图帮桌面端产品设计的交互式 PPT 演示平台

## 📋 项目概述

这是一个专业的商务演示手册 Web 应用，采用现代化技术栈构建，提供流畅的幻灯片演示体验。项目包含 6 个精心设计的演示页面，涵盖产品介绍、功能特性、使用场景等完整商务演示流程。

## ✨ 核心功能

### 🎯 交互式演示
- **6个专业幻灯片页面**：封面、入口指引、痛点分析、功能特性、工作场景、开始使用
- **流畅的页面切换**：支持键盘导航、鼠标点击、进度条跳转
- **幻灯片概览模式**：全局视图，快速定位到任意页面

### ⌨️ 专业控制
- **键盘快捷键**：
  - `←/→` 或 `空格/回车` - 翻页
  - `G` - 切换概览模式
  - `F` - 全屏演示
  - `ESC` - 退出全屏/概览

### 📄 导出功能
- **PDF 导出**：一键导出完整演示文稿
- **打印优化**：专门的打印样式，确保输出效果
- **批量导出**：支持所有幻灯片同时导出

### 📱 响应式设计
- **多设备适配**：完美支持桌面、平板、手机
- **自适应布局**：根据屏幕尺寸自动调整
- **触摸友好**：移动端手势操作支持

## 🛠 技术架构

### 前端技术栈
- **框架**: Next.js 16.2.0 (React 19.2.4)
- **语言**: TypeScript
- **样式**: Tailwind CSS 4.2.0
- **组件**: Radix UI 组件库
- **图标**: Lucide React
- **主题**: 支持深色/浅色主题切换

### 项目结构
```
ditubang_business_pdf/
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 主页面
├── components/            # 组件库
│   ├── ppt/               # PPT 相关组件
│   │   ├── ppt-viewer.tsx    # 主演示器
│   │   ├── slide-cover.tsx   # 封面页
│   │   ├── slide-entry.tsx   # 入口指引
│   │   ├── slide-problem.tsx # 痛点分析
│   │   ├── slide-features.tsx# 功能特性
│   │   ├── slide-scenarios.tsx# 工作场景
│   │   └── slide-cta.tsx     # 开始使用
│   ├── ui/                # UI 组件库
│   └── theme-provider.tsx # 主题提供者
├── hooks/                 # 自定义 Hooks
├── lib/                   # 工具库
├── public/               # 静态资源
└── styles/               # 样式文件
```

## 🚀 快速开始

### 环境要求
- Node.js 18.0.0 或更高版本
- npm 或 yarn 包管理器

### 安装依赖
```bash
npm install
# 或
yarn install
```

### 启动开发服务器
```bash
npm run dev
# 或
yarn dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看演示

### 构建生产版本
```bash
npm run build
npm start
```

## 📖 使用指南

### 基本操作
1. **页面导航**：使用左右箭头键或点击导航按钮
2. **概览模式**：按 `G` 键或点击网格图标查看所有页面
3. **全屏演示**：按 `F` 键或点击全屏按钮进入沉浸式演示
4. **PDF 导出**：点击"导出 PDF"按钮或使用浏览器打印功能

### 演示内容
1. **封面** - 产品标识和主视觉展示
2. **入口指引** - 产品使用引导和快速入门
3. **痛点分析** - 用户需求分析与解决方案
4. **六类任务** - 核心功能特性详细展示
5. **工作场景** - 实际应用场景演示
6. **开始使用** - 行动号召和入门指引

## 🎨 设计特色

### 视觉设计
- **现代化风格**：采用渐变色彩、毛玻璃效果、流畅动画
- **品牌一致性**：符合地图帮产品的视觉规范
- **专业商务**：专为商务演示优化的设计语言

### 交互体验
- **流畅动画**：页面切换、元素动效都经过精心调校
- **即时反馈**：所有交互都有视觉和操作反馈
- **无障碍设计**：支持键盘导航，符合无障碍标准

## 🔧 自定义配置

### 主题定制
项目支持 CSS 变量驱动的主题系统，可在 `app/globals.css` 中修改：
```css
:root {
  --banana-yellow: #ff8d1a;
  --banana-yellow-dark: #e67e00;
  --banana-yellow-light: #ffb84d;
  /* 更多颜色变量... */
}
```

### 添加新幻灯片
1. 在 `components/ppt/` 目录创建新的幻灯片组件
2. 在 `ppt-viewer.tsx` 中添加到 slides 数组
3. 根据需要添加导航和样式

### 修改内容
每个幻灯片都是独立的 React 组件，可以直接修改对应文件来更新内容。

## 📱 浏览器支持

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 📞 联系方式

- **项目地址**: [GitHub Repository](https://github.com/soaringsoul/ditubang-showcase)
- **演示地址**: [Live Demo](https://your-demo-url.com)
- **问题反馈**: [Issues](https://github.com/soaringsoul/ditubang-showcase/issues)

## 🙏 致谢

感谢以下开源项目：
- [Next.js](https://nextjs.org/) - React 框架
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [Radix UI](https://www.radix-ui.com/) - UI 组件库
- [Lucide](https://lucide.dev/) - 图标库

---

**地图帮桌面端商务手册** - 让商务演示更专业、更高效 🚀
