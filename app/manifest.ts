import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Mandarin",
    description: siteConfig.description,
    lang: "ru",
    start_url: "/",
    display: "browser",
    background_color: "#fffdfb",
    theme_color: "#ff5000",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: siteConfig.logo, sizes: "1254x1254", type: "image/png" },
    ],
  };
}
