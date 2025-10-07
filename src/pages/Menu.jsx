import {
  createSignal,
  createMemo,
  Switch,
  Match,
  For,
  Show,
  createEffect,
} from "solid-js";
import { useParams } from "@solidjs/router";
import { Preloader, Product, CallbackBanner, CallbackForm } from "components";
import { apiFetch } from "api/fetch";

export function Menu() {
  const params = useParams();

  const [menu, setMenu] = createSignal(null);
  const [error, setError] = createSignal(null);
  const [loading, setLoading] = createSignal(true);
  const [activeCategory, setActiveCategory] = createSignal(null);

  createEffect(() => {
    setLoading(true);
    setMenu(null);
    setError(null);
    setActiveCategory(null);

    apiFetch(`/menu/${params.slug}/`)
      .then((data) => setMenu(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  });

  const name = createMemo(() => menu()?.name || "");
  const products = createMemo(() => menu()?.products || []);

  const categories = createMemo(() => [
    ...new Set(products().map((p) => p.category)),
  ]);

  const filteredProducts = createMemo(() =>
    activeCategory()
      ? products().filter((p) => p.category === activeCategory())
      : products()
  );

  const grouped = createMemo(() => {
    const map = new Map();
    filteredProducts().forEach((p) => {
      const c = p.category;
      if (!map.has(c)) map.set(c, []);
      map.get(c).push(p);
    });
    return Array.from(map.entries());
  });

  const handleCategoryClick = (category) => {
    setActiveCategory((prev) => (prev === category ? null : category));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Show when={!loading()} fallback={<Preloader />}>
      <Show
        when={!error()}
        fallback={<article class="article">Ошибка: {error()}</article>}
      >
        <article class="article">
          <h1 class="title mb-[16px] sm:mb-[32px] text-center">{name()}</h1>

          <div class="sticky top-[80px] mb-[16px] pb-[16px] flex items-center gap-x-[16px] overflow-x-auto bg-white">
            <span
              onClick={() => handleCategoryClick(null)}
              class="px-[8px] py-[2px] whitespace-nowrap border-1 border-amber-300 rounded-[8px] cursor-pointer"
              classList={{ "bg-amber-300": activeCategory() === null }}
            >
              Все меню
            </span>

            <For each={categories()}>
              {(category) => (
                <span
                  onClick={() => handleCategoryClick(category)}
                  class="px-[8px] py-[2px] whitespace-nowrap border-1 border-amber-300 rounded-[8px] cursor-pointer"
                  classList={{ "bg-amber-300": activeCategory() === category }}
                >
                  {category}
                </span>
              )}
            </For>
          </div>

          <Switch>
            <Match when={params.slug === "osnovnoe-menyu"}>
              <For each={grouped()}>
                {([category, items]) => (
                  <>
                    <p class="mb-[16px] sm:mb-[32px] font-oswald text-[24px] text-center">
                      {category}
                    </p>
                    <div class="mb-[16px] sm:mb-[32px] grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-x-[8px] sm:gap-x-[32px] gap-y-[32px]">
                      <For each={items}>{(p) => <Product.Card {...p} />}</For>
                    </div>
                  </>
                )}
              </For>
            </Match>
            <Match when={params.slug !== "osnovnoe-menyu"}>
              <For each={grouped()}>
                {([category, items]) => (
                  <>
                    <p class="mb-[16px] sm:mb-[32px] font-oswald text-[24px] text-center">
                      {category}
                    </p>
                    <div class="mb-[16px] sm:mb-[32px] grid grid-cols-2 gap-x-[8px] sm:gap-x-[32px] gap-y-[16px] sm:gap-y-[32px]">
                      <For each={items}>{(p) => <Product.Row {...p} />}</For>
                    </div>
                  </>
                )}
              </For>
            </Match>
          </Switch>
        </article>

        <div class="px-[16px] sm:px-0">
          <CallbackForm />
        </div>

        <div class="mt-[16px]"></div>
        <CallbackBanner />
      </Show>
    </Show>
  );
}
