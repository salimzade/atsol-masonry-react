import { useCallback, useEffect, useLayoutEffect, useState } from "react";

const useIsomorficLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const useHasMounted = () => {
  const [hasMounted, setHasMounted] = useState<boolean>(false);
  useIsomorficLayoutEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
};

export const useWindowWidth = () => {
  const hasMounted = useHasMounted();
  const [width, setWidth] = useState<number>(0);

  const handleResize = useCallback(() => {
    if (!hasMounted) return;
    setWidth(window.innerWidth);
  }, [hasMounted]);

  useIsomorficLayoutEffect(() => {
    if (hasMounted) {
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasMounted, handleResize]);

  return width;
};
