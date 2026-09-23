export function TvProblemIllustration() {
  return (
    <svg aria-hidden="true" viewBox="0 0 240 240" fill="none" className="h-auto w-full text-[#292522] dark:text-[#e3d9ce]">
      <circle cx="120" cy="118" r="90" className="fill-[#fff0e5] dark:fill-[#291a11]" />
      <ellipse cx="120" cy="204" rx="96" ry="8" className="fill-[#efdcd0] dark:fill-[#35251a]" />
      <g stroke="#ff6800" strokeOpacity=".35" strokeLinecap="round">
        {[0, 1, 2].flatMap((row) => [0, 1, 2].map((col) => <path key={`${row}-${col}`} d={`M${182 + col * 14} ${22 + row * 14}h6m-3-3v6`} />))}
      </g>
      <g stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round">
        <path d="M84 170l-14 30M156 170l14 30" strokeLinecap="round" />
        <rect x="16" y="52" width="208" height="122" rx="8" className="fill-[#fffefd] dark:fill-[#15110e]" />
        <rect x="24" y="60" width="192" height="104" rx="3" className="fill-[#fff7f1] dark:fill-[#211810]" strokeWidth="1" strokeOpacity=".25" />
        <path d="M112 169h16" stroke="#ff6800" strokeWidth="2" strokeLinecap="round" />
      </g>
      <path d="M105 88c0-16 27-18 27-2 0 9-13 9-13 20" stroke="#ff5000" strokeWidth="6" strokeLinecap="round" />
      <circle cx="119" cy="120" r="3.5" fill="#ff5000" />
      <path d="m36 76 14 0m-14 5h8" stroke="#ff6800" strokeOpacity=".4" strokeWidth="2" strokeLinecap="round" />
      <path d="m40 40-5-11m24 8 2-13m-38 28-11-4" stroke="#ff6800" strokeWidth="3" strokeLinecap="round" />
      <circle cx="160" cy="36" r="4" stroke="#ff6800" strokeWidth="1.5" />
    </svg>
  );
}
