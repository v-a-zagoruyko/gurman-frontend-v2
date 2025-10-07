import pdfUrl from "assets/menu-new-year-2026.pdf";

export function NewYearPdf() {
  return (
    <div class="w-full h-screen">
      <iframe
        src={pdfUrl}
        title="Новогоднее меню ресторана Гурман"
        class="w-full h-full"
        style="border: none;"
      />
    </div>
  );
}
