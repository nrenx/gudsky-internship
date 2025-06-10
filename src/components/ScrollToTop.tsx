import { useScrollToTop } from '@/hooks/useScrollToTop';

/**
 * ScrollToTop component that automatically scrolls to top on route changes
 * This component should be placed inside the Router but outside of Routes
 * It doesn't render any visible content, just handles the scroll behavior
 */
const ScrollToTop = () => {
  useScrollToTop();
  return null; // This component doesn't render anything
};

export default ScrollToTop;
