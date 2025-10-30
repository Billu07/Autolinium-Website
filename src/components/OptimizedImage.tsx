import React, { useState, useEffect, useRef } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  webpSrc?: string;
  mobileSrc?: string;
  onLoad?: () => void;
}

/**
 * Optimized Image Component with:
 * - Lazy loading
 * - WebP support with fallback
 * - Responsive images
 * - Intersection Observer for performance
 * - Blur placeholder
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = "",
  width,
  height,
  priority = false,
  sizes,
  webpSrc,
  mobileSrc,
  onLoad,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return; // Skip intersection observer for priority images

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "50px", // Start loading 50px before image comes into view
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  return (
    <picture ref={imgRef as any}>
      {/* WebP version for modern browsers */}
      {webpSrc && isInView && <source srcSet={webpSrc} type="image/webp" />}

      {/* Mobile-specific image */}
      {mobileSrc && isInView && (
        <source srcSet={mobileSrc} media="(max-width: 768px)" />
      )}

      {/* Fallback image */}
      <img
        src={isInView ? src : ""}
        alt={alt}
        className={`${className} transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
        sizes={sizes}
        onLoad={handleLoad}
        style={{
          aspectRatio: width && height ? `${width}/${height}` : undefined,
        }}
      />

      {/* Blur placeholder while loading */}
      {!isLoaded && isInView && (
        <div
          className={`${className} animate-pulse bg-gray-800`}
          style={{
            aspectRatio: width && height ? `${width}/${height}` : undefined,
          }}
        />
      )}
    </picture>
  );
};

export default OptimizedImage;
