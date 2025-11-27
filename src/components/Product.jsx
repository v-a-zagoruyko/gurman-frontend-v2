import { AnimateOnView } from "./AnimateOnView";
import defaultImg from "assets/img/default.webp";

function Card(props) {
  return (
    <AnimateOnView
      class="flex flex-col rounded-[8px] bg-neutral-50"
      animation="animate__slideInUp"
    >
      <img src={props.image || defaultImg} class="rounded-t-[8px]" />
      <div class="p-[8px] sm:p-[16px] flex flex-col">
        <p class="mb-[8px] font-oswald text-[17px] sm:text-[20px] leading-none">
          {props.name}
        </p>
        <p class="mb-[4px] text-[15px] sm:text-[17px] text-gray-500 leading-none">
          {props.description}
        </p>
        <p class="mt-auto text-[15px] sm:text-[16px] text-gray-500 text-right font-medium leading-none">
          {props.weight}, {props.price}&nbsp;₽
        </p>
      </div>
    </AnimateOnView>
  );
}

function Row(props) {
  return (
    <AnimateOnView
      class="p-[16px] flex flex-col rounded-[8px] bg-neutral-50"
      animation="animate__slideInUp"
    >
      <p class="mb-[8px] font-oswald text-[17px] sm:text-[20px] leading-none">
        {props.name}
      </p>
      <p class="mb-[4px] text-[15px] sm:text-[17px] text-gray-500 leading-none">
        {props.description}
      </p>
      <p class="mt-auto text-[15px] sm:text-[17px] text-gray-500 text-right font-medium leading-none">
        {props.weight}, {props.price} ₽
      </p>
    </AnimateOnView>
  );
}

export function Product() {}

Product.Card = Card;
Product.Row = Row;
