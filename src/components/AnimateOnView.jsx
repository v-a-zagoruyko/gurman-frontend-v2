import { createSignal, onMount, onCleanup } from "solid-js";

export function AnimateOnView(props) {
  let el;
  const [visible, setVisible] = createSignal(false);
  const animation = () => props.animation ?? "animate__fadeIn";
  const speed = () => props.speed ?? "faster";

  let observer;

  onMount(() => {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() =>
            requestAnimationFrame(() => setVisible(true))
          );
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    if (el) observer.observe(el);
  });

  onCleanup(() => observer?.disconnect());

  const speedClass = () =>
    ["slow", "slower", "fast", "faster"].includes(speed())
      ? `animate__${speed()}`
      : null;

  const customStyle = () =>
    !speedClass() && speed() !== "normal"
      ? { "--animate-duration": speed() }
      : {};

  return (
    <div
      ref={(r) => (el = r)}
      style={customStyle()}
      class={props.class ?? ""}
      classList={{
        "opacity-0": !visible(),
        animate__animated: visible(),
        [animation()]: visible(),
        [speedClass()]: visible() && !!speedClass(),
      }}
    >
      {props.children}
    </div>
  );
}
