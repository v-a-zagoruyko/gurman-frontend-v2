import { createSignal, createMemo, For, onMount } from "solid-js";
import { useParams } from "@solidjs/router";
import { Product, CallbackBanner, CallbackForm } from "components";
import { apiFetch } from "api/fetch";

export function Menu() {
  const params = useParams();

  const [menu, setMenu] = createSignal({});
  const [error, setError] = createSignal(null);
  const [loading, setLoading] = createSignal(true);
  const [activeCategory, setActiveCategory] = createSignal(null);

  onMount(async () => {
    try {
      const data = await apiFetch(`/menu/${params.slug}/`);
      setMenu(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  });

  const name = createMemo(() => menu()?.name)
  const products = createMemo(() => menu()?.products)

  const handleCategoryClick = (category) => {
    if (activeCategory() === category) {
      setActiveCategory(null);
    } else {
      setActiveCategory(category);
    }
  };

  const categories = [...new Set(products()?.map((i) => i.category) || [])]

  const filteredProducts = createMemo(() => {
    return activeCategory()
      ? products()?.filter((p) => p.category === activeCategory()) || []
      : products() || []
  })

  return (
    <>
      <article class="article">
        <h1 class="title mb-[16px] sm:mb-[32px] text-center">{name}</h1>
        <div class="sticky top-[80px] mb-[16px] pb-[16px] flex items-center gap-x-[16px] overflow-x-auto bg-white">
          <span
            onClick={() => handleCategoryClick(null)}
            class="px-[8px] py-[2px] whitespace-nowrap border-1 border-amber-300 rounded-[8px] cursor-pointer"
            classList={{ "bg-amber-300": activeCategory() === null }}
          >
            Все меню
          </span>
          {categories.map((i, idx) => (
            <span
              key={idx}
              onClick={() => handleCategoryClick(i)}
              class="px-[8px] py-[2px] whitespace-nowrap border-1 border-amber-300 rounded-[8px] cursor-pointer"
              classList={{ "bg-amber-300": activeCategory() === i }}
            >
              {i}
            </span>
          ))}
        </div>
        {/* <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-x-[8px] sm:gap-x-[32px] gap-y-[32px]">
          <For each={filteredProducts()}>{(p) => <Product.Card {...p} />}</For>
        </div> */}
        <div class="grid grid-cols-2 gap-x-[8px] sm:gap-x-[32px] gap-y-[16px] sm:gap-y-[32px]">
          <For each={filteredProducts()}>{(p) => <Product.Row {...p} />}</For>
        </div>
      </article>
      <div class="px-[16px] sm:px-0">
        <CallbackForm />
      </div>
      <div class="mt-[16px]"></div>
      <CallbackBanner />
    </>
  );
}
