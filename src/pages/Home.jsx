import { A } from "@solidjs/router";
import { NewYearBanner, CallbackBanner, CallbackForm } from "components";
import { IconCrown } from "icons";
import homeStart1 from "assets/img/home-start-1.jpg";
import homeStart2 from "assets/img/home-start-2.jpg";
import homeStart3 from "assets/img/home-start-3.jpg";

export function Home() {
  const renderInfo = () => (
    <article class="article">
      <h2 class="title mb-[16px] sm:mb-[32px] text-center">О ресторане</h2>
      <p class="info-text mb-[16px] sm:mb-[32px]">
        Наш банкетный зал &mdash; это отличное место для проведения любых
        праздничных мероприятий. Мы имеем большой опыт организации банкетов,
        фуршетов и корпоративов, создавая для гостей тёплую атмосферу и комфорт.
        Уютная обстановка и внимательное обслуживание помогут вам почувствовать
        себя по-домашнему, а разнообразное меню порадует даже самых
        требовательных гостей. Особая гордость нашего зала &mdash; ароматное
        мясо на углях и широкий выбор шашлыков. Здесь каждая деталь продумана
        для того, чтобы ваш праздник прошёл на высшем уровне. Мы сделаем всё,
        чтобы ваше торжество оставило только приятные воспоминания.
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
    </article>
  );

  const renderMenu = () => (
    <article class="article">
      <h2 class="title mb-[16px] sm:mb-[32px] text-center">Меню</h2>
      <p class="info-text mb-[16px] sm:mb-[32px]">
        В нашем ресторане вы найдёте аутентичные блюда кавказской кухни,
        приготовленные по традиционным рецептам из свежих ингредиентов. Основное
        меню порадует разнообразием мясных и овощных блюд, ароматными специями и
        насыщенными вкусами, идеально подходящими для уютного ужина в ресторане.
        Для тех, кто предпочитает есть дома или на работе, мы подготовили меню
        на вынос и доставку, включая популярную шаурму, горячие закуски и сытные
        обеды. Каждый найдёт что-то по вкусу &mdash; от классических кавказских
        блюд до быстрых и удобных вариантов для дома. Попробуйте наше меню и
        откройте для себя богатство вкусов Кавказа в любом формате.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-0 sm:gap-x-[32px] gap-y-[16px] sm:gap-y-0">
        <div>
          <A href="/menu/osnovnoe-menyu" class="btn bg-amber-300">
            Основное меню
          </A>
        </div>
        <div>
          <A href="/menu/shaurma" class="btn bg-amber-300">
            Меню на доставку
          </A>
        </div>
      </div>
    </article>
  );

  const renderContacts = () => (
    <>
      <article class="article">
        <h2 class="title mb-[16px] sm:mb-[32px] text-center">
          Адрес & Контакты
        </h2>
        <p class="info-text mb-[16px] sm:mb-[32px]">
          Гурман &mdash; это семейный ресторан, расположенный в центре{" "}
          <a
            href="https://yandex.ru/maps/55/tyumen/?from=mapframe&ll=65.596161%2C57.094719&mode=usermaps&source=mapframe&um=constructor%3A3837c9fbf8dc43bfd3735dca284c9546fc5bd60de4083a7ed5d093112dc774f3&utm_source=mapframe&z=16"
            target="_blank"
            class="text-amber-500"
          >
            Тюмени, на Линейной улице, 66
          </a>
          . Мы предлагаем уютную атмосферу, где каждый гость чувствует себя как
          дома. Наши залы оформлены в классическом стиле с современным
          комфортом, идеально подходящим для банкетов, свадеб и корпоративов.
          <br />
          Для вашего удобства у нас предусмотрена бесплатная парковка,
          расположенная в непосредственной близости от входа. Для тех, кто
          предпочитает наслаждаться нашими блюдами дома, мы предлагаем доставку
          и меню на вынос, включая популярную шаурму и другие кулинарные изыски.
        </p>
      </article>
      <div class="w-full">
        <iframe
          title="Карта Yandex"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A3837c9fbf8dc43bfd3735dca284c9546fc5bd60de4083a7ed5d093112dc774f3&amp;source=constructor"
          width="100%"
          height="400"
          frameborder="0"
        ></iframe>
      </div>
    </>
  );

  return (
    <>
      <NewYearBanner />
      <article class="article">
        <h1 class="title w-full inline-flex flex-col items-center mb-[16px] sm:mb-[32px] text-center">
        <IconCrown class="w-[64px] h-[64px] text-amber-300" />
          <span>Ресторан <span class="text-amber-300">&laquo;Гурман&raquo;</span></span>
        </h1>
        <p class="info-text">
          Добро пожаловать в ресторан &laquo;Гурман&raquo; &mdash; место, где
          каждая трапеза превращается в праздник вкуса. У нас уютная атмосфера,
          внимательный сервис и блюда, приготовленные с любовью из свежих
          ингредиентов. От ароматных шашлыков на углях до изысканных банкетных
          меню &mdash; каждый найдет что-то по душе. Приходите и убедитесь сами,
          почему наши гости возвращаются снова и снова.
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
      </article>
      <CallbackBanner />
      {renderInfo}
      {renderMenu}
      <div class="px-[16px] sm:px-0">
        <CallbackForm />
      </div>
      <div class="mt-[16px]"></div>
      <CallbackBanner />
      {renderContacts}
    </>
  );
}
