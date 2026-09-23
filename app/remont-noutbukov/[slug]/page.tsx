import { createDirectionItemRoute } from "@/components/site/direction-item-route";

const route = createDirectionItemRoute("remont-noutbukov");

export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
