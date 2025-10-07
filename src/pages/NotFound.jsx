import { A } from "@solidjs/router";

export function NotFound() {
  return (
    <>
      <article class="article h-[calc(100vh-80px)] flex flex-col items-center justify-center">
        <h6 class="mb-[16px] sm:mb-[32px] text-[30px] sm:text-[40px] text-center">
          😥
          <br />
          Страница не&nbsp;найдена
        </h6>
        <div class="mt-[16px]">
          <A href="/" class="btn bg-amber-300">
            На главную
          </A>
        </div>
      </article>
    </>
  );
}
