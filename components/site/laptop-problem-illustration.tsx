export function LaptopProblemIllustration() {
  return (
    <svg aria-hidden="true" viewBox="0 0 240 240" fill="none" className="h-auto w-full text-[#292522] dark:text-[#e3d9ce]">
      <circle cx="120" cy="120" r="90" className="fill-[#fff0e5] dark:fill-[#291a11]" />
      <ellipse cx="120" cy="200" rx="104" ry="8" className="fill-[#efdcd0] dark:fill-[#35251a]" />
      <g stroke="#ff6800" strokeOpacity=".35" strokeLinecap="round">
        {[0, 1, 2].flatMap((row) => [0, 1, 2].map((col) => <path key={`${row}-${col}`} d={`M${180 + col * 14} ${26 + row * 14}h6m-3-3v6`} />))}
      </g>
      <g stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round">
        <rect x="42" y="58" width="156" height="108" rx="9" className="fill-[#fffefd] dark:fill-[#15110e]" />
        <rect x="50" y="66" width="140" height="90" rx="4" className="fill-[#fff7f1] dark:fill-[#211810]" strokeWidth="1" strokeOpacity=".25" />
        <path d="M18 172h204l-10 18H28l-10-18Z" className="fill-[#e9e4de] dark:fill-[#2e2924]" />
        <path d="M100 172l4 6h32l4-6" strokeWidth="1.5" />
        <path d="M34 166h172" strokeWidth="2" />
      </g>
      <path d="M105 94c0-16 27-18 27-2 0 9-13 9-13 20" stroke="#ff5000" strokeWidth="6" strokeLinecap="round" />
      <circle cx="119" cy="126" r="3.5" fill="#ff5000" />
      <path d="m60 78 14 0m-14 5h8" stroke="#ff6800" strokeOpacity=".4" strokeWidth="2" strokeLinecap="round" />
      <path d="m40 44-5-11m24 8 2-13m-38 28-11-4" stroke="#ff6800" strokeWidth="3" strokeLinecap="round" />
      <circle cx="160" cy="40" r="4" stroke="#ff6800" strokeWidth="1.5" />
    </svg>
  );
}
