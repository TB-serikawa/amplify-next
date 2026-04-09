"use client";

import Link from "next/link";
import { useState } from "react";
import { getEnvVar } from "./actions";

export default function ServerActionPage() {
  const [result, setResult] = useState<{
    value: string | null;
    publicValue: string | null;
    timestamp: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const res = await getEnvVar();
      setResult(res);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-8 font-sans">
      <main className="max-w-2xl mx-auto">
        <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">
          &larr; 戻る
        </Link>
        <h1 className="text-2xl font-bold mb-6 text-black dark:text-white">
          Server Actions テスト
        </h1>

        <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <button
            onClick={handleClick}
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 mb-4"
          >
            {loading ? "読み込み中..." : "Server Action を実行"}
          </button>

          {result && (
            <div className="mt-4">
              <div className="py-3 border-b border-zinc-100 dark:border-zinc-800">
                <p className="text-sm text-zinc-500 mb-1">process.env.TEST_ENV_VAR:</p>
                <p className="text-lg font-mono">
                  {result.value ? (
                    <span className="text-green-600 dark:text-green-400">
                      &quot;{result.value}&quot;
                    </span>
                  ) : (
                    <span className="text-red-600 dark:text-red-400">undefined</span>
                  )}
                </p>
              </div>
              <div className="py-3">
                <p className="text-sm text-zinc-500 mb-1">process.env.NEXT_PUBLIC_TEST_ENV_VAR:</p>
                <p className="text-lg font-mono">
                  {result.publicValue ? (
                    <span className="text-green-600 dark:text-green-400">
                      &quot;{result.publicValue}&quot;
                    </span>
                  ) : (
                    <span className="text-red-600 dark:text-red-400">undefined</span>
                  )}
                </p>
              </div>
              <p className="text-xs text-zinc-400 mt-4">
                実行時刻: {result.timestamp}
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
