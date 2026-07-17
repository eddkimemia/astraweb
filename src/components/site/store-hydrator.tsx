"use client";

import { useEffect } from "react";
import { hydrateStores } from "@/lib/store";

export function StoreHydrator() {
  useEffect(() => {
    hydrateStores();
  }, []);

  return null;
}
