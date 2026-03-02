export function stage(name, enabledFn, drawFn) {
  return {
    name,
    enabledFn,
    drawFn,
  };
}
