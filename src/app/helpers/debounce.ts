export const debounce = (fn: any, delay: number) => {
  let timeoutId: string | number | NodeJS.Timeout | undefined;
  console.log("🚀 ~ file: debounce.ts:3 ~ debounce ~ timeoutId:", timeoutId);

  return (...args: any) => {
    console.log("🚀 ~ file: debounce.ts:6 ~ return ~ args:", args);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
