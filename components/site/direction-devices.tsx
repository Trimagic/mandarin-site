
import type { DirectionPageData } from "@/data/directions";

const brandImages: Record<string, string> = {
  Apple: "apple", Samsung: "samsung", Xiaomi: "xiaomi", Huawei: "huawei", Honor: "honor",
};

function BrandLabel({ name }: { name: string }) {
  const image = brandImages[name];
  if (!image) return <span className="text-lg font-semibold">{name}</span>;
  const wordmark = name === "Samsung" || name === "Honor";
  const tone = name === "Samsung"
    ? "text-[#1428a0] dark:text-[#91a5ff]"
    : name === "Xiaomi" ? "text-[#ff6900]"
    : name === "Huawei" ? "text-[#cf0a2c] dark:text-[#ff405c]"
    : "text-[#171717] dark:text-[#fff7f0]";
  return (
    <span role="img" aria-label={name} className="flex h-12 w-[140px] items-center justify-center gap-2.5">
      <span aria-hidden="true" className={`${wordmark ? "h-9 w-full" : "size-9 shrink-0"} bg-current ${tone}`}
        style={{ maskImage: `url(/brands/${image}.svg)`, maskSize: "contain", maskPosition: "center", maskRepeat: "no-repeat" }} />
      {!wordmark && <span aria-hidden="true" className={`${name === "Huawei" ? "text-sm font-bold uppercase" : "text-base font-semibold"} text-[#171717] dark:text-[#fff7f0]`}>{name}</span>}
    </span>
  );
}
export function DirectionDevices({ data }: { data: Pick<DirectionPageData, "devices"> }) {
  const { devices } = data;
  return (
    <section aria-labelledby="direction-devices-heading" className="mx-auto w-full max-w-[1440px] px-5 pb-8 md:px-6 xl:px-12">
      <div className="border-b border-[#e6e2de] pb-7 dark:border-[#46301f]">
        <h2 id="direction-devices-heading" className="text-2xl leading-tight font-extrabold tracking-[-0.035em] text-[#171717] xl:text-[28px] dark:text-[#fff7f0]">{devices.title}</h2>
        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-8">
          <ul aria-label={devices.title} className="flex flex-1 flex-wrap items-center justify-between gap-x-8 gap-y-5 text-[#171717] dark:text-[#fff7f0]">
            {devices.brands.map((brand) => <li key={brand}><BrandLabel name={brand} /></li>)}
          </ul>
          <p className="text-xs leading-5 text-muted-foreground lg:w-[270px] lg:shrink-0 lg:border-l lg:border-[#ded8d2] lg:py-1 lg:pl-7 dark:lg:border-[#49352d]">{devices.note}</p>
        </div>
      </div>
    </section>
  );
}
