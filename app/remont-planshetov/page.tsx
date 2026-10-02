import { ExtraDevicePage } from "@/components/site/extra-device-page";
import { tabletRepairData as data } from "@/data/extra-device-services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ ...data.metadata, path: `/${data.slug}/` });
export default function TabletRepairPage() { return <ExtraDevicePage data={data} />; }
