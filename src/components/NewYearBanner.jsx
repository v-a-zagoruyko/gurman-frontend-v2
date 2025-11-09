import { A } from "@solidjs/router";
import { AnimateOnView } from "./AnimateOnView";
import { Snowfall } from "./Snowfall";

export function NewYearBanner() {
  return (
    <AnimateOnView
      class="news-year-banner relative w-full mb-[16px] sm:mb-[32px] py-[16px] sm:py-[-32px] bg-neutral-50"
      animation="animate__fadeIn"
    >
      <div class="article h-full pt-[16px] sm:pt-[32px]">
        <Snowfall />
        <div class="relative h-full flex flex-col items-center justify-center text-center text-white z-1">
          <span class="mb-[12px] text-[44px] sm:text-[70px] font-handwriting leading-none">
            Новогодняя елка 2026
          </span>
          <span class="sm:mb-[16px] text-[25px] sm:text-[38px] font-oswald font-medium">
            Корпоративы: 12&ndash;30 декабря
          </span>
          <span class="mb-[16px] text-[25px] sm:text-[30px] font-oswald font-medium">
            Новогодняя программа:
            <br />с 18:00 до 24:00
          </span>
          <span class="text-[18px] sm:text-[24px] font-medium">
            Праздничная атмосфера, зажигательный диджей, весёлый ведущий,
            <br />
            Дед Мороз со Снегурочкой и море развлечений!
          </span>
          <span class="mb-[8px] sm:mb-[16px] text-[18px] sm:text-[24px] font-medium">
            В стоимость включены праздничное меню и развлекательная программа.
            <br />
            Алкоголь приносите с собой 🍾
          </span>
          <span class="mb-[8px] sm:mb-[16px] text-[25px] sm:text-[30px] font-oswald font-medium">
            Стоимость: 4500₽
          </span>
          <span class="text-[25px] sm:text-[30px] font-oswald font-medium">
            Телефон для бронирования:
          </span>
          <a
            href="tel:+73452217585"
            class="text-[25px] sm:text-[30px] font-oswald font-medium"
          >
            +7 (3452) 218-115
          </a>
          <span class="hidden sm:block mt-[32px] text-[50px] font-handwriting leading-none">
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
    </AnimateOnView>
  );
}
