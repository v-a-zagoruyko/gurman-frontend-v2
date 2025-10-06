import { onMount, onCleanup } from "solid-js";

export function Preloader() {
  onMount(() => {
    document.body.classList.add("lock-scroll");
  });

  onCleanup(() => {
    document.body.classList.remove("lock-scroll");
  });

  return (
    <div class="preloader fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50">
      <div class="spinner w-16 h-16 border-4 border-t-blue-500 border-r-transparent border-b-blue-500 border-l-transparent rounded-full animate-spin"></div>
    </div>
  );
}
