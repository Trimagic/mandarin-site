import { forwardRef } from "react";
import type { IconProps } from "@tabler/icons-react";

/** Shared diagnosis symbol: a magnifying glass inspecting a mechanism. */
export const DiagnosticsIcon = forwardRef<SVGSVGElement, IconProps>(
  function DiagnosticsIcon({ size = 24, stroke = 1.5, color = "currentColor", ...props }, ref) {
    return (
      <svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="10" cy="10" r="8" />
        <path d="m16 16 6 6" />
        <g transform="translate(4.5 4.5) scale(.5)">
          <path d="m10 2-.6 2.3-2 .9-2.1-1.1L3 7.5l1.5 1.8-.2 2.2L2 12.7l1.2 3.9 2.4-.1 1.6 1.5.1 2.4 4 .6.9-2.2 2.1-.7 2 1.3 2.8-2.8-1.3-2 .7-2.1 2.2-.9-.6-4-2.4-.1-1.5-1.6.1-2.4L12.7 2Z" />
          <circle cx="11" cy="11" r="3" />
        </g>
      </svg>
    );
  },
);
