import { useCallback } from 'react';

export function useSmoothScroll() {
  const scrollTo = useCallback((targetId: string) => {
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerHeight = 80; // Account for fixed header
      const targetPosition = targetElement.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  return scrollTo;
}
