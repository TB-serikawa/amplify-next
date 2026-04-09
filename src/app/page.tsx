import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-8 font-sans">
      <main className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-black dark:text-white">
          Amplify 環境変数テスト
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8">
          Next.js on AWS Amplify で環境変数がどこで読めるかを検証します。
          <br />
          Amplify コンソールで <code className="bg-zinc-200 dark:bg-zinc-800 px-1 rounded">TEST_ENV_VAR</code> を設定してください。
        </p>

        <div className="flex flex-col gap-4">
          <Link
            href="/ssr"
            className="block p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-blue-500 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-1 text-black dark:text-white">
              1. SSR (Server Component)
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Server Component 内で process.env.TEST_ENV_VAR を読む
            </p>
          </Link>

          <Link
            href="/server-action"
            className="block p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-blue-500 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-1 text-black dark:text-white">
              2. Server Actions
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Server Action 内で process.env.TEST_ENV_VAR を読む
            </p>
          </Link>

          <Link
            href="/api/env"
            className="block p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-blue-500 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-1 text-black dark:text-white">
              3. API Route
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Route Handler 内で process.env.TEST_ENV_VAR を読む
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}
