# Image Preflight Report

Processed images: 1
Original total: 2.0 MB
Recommended delivery total: 112.0 KB
Estimated reduction: 94.6%

Applied fixes:
- Converted delivery assets to WebP.
- Generated JPEG/PNG fallbacks.
- Generated responsive image widths for web delivery.
- Prepared SEO/accessibility alt text suggestions.
- Stripped unnecessary metadata by re-encoding outputs.

## reki-startup-community-hero

- Original: `reki-startup-community-hero.png` (1536×1024, 2.0 MB)
- Recommended delivery: `images/reki-startup-community-hero-1536w.webp` (112.0 KB, 94.6% reduction)
- Mode: `seo`
- Role: `hero`
- Alt: `スタートアップコミュニティの対話から、音声の流れが記録としてつながっていくヒーローイラスト`
- Variants:
  - `images/reki-startup-community-hero-640w.webp` — 640×427, webp, 28.3 KB
  - `images/reki-startup-community-hero-640w.jpg` — 640×427, jpg, 42.7 KB
  - `images/reki-startup-community-hero-960w.webp` — 960×640, webp, 53.4 KB
  - `images/reki-startup-community-hero-960w.jpg` — 960×640, jpg, 83.4 KB
  - `images/reki-startup-community-hero-1280w.webp` — 1280×853, webp, 83.0 KB
  - `images/reki-startup-community-hero-1280w.jpg` — 1280×853, jpg, 137.6 KB
  - `images/reki-startup-community-hero-1536w.webp` — 1536×1024, webp, 112.0 KB
  - `images/reki-startup-community-hero-1536w.jpg` — 1536×1024, jpg, 188.0 KB
- Decisions:
  - Generated responsive WebP variants plus fallback images.
  - Prepared HTML implementation guidance.
  - Treated as a likely first-view/LCP image; lazy loading is not recommended.
- Assumptions:
  - LP2のファーストビュー右側に配置するヒーロー画像
  - 実際のダッシュボード画像を手前に重ねるハイブリッド構成
  - SEO mode assumes the image will be used on a website or web page.
- Warnings:
  - 生成画像内の抽象カードは概念表現であり、実際の機能画面ではない
