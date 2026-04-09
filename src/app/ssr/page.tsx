import Link from "next/link";

export const dynamic = "force-dynamic";

export default function SSRPage() {
  const envValue = process.env.TEST_ENV_VAR;

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-8 font-sans">
      <main className="max-w-2xl mx-auto">
        <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">
          &larr; 戻る
        </Link>
        <h1 className="text-2xl font-bold mb-6 text-black dark:text-white">
          SSR (Server Component) テスト
        </h1>

        <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <p className="text-sm text-zinc-500 mb-2">process.env.TEST_ENV_VAR:</p>
          <p className="text-lg font-mono text-black dark:text-white">
            {envValue ? (
              <span className="text-green-600 dark:text-green-400">
                &quot;{envValue}&quot;
              </span>
            ) : (
              <span className="text-red-600 dark:text-red-400">undefined</span>
            )}
          </p>
          <p className="text-xs text-zinc-400 mt-4">
            レンダリング時刻: {new Date().toISOString()}
          </p>
        </div>
      </main>
    </div>
  );
}
