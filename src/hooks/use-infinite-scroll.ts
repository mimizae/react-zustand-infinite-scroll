import { useEffect } from 'react';

interface Options {
  target: React.RefObject<Element | null>;
  onIntersect: () => void;
  enabled: boolean;
}

export const useInfiniteScroll = ({ target, onIntersect, enabled }: Options) => {
  useEffect(() => {
    if (!enabled || !target.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onIntersect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(target.current);

    return () => observer.disconnect();
  }, [enabled, onIntersect, target]);
};
