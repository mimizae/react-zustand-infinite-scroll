import { useEffect } from 'react';

interface Options {
  target: React.RefObject<Element | null>;
  onIntersect: () => void;
  enabled: boolean;
}

export const useInfiniteScroll = ({ target, onIntersect, enabled }: Options) => {
  useEffect(() => {
    // 비활성화 상태이거나 타겟이 없으면 옵저버를 생성하지 않음
    if (!enabled || !target.current) return;

    const element = target.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        // 중복 호출 방지를 위해 한 번 트리거 후 관측 해제
        observer.unobserve(entry.target);
        onIntersect();
      },
      {
        threshold: 0.1,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [enabled, onIntersect, target]);
};
