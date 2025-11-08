export function merge(
  ...objects: Array<Record<string, unknown> | null | undefined>
): Record<string, unknown> {
  const validObjects = objects.filter((obj) => obj != null && typeof obj === "object") as Array<
    Record<string, unknown>
  >;
  if (validObjects.length === 0) return {} as Record<string, unknown>;
  if (validObjects.length === 1) return validObjects[0];

  const result: Record<string, unknown> = {};

  for (const obj of validObjects) {
    const keys = Object.keys(obj);
    for (const key of keys) {
      const currentValue = result[key] as unknown;
      const newValue = (obj as Record<string, unknown>)[key] as unknown;

      const isObject = (v: unknown) => v !== null && typeof v === "object" && !Array.isArray(v);

      if (isObject(currentValue) && isObject(newValue)) {
        // both are plain objects -> deep merge
        result[key] = merge(
          currentValue as Record<string, unknown>,
          newValue as Record<string, unknown>
        );
      } else {
        if (Array.isArray(newValue)) {
          // Create a shallow copy of the array to avoid mutating the source
          result[key] = (newValue as unknown[]).slice();
        } else {
          result[key] = newValue;
        }
      }
    }
  }

  return result;
}
