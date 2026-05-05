import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ReactNode, CSSProperties } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  from?: "bottom" | "left" | "right";
}

export default function Reveal({ children, delay = 0, className = "", style = {}, from = "bottom" }: Props) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  const translate =
    from === "left" ? "translateX(-32px)" :
    from === "right" ? "translateX(32px)" :
    "translateY(28px)";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0,0)" : translate,
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
