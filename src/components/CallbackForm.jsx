import { form, setValue, submit } from "stores/formStore";

export function CallbackForm() {
  return (
    <div class="mt-[16px] w-full flex flex-col sm:flex-row items-center sm:justify-center sm:gap-x-[8px] gap-y-[8px] sm:gap-y-0">
      <p class="text-[17px] font-medium">
        Остались вопросы? Оставьте номер, и мы вам перезвоним
      </p>
      <input
        type="tel"
        placeholder="+7 (999) 999-99-99"
        id={`message-${Math.random().toString(36)}`}
        name="message"
        class="w-full sm:w-[200px] h-[42px] px-[12px] border-1 border-neutral-200 rounded-[8px]"
        value={form.values.message || ""}
        onInput={(e) => setValue("message", e.currentTarget.value)}
      />
      <button
        onClick={() => submit("/api/send/")}
        class="w-full sm:w-auto btn bg-amber-300"
        disabled={form.loading}
      >
        {form.loading ? "Загрузка..." : "Оставить заявку"}
      </button>
    </div>
  );
}
