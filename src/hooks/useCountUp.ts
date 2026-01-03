import { useEffect, useState } from 'react';

export function useCountUp(
  end: string | number,
  duration: number = 2000,
  start: number = 0,
  isVisible: boolean = false
) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const startValue = start;
    const endValue = parseInt(end.toString().replace(/[^0-9]/g, ''));

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutQuart);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, start, isVisible]);

  // Format the number with the original suffix (e.g., "5000+")
  const originalSuffix = end.toString().replace(/[0-9]/g, '');
  return count.toString() + originalSuffix;
}

