import Link from "next/link";

// force-static: ビルド時に1回だけレンダリングされ、値が固定される
export const dynamic = "force-static";

function EnvRow({ label, value }: { label: string; value: string | undefined }) {
  return (
    <div className="py-3 border-b border-zinc-100 dark:border-zinc-800 last:border-b-0">
      <p className="text-sm text-zinc-500 mb-1">{label}:</p>
      <p className="text-lg font-mono">
        {value ? (
          <span className="text-green-600 dark:text-green-400">&quot;{value}&quot;</span>
        ) : (
          <span className="text-red-600 dark:text-red-400">undefined</span>
        )}
      </p>
    </div>
  );
}

export default function BuildTimePage() {
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
          ビルド時 (Static Generation) テスト
        </h1>
        <p className="text-sm text-zinc-500 mb-4">
          このページは <code className="bg-zinc-200 dark:bg-zinc-800 px-1 rounded">force-static</code> で
          ビルド時にプリレンダリングされます。表示される値は <code className="bg-zinc-200 dark:bg-zinc-800 px-1 rounded">next build</code> 実行時のものです。
        </p>

        <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <EnvRow label="process.env.TEST_ENV_VAR" value={envValue} />
          <EnvRow label="process.env.NEXT_PUBLIC_TEST_ENV_VAR" value={publicEnvValue} />
          <EnvRow label="process.env.TEST_ENV_VAR_NO_FILE (envに書き出さない)" value={noFileEnvValue} />
          <p className="text-xs text-zinc-400 mt-4">
            ビルド時刻: {new Date().toISOString()}
          </p>
        </div>
      </main>
    </div>
  );
}
