"use client";

import { useEffect, useState } from "react";

export function CurrentYear({ initialYear }: { initialYear: number }) {
  const [year, setYear] = useState(initialYear);

  useEffect(() => {
    const updateYear = () => setYear(new Date().getFullYear());
    const initialUpdate = window.setTimeout(updateYear, 0);
    const hourlyUpdate = window.setInterval(updateYear, 60 * 60 * 1000);
    return () => {
      window.clearTimeout(initialUpdate);
      window.clearInterval(hourlyUpdate);
    };
  }, []);

  return year;
}
