import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook that scrolls to top when the route changes
 * This ensures users always see the top of the page when navigating
 * Includes fallback for older browsers and handles edge cases
 */
export const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Use requestAnimationFrame to ensure DOM is ready
    const scrollToTop = () => {
      try {
        // Modern browsers - use scrollTo with options
        if ('scrollBehavior' in document.documentElement.style) {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant' // Use 'instant' for immediate scroll without animation
          });
        } else {
          // Fallback for older browsers
          window.scrollTo(0, 0);
        }
      } catch (error) {
        // Final fallback
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    };

    // Use requestAnimationFrame to ensure the scroll happens after the route change
    requestAnimationFrame(scrollToTop);
  }, [location.pathname, location.search]); // Trigger on both path and search params change
};

/**
 * Alternative hook with smooth scrolling option
 * Use this if you want animated scroll-to-top behavior
 */
export const useScrollToTopSmooth = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top with smooth animation
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [location.pathname, location.search]);
};

/**
 * Hook that provides manual scroll to top functionality
 * Useful for scroll-to-top buttons or other manual triggers
 */
export const useManualScrollToTop = () => {
  const scrollToTop = (smooth: boolean = false) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: smooth ? 'smooth' : 'instant'
    });
  };

  return { scrollToTop };
};
