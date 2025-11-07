export function merge(
  ...objects: Array<Record<string, unknown> | null | undefined>
): Record<string, unknown> {
  console.log("objects", ...objects);
  // 1. Keep only real objects (skip null/undefined/arrays)
  const valid = objects.filter(
    (o): o is Record<string, unknown> => o != null && typeof o === "object" && !Array.isArray(o)
  );

  if (valid.length === 0) return {};
  if (valid.length === 1) return { ...valid[0] }; // shallow clone

  const result: Record<string, unknown> = {};

  // 2. Collect every key that appears in any source object
  const allKeys = new Set<string>();
  for (const obj of valid) Object.keys(obj).forEach((k) => allKeys.add(k));

  // 3. Helper – true for *plain* objects (not arrays, not null, not Date, …)
  const isPlainObject = (v: unknown): v is Record<string, unknown> =>
    v != null &&
    typeof v === "object" &&
    !Array.isArray(v) &&
    Object.prototype.toString.call(v) === "[object Object]";

  for (const key of allKeys) {
    // 4. Gather all values for this key (skip undefined)
    const values = valid.map((o) => o[key]).filter((v): v is unknown => v !== undefined);

    if (values.length === 0) continue;

    const last = values[values.length - 1];

    // 5. If *any* value is a primitive / null / function → take the **last** one
    const hasNonObject = values.some(
      (v) => v === null || (typeof v !== "object" && typeof v !== "function")
    );
    if (hasNonObject) {
      result[key] = last;
      continue;
    }

    // 6. All values are objects or arrays
    if (Array.isArray(last)) {
      // ---- ARRAY MERGE -------------------------------------------------
      // Chart.js never expects concatenated arrays here, so we **overwrite**
      result[key] = [...(last as unknown[])];
    } else if (isPlainObject(last)) {
      // ---- PLAIN OBJECT MERGE -----------------------------------------
      // Recursively merge every plain-object value that appears for this key
      const objs = values.filter(isPlainObject);
      result[key] = merge(...objs);
    } else {
      // ---- FUNCTION / OTHER NON-OBJECT --------------------------------
      result[key] = last;
    }
  }

  return result;
}
