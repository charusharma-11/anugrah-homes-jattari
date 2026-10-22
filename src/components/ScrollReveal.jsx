import { useEffect, useRef, useState } from "react";

function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 900,
  className = "",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Pehle animation reset karo
          setVisible(false);

          // Browser ko next frame do, phir animation dobara start karo
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setVisible(true);
            });
          });
        } else {
          // Section viewport se bahar jaate hi reset
          setVisible(false);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-reveal scroll-reveal-${direction} ${
        visible ? "scroll-reveal-visible" : ""
      } ${className}`}
      style={{
        "--reveal-delay": `${delay}ms`,
        "--reveal-duration": `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;