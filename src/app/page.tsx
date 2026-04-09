import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-8 font-sans">
      <main className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-black dark:text-white">
          Amplify 環境変数テスト
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
          Next.js on AWS Amplify で環境変数がどこで読めるかを検証します。
          <br />
          Amplify コンソールで下記の3つの環境変数を設定してください。
        </p>

        <div className="mb-8 p-5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <h2 className="text-lg font-semibold mb-3 text-black dark:text-white">
            テスト対象の環境変数
          </h2>
          <div className="flex flex-col gap-3 text-sm">
            <div>
              <code className="bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-semibold text-black dark:text-white">
                TEST_ENV_VAR
              </code>
              <p className="text-zinc-600 dark:text-zinc-400 mt-1 ml-1">
                amplify.yml で .env.production に書き出す通常の環境変数。
                ランタイム (Lambda) でも読めるはず。
              </p>
            </div>
            <div>
              <code className="bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-semibold text-black dark:text-white">
                NEXT_PUBLIC_TEST_ENV_VAR
              </code>
              <p className="text-zinc-600 dark:text-zinc-400 mt-1 ml-1">
                NEXT_PUBLIC_ プレフィックス付き。ビルド時にインライン化され、
                クライアント (ブラウザ) でも読める。
              </p>
            </div>
            <div>
              <code className="bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-semibold text-black dark:text-white">
                TEST_ENV_VAR_NO_FILE
              </code>
              <p className="text-zinc-600 dark:text-zinc-400 mt-1 ml-1">
                amplify.yml で .env.production に<span className="font-semibold text-red-600 dark:text-red-400">書き出さない</span>環境変数。
                ビルド時は読めるがランタイムでは undefined になるはず。
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-semibold text-zinc-500 dark:text-zinc-400 mb-2">
          ビルド時
        </h2>
        <div className="flex flex-col gap-4 mb-8">
          <Link
            href="/build-time"
            className="block p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-blue-500 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-1 text-black dark:text-white">
              1. Static Generation (ビルド時)
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              force-static ページで next build 時に process.env を読む
            </p>
          </Link>
        </div>

        <h2 className="text-lg font-semibold text-zinc-500 dark:text-zinc-400 mb-2">
          クライアント
        </h2>
        <div className="flex flex-col gap-4 mb-8">
          <Link
            href="/csr"
            className="block p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-blue-500 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-1 text-black dark:text-white">
              2. CSR (Client Component)
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              &quot;use client&quot; コンポーネント内で process.env を読む（ブラウザ実行）
            </p>
          </Link>
        </div>

        <h2 className="text-lg font-semibold text-zinc-500 dark:text-zinc-400 mb-2">
          サーバーランタイム
        </h2>
        <div className="flex flex-col gap-4">
          <Link
            href="/ssr"
            className="block p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-blue-500 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-1 text-black dark:text-white">
              3. SSR (Server Component)
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              force-dynamic Server Component 内で process.env を読む
            </p>
          </Link>

          <Link
            href="/server-action"
            className="block p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-blue-500 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-1 text-black dark:text-white">
              4. Server Actions
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Server Action 内で process.env を読む
            </p>
          </Link>

          <Link
            href="/api/env"
            className="block p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-blue-500 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-1 text-black dark:text-white">
              5. API Route
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Route Handler 内で process.env を読む
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}
