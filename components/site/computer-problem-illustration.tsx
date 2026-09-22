export function ComputerProblemIllustration() {
  return (
    <svg aria-hidden="true" viewBox="0 0 240 240" fill="none" className="h-auto w-full text-[#292522] dark:text-[#e3d9ce]">
      <circle cx="117" cy="124" r="90" className="fill-[#fff0e5] dark:fill-[#291a11]" />
      <ellipse cx="126" cy="204" rx="99" ry="8" className="fill-[#efdcd0] dark:fill-[#35251a]" />
      <g stroke="#ff6800" strokeOpacity=".35" strokeLinecap="round">
        {[0, 1, 2].flatMap((row) => [0, 1, 2].map((col) => <path key={`${row}-${col}`} d={`M${177 + col * 14} ${29 + row * 14}h6m-3-3v6`} />))}
      </g>
      <g stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round">
        <path d="m170 69 37 6 16 15v106l-16 7-37-7V69Z" className="fill-[#e9e4de] dark:fill-[#2e2924]" />
        <path d="m170 69 17 15h36M187 84v115" />
        <path d="m188 91 27 3v91l-27 7V91Z" className="fill-[#fffefd] dark:fill-[#15110e]" strokeWidth="1.5" />
        <circle cx="202" cy="109" r="4" stroke="#ff6800" strokeWidth="2" />
        <path d="M197 126h10m-10 6h10m-10 6h10m-10 29h10m-10 6h10m-10 6h10" strokeWidth="1.5" strokeLinecap="round" opacity=".5" />
        <path d="M177 196v8m34-6v6" strokeLinecap="round" />
        <path d="M94 172v21m25-21v21m-37 4h49l-12-6H94l-12 6Z" className="fill-[#e9e4de] dark:fill-[#2e2924]" />
        <rect x="19" y="63" width="159" height="111" rx="9" className="fill-[#fffefd] dark:fill-[#15110e]" />
        <rect x="26" y="70" width="145" height="88" rx="4" className="fill-[#fff7f1] dark:fill-[#211810]" strokeWidth="1" strokeOpacity=".25" />
        <path d="M20 160h156" strokeWidth="1.5" />
        <path d="M94 167h10" stroke="#ff6800" strokeWidth="2" strokeLinecap="round" />
      </g>
      <path d="M86 99c0-16 27-18 27-2 0 9-13 9-13 20" stroke="#ff5000" strokeWidth="6" strokeLinecap="round" />
      <circle cx="100" cy="131" r="3.5" fill="#ff5000" />
      <path d="m37 83 14 0m-14 5h8" stroke="#ff6800" strokeOpacity=".4" strokeWidth="2" strokeLinecap="round" />
      <path d="m30 194 123 0 10 15H21l9-15Z" className="fill-[#fffefd] dark:fill-[#15110e]" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M38 200h99m-80 5h63" stroke="currentColor" strokeOpacity=".35" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 5" />
      <path d="m40 44-5-11m24 8 2-13m-38 28-11-4" stroke="#ff6800" strokeWidth="3" strokeLinecap="round" />
      <circle cx="155" cy="45" r="4" stroke="#ff6800" strokeWidth="1.5" />
    </svg>
  );
}
