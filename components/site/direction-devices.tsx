
import type { DirectionPageData } from "@/data/directions";

const brandImages: Record<string, string> = {
  Apple: "apple", Samsung: "samsung", Xiaomi: "xiaomi", Huawei: "huawei", Honor: "honor",
};

function BrandLabel({ name }: { name: string }) {
  const image = brandImages[name];
  if (!image) return <span className="break-words text-center text-sm font-semibold xl:text-lg">{name}</span>;
  const wordmark = name === "Samsung" || name === "Honor";
  const tone = name === "Samsung"
    ? "text-[#1428a0] dark:text-[#91a5ff]"
    : name === "Xiaomi" ? "text-[#ff6900]"
    : name === "Huawei" ? "text-[#cf0a2c] dark:text-[#ff405c]"
    : "text-[#171717] dark:text-[#fff7f0]";
  return (
    <span role="img" aria-label={name} className="flex h-12 w-full max-w-[140px] items-center justify-center gap-2 xl:w-[140px] xl:gap-2.5">
      <span aria-hidden="true" className={`${wordmark ? "h-8 w-full max-w-[120px] xl:h-9 xl:max-w-none" : "size-7 shrink-0 xl:size-9"} bg-current ${tone}`}
        style={{ maskImage: `url(/brands/${image}.svg)`, maskSize: "contain", maskPosition: "center", maskRepeat: "no-repeat" }} />
      {!wordmark && <span aria-hidden="true" className={`${name === "Huawei" ? "text-xs font-bold uppercase xl:text-sm" : "text-sm font-semibold xl:text-base"} text-[#171717] dark:text-[#fff7f0]`}>{name}</span>}
    </span>
  );
}
export function DirectionDevices({ data }: { data: Pick<DirectionPageData, "devices"> }) {
  const { devices } = data;
  return (
    <section aria-labelledby="direction-devices-heading" className="mx-auto w-full max-w-[1440px] px-5 pb-8 md:px-6 xl:px-12">
      <div className="border-b border-[#e6e2de] pb-7 dark:border-[#46301f]">
        <h2 id="direction-devices-heading" className="text-2xl leading-tight font-extrabold tracking-[-0.035em] text-[#171717] xl:text-[28px] dark:text-[#fff7f0]">{devices.title}</h2>
        <div className="mt-5 flex flex-col gap-4 xl:mt-6 xl:flex-row xl:items-center xl:gap-8">
          <ul aria-label={devices.title} className="grid min-w-0 flex-1 grid-cols-2 gap-3 text-[#171717] sm:grid-cols-3 md:grid-cols-5 xl:flex xl:flex-wrap xl:items-center xl:justify-between xl:gap-x-8 xl:gap-y-5 dark:text-[#fff7f0]">
            {devices.brands.map((brand) => <li key={brand} className="flex min-h-20 min-w-0 items-center justify-center rounded-xl border border-[#ece5df] bg-[#fffefd] px-3 py-3 xl:min-h-0 xl:rounded-none xl:border-0 xl:bg-transparent xl:p-0 dark:border-[#46301f] dark:bg-[#15110e] dark:xl:bg-transparent"><BrandLabel name={brand} /></li>)}
          </ul>
          <p className="rounded-xl border border-[#f0e3d7] bg-[#fff6ee] px-4 py-3 text-xs leading-5 text-muted-foreground xl:w-[270px] xl:shrink-0 xl:rounded-none xl:border-0 xl:border-l xl:border-[#ded8d2] xl:bg-transparent xl:py-1 xl:pr-0 xl:pl-7 dark:border-[#49352d] dark:bg-[#211810] dark:xl:bg-transparent">{devices.note}</p>
        </div>
      </div>
    </section>
  );
}
