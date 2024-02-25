import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }: { children: React.ReactNode }) {
  const lenisOptions = {
    lerp: 0.1,
    duration: 0.5,
    smoothTouch: false, //smooth scroll for touch devices
    smooth: true,
    mouseMultiplier: 1,
    touchMultiplier: 2,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
