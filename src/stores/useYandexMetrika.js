import { useLocation } from "@solidjs/router";
import { onMount } from "solid-js";

export function useYandexMetrika() {
  const location = useLocation();

  onMount(() => {
    // location.subscribe(() => {
    //   if (window.ym) {
    //     window.ym(91491189, "hit", location.pathname);
    //   }
    // });
  });
}
