export type DirectionArt = "phone" | "laptop" | "computer" | "tv" | "windows";

export function DirectionCardArt({ kind }: { kind: DirectionArt }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 160 120" fill="none" className="h-24 w-32 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 motion-reduce:transform-none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="80" cy="105" rx="52" ry="6" fill="currentColor" opacity=".08" stroke="none" />
      <circle cx="82" cy="56" r="44" fill="currentColor" opacity=".06" stroke="none" />
      {kind === "phone" && <>
        <rect x="52" y="12" width="57" height="91" rx="11" fill="currentColor" fillOpacity=".08" />
        <path d="M70 19h21M76 95h9" />
        <rect x="59" y="29" width="43" height="55" rx="4" fill="currentColor" fillOpacity=".1" stroke="none" />
        <path d="m70 60 8 8 16-20M120 31v12m-6-6h12" />
      </>}
      {kind === "laptop" && <>
        <rect x="29" y="25" width="102" height="65" rx="6" fill="currentColor" fillOpacity=".08" />
        <path d="M37 82V33h86v49M18 91h124l-9 11H27zM65 91l3 5h24l3-5" />
        <path d="m62 63 12-13 10 10 14-17" opacity=".6" />
      </>}
      {kind === "computer" && <>
        <rect x="14" y="28" width="88" height="57" rx="5" fill="currentColor" fillOpacity=".08" />
        <path d="M15 74h86M58 85v15m-17 0h34" />
        <rect x="113" y="17" width="33" height="85" rx="5" fill="currentColor" fillOpacity=".08" />
        <circle cx="129.5" cy="32" r="3" /><path d="M122 47h15m-15 9h15m-15 31h15m-15 7h15M33 47h20m-20 9h36" />
      </>}
      {kind === "tv" && <>
        <rect x="14" y="20" width="132" height="77" rx="7" fill="currentColor" fillOpacity=".08" />
        <rect x="21" y="27" width="118" height="61" rx="3" strokeOpacity=".35" />
        <path d="m45 97-8 9m78-9 8 9M71 43l23 14-23 14z" />
      </>}
      {kind === "windows" && <>
        <path d="m34 29 42-6v34H34zm49-7 45-7v42H83zM34 64h42v34l-42-6zm49 0h45v42l-45-7z" fill="currentColor" fillOpacity=".14" />
        <path d="m137 27 3-7m-1 24 8-1M22 72l-8 3" opacity=".5" />
      </>}
    </svg>
  );
}
