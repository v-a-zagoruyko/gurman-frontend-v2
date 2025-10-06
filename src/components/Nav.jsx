import { A } from "@solidjs/router";
import { Show, createSignal } from "solid-js";
import { BurgerIcon, IconCrown } from "icons";

export function Nav() {
  const [open, setOpen] = createSignal(false);

  const handleNavToggle = () => {
    setOpen(!open());
    document.body.classList.toggle("lock-scroll");
  };

  return (
    <nav class="fixed w-full top-0 bg-white">
      <div class="max-w-[1350px] h-[80px] mx-auto px-[16px] sm:px-[32px] flex flex-row items-center sm:space-between">
        <A
          href="/"
          class="flex flex-1 items-center gap-x-[8px] font-oswald text-[24px]"
        >
          <IconCrown class="w-[30px] h-[30px] text-amber-500" />
          Ресторан &laquo;Гурман&raquo;
        </A>
        <div class="hidden sm:flex flex-row items-center gap-x-[18px]">
          <A href="/" class="text-[18px]" activeClass="text-amber-500" end>
            Главная
          </A>
          <A
            href="/new-year"
            target="_blank"
            class="text-[18px] text-blue-600 animation__pulse"
          >
            ❄️ Новогоднее предложение
          </A>
          <A
            href="/menu/osnovnoe-menyu"
            class="text-[18px]"
            activeClass="text-amber-500"
          >
            🥘 Основное меню
          </A>
          <A
            href="/menu/shaurma"
            class="text-[18px]"
            activeClass="text-amber-500"
          >
            🔥 Шаурма
          </A>
        </div>
        <span onClick={handleNavToggle} class="block sm:hidden">
          <BurgerIcon open={open()} />
        </span>
      </div>
      <Show when={open()}>
        <div class="nav-mobile">
          <div class="flex flex-col gap-y-[18px]">
            <A href="/" class="text-[20px]" activeClass="text-amber-500" end>
              🏠 Главная
            </A>
            <A
              href="/new-year"
              target="_blank"
              class="text-[20px] text-blue-600 animation__pulse"
            >
              ❄️ Новогоднее предложение
            </A>
            <A
              href="/menu/osnovnoe-menyu"
              class="text-[20px]"
              activeClass="text-amber-500"
            >
              🥘 Основное меню
            </A>
            <A
              href="/menu/shaurma"
              class="text-[20px]"
              activeClass="text-amber-500"
            >
              🔥 Шаурма
            </A>
          </div>
          <div class="mt-auto mb-[32px] flex flex-col items-center">
            <span class="mb-[16px] info-text text-center">
              Хотите узнать больше или
              <br />
              забронировать банкет?
            </span>
            <a href="tel:89044992299" class="text-[20px] font-semibold">
              +7 (9044) 99-22-99
            </a>
            <a href="tel:+73452217585" class="text-[20px] font-semibold">
              +7 (3452) 21-75-85
            </a>
          </div>
        </div>
      </Show>
    </nav>
  );
}
