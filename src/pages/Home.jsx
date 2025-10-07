import { A } from "@solidjs/router";
import {
  AnimateOnView,
  NewYearBanner,
  CallbackBanner,
  CallbackForm,
} from "components";
import { IconCrown } from "icons";
import homeStart1 from "assets/img/home-start-1.jpg";
import homeStart2 from "assets/img/home-start-2.jpg";
import homeStart3 from "assets/img/home-start-3.jpg";

export function Home() {
  const renderMain = () => (
    <AnimateOnView class="article">
      <h1 class="title w-full inline-flex flex-col items-center mb-[16px] sm:mb-[32px] text-center">
        <IconCrown class="w-[64px] h-[64px] text-amber-300" />
        <span>
          Ресторан <span class="text-amber-300">&laquo;Гурман&raquo;</span>
        </span>
      </h1>
      <p class="info-text">
        Добро пожаловать в ресторан &laquo;Гурман&raquo; &mdash; кавказская
        кухня и шашлыки на углях в Тюмени. У нас уют, вкус и гостеприимство.
        Приходите на обед, ужин или банкет &mdash; и узнайте, почему наши гости
        возвращаются снова и снова.
      </p>
      <img
        src={homeStart1}
        class="hidden sm:block mt-[16px] mb-[32px] w-full h-[300px] sm:h-[800px] object-cover rounded-[8px]"
        alt="Фотография зала ресторана Гурман №3"
      />
      <CallbackForm />
      <img
        src={homeStart1}
        class="block sm:hidden mt-[16px] w-full h-[300px] sm:h-[800px] object-cover rounded-[8px]"
        alt="Фотография зала ресторана Гурман №3"
      />
    </AnimateOnView>
  );

  const renderInfo = () => (
    <AnimateOnView class="article">
      <h2 class="title mb-[16px] sm:mb-[32px] text-center">О ресторане</h2>
      <p class="info-text mb-[16px] sm:mb-[32px]">
        Наш банкетный зал в Тюмени &mdash; отличное место для свадьбы,
        корпоратива или дня рождения. Уютная атмосфера, внимательное
        обслуживание и кавказская кухня создают идеальные условия для праздника.
        Шашлыки на углях и ароматное мясо &mdash; гордость ресторана
        &laquo;Гурман&raquo;. Организуем банкет, чтобы вы просто наслаждались
        моментом.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-0 sm:gap-x-[32px] gap-y-[16px] sm:gap-y-0">
        <img
          src={homeStart2}
          class="w-full h-[300px] sm:h-[600px] object-cover rounded-[8px]"
          alt="Фотография зала ресторана Гурман №2"
        />
        <img
          src={homeStart3}
          class="w-full h-[300px] sm:h-[600px] object-cover rounded-[8px]"
          alt="Фотография зала ресторана Гурман №3"
        />
      </div>
    </AnimateOnView>
  );

  const renderMenu = () => (
    <AnimateOnView class="article">
      <h2 class="title mb-[16px] sm:mb-[32px] text-center">Меню</h2>
      <p class="info-text mb-[16px] sm:mb-[32px]">
        Ресторан &laquo;Гурман&raquo; &mdash; это настоящая кавказская кухня в
        Тюмени. Мы готовим шашлыки, хачапури и другие блюда на углях по
        традиционным рецептам. Есть доставка и меню на вынос &mdash; закажите
        любимые блюда домой или в офис. Попробуйте и ощутите вкус Кавказа в
        каждом кусочке.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-0 sm:gap-x-[32px] gap-y-[16px] sm:gap-y-0">
        <div>
          <A href="/menu/osnovnoe-menyu" class="btn bg-amber-300">
            Основное меню
          </A>
        </div>
        <div>
          <A href="/menu/dostavka" class="btn bg-amber-300">
            Меню на доставку
          </A>
        </div>
      </div>
    </AnimateOnView>
  );

  const renderContacts = () => (
    <>
      <AnimateOnView class="article">
        <h2 class="title mb-[16px] sm:mb-[32px] text-center">
          Адрес & Контакты
        </h2>
        <p class="info-text mb-[16px] sm:mb-[32px]">
          &laquo;Гурман&raquo; &mdash; это семейный ресторан, расположенный в{" "}
          <a
            href="https://yandex.ru/maps/55/tyumen/?from=mapframe&ll=65.596161%2C57.094719&mode=usermaps&source=mapframe&um=constructor%3A3837c9fbf8dc43bfd3735dca284c9546fc5bd60de4083a7ed5d093112dc774f3&utm_source=mapframe&z=16"
            target="_blank"
            class="text-amber-500"
          >
            Тюмени, на Линейной улице, 66
          </a>
          . Уютный ресторан в Тюмени, где каждый гость чувствует себя как дома.
          Классические залы идеально подходят для банкетов и семейных вечеров.
          Рядом удобная бесплатная парковка. Доставка и еда на вынос &mdash; для
          тех, кто хочет кавказский ужин без лишних хлопот.
        </p>
      </AnimateOnView>
      <AnimateOnView class="w-full">
        <iframe
          title="Карта Yandex"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A3837c9fbf8dc43bfd3735dca284c9546fc5bd60de4083a7ed5d093112dc774f3&amp;source=constructor"
          width="100%"
          height="400"
          frameborder="0"
        ></iframe>
      </AnimateOnView>
    </>
  );

  return (
    <>
      <NewYearBanner />
      {renderMain}
      <CallbackBanner />
      {renderMenu}
      {renderInfo}
      <div class="px-[16px] sm:px-0">
        <CallbackForm />
      </div>
      <div class="mt-[16px]"></div>
      <CallbackBanner />
      {renderContacts}
    </>
  );
}
