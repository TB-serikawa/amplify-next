import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json({
    source: "API Route (Route Handler)",
    TEST_ENV_VAR: process.env.TEST_ENV_VAR ?? null,
    NEXT_PUBLIC_TEST_ENV_VAR: process.env.NEXT_PUBLIC_TEST_ENV_VAR ?? null,
    TEST_ENV_VAR_NO_FILE: process.env.TEST_ENV_VAR_NO_FILE ?? null,
    timestamp: new Date().toISOString(),
  });
}
