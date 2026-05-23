# Reki note LP — Astro

## 構成

- **フレームワーク**: Astro 6 + React Islands + Tailwind v4
- **デプロイ**: Cloudflare Pages（GitHub `tanakaisworking/rekinote-lp` main ブランチ自動デプロイ）
- **CMS**: microCMS（サービスID: `rekinote`）
- **ドメイン**: rekinote.app

## ブログ運用

### microCMS スキーマ（API: `blogs`）

| フィールドID | 用途 | 備考 |
|-------------|------|------|
| `title_ja` | 日本語タイトル | 空なら日本語ページ非生成 |
| `title_en` | 英語タイトル | 空なら英語ページ非生成 |
| `description_ja` | 日本語概要 | 一覧・OGP用 |
| `description_en` | 英語概要 | 同上 |
| `body_ja` | 日本語本文 | リッチエディタ |
| `body_en` | 英語本文 | リッチエディタ |
| `eyecatch` | アイキャッチ画像 | 共通（言語問わず） |
| `category` | カテゴリ | コンテンツ参照。**英語マスタ**（Updates / Tips / Dev） |

旧フィールド `title` / `description` / `body`（サフィックスなし）は未使用。残っていてもフォールバックとして参照されるが、新規記事では `_ja` / `_en` を使うこと。

### カテゴリ名の多言語対応

カテゴリは英語マスタで管理。日本語表示時は `src/lib/microcms.ts` の `categoryMapJa` で自動変換される。

| microCMS マスタ（英語） | 日本語表示 |
|------------------------|-----------|
| Updates | 更新情報 |
| News | お知らせ |
| Tips | 使い方 |

新カテゴリを追加した場合は `categoryMapJa` にも追加すること。

### 記事の公開フロー

1. microCMS 管理画面で記事を作成・公開
2. GitHub に push（空コミットでも可）→ CF Pages 自動ビルド
3. ビルド時に microCMS API から全記事を取得し、該当言語のページを静的生成

### 環境変数

| 変数名 | 設定場所 | 用途 |
|--------|---------|------|
| `MICROCMS_API_KEY` | CF Pages 環境変数 | microCMS 読み取り用 |
| `NODE_VERSION` | CF Pages 環境変数 | `22` |
| `MICROCMS_REKINOTE_mackeychain` | macOS Keychain | ローカル開発用（同じキー） |

### ローカル開発

```bash
MICROCMS_API_KEY=$(security find-generic-password -s "MICROCMS_REKINOTE_mackeychain" -w ~/Library/Keychains/api-keys.keychain-db) npx astro dev
```

### URL 構造

- 一覧: `/ja/blog/` `/en/blog/`
- 詳細: `/ja/blog/{contentId}/` `/en/blog/{contentId}/`

## デプロイ

```bash
# GitHub 経由（自動）
git push origin main

# 手動デプロイ（緊急時）
npm run build && npx wrangler pages deploy dist/ --project-name rekinote-lp --branch main
```
