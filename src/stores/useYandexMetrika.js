import { useLocation } from "@solidjs/router";
import { createEffect } from "solid-js";

export function useYandexMetrika() {
  const location = useLocation();

  createEffect(() => {
    document.body.classList.remove("lock-scroll");
    const path = location.pathname;
    if (window.ym) {
      window.ym(91491189, "hit", path);
    }
  });
}
