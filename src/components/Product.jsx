import homeStart1 from "assets/img/home-start-1.jpg";

function Card(props) {
  return (
    <div class="p-[16px] flex flex-col rounded-[8px] bg-neutral-50">
      <img src={homeStart1} class="mb-[12px] rounded-[8px]" />
      <p class="mb-[8px] font-oswald text-[20px] leading-none">{props.name}</p>
      <p class="mb-[4px] info-text leading-none">{props.description}</p>
      <p class="mt-auto info-text text-right font-medium leading-none">
        {props.weight}, {props.price} ₽
      </p>
    </div>
  );
}

function Row(props) {
  return (
    <div class="p-[16px] flex flex-col rounded-[8px] bg-neutral-50">
      <p class="mb-[8px] font-oswald text-[20px] leading-none">{props.name}</p>
      <p class="mb-[4px] info-text leading-none">{props.description}</p>
      <p class="mt-auto info-text text-right font-medium leading-none">
        {props.weight}, {props.price} ₽
      </p>
    </div>
  );
}

export function Product() {}

Product.Card = Card;
Product.Row = Row;
