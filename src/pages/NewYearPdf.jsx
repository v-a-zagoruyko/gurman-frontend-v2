import pdfUrl from "assets/menu-new-year-2026.pdf";

export function NewYearPdf() {
  return (
    <div class="w-full h-screen">
      <iframe
        src={pdfUrl}
        class="w-full h-full"
        title="Меню ресторана Гурман"
        style="border: none;"
      />
    </div>
  );
}
