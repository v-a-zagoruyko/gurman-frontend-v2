import { A } from "@solidjs/router";
import { Snowfall } from "./Snowfall";

export function NewYearBanner() {
  return (
    <div class="news-year-banner relative w-full mb-[16px] sm:mb-[32px] py-[16px] sm:py-[-32px] bg-neutral-50">
      <div class="article h-full pt-[16px] sm:pt-[32px]">
        <Snowfall />
        <div class="relative h-full flex flex-col items-center justify-center text-center text-white z-1">
          <span class="mb-[12px] text-[44px] sm:text-[70px] font-handwriting leading-none">
            Новогодняя елка 2026
          </span>
          <span class="mb-[16px] text-[25px] sm:text-[30px] font-oswald font-medium">
            Корпоративы: 12&ndash;30 декабря
          </span>
          <span class="mb-[16px] text-[18px] sm:text-[24px] font-medium">
            Наша праздничная программа включает интерактивные блоки с участием
            приглашённых ведущих, акробатов и Деда Мороза.
          </span>
          <span class="text-[30px] sm:text-[50px] font-handwriting leading-[32px] sm:leading-none">
            Давайте проведём этот Новый&nbsp;год&nbsp;вместе,
            <br />
            создавая волшебные воспоминания!
          </span>
          <A
            href="/new-year"
            target="_blank"
            class="btn mt-[30px] text-[20px] font-semibold bg-blue-600"
          >
            Посмотреть меню
          </A>
        </div>
      </div>
    </div>
  );
}
