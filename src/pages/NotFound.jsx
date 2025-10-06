import { A } from "@solidjs/router";

export function NotFound() {
  return (
    <>
      <article class="article h-screen flex items-center justify-center">
        <div class="">
          <h6 class="title mb-[16px] sm:mb-[32px] text-center">
            <span class="text-amber-300">Страница не найдена :(</span>
          </h6>
          <div class="mt-[16px]">
            <A href="/" class="btn bg-amber-300">
              На главную
            </A>
          </div>
        </div>
      </article>
    </>
  );
}
