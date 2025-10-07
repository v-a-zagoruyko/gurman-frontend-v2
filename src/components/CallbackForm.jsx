import { createSignal, onMount } from "solid-js";
import IMask from "imask";
import { form, setValue, submit } from "stores/formStore";

export function CallbackForm() {
  let inputRef;
  let mask;
  const [isValid, setIsValid] = createSignal(false);

  onMount(() => {
    mask = IMask(inputRef, {
      mask: "+{7} (000) 000-00-00",
    });

    mask.on("accept", () => {
      setValue("message", mask.value);
      setIsValid(mask.masked.isComplete);
    });
  });

  return (
    <div class="mt-[16px] w-full flex flex-col sm:flex-row items-center sm:justify-center sm:gap-x-[8px] gap-y-[8px] sm:gap-y-0">
      <p class="text-[17px] font-medium leading-none">
        Остались вопросы? Оставьте номер, и мы вам перезвоним
      </p>
      <input
        ref={inputRef}
        type="tel"
        placeholder="+7 (999) 999-99-99"
        id={`message-${Math.random().toString(36)}`}
        name="message"
        class="w-full sm:w-[200px] h-[42px] px-[12px] border-1 border-neutral-200 rounded-[8px]"
        value={form.values.message || ""}
        onInput={(e) => setValue("message", e.currentTarget.value)}
      />
      <button
        onClick={() => submit("/notify/")}
        class="w-full sm:w-auto btn bg-amber-300"
        classList={{
          "bg-gray-300 cursor-not-allowed!": form.loading || !isValid(),
        }}
        disabled={form.loading || !isValid()}
      >
        {form.loading ? "Загрузка..." : "Оставить заявку"}
      </button>
    </div>
  );
}
