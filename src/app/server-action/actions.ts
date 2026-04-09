"use server";

export async function getEnvVar() {
  return {
    value: process.env.TEST_ENV_VAR ?? null,
    publicValue: process.env.NEXT_PUBLIC_TEST_ENV_VAR ?? null,
    noFileValue: process.env.TEST_ENV_VAR_NO_FILE ?? null,
    timestamp: new Date().toISOString(),
  };
}
