"use server";

export async function getEnvVar() {
  const value = process.env.TEST_ENV_VAR;
  return {
    value: value ?? null,
    timestamp: new Date().toISOString(),
  };
}
