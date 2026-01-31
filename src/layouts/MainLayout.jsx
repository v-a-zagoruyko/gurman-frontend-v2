import { onMount } from "solid-js";
import { Nav, Footer } from "components";
import { setValue } from "stores/formStore";

export function MainLayout(props) {
  onMount(async () => {
    setValue("from_url", window.location.href);
  });

  return (
    <>
      <div class="w-full min-h-screen">
        <Nav />
        <div class="main-content mt-[80px] flex flex-col items-center justify-center">
          {props.children}
        </div>
        <Footer />
      </div>
    </>
  );
}
