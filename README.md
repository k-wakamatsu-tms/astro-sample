# カウンセラー検索サイト

## 📁 プロジェクト構成

プロジェクト内の主要なフォルダとファイルの構成:

```text
/
├── public/              # 静的アセット（画像、favicon等）
├── src/
│   ├── components/      # 再利用可能なコンポーネント
│   ├── content/         # コンテンツ設定
│   ├── data/           # データファイル（カウンセラー、ブログ等）
│   ├── layouts/        # ページレイアウト
│   ├── pages/          # ルーティング用ページファイル
│   └── types/          # TypeScript型定義
└── package.json
```

## 🔧️ Astro設定

### astro.config.mjs

このプロジェクトの主要な設定は以下の通りです：

```js
output: 'static'  // 静的サイト生成（SSG）モード
```

- **レンダリングモード**:
  - デフォルトでSSG（静的サイト生成）モードを使用
  - ページ単位でSSRに切り替え可能（`export const prerender = false;`をページに追加）

- 参考: https://docs.astro.build/ja/guides/on-demand-rendering/

### Content Layer (v5の新機能)

`src/content/config.ts`でコンテンツの設定を管理します：

- **特徴**:
  - ローカルファイル、CMS、外部APIからのデータ取得が可能
  - ビルド時にデータをキャッシュ（140ファイルで約6秒の高速ビルドを実現）
  - 型安全性の確保（TypeScript連携）

- **更新について**:
  - データはビルド時に固定
  - コンテンツ更新時は再ビルドが必要

- 参考: https://docs.astro.build/ja/guides/content-layer/

### Server Islands

コンポーネントレベルでの動的レンダリングを実現：

```astro
<DynamicComponent server:defer />
```

- **機能**:
  - `server:defer`属性で遅延ローディングが可能
  - コンポーネント単位でのデータ取得と表示
  - フォールバックUIの設定が可能

参考: https://docs.astro.build/ja/guides/server-islands/

## 🔧 開発環境のセットアップ

1. リポジトリをクローン
2. 依存関係をインストール
```bash
npm install
```

## 🐛 デバッグ方法

1. 開発サーバーの起動
```bash
npm run dev
```
開発サーバーは `localhost:4321` で起動します。

2. コンソールログの確認
- ブラウザの開発者ツール（F12）でコンソールを確認
- ターミナルでサーバーログを確認

3. TypeScriptエラーのチェック
```bash
npm run astro check
```

## 🧞 使用可能なコマンド

プロジェクトルートから実行可能なコマンド一覧:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | 依存関係をインストール                            |
| `npm run dev`             | 開発サーバーを `localhost:4321` で起動           |
| `npm run build`           | 本番用サイトを `./dist/` にビルド                |
| `npm run preview`         | デプロイ前にビルドをローカルでプレビュー          |
| `npm run astro ...`       | `astro add`などのCLIコマンドを実行               |
| `npm run astro -- --help` | Astro CLIのヘルプを表示                         |

## 📚 参考リンク

- [Astro ドキュメント](https://docs.astro.build)
- [Astro Discord コミュニティ](https://astro.build/chat)
- [Content Layer Deep Dive](https://astro.build/blog/content-layer-deep-dive/)
