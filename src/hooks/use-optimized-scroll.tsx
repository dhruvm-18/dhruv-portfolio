import { useEffect, useRef, useState, useCallback } from 'react';

interface UseOptimizedScrollOptions {
  throttleMs?: number;
  threshold?: number;
  rootMargin?: string;
}

export const useOptimizedScroll = (options: UseOptimizedScrollOptions = {}) => {
  const { throttleMs = 16, threshold = 0.1, rootMargin = '0px' } = options;
  const [scrollY, setScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    if (timeoutRef.current) return;

    timeoutRef.current = setTimeout(() => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolling(Math.abs(currentScrollY - lastScrollY.current) > 5);
      lastScrollY.current = currentScrollY;
      
      timeoutRef.current = undefined;
    }, throttleMs);
  }, [throttleMs]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [handleScroll]);

  return { scrollY, isScrolling };
};

export const useIntersectionObserver = (
  options: IntersectionObserverInit = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        setIsIntersecting(isVisible);
        if (isVisible && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [options, hasIntersected]);

  return { elementRef, isIntersecting, hasIntersected };
};

export const useLazyLoad = (src: string, placeholder?: string) => {
  const [imageSrc, setImageSrc] = useState(placeholder || '');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
      setIsError(false);
    };

    img.onerror = () => {
      setIsError(true);
      setIsLoaded(false);
    };

    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, placeholder]);

  return { imageSrc, isLoaded, isError };
};

export const useScrollSpy = (sectionIds: string[], offset: number = 80) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let found = false;
      
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset) {
            setActiveSection(sectionIds[i]);
            found = true;
            break;
          }
        }
      }
      
      if (!found) setActiveSection(sectionIds[0] || '');
    };

    // Throttle scroll events
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', throttledScroll);
  }, [sectionIds, offset]);

  return activeSection;
};

export const usePerformanceOptimizer = () => {
  const [isLowPowerMode, setIsLowPowerMode] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for low power mode (battery API)
    if ('getBattery' in navigator) {
      (navigator as any).getBattery().then((battery: any) => {
        setIsLowPowerMode(battery.level < 0.2 || battery.charging === false);
        
        battery.addEventListener('levelchange', () => {
          setIsLowPowerMode(battery.level < 0.2 || battery.charging === false);
        });
      });
    }

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return { isLowPowerMode, prefersReducedMotion };
}; 