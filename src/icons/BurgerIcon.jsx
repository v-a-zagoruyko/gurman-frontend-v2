export function BurgerIcon(props) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 100 100"
      class="cursor-pointer stroke-neutral-700"
    >
      <line
        x1="20"
        y1={props.open ? 50 : 30}
        x2="80"
        y2={props.open ? 50 : 30}
        stroke-width="10"
        stroke-linecap="round"
        transform={props.open ? "rotate(45 50 50)" : ""}
        style={{ transition: "transform 0.3s, y1 0.3s, y2 0.3s" }}
      />
      <line
        x1="20"
        y1="50"
        x2="80"
        y2="50"
        stroke-width="10"
        stroke-linecap="round"
        opacity={props.open ? 0 : 1}
        style={{ transition: "opacity 0.3s" }}
      />
      <line
        x1="20"
        y1={props.open ? 50 : 70}
        x2="80"
        y2={props.open ? 50 : 70}
        stroke-width="10"
        stroke-linecap="round"
        transform={props.open ? "rotate(-45 50 50)" : ""}
        style={{ transition: "transform 0.3s, y1 0.3s, y2 0.3s" }}
      />
    </svg>
  );
}
