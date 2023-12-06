import { useEffect, useState } from "react";

function useDebaunce<T>(value: T, delay?: number): T {
  const [debauncedValue, setDebauncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebauncedValue(value);
    }, delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return debauncedValue;
}

export default useDebaunce;
