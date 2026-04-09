"use client";

import Link from "next/link";

export default function CSRPage() {
  // クライアント側では NEXT_PUBLIC_ 付きのみアクセス可能
  // TEST_ENV_VAR はビルド時にインライン化されないため undefined になるはず
  const envValue = process.env.TEST_ENV_VAR;
  const publicEnvValue = process.env.NEXT_PUBLIC_TEST_ENV_VAR;
  const noFileEnvValue = process.env.TEST_ENV_VAR_NO_FILE;

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-8 font-sans">
      <main className="max-w-2xl mx-auto">
        <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">
          &larr; 戻る
        </Link>
        <h1 className="text-2xl font-bold mb-6 text-black dark:text-white">
          CSR (Client Component) テスト
        </h1>
        <p className="text-sm text-zinc-500 mb-4">
          <code className="bg-zinc-200 dark:bg-zinc-800 px-1 rounded">&quot;use client&quot;</code> コンポーネント内で
          process.env を読みます。ブラウザ上で実行されるため、
          <code className="bg-zinc-200 dark:bg-zinc-800 px-1 rounded">NEXT_PUBLIC_</code> 付きのみビルド時にインライン化されて読めるはずです。
        </p>

        <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <div className="py-3 border-b border-zinc-100 dark:border-zinc-800">
            <p className="text-sm text-zinc-500 mb-1">process.env.TEST_ENV_VAR:</p>
            <p className="text-lg font-mono">
              {envValue ? (
                <span className="text-green-600 dark:text-green-400">&quot;{envValue}&quot;</span>
              ) : (
                <span className="text-red-600 dark:text-red-400">undefined</span>
              )}
            </p>
          </div>
          <div className="py-3 border-b border-zinc-100 dark:border-zinc-800">
            <p className="text-sm text-zinc-500 mb-1">process.env.NEXT_PUBLIC_TEST_ENV_VAR:</p>
            <p className="text-lg font-mono">
              {publicEnvValue ? (
                <span className="text-green-600 dark:text-green-400">&quot;{publicEnvValue}&quot;</span>
              ) : (
                <span className="text-red-600 dark:text-red-400">undefined</span>
              )}
            </p>
          </div>
          <div className="py-3">
            <p className="text-sm text-zinc-500 mb-1">process.env.TEST_ENV_VAR_NO_FILE (envに書き出さない):</p>
            <p className="text-lg font-mono">
              {noFileEnvValue ? (
                <span className="text-green-600 dark:text-green-400">&quot;{noFileEnvValue}&quot;</span>
              ) : (
                <span className="text-red-600 dark:text-red-400">undefined</span>
              )}
            </p>
          </div>
          <p className="text-xs text-zinc-400 mt-4">
            レンダリング時刻: {new Date().toISOString()}
          </p>
        </div>
      </main>
    </div>
  );
}
