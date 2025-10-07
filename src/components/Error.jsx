import { A } from "@solidjs/router";
import { AnimateOnView } from "./AnimateOnView";

export function Error() {
  return (
      <AnimateOnView class="article h-[calc(100vh-80px)] flex flex-col items-center justify-center">
        <h6 class="mb-[16px] sm:mb-[32px] text-[30px] sm:text-[40px] text-center">
          Что-то пошло не так 😕
          <br />
          Попробуйте обновить страницу.
        </h6>
        <div class="flex flex-col gap-y-[16px]">
          <button class="btn bg-amber-300" onClick={() => location.reload()}>
            🔄 Обновить
          </button>
          <A href="/" class="btn bg-gray-100">
            На главную
          </A>
        </div>
      </AnimateOnView>
  );
}
