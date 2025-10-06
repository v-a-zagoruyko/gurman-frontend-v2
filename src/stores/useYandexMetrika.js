import { useLocation } from "@solidjs/router";
import { createEffect } from "solid-js";

export function useYandexMetrika() {
  const location = useLocation();

  createEffect(() => {
    const path = location.pathname;
    if (window.ym) {
      window.ym(91491189, "hit", path);
    }
  });
}
