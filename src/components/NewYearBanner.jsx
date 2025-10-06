import { A } from "@solidjs/router";

export function NewYearBanner() {
  return (
    <div class="news-year-banner w-full mb-[16px] sm:mb-[32px] py-[16px] sm:py-[-32px] bg-neutral-50">
      <div class="article h-full pt-[16px] sm:pt-[32px]">
        <div class="h-full flex flex-col items-center justify-center text-center text-white">
          <span class="mb-[12px] text-[30px] sm:text-[40px] font-semibold">Дорогие друзья!</span>
          <span class="text-[18px] sm:text-[30px] font-medium">Пришло время вновь пригласить вас встретить с нами наступающий 2026 год в яркой и незабываемой атмосфере. Наша праздничная программа включает интерактивные блоки с участием приглашённых ведущих, акробатов и Деда Мороза.</span>
          <span class="text-[18px] sm:text-[30px] font-medium">Давайте проведём этот Новый год вместе, создавая волшебные воспоминания!</span>
          <A href="/new-year" target="_blank" class="btn mt-[30px] text-[20px] font-semibold bg-blue-600">
            Новогоднее меню
          </A>
        </div>
      </div>
    </div>
  );
}
