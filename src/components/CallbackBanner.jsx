export function CallbackBanner() {
  return (
    <div class="w-full mb-[16px] sm:mb-[32px] bg-neutral-50">
      <div class="article mt-[16px] sm:mt-[32px]">
        <div class="flex flex-col sm:flex-row items-center justify-between">
          <p class="text-center sm:text-left">
            <span class="text-[20px] font-semibold">
              Хотите узнать больше или забронировать банкет?
            </span>
            <br />
            Просто позвоните нам!
          </p>
          <div class="mt-[16px] sm:mt-0 flex flex-col text-amber-500">
            <a href="tel:89044992299" class="font-semibold">
              +7 (9044) 99-22-99
            </a>
            <a href="tel:+73452217585" class="font-semibold">
              +7 (3452) 21-75-85
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
