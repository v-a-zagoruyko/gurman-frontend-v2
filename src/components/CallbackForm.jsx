import { createSignal, onMount } from "solid-js";
import { Show } from "solid-js/web";
import IMask from "imask";
import { AnimateOnView } from "./AnimateOnView";
import { form, setValue, submit } from "stores/formStore";

export function CallbackForm() {
  let inputRef;
  const [isValid, setIsValid] = createSignal(false);
  const [id] = createSignal(`message-${Math.random().toString(36)}`);

  onMount(() => {
    const mask = IMask(inputRef, {
      mask: "+{7} (000) 000-00-00",
    });

    mask.on("accept", () => {
      setValue("message", mask.value);
      setIsValid(mask.masked.isComplete);
    });
  });

  return (
    <>
      <AnimateOnView
        class="mt-[16px] w-full flex flex-col sm:flex-row items-center sm:justify-center sm:gap-x-[8px] gap-y-[8px] sm:gap-y-0"
        animation="animate__slideInUp"
      >
        <p class="text-[17px] font-medium leading-none text-center sm:text-left">
          Остались вопросы?
          <br class="inline-block sm:hidden" /> Оставьте номер, и мы вам
          перезвоним
        </p>

        <input
          ref={inputRef}
          type="tel"
          placeholder="+7 (999) 999-99-99"
          id={id()}
          name="message"
          class="w-full sm:w-[200px] h-[42px] px-[12px] border border-neutral-200 rounded-[8px]"
          value={form.values.message || ""}
          onInput={(e) => setValue("message", e.currentTarget.value)}
        />

        <Show
          when={!form.loading}
          fallback={
            <button
              class="w-full sm:w-auto btn bg-gray-300 cursor-not-allowed"
              disabled
            >
              Загрузка...
            </button>
          }
        >
          <button
            class="w-full sm:w-auto btn bg-amber-300"
            classList={{
              "bg-gray-300 cursor-not-allowed": !isValid(),
            }}
            onClick={() => submit("/notify/")}
            disabled={!isValid()}
          >
            Оставить заявку
          </button>
        </Show>
      </AnimateOnView>
      <Show when={form.error}>
        <p className="mt-[12px] text-red-500 text-center">
          Ошибка: {form.error} 😕
          <br />
          Перезагрузите страницу и попробуйте снова.
        </p>
      </Show>
    </>
  );
}
