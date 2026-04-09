import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export function GET() {
  const value = process.env.TEST_ENV_VAR;
  return NextResponse.json({
    source: "API Route (Route Handler)",
    TEST_ENV_VAR: value ?? null,
    timestamp: new Date().toISOString(),
  });
}
